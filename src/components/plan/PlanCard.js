import React from "react";
import "../../css/Sidebar.css";

function PlanCard() {
  return (
    <div className="plan-card">
      <div className="plan-card-upper">
        <div className="plan-card-profile">
          {/* <img src={image} className='profile-image'/> */}
          <div className="plan-card-image-outer"><div className="plan-card-image" /></div>
          <div className="plan-card-name">
            <p>Jesson George</p>
            <p>Member ID - xxxxxxxxxx</p>
          </div>
        </div>
      </div>
      <div className="plan-card-lower"></div>
    </div>
  );
}

export default PlanCard;
