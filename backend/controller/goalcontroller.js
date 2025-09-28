const asynchandler=require('express-async-handler')
const Goal=require("../models/goalmodel")
const User=require('../models/usermodel')
// @desc  get goals
// @routes get  api/getgoals
// @access private
const getgoals= asynchandler(async(req,res)=>
{
    const goals=await Goal.find({user:req.user.id})
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
    const goals=await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
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
    if(!req.user)
    {
        res.status(401)
        throw new Error('User not found')
    }
    if(goal.user.id.toString()!==req.user.id)
    {
        res.status(401)
        throw new Error('User not Authorized')
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
   const user=await User.findById(req.user.id)
    if(!user)
    {
        res.status(401)
        throw new Error('User not found')
    }
    if(goal.user.id.toString()!==user.id)
    {
        res.status(401)
        throw new Error('User not Authorized')
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