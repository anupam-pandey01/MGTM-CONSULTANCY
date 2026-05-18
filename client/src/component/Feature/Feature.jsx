import React from 'react'
import "./Feature.css"

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Us</h2>

      <div className="feature-cards">
        <div className="card">
          <h3>Personalized Counselling</h3>
          <p>Get expert guidance tailored to your goals.</p>
        </div>

        <div className="card">
          <h3>Top Universities</h3>
          <p>Explore best universities worldwide.</p>
        </div>

        <div className="card">
          <h3>Visa Assistance</h3>
          <p>Complete support for your visa process.</p>
        </div>

        <div className="card">
          <h3>End-to-End Support</h3>
          <p>We guide you at every step.</p>
        </div>
      </div>
    </section>
  );
};

export default Features