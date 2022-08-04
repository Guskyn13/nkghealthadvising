import React, { useState } from 'react'
import './Header.css'
import {
  FaFacebookSquare,
  FaLinkedin
} from "react-icons/fa";
import Logo from '../../images/Logo2NB.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      // textDecoration: isActive ? "underline" : "none",
      color: isActive ? "#28004d" : "#000",
    }
  }

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navBar").style.top = "0";
    } else {
      document.getElementById("navBar").style.top = "-200px";
    }
    prevScrollPos = currentScrollPos;
  }

  return (
    <div className='main-container' id='navBar'>
      <div className='navContainer'>
        <div className='header navbar'>
          <img src={Logo} alt="Logo" className='logo' />
          <div className={`nav-items ${isOpen && "open"}`}>
            <NavLink className='navLink' style={navLinkStyle} to="/">Home</NavLink>
            <NavLink className='navLink' style={navLinkStyle} to="/services">Services</NavLink>
            <NavLink className='navLink' style={navLinkStyle} to="/about">About</NavLink>
            <NavLink className='navLink' style={navLinkStyle} to="/contact">Contact</NavLink>
            <div>
              <img src={Logo} alt="Logo" className='logo2' />
            </div>
          </div>
          <div id='linksContainer'>
            <a href="https://www.facebook.com/NKG-Health-Advising-106172395519990" className='link'><FaFacebookSquare className='icon' /></a>
            <a href="https://www.linkedin.com/in/nathankgusky/" className='link'><FaLinkedin className='icon' /></a>
          </div>
          <div className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header