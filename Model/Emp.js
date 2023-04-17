const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('myEmployee',EmpSchema)