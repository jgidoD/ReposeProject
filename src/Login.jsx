import React, {useState} from "react";
export const Login = () => {
  return (
    <div class="container">
      <div class="grid-part logo-part">
        <div class="logo-card">
        <div class="logo"></div>
      </div>
    <div class="footer">
        {/* <h3>Leave Management</h3> */}
    </div>
      </div>
      
      

      

      <div class="grid-part login-form">

        <h1 id="account-text">Account Login</h1>
        <form>
          <input type="username" placeholder="Username"></input>
          <br/>
          <input type="password" placeholder="Password"></input>
          </form>
        <button id="login-btn">LOGIN</button>

      </div>
    </div>
    
  )
};
