import React, { useState } from "react";
import "../../css/Auth.css";
import { ImMobile } from 'react-icons/im'
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

function Register(props) {

  const[name,setName] = useState()
    const[email,setEmail] = useState()

  const submitHandler = (event) => {
    event.preventDefault()
    axios.post("http://localhost:5000/api/user/" + name +"/" + email).then((res,err)=>{
      if(err){
        console.log(err)
      } else {
        props.setLoggedIn(true)
      }
    })
  }

  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-box">
          <div className="login-text"><label style={{fontWeight:`bold`}}>Dental </label> for Home</div>
          <form onSubmit={submitHandler}>
          <div className="login-input">
           
            <label className="login-input-text">Hello ! Welcome back</label>
            <input placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}/>
            <input placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}}/>
            <button className="login-signin" type="submit">Register</button>
            
            <div className="login-need"><label style={{color:`rgb(115,116,112)`,fontWeight:`bold`}}>Already have an account </label><Link to={`/login`}>sign in</Link></div>
            <div className="login-terms">By creating an account, you agree and accept our</div>
            <div className="login-terms">Terms and Privacy Policy</div>
            
          </div>
          </form>
          {props.loggedIn ? <Navigate to="/home" /> : null}
          {/* <div className="login-meta">hii</div> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
