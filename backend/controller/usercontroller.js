const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const asynchandler=require('express-async-handler')
const User=require('../models/usermodel')

// @desc  post register
// @routes post api/users
// @access public
const registeruser=asynchandler(async(req,res)=>
{
    const {name,email,password}=req.body 
    if(!name || !email ||!password)
    {
        res.status(400)
        throw new Error('Please Enter all Fields')
    }
    const userexsist=await User.findOne({email})
    if(userexsist)
    {
        res.status(400)
        throw new Error('User already Exsists')
    }
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(password,salt)
    const user=await User.create({
        name,
        email,
        password:hashedpassword
    })
    if(user)
    {
        res.status(201).json({
            message:"User registered Successfully",
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else
    {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc  login user
// @routes post api/users/login
// @access public
const loginuser=asynchandler(async(req,res)=>
{
   const {email,password}=req.body
   const user=await User.findOne({email})

   if(user &&(await bcrypt.compare(password,user.password)))
   {
    res.status(200).json({
        message:"Login Successfully",
        _id:user._id,
        name:user.name,
        email:user.email,
        token:generateToken(user._id)
    })
   }
   else
    {
        res.status(400)
        throw new Error("Invalid credentials")
    }
})

// @desc  get user
// @routes get api/users/me
// @access private
const getme=asynchandler(async(req,res)=>
{
   res.status(200).json(req.user)
})

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_TOKEN,{
        expiresIn:'30d'
    })
}
module.exports={
    registeruser,
    loginuser,
    getme
}