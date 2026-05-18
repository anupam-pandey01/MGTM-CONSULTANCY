import React from 'react'
import logo from "/mgmt-logo.png"
import "./Footer.css"
import { Link } from 'react-router'
function Footer() {
  return (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <img id="footer-logo-img" src={logo} alt="MGTM Logo" />
        <span className="footer-logo-text" id="footer-logo-text">MGTM</span>
        <p>Empowering students to achieve global education dreams since 2015.</p>
      </div>
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li> <Link to={"/about"}>About Us</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Universities</a></li>
          <li><a href="#">Blog</a></li>
          <li><Link to={"/contact-us"}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>📍 New Delhi, India</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ info@mgtm.in</p>
      </div>
    </div>
    <div className="footer-bottom"><p>© 2026 MGTM. All rights reserved.</p></div>
</footer>  
)
}

export default Footer