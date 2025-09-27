const express=require('express')
const router=express.Router()
const {
    getgoals,
    setgoals,
    updategoals,
    deletegoals
}=require("../controller/goalcontroller")
const {protect}=require('../middleware/authMiddleware')
router.route('/').get(protect,getgoals).post(protect,setgoals)
router.route('/:id').put(protect,updategoals).delete(protect,deletegoals)
module.exports= router