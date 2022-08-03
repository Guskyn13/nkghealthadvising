import React, { useRef } from 'react'
import './Header.css'
import {
  FaFacebookSquare,
  // FaInstagramSquare, 
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from '../../images/Logo2NB.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "#28004d" : "#000",
      fontWeight: "bold",
      fontSize: '1.5rem',
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
        <div className='logoContainer'>
          <img src={Logo} alt="Logo" className='logo' />
        </div>
        <div className='listContainer'>
          <nav ref={navRef}>
            <NavLink className='navLink' style={navLinkStyle} to="/">Home</NavLink>
            {/* <NavLink className='navLink' style={navLinkStyle} to="/services">Services</NavLink> */}
            {/* <NavLink className='navLink' style={navLinkStyle} to="/about">About</NavLink> */}
            <NavLink className='navLink' style={navLinkStyle} to="/contact">Contact</NavLink>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>
        <div className='linksContainer'>
          <a href="https://www.facebook.com/NKG-Health-Advising-106172395519990" className='link'><FaFacebookSquare /></a>
          {/* <a href="www.instagram.com" className='link'><FaInstagramSquare /></a> */}
          <a href="https://www.linkedin.com/in/nathankgusky/" className='link'><FaLinkedin /></a>
        </div>
      </div>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  )
}

export default Header