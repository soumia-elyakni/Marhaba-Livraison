import "./login.css"
import React, { useState } from "react";
import  axios  from "axios";

const Login = () => {
   
  const [email,setemail]= useState("")
  const [password,setpassword]= useState("")

  const handlemail = (e) =>{
   setemail(e.target.value) 
  }
  const handlepassword = (e) =>{
   setpassword(e.target.value) 
  }

  const login = ()=>{
               const user = {
                  email,
                  password,
               }
                  axios.post('http://localhost:5000/api/user/login',user)
               .then((e)=>{
                  console.log(e.data)
               })
               .catch((err)=>{
                  console.log(err)
               }) 
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
               <div className="login form-peice switched">
                  <form className="login-form">
                     <div className="form-group">
                        <label htmlFor="loginemail">Email Adderss</label>
                        <input type="email" name="email" id="email" onChange={handlemail} value={email}  required />
                     </div>
                     <div className="form-group">
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={handlepassword} required />
                     </div>
                     <div className="CTA">
                        <input type="submit" value="Login" onClick={login} />
                        <a href="signup" className="switch">I'm New</a>
                     </div>
                  </form>
               </div>
            </section>
         </div>
      </div>
   )
}

export default Login;

