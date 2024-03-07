const mongoose = require("mongoose")

const userInterestSchema = new mongoose.Schema({
    user_id:{
        type:String,
    },
    experience:{
        type:String,
    },
    languages:[],
    fields:[]
})

const UserInterest = mongoose.model('UserInterest',userInterestSchema)

module.exports = UserInterest