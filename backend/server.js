const express=require('express')
const dotenv=require('dotenv').config
const {errorhandler}=require('./middleware/errormiddleware')
app=express()
const port=process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(errorhandler)
app.use("/api/getgoals",require('./routes/goalroute'))
app.listen(port,()=>console.log(`Hello from server!! on ${port}`)) 
