import React from "react";
import "./GetInTouch.css";
import { InlineWidget } from "react-calendly";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="gitMainContainer">

      <div className="gitContainer">

        <div className="containerLeftSide">
          <InlineWidget url="https://calendly.com/nathangusky13" />
        </div>

        <div className="containerRightSide">

          <p className="rightSideTitle">GET IN TOUCH</p>

          <div className="rightSideDesc">
            Contact NKG Health Advising so we can make searching for coverage
            stress free and seamless. We are here for you, anytime, anytime that
            is convenient for you.
          </div>
          <div className="rightSideInfo">
            Use the form here to make an appointment directly with me so we can
            chat.
          </div>

          <div className="rightSideDetails">

            <div className="rightSideIcon">
              <AiOutlineMail className="icon" />
            </div>
              <button onClick={() => window.location = 'mailto:nathangusky13@gmail.com'} className="rightSideText">Nathangusky13@gmail.com</button>

            <br />

            <div className="rightSideIcon">
              <AiOutlinePhone className="icon" />
            </div>
              <p className="rightSidePhone">850.556.3452</p>
          </div>
          <div className="rightSideLinks">
            <FaFacebookSquare className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
