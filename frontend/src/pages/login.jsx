import {useState,useEffect} from 'react'
import {FaSign, FaSignInAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/spinner'
import { login,reset } from '../features/auth/authSlice'
function Login() {
  const [formdata,setFormdata]=useState({
    email:'',
    password:'',
  })
  const {email,password}=formdata
  const navigate =useNavigate()
  const dispatch = useDispatch()

  const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>
    state.auth
  )
  useEffect(()=>{
    if(isError)
    {
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/')
    }
     dispatch(reset())
  },[user,isError,isSuccess,message,navigate,dispatch])
  const onchange=(e)=>{
    setFormdata((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
  }
  const onsubmit=(e)=>
  {
    e.preventDefault()
    const userData={
      email,
      password
    }
    dispatch(login(userData))
  }
  if(isLoading)
  {
    return <Spinner/>
  }
  return<>
   <section className="heading">
    <h1>
        <FaSignInAlt/>Login
    </h1>
    <p>Login to your Account</p>
   </section>
   <section className="form">
        <form onSubmit={onsubmit}>
        <div className="form-group">
            <input
            type="text"
            className="form-data"
            id="email"
            value={email}
            name="email"
            placeholder="Enter your email"
            onChange={onchange}
            />
        </div>

        <div className="form-group">
            <input
            type="password"
            className="form-data"
            id="password"
            value={password}
            name="password"
            placeholder="Enter password"
            onChange={onchange}
            />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn">Submit</button>
        </div>
        </form>
   </section>
  </>
}

export default Login
