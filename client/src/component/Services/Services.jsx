import React from 'react'
import "./Services.css"

const Services = () => {
  return (
<section className="services-section">
   <div className="services-inner">
        <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Complete Study Abroad Solutions</h2>
            <p className="section-sub">Everything you need to study abroad — all under one roof.</p>
        </div>
        <div className="services-grid">
            <div className="service-card"><span className="service-icon">🎓</span><h3>University Admissions</h3><p>Expert guidance for admissions to top global universities across USA, UK, Canada, Australia & more.</p></div>
            <div className="service-card"><span className="service-icon">✈️</span><h3>Study Abroad Planning</h3><p>End-to-end travel & education planning so you focus on your future, not the logistics.</p></div>
            <div className="service-card"><span className="service-icon">📄</span><h3>Visa Assistance</h3><p>Hassle-free student visa processing with a 98% success rate across all major destinations.</p></div>
            <div className="service-card"><span className="service-icon">🏫</span><h3>Career Counselling</h3><p>Personalised career assessments and counselling sessions with certified international advisors.</p></div>
            <div className="service-card"><span className="service-icon">💰</span><h3>Scholarship Guidance</h3><p>Identify and apply for scholarships worth thousands of dollars to fund your global education.</p></div>
            <div className="service-card"><span className="service-icon">🌍</span><h3>Pre-Departure Support</h3><p>Accommodation, airport pickup, travel insurance, and cultural orientation before you fly.</p></div>
        </div>
    </div>
</section>
  )
}

export default Services