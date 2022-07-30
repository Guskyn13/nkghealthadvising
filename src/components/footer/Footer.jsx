import React from 'react'
import './Footer.css'
import Logo from '../../images/Logo2NB.png'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div >
            <img src={Logo} alt="Logo" className='footerLogo' />
        </div>
        <div>
            Copyright <FaRegCopyright /> NKG Health Advising
        </div>
    </div>
  )
}

export default Footer