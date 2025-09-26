const express=require('express')
const router=express.Router()
const {
    getgoals,
    setgoals,
    updategoals,
    deletegoals
}=require("../controller/goalcontroller")

router.route('/').get(getgoals).post(setgoals)
router.route('/:id').put(updategoals).delete(deletegoals)
module.exports= router