import React from "react";
import "./Hero.css";
import { PopupWidget } from "react-calendly";
import Me from "../../images/ProfilePic.jpg";

const Hero = () => {
  return (
    <>
      <div className="heroMainContainer">
        <div className="profilePicContainer">
          <img src={Me} alt="Profile" className="profilePic" />
        </div>

        <div className="companyName">
          <div className="initials">
            <p className="comapanyTitle">
              <span>NKG</span>Health Advising
            </p>
          </div>
          <br />
          <p className="companyDesc">
            Are your kids clumsy? Are you? Concerned about your future health?
            Concerned about a loved one's health? I am here to provide you and
            your family with personalized guidance and ongoing support. Let’s
            navigate the healthcare system together!
          </p>
        </div>
      </div>

      <PopupWidget
        url="https://calendly.com/nathangusky13/30min?month=2022-07"
        rootElement={document.getElementById("root")}
        text="Schedule With Me!"
        textColor="#000"
        color="#00ff00"
      />
    </>
  );
};

export default Hero;
