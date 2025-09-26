const asynchandler=require('express-async-handler')
const Goal=require("../models/goalmodel")
// @desc  get goals
// @routes get  api/getgoals
// @access private
const getgoals= asynchandler(async(req,res)=>
{
    const goals=await Goal.find()
    res.status(200).json(goals)
})

// @desc  get goals
// @routes get  api/getgoals
// @access private
const setgoals= asynchandler(async(req,res)=>
{
    console.log(req.body)
    if(!req.body || !req.body.text)
    {
        res.status(400)
        throw new Error('Please add the text!!')
    }
    const goals=await Goal.create({text:req.body.text})
    res.json(goals)
})

// @desc  get goals
// @routes get  api/getgoals
// @access private
const updategoals= asynchandler(async(req,res)=>
{
    const goal=await Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(400)
        throw new Error("ID not found")
    }
    const updatedgoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedgoal)
})

// @desc  get goals
// @routes get  api/getgoals
// @access private
const deletegoals= asynchandler(async(req,res)=>
{
   const goal=await Goal.findById(req.params.id)
   if(!goal)
   {
    res.status(400)
    throw new Error("Id not found")
   }
   await Goal.findByIdAndDelete(req.params.id)
   res.status(200).json({id:req.params.id})
})
module.exports= 
{
    getgoals,
    setgoals,
    updategoals,
    deletegoals
}