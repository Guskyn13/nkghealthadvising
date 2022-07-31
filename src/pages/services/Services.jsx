import React from "react";
import "./Services.css";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="mainServicesContainer">
        <div className="serviceText">This is the services page</div>
      </div>
    </motion.div>
  );
};

export default Services;
