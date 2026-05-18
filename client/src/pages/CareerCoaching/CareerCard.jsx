import React, { useState } from "react";

const CareerCard = ({ title, pricing, features = [], tag }) => {
  const [session, setSession] = useState("1");

  const price = pricing ? pricing[session] : null;

  return (
    <div className="career-card">

      {tag && <span className="tag">{tag}</span>}

      <h3>{title}</h3>

      {/* TOGGLE */}
      {pricing && (
        <div className="toggle">
          <button
            className={session === "1" ? "active" : ""}
            onClick={() => setSession("1")}
          >
            1 Session
          </button>
          <button
            className={session === "3" ? "active" : ""}
            onClick={() => setSession("3")}
          >
            3 Sessions
          </button>
        </div>
      )}

      <h2 className="price">{price}</h2>

      <ul>
        {features.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      <div className="card-buttons">
        <button className="primary-btn">Buy Now</button>
        <button className="secondary-btn">Learn More</button>
      </div>

    </div>
  );
};

export default CareerCard;