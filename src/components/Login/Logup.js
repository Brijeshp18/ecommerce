import React, { useEffect, useRef, useState } from 'react'
import './Login.css'


import Home from '../home/Home';

function Login() {
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const [showSignup,setshowSignup]=useState(false);
    const [show,setshow]=useState(false);
    useEffect(() => {
    if(localStorage.getItem("signup")){
        setshowSignup(true);}
       
    if(localStorage.getItem("email")){setshow(true)}
    }, [])
    


    const handleSubmit =()=>{
       if(name.current.value&&email.current.value&&password.current.value){
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signup",email.current.value)
       }alert("succefully signup")
       window.location.reload();
    }



    const handleSignin =()=>{
      if(email.current.value===localStorage.getItem("email")&&password.current.value===localStorage.getItem("password"))
      { localStorage.setItem("signup",email.current.value)
       window.location.reload();}
       else{alert("enter current infomation")}
    }
  return (
    <div>
        {showSignup?<Home/>:
        (show?

          <div className="form">
              <h1>Welcome Home {localStorage.getItem("name")}</h1>
  
           <form>
           
             
            <div className="input-group">
              <label htmlFor="">Email </label>
              <input type="email" ref={email} placeholder='Enter Email Address' />
  
            </div>
  
  
            <div className="input-group">
              <label htmlFor="">Password </label>
              <input type="password" ref={password} placeholder='Enter Password' />
              
            </div>
        <button onClick={handleSignin} className='submit-btn'>Login In</button>
  
           </form>
          </div>:



        <div className="form">
            <h1>Techflix Store</h1>

         <form>
          <div className="input-group">
            <label htmlFor="">User Name</label>
            <input type="text" ref={name} placeholder='Phone Number,Name or Username' />
          </div>
           
          <div className="input-group">
            <label htmlFor="">Email </label>
            <input type="email" ref={email} placeholder='Enter Email Address' />

          </div>


          <div className="input-group">
            <label htmlFor="">Password </label>
            <input type="password" ref={password} placeholder='Enter Password' />
            
          </div>
      <button onClick={handleSubmit} className='submit-btn'>Sign Up</button>

         </form>
        </div>
)}


    </div>
  )
}

export default Login