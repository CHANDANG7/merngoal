const express=require('express')
const router=express.Router()
const {
    registeruser,
    loginuser,
    getme
}=require("../controller/usercontroller")
const  {protect}=require('../middleware/authMiddleware')
router.post('/',registeruser)
router.post('/login',loginuser)
router.get('/me',protect, getme)

module.exports=router