import React, { useState } from 'react'
import "./MobileNavbar.css"
import logo from "/mgmt-logo2.jpeg"
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  return (
    <nav className="mobile-navbar">
      <div className="mobile-top">
        <div onClick={toggleMenu}>
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </div>

      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>

        <ul>

          <li onClick={() => toggleDropdown("programs")}>
            <div className="menu-title">
              Programs & Services
              {activeMenu === "programs" ? <ChevronUp/> : <ChevronDown/>}
            </div>

            {activeMenu === "programs" && (
              <ul className="submenu">
                <Link to={"/study-abroad"}><li onClick={toggleMenu}>Study Abroad</li></Link>
                <Link to={'/liberal-arts'}><li onClick={toggleMenu}>Liberal Arts Program</li></Link>
                <Link to={"/career-coaching"}><li onClick={toggleMenu}>Career Coaching</li></Link>
              </ul>
            )}
          </li>

          <li onClick={() => toggleDropdown("resources")}>
            <div className="menu-title">
              Resources
              {activeMenu === "resources" ? <ChevronUp/> : <ChevronDown/>}
            </div>

            {activeMenu === "resources" && (
              <ul className="submenu">
                <Link to={'/blog'}><li onClick={toggleMenu}>Blog</li></Link>
                <li onClick={toggleMenu}>Webinars</li>
                <Link to={"/faq"}><li onClick={toggleMenu}>FAQs</li></Link>
              </ul>
            )}
          </li>

          <li onClick={toggleMenu}><Link to={"/about"}>About</Link></li>
          <Link to={"/partnerships"}><li onClick={toggleMenu}>Partnerships</li></Link>
          
          <Link to={"/contact-us"}><li onClick={toggleMenu}>Contact Us</li></Link>
        </ul>

        <div className="mobile-buttons">
          <Link to={"/contact-us"} className='login'><button className="login">Get Free Counselling</button></Link>
        </div>

      </div>
    </nav>
  )
}

export default MobileNavbar