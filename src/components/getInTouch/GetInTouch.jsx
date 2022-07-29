import React from "react";
import "./GetInTouch.css";
import { InlineWidget } from "react-calendly";

const GetInTouch = () => {
  return (
    <div className="gitMainContainer">
      <div className="gitContainer">
        <div className="containerLeftSide">
          <InlineWidget url="https://calendly.com/nathangusky13" />
        </div>
        <div className="containerRightSide">Get In Touch</div>
      </div>
    </div>
  );
};

export default GetInTouch;
