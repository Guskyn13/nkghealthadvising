import React, { useEffect, useState } from "react";
import "./Hero.css";
import { PopupWidget } from "react-calendly";
import Me from "../../images/ProfilePic.jpg";
import Calendly from "../calendly/Calendly";

const Hero = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="heroMainContainer">
        <div className="profilePicContainer">
          <img src={Me} alt="Profile" className="profilePic" />
        </div>

        <div className="companyName">
          <div className="initials">
            <p className="comapanyTitle">
              <span className="companyInitials">NKG</span>Health Advising
            </p>
          </div>
          <br />
          <p className="companyDesc">
            Are your kids clumsy? Are you? Concerned about your future health?
            Concerned about a loved one's health? I am here to provide you and
            your family with personalized guidance and ongoing support. Lets
            navigate the healthcare system together!
          </p>
        </div>
      </div>

     {/* <div>
        <p>width: {windowSize.innerWidth}</p>
      </div>  */}

      <Calendly />
    </>
  );
};

export default Hero;
