const mongoose = require('mongoose')

const projectDisSchema = new mongoose.Schema({
    projectId:{
        type:String,
        required:true,
        unique:true
    },
    senderId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

const ProjectDisModel = mongoose.model('ProjectDiscussion',projectDisSchema)

module.exports = ProjectDisModel