const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs').promises
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                new Error("Enter a valid Email ID")
            }
        }
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:''
    },
    tokens:[{
        token:{
            type:String
        }
    }]
})

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()},process.env.SECRET_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.methods.deleteProfilePic = async function(){
    const user = this
    if(user.avatar!='') {
        try {
            const file = path.join(__dirname, '../../',user.avatar)
            await fs.unlink(file);
        } catch (err) {
            console.error(err);
        }
    }
    return false
}


userSchema.methods.toJSON =  function(){
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}

userSchema.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})

const User = mongoose.model('User',userSchema)

module.exports = User