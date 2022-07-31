import React from 'react'
import './Contact.css';

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className='contactMainContainer'>
      <div className="contactText">This is the contact page</div>
    </div>
    </motion.div>
  )
}

export default Contact