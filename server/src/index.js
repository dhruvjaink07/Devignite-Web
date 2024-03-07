const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {Server} = require('socket.io')
const authApi = require('./api/auth')
const userInterestApi = require('./api/user')
const projectApi = require('./api/projects')

const Reply = require('./models/reply')
const Question = require('./models/question')



const app = express()
const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGODB_PATH)

app.use(express.json())

app.use(cors())

app.use('/api/auth',authApi)
app.use('/api/user',userInterestApi)
app.use('/api/project/',projectApi)


app.post("/ask-question", async (req, res) => {
    const { question, description, userId, tags } = req.body;
    try {
      const newQuestion = await Question.create({
        question,
        description,
        author: userId,
        tags,
      });
      return res.status(201).json(newQuestion);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  app.post("/answer/:id", async (req, res) => {
    const { answer, userId } = req.body;
  
    const { id: questionId } = req.params;
    try {
      const reply = await Reply.create({ reply: answer, author: userId });
      const findQuestion = await Question.findById(questionId);
      console.log("find", findQuestion);
      const addReply = await findQuestion.updateOne({
        $push: { replies: reply._id },
      });
      return res.status(201).json(reply);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  // general routes
  app.get("/questions", async (req, res) => {
    try {
      const questions = await Question.find({})
        .populate("replies")
        .populate({
          path: "replies",
          populate: {
            path: "author",
            model: "DiscussionUser",
          },
        })
        .populate("author")
        .sort({ createdAt: -1 });
      return res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  app.post("/upvote/:id", async (req, res) => {
    const { id: questionId } = req.params;
    const { userId } = req.body;
    try {
      const findQuestion = await Question.findById(questionId);
      if (findQuestion.upvote.includes(userId)) {
        return res.status(400).json({ message: "You have already upvoted" });
      }
  
      if (findQuestion.downvote.includes(userId)) {
        const downvote = await findQuestion.updateOne({
          $pull: { downvote: userId },
        });
        return res.status(200).json({ message: "Response updated successfully" });
      }
  
      const upvote = await findQuestion.updateOne({
        $push: { upvote: userId },
      });
      return res.status(200).json(upvote);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  app.post("/downvote/:id", async (req, res) => {
    const { id: questionId } = req.params;
    const { userId } = req.body;
    try {
      const findQuestion = await Question.findById(questionId);
      if (findQuestion.downvote.includes(userId)) {
        return res.status(400).json({ message: "You have already downvoted" });
      }
  
      if (findQuestion.upvote.includes(userId)) {
        const upvote = await findQuestion.updateOne({
          $pull: { upvote: userId },
        });
        return res.status(200).json({ message: "Response updated successfully" });
      }
  
      const downvote = await findQuestion.updateOne({
        $push: { downvote: userId },
      });
      return res.status(200).json(downvote);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  app.get("/allusers", async (req, res) => {
    try {
      const users = await User.find({});
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  app.get("/my-questions/:id", async (req, res) => {
    const { id: userId } = req.params;
    try {
      const replies = await Question.find({ author: userId })
        .populate("replies")
        .populate({
          path: "replies",
          populate: {
            path: "author",
            model: "DiscussionUser",
          },
        })
        .populate("author")
        .sort({
          createdAt: -1,
        });
      return res.status(200).json(replies);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  app.get("/find/:topic", async (req, res) => {
    const { topic } = req.params;
    try {
      const questions = await Question.find({
        tags: {
          $in: [topic],
        },
      })
        .populate("replies")
        .populate({
          path: "replies",
          populate: {
            path: "author",
            model: "DiscussionUser",
          },
        })
        .populate("author")
        .sort({ createdAt: -1 });
      return res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  


const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  const io = new Server(server, {
    secure: true,
    cors: {
      origin: "http://127.0.0.1:3000/",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
  
  io.on("connection", (socket) => {
    console.log("socket connected");
    const users = [];
  
    for (let [id, socket] of io.of("/").sockets) {
      if (socket.handshake.auth._id)
        users.push({
          ...socket.handshake.auth,
          socketId: socket.handshake.auth._id,
        });
    }
  
    console.log("users", users);
    io.emit("user-connected", users);
  
    socket.on("join-room", ({ room, user }) => {
      users[user._id] = user;
      socket.join(room);
  
      // socket.broadcast.to(room).emit("user-connected", users);
    });
  
    socket.on("send-message", ({ message, room, user }) => {
      console.log("message", message, room, user);
      io.to(room).emit("receive-message", { message, user, room });
    });
  
    socket.on("disconnect", () => {
      console.log("disconnected");
      const delUser = users.filter(
        (user) => user.socketId !== socket.handshake.auth._id
      );
      console.log("disconnected users", delUser);
      io.emit("user-disconnected", delUser);
    });
  })