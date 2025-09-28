import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deletegoal} from '../features/goal/goalSlice'
function GoalItem({goal}) {
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
  return (
    <div className='goal'>
        <div>
            {new Date(goal.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button onClick={()=>dispatch(deletegoal(goal._id))} className='close'>X</button>
      
    </div>
  )
}

export default GoalItem
