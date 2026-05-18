import React, { useState } from 'react'
import "./Navbar.css"
import logo from "/mgmt-logo2.jpeg"
import { ChevronDown, ChevronUp } from 'lucide-react';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { Link } from 'react-router';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link className="nav-logo-display" to={'/'}>
          <img id="nav-logo-img" src={logo} alt="Logo" />
        </Link>

        <ul className="nav-links">
          <li className="nav-link" >
            <span> <Link to={`/about`}> About Us</Link> </span>
          </li>

          <li 
            className="nav-link"
            onMouseEnter={() => setActiveMenu("programs")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>
              Programs & Services 
              {activeMenu === "programs" ? <ChevronUp size={22} style={{marginTop: "3px"}}/> : <ChevronDown size={22} style={{marginTop: "3px"}}/>}
            </span>

            <ul className="dropdown">
              <Link to={'/study-abroad'}><li>Study Abroad</li></Link>
              <Link to={'/liberal-arts'}><li> Liberal Arts Program</li></Link>
              <Link to={`/career-coaching`}><li>Career Coaching</li></Link>
            </ul>
          </li>

          <li className="nav-link" >
            <Link to={"/partnerships"}><span> Partnerships </span></Link>
          </li>

          <li 
            className="nav-link"
            onMouseEnter={() => setActiveMenu("resources")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>
              Resources 
              {activeMenu === "resources" ? <ChevronUp size={22} style={{marginTop: "3px"}}/> : <ChevronDown size={22} style={{marginTop: "3px"}}/>}
            </span>

            <ul className="dropdown">
              <Link to={'/blog'}><li>Blog</li></Link>
              <li>Webinars & Workshops</li>
              <Link to={"/faq"}><li>FAQs</li></Link>
            </ul>
          </li>

          <li className="nav-link" >
            <Link to={"/contact-us"}><span> Contact Us </span></Link>
          </li>
        </ul>

        <div className='nav-right'>
          <Link to={"/contact-us"}><button className='login'>Get Free Counselling</button></Link>
          {/* <button className='register'>Register</button> */}
        </div>

        <MobileNavbar/>
      </div>
    </nav>
  )
}

export default Navbar