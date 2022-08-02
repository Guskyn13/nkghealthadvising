import React from "react";
import "./Questions.css";
import CallMe from "../../images/CallMe.png";

const Questions = () => {
  return (
    <div className="questionMainContainer">
      <div className="questionWhiteContainer">
        <div className="questionContent">
          <p className="questionTitle">Healthcare Questions?</p>
          <p className="questionInfo">Available 24 hours/day 7 days/week</p>

          <div className="questionBox">
            <img className="questionHelpImage" src={CallMe} alt="Call Me" />

            <div className="questionOverlay">
              <div className="questionText">(850) 556.3452</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;