import React from "react";
import "./RegistrationPage.css";
import { useNavigate,Link } from "react-router-dom";

function RegistrationPage() {
  const navigate = useNavigate();

  async function register() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    if(name.value==="" || email.value==="" || password.value===""){
        alert("Enter details");
        return;
    } 
    try {
      var response = await fetch("http://localhost:3500/register", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
      });
      response = await response.json();
      if (response.valid) {
        console.log("registered user");
        navigate("/homepage");
      } else {
        if(response.msg) alert("Email already exists"); //already used email
        console.log("invalid user details");
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
          <input id="name" placeholder="User name" type="text" required />
        </div>
        <div>
          <input id="email" placeholder="User email" type="email" required />
        </div>
        <div>
          <input id="pass" placeholder="Password" type="password" required />
        </div>
        <div onClick={register}>
          <button type="submit" id="login-btn">
            Register
          </button>
        </div>
        <div style={{fontSize:"16px"}}>Have an account?<Link style={{ textDecoration: "none",padding:"6px" }} to="/">Login
            </Link></div>
      </div>
    </div>
  );
}

export default RegistrationPage;
