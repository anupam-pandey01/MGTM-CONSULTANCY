import React from 'react'
import "./TopDestinations.css"

const TopDestinations = () => {
  return (
<section className="section destinations-section">
  <div className="section-header">
    <span className="section-tag">Top Destinations</span>
    <h2 className="section-title">Where Will You Study?</h2>
  </div>
  <div className="destinations-grid">
    <a href="#" className="dest-chip">🇺🇸 USA</a>
    <a href="#" className="dest-chip">🇬🇧 UK</a>
    <a href="#" className="dest-chip">🇨🇦 Canada</a>
    <a href="#" className="dest-chip">🇦🇺 Australia</a>
    <a href="#" className="dest-chip">🇩🇪 Germany</a>
    <a href="#" className="dest-chip">🇳🇿 New Zealand</a>
    <a href="#" className="dest-chip">🇮🇪 Ireland</a>
    <a href="#" className="dest-chip">🇸🇬 Singapore</a>
  </div>
</section>
  )
}

export default TopDestinations