import React from "react";
import interDesk from "../assets/images/interactive/interactive-desk.jpg";
import interMob from "../assets/images/interactive/interactive-mob.jpg";

function Inderactive() {
  return (
    <div className="interactive">
      <div className="container">
        <div className="interactive__img">
          <img
            src={interDesk}
            alt="interactive image"
            className="interactive__img--desk"
          />
          <img
            src={interMob}
            alt="interactive image"
            className="interactive__img--mob"
          />
        </div>
        <div className="interactive__info">
          <h2 className="interactive__title">
            The leader in <br /> interactive VR
          </h2>
          <p className="interactive__desc">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inderactive;
