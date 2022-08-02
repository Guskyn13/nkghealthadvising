import React from "react";
import "./Help.css";
import BuisnessOwner from "../../images/SmallBuisnessOwner.jpg";
import SelfEmployed from "../../images/SelfEmployed.jpg";
import FamilyMembers from "../../images/FamilyMembers.jpg";
import Everyone from "../../images/Everyone.jpg";

const Help = () => {
  return (
    <div className="helpMainContainer">
      {/* <div className="helpTitle">
        <h2>Helping Hand</h2>
      </div> */}

      <div className="helpingCards">
        <div className="helpingCard">
          <img
            className="helpingCardImg"
            src={BuisnessOwner}
            alt="BuisnessOwner"
          />
          <div className="helpingCardOverlay">
            <div className="text">
              <span className="helpingCardTitle">Buisness Owners</span>
              <br />
              <br />
              Already have enough on your plate? Some things you dont think
              about when starting a small buisness, health insurance being one
              of those. Let's make sure you take of your employees with
              affordable plans and even better coverage.
            </div>
          </div>
        </div>

        <div className="helpingCard">
          <img
            className="helpingCardImg"
            src={SelfEmployed}
            alt="SelfEmployed"
          />
          <div className="helpingCardOverlay">
            <div className="text">
              <span className="helpingCardTitle">Self Employed</span>
              <br />
              <br />
              Been working for yourself without coverage? Leaving your corporate
              job to not have to work for someone else? We can help you find the
              right coverage for your personal needs in any job you work.
            </div>
          </div>
        </div>

        <div className="helpingCard">
          <img
            className="helpingCardImg"
            src={FamilyMembers}
            alt="FamilyMembers"
          />
          <div className="helpingCardOverlay">
            <div className="text">
              <span className="helpingCardTitle">Family Members</span>
              <br />
              <br />
              Planning for the unexpected is difficult. Adding family to work
              plans is even more difficult and sometimes too expensive. Let's
              converse and get everyone covered, we have a great chance of
              finding that plan that works for you.
            </div>
          </div>
        </div>

        <div className="helpingCard">
          <img className="helpingCardImg" src={Everyone} alt="everyone" />
          <div className="helpingCardOverlay">
            <div className="text">
              <span className="helpingCardTitle">Everyone</span>
              <br />
              <br />
              You could be retired, maybe between jobs. We have the possibility
              of making sure everyone is covered.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
