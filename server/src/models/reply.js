const mongoose = require("mongoose");

const replySchema = mongoose.Schema(
  {
    reply: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "DiscussionUser",
    },
  },
  {
    timestamps: true,
  }
);

const Reply = mongoose.model("Reply", replySchema);
module.exports = Reply