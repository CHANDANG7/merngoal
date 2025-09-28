import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Goalform from '../components/goalform'
import Spinner from '../components/spinner'
import { getgoals,reset } from '../features/goal/goalSlice'
import GoalItem from '../components/GoalItem'
function DashBoard() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)
  const{goals,isError,isLoading,message}=useSelector((state)=>state.goal)
  useEffect(()=>{
    if(isError)
      console.log(message)
    if(!user)
    {
      navigate('/login')
    }
    dispatch(getgoals())
    return ()=>{
      dispatch(reset())
    }
  },[user,navigate,isError,message,dispatch])
  if(isLoading)
    return <Spinner/>
  return (
    <>
     <section className="heading">
      <h1>Welcome {user&&user.name}</h1>
      <p>Goals Dashboard</p>
     </section>
     <Goalform/>
     <section className="content">
      {goals.length >0 ?(
        <div className='goals'>
        {goals.map((goal)=>(
          <GoalItem key={goal._id} goal={goal}/>
      ))}
      </div>
      ):(
        <h3>You not have setted any Goals</h3>
      )}
     </section>
    </>
  )
}

export default DashBoard
