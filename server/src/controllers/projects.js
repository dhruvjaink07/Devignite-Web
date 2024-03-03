const ProjectDisModel = require('../models/projectDiscussion')


exports.saveMessage = async(req,res) => {
    const pd = new ProjectDisModel({
        projectId:req.params.id,
        senderId:req.user._id.toString(),
        message:req.body.message
    })
    try{
        const dis = await pd.save()
        res.json({dis})
    }
    catch(e){
        res.status(400).json({error:'something went wrong'})
    }
}

exports.getMessage = async(req,res) => {
    try{
        const data = await ProjectDisModel.find({projectId:req.params.id})
        res.json(data)
    }
    catch(e){
        res.status(400).json({error:"something went wrong"})
    }
}