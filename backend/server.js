const express=require('express')
const dotenv=require('dotenv').config()
const {errorhandler}=require('./middleware/errormiddleware')
const connectDB=require("./config/db")
app=express()
const port=process.env.PORT || 5000

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(errorhandler)
app.use("/api/getgoals",require('./routes/goalroute'))
app.listen(port,()=>console.log(`Hello from server!! on ${port}`)) 
