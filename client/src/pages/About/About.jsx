import React from 'react'
import "./About.css"

const About = () => {
  return (
    <section className="about-section">
    <div className="container">
      <div className="section-header">
        <p className="section-tag">About MGTM</p>

        <h1 className="section-title">
          Building Careers,
          <span>Creating Futures</span>
        </h1>

        <p className="section-desc">
          MGTM is a premium education and career guidance platform helping students discover the right academic pathways in India and abroad through expert mentorship, personalized counseling, and global opportunities.
        </p>
      </div>

      <div className="mission-grid">

        <div className="mission-card">
          <div className="icon-box">🎯</div>

          <h2 className="card-title">Our Mission</h2>

          <p className="card-text">
            To empower students with the right career guidance, educational opportunities, and mentorship so they can confidently achieve academic and professional success.
          </p>
        </div>

        <div className="vision-card">
          <div className="icon-box">🌍</div>

          <h2 className="card-title">Our Vision</h2>

          <p className="card-text">
            To become a globally trusted education platform transforming millions of student journeys through innovation, accessibility, and expert-driven guidance.
          </p>
        </div>

      </div>

      <div className="leadership-section">

        <div className="section-header">
          <h2 className="section-title">
            Leadership Team
          </h2>

          <p className="section-desc">
            Meet the passionate leaders and mentors driving MGTM’s mission of transforming education and career guidance.
          </p>
        </div>

        <div className="leadership-grid">

          <div className="leader-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200"
              alt="Leader"
              className="leader-img"
            />

            <div className="leader-content">
              <h3>Ananya Sharma</h3>
              <div className="leader-role">Director - Global Education</div>
              <p>
                Dedicated to helping students access top universities and international opportunities worldwide.
              </p>
            </div>
          </div>

          <div className="leader-card">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200"
              alt="Leader"
              className="leader-img"
            />

            <div className="leader-content">
              <h3>Rahul Verma</h3>
              <div className="leader-role">Head - Career Guidance</div>
              <p>
                Expert mentor focused on career planning, counseling, and future-ready student development.
              </p>
            </div>
          </div>

          <div className="leader-card">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200"
              alt="Leader"
              className="leader-img"
            />

            <div className="leader-content">
              <h3>Priya Kapoor</h3>
              <div className="leader-role">Student Success Manager</div>
              <p>
                Helping students build confidence and achieve academic excellence through personalized support.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="metrics-section">

        <div className="metrics-header">
          <h2>Our Impact</h2>

          <p>
            Numbers that reflect our commitment to empowering students and building successful careers worldwide.
          </p>
        </div>

        <div className="metrics-grid">

          <div className="metric-card">
            <div className="metric-number">50K+</div>
            <div className="metric-title">Students Guided</div>
          </div>

          <div className="metric-card">
            <div className="metric-number">500+</div>
            <div className="metric-title">Partner Institutions</div>
          </div>

          <div className="metric-card">
            <div className="metric-number">30+</div>
            <div className="metric-title">Countries Covered</div>
          </div>

          <div className="metric-card">
            <div className="metric-number">95%</div>
            <div className="metric-title">Student Satisfaction</div>
          </div>

        </div>
      </div>

    </div>
  </section>
  )
}

export default About