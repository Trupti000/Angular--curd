const Emp = require('../Model/Emp')


exports.getEmp = async (req,res)=>{
    try {
        const data = await Emp.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postEmp = async (req,res)=>{
    try {
        const newemp = new Emp(req.body)
        const data = await newemp.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putEmp = async (req,res)=>{
    try {
    
        const data = await Emp.findByIdAndUpdate(req.body,req.param.id,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.deleteEmp = async (req,res)=>{
    try {
        const data = await Emp.findByIdAndDelete(req.param.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}