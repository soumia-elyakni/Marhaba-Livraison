import "./signup.css"
import React, { useState } from 'react';
import axios from 'axios';
const Signup = () => {

   const [user,setUser] = useState({
      name:"",
      email:"",
      password: ""
  })
  const handleChange = e =>{
  const {id,value} = e.target
  setUser({
  ...user, 
  [id]:value
  })
  }

  const register = (e)=>{
   e.preventDefault()
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:5000/api/user/register",user )
    .then((e)=>{
      console.log(e.data)
    })
   }
   else{
       alert("invalid input")
   };

   }
   return (
      <div className="row">
      <div className="col-sm-6 brand">
         <div className="heading">
            <h2 className="mb-3">Marhaba Livraison</h2>
            <h3>Near to your MEAL</h3>
         </div>
      </div>
      <div className="col-sm-6 form">
         <section id="formHolder">
            <div className="signup form-peice switched">
            <form className="signup-form" action="register" method="post">
               <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" id="name" value={user.name} onChange={handleChange} className="name"/>
                  <span className="error"></span>
               </div>
               <div className="form-group">
                  <label htmlFor="email">Email Adderss</label>
                  <input type="email" name="email" id="email" value={user.email} onChange={handleChange} className="email" />
                  <span className="error"></span>
               </div>
               <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" value={user.password} onChange={handleChange} className="pass" />
                  <span className="error"></span>
               </div>
               <div className="form-group">
                  <label htmlFor="passwordCon">Confirm Password</label>
                  <input type="password" name="passwordCon" id="passwordCon" className="passConfirm" />
                  <span className="error"></span>
               </div>
               <div className="CTA">
                  <input type="submit" value="Signup Now" id="submit" onClick={register} />
                  <a href="login" className="switch">I have an account</a>
               </div>
            </form>
            </div>
         </section>
      </div>
   </div>
     
   )
}

export default Signup;