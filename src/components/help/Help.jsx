import React from "react";
import "./Help.css";
import BuisnessOwner from "../../images/SmallBuisnessOwner.jpg";
import SelfEmployed from "../../images/SelfEmployed.jpg";
import FamilyMembers from "../../images/FamilyMembers.jpg";
import Everyone from "../../images/Everyone.jpg";

const Help = () => {
  return (
    <div className="helpMainContainer">
      <div className="helpTitle">
        <h2>Helping Hand</h2>
      </div>

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
              rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis feugiat vivamus at augue eget arcu dictum varius duis at
              consectetur lorem donec massa sapien faucibus et molestie ac
              feugiat sed
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
              rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis feugiat vivamus at augue eget arcu dictum varius duis at
              consectetur lorem donec massa sapien
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
              rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis feugiat vivamus at augue eget arcu dictum varius duis at
              consectetur lorem donec massa sapien faucibus et molestie ac
              feugiat sed
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
              rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis feugiat vivamus at augue eget arcu dictum varius duis at
              consectetur lorem donec massa sapien faucibus et molestie ac
              feugiat sed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
