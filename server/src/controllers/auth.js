const User = require('../models/user')
const bcrypt = require('bcryptjs')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('file must be an image'))
        }
        cb(undefined, true)
    }
});
 
exports.upload = multer({ storage: storage });

exports.register =  async(req,res) => {
    try{
        const user = new User(req.body)
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).json({token})
    }catch(e){
        if(req.body.password.length < 8){
            res.status(400).json({error:'password must contain more than 8 characters'})
        }
        else if(req.body?.firstname === '' || req.body?.lastname === ''){
            res.status(400).json({error:'First name and last name cannot be empty'})
        }
        else if(await User.findOne({username:req.body?.username})){
            res.status(400).json({error:'Username already exist'})
        }
        else if(await User.findOne({email:req.body?.email})){
            res.status(400).json({error:'Email already exist'})
        }
        else{
            res.status(400).json({error:'something went wrong'})
        }
    }
}

exports.login = async (req,res) => {
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({error:'Invalid Email'})
        }
        const isMatched = await bcrypt.compare(req.body?.password,user.password)
        if(!isMatched){
            return res.status(400).json({error:"Password didn't matched"})
        }
        const token = await user.generateAuthToken()
        res.json({token})
    }
    catch(e){
        res.status(500).json({error:"something went wrong"})
    }
}

exports.logout = async(req,res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.json('User logged out successfully')
    }
    catch(e){
        res.status(400).json('something went wrong')
    }
}

exports.profile = (req,res) => {
    res.json(req.user)
}

exports.getProfileImg = async (req, res) => {
    const img = await User.findOne({ _id: req.params.id })
    let imagePath
    if(img.avatar ==''){
        imagePath = path.join(__dirname, '../../statics/profileimg.webp' )
        return res.sendFile(imagePath)

    }
    imagePath = path.join(__dirname, '../../', img.avatar)
    return res.sendFile(imagePath)

}

exports.updateProfilepic = async (req, res) => {
    if (req.user.avatar != '') {
        req.user.deleteProfilePic()
    }
    let imagePath = ''
    if (req.file) {
        imagePath = '/uploads/' + req.file.filename;
    }
    req.user.avatar = imagePath
    req.user.save()
    res.json({message:'profile picture saved'})
}
