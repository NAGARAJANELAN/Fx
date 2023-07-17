import React, { useEffect, useState } from "react";
import "./HistoryPage.css";
import { Link } from "react-router-dom";

function HistoryPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        var response = await fetch("http://localhost:3500/get-transactions", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ email: "nax@gmail.com" }),
        });
        // console.log(response);
        response = await response.json();
        // console.log(response);
        response.reverse();
        setTransactions(response);
      } catch (error) {
        console.log("transactions fetch error");
        console.log(error);
      }
    };
    getTransactions();
  }, []);

  return (
    <div>
      <div className="heading">
        <div style={{ display: "flex" }}>
          <div>
            <Link style={{ textDecoration: "none" }} to="/">
            <img width={40} height={40} src="back.png" alt="back"/>
            </Link>
          </div>
        </div>
        <div>
          <div style={{padding:"4px"}}><img width={35} src="graph.png" alt="graph"/></div>
        </div>
      </div>
      <div className="transactions-section">
        {transactions.map((t) => (
          <div key={t.time} className="card">
            <div style={{ width: "65vw" }}>
              <div style={{fontWeight:"700"}}>{t.note}</div>
              <div>{t.time}</div>
            </div>
            <div style={{ width: "15vw",fontWeight:"700" }}>Rs.{t.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage;
