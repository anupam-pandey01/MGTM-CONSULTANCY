import React from 'react'
import "./Stats.css"

const Stats = () => {
  return (
    <section className="stats">
        <div className="stat-item"><span className="stat-value">10,000+</span><span className="stat-label">Students Guided</span></div>
        <div className="stat-item"><span className="stat-value">150+</span><span className="stat-label">Partner Universities</span></div>
        <div className="stat-item"><span className="stat-value">45+</span><span className="stat-label">Countries</span></div>
        <div className="stat-item"><span className="stat-value">98%</span><span className="stat-label">Visa Success Rate</span></div>
    </section>
  )
}

export default Stats