const asynchandler=require('express-async-handler')
// @desc  get goals
// @routes get  api/getgoals
// @access private
const getgoals= asynchandler((req,res)=>
{
    res.status(200).json({
        message:"Hello from get goals"
    })
})

// @desc  get goals
// @routes get  api/getgoals
// @access private
const setgoals= asynchandler((req,res)=>
{
    console.log(req.body)
    if(!req.body || !req.body.text)
    {
        res.status(400)
        throw new Error('Please add the text!!')
        
    }
    res.status(200).json({
        message:"Hello from get goals"
    })
})

// @desc  get goals
// @routes get  api/getgoals
// @access private
const updategoals= asynchandler((req,res)=>
{
    res.status(200).json({
        message:`Hello from updating goal ${req.params.id}`
    })
})

// @desc  get goals
// @routes get  api/getgoals
// @access private
const deletegoals= asynchandler((req,res)=>
{
    res.status(200).json({
        message:`Hello from deleting goal ${req.params.id}`
    })
})
module.exports= 
{
    getgoals,
    setgoals,
    updategoals,
    deletegoals
}