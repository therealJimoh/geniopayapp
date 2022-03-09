import React from "react";
import * as G from "./profiledetailsStyle";
import avi from "../../assets/png/avi.png";
import dropdown from "../../assets/svg/dropdown.svg";

const Profiledetails = () => {
  return (
    <G.Profile>
      <img src={avi} alt="" />
      <div className="verifiedname">
        <p className="verify">verified</p>
        <p className="verifyname">Huss Smith</p>
      </div>
      <img src={dropdown} alt="" />
    </G.Profile>
  );
};

export default Profiledetails;
