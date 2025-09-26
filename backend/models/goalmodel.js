const mongoose=require('mongoose')

const GoalSchema=mongoose.Schema({
    text:{
        type: String,
        required:[true,'please add the text value']
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Goal',GoalSchema)