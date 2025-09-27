const mongoose=require('mongoose')

const userschema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter the name"]
    },
    email:{
        type:String,
        required:[true,"please enter an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please enter the password"]
    }
},
{
    timestamps:true
})

module.exports=mongoose.model('User',userschema)