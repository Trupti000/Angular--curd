const User = require('../Model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


exports.getUserbyid=async (req,res)=>{
    try {
        const data = await User.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
        
    }

}
exports.getUser = async (req,res)=>{
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postUser = async (req,res)=>{
    try {
        const newuser = new User(req.body)
        const data = await newuser.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putUser = async (req,res)=>{
    try {
    
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.deleteUser = async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.postUser = async (req,res)=>{
    try {
        const userExist = await User.findOne({email:req.body.email})
        if(userExist) return res.status(400).json({error:true,message:"user already Exists"})


        const salt = await bcrypt.genSalt(10) 
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const newuser = new User(req.body)
        const data = await newuser.save()

        return res.json({error:false,data:data})

    } catch (error) {
        return res.status(400).json({error:true,message:error.message})
    }
}

// login

exports.postlogin = async (req,res)=>{
    try {
        const userExist = await User.findOne({email:req.body.email})
        if(userExist) return res.status(400).json({error:true,message:"user already Exists"})


        const checkpassword = await bcrypt.compare(req.body.password,userExist.password)
        if(checkpassword) return res.status(400).json({error:true,message:"password already exists"})

        const token = jwt.sign({_id:userExist._id}.process.env.SEC)
        return res.json({errors:false,data:{token:token,User:userExists}})
        
    } catch (error) {
        return res.status(400).json({error:true,message:error.message})
        
    }
}