import React from 'react'
import "./StudyAbroad.css"

const StudyAbroad = () => {
  return (
    <section className="study-abroad-section">

    <div className="container">
      <div className="study-content">

        <p className="section-tag">
          Study Abroad Program
        </p>

        <h2 className="section-title">
          Explore Global Education
          <span>With MGTM</span>
        </h2>

        <p className="section-desc">
          MGTM helps students achieve their dream of studying abroad through
          expert counseling, university selection, scholarship guidance,
          visa support, and career planning.
        </p>

        <div className="feature-list">

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Top Global Universities</span>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Scholarship Assistance</span>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Visa & Documentation Support</span>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Career & Admission Guidance</span>
          </div>

        </div>

        <div className="btn-group">

          <a href="/book-counseling" className="btn-outline">
            Book Counseling
          </a>

        </div>

      </div>

      <div className="study-image">

        <img
          src="https://plus.unsplash.com/premium_photo-1663079426406-1b82fed16a79?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Study Abroad"
        />

      </div>

    </div>

  </section>
  )
}

export default StudyAbroad