import "./Home.css";
import React from "react";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Help from "../../components/help/Help";
import Hero from "../../components/hero/Hero";
import Questions from "../../components/questions/Questions";
// import Testimonials from "../../components/testimonials/Testimonials";

import { motion } from "framer-motion";

const Home = () => {

  return (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
        <Hero />
        {/* <Testimonials /> */}
        <Help />
        <Questions />
        <GetInTouch />
      </motion.div>
  );
};

export default Home;
