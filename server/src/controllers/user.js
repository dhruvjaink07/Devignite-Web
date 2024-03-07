const UserInterest = require("../models/userInterest")

exports.saveUserInterest = async(req,res) => {
    const experience = req.body.experience
    const languages = req.body.languages
    const fields = req.body.fields

    try{
        const inst = await UserInterest.findOne({user_id:req.user._id.toString()})
        if(inst){
            inst.experience = experience
            inst.languages = languages
            inst.fields = fields
            await inst.save()
            return res.json({message:'user interest updated'})
        }
        const uInterest = new UserInterest({
            user_id:req.user._id.toString(),
            experience,
            languages,
            fields
        }) 

        await uInterest.save()
        res.json({message:'user Interest saved'})
    }
    catch(e){
        res.status(400).json({error:"something went wrong"})
    }
}


exports.getUserInterest = async(req,res) => {
    try{
        const data = await UserInterest.findOne({user_id:req.user._id.toString()})
        res.json({data})
    }
    catch(e){
        res.json({message:"user interest didn't found"})
    }
}