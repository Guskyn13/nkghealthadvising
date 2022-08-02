import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../../pages/home/Home';
// import About from '../../pages/about/About';
// import Services from '../../pages/services/Services';
import Contact from '../../pages/contact/Contact';

import { AnimatePresence, 
  useScroll, 
  motion } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    const { scrollYProgress } = useScroll();

  return (
    <AnimatePresence>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;