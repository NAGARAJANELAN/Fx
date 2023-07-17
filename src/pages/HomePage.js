import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  async function save() {
    const amount = document.getElementById("amount");
    const note = document.getElementById("note");
    if(amount.value==="" || note.value===""){
      alert("Enter details...");
      return;
   }
    try {
      var response = await fetch("http://localhost:3500/post-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: "nax@gmail.com",
          amount: amount.value,
          note: note.value,
        }),
      });
      response = await response.json();
      if (response.success) {
        console.log("saved ");
      } else {
        console.log("not saved");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="header-section">
        <div id="username">Nagarajan E</div>
        <div className="options">
          <div style={{paddingTop:"6px"}}>
            <Link style={{ textDecoration: "none" }} to="/history">
              <img width={30} src="history.png" alt="history"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div>
          <input id="amount" placeholder="Amount" type="number" required />
        </div>
        <div>
          <textarea id="note" placeholder="Note..." type="text" required />
        </div>
        <button onClick={save} id="save-button">
          Save
        </button>
      </div>
    </div>
  );
}

export default HomePage;
