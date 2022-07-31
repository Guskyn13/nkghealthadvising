import React from "react";
import "./About.css";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="aboutMainContainer">
        <div className="aboutText">This is the about page</div>
      </div>
    </motion.div>
  );
};

export default About;
