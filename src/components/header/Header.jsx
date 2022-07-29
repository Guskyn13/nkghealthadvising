import React from 'react'
import './Header.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Logo from '../../images/Logo No BCKG.png'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "#4b0082" : "#000",
      fontWeight: "bold",
      fontSize: '1.5rem',
    }
  }

  return (
    <div className='main-container'>
        <div className='logoContainer'>
            <img src={Logo} alt="Logo" className='logo' />
        </div>
        <div className='listContainer'>
            <NavLink className='navLink' style={navLinkStyle} to="/">Home</NavLink>
            <NavLink className='navLink' style={navLinkStyle} to="/services">Services</NavLink>
            <NavLink className='navLink' style={navLinkStyle} to="/about">About</NavLink>
            <NavLink className='navLink' style={navLinkStyle} to="/contact">Contact</NavLink>
        </div>
        <div className='linksContainer'>
            <a href="www.facbook.com" className='link'><FaFacebookSquare /></a>
            <a href="www.instagram.com" className='link'><FaInstagramSquare /></a>
            <a href="https://www.linkedin.com/in/nathankgusky/" className='link'><FaLinkedin /></a>
        </div>
    </div>
  )
}

export default Header