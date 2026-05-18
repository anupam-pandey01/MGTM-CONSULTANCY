import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
  <div className="hero-shapes">
    <div className="shape s1"></div>
    <div className="shape s2"></div>
    <div className="shape s3"></div>
  </div>
  <div className="hero-content">
    <span className="hero-badge">🌟 India's Trusted Study Abroad Experts</span>
    <h1 className="hero-title">
      Your Dream University
      <span className="hero-accent">is One Step Away</span>
    </h1>
    <p className="hero-sub">MGTM helps thousands of students every year gain admission to world-className universities across 45+ countries — with expert counselling, visa support, and end-to-end guidance.</p>
    <div className="hero-actions">
      <a href="#" className="btn-primary">Start Your Journey ✈️</a>
      <a href="#" className="btn-outline">Explore Universities</a>
    </div>
  </div>
  <div className="hero-visual">
    <div className="hero-card card-float">
      <span className="card-icon">🎓</span>
      <div><strong>10,000+ Students</strong><p>Successfully placed abroad</p></div>
    </div>
    <div className="hero-card card-float d1">
      <span className="card-icon">✅</span>
      <div><strong>98% Visa Success</strong><p>Industry-leading rate</p></div>
    </div>
    <div className="hero-card card-float d2">
      <span className="card-icon">🌍</span>
      <div><strong>45+ Countries</strong><p>Study destinations</p></div>
    </div>
  </div>
</section>
  );
};

export default Hero;