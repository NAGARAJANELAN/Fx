import React from "react";
import "./LoginPage.css";
import { useNavigate,Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  async function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    if(email.value==="" || password.value===""){
      alert("Enter details");
      return;
  }
    try {
      var response = await fetch("http://localhost:3500/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });
      response = await response.json();
      if (response.valid) {
        console.log("valid user");
        navigate("/homepage");
      } else {
        console.log("invalid user");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="frame">
      <div id="heading">Welcome to Fx</div>
      <div className="input-form">
        <div>
          <input id="email" placeholder="User email" type="email" required />
        </div>
        <div>
          <input id="pass" placeholder="Password" type="password" required />
        </div>
        <div onClick={login}>
          <button type="submit" id="login-btn">
            Login
          </button>
        </div>
        <div style={{fontSize:"16px"}}>Don't have an account?<Link style={{ textDecoration: "none" ,padding:"6px"}} to="/register">Register
            </Link></div>
      </div>
    </div>
  );
}

export default LoginPage;
