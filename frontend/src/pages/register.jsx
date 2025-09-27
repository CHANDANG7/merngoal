import {useState,useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
function Register() {
  const [formdata,setFormdata]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const {name,email,password,password2}=formdata
  const onchange=(e)=>{
    setFormdata((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
  }
  const onsubmit=(e)=>
  {
    e.preventDefault()
  }

  return<>
   <section className="heading">
    <h1>
        <FaUser/>Register
    </h1>
    <p>Create an Account</p>
   </section>
   <section className="form">
        <form onSubmit={onsubmit}>
        <div className="form-group">
            <input
            type="text"
            className="form-data"
            id="name"
            value={name}
            name="name"
            placeholder="Enter your name"
            onChange={onchange}
            />
        </div>

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
            <input
            type="password"
            className="form-data"
            id="password2"
            value={password2}
            name="password2"
            placeholder="Confirm your password"
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

export default Register
