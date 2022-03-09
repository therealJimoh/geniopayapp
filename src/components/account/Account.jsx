import React from "react";
import * as G from "./accountStyle";
import usaflag from "../../assets/svg/usaflag.svg";

const Account = () => {
  return (
    <G.Account>
      <div className="accountdiv">
        <div className="accounttype">
          <div className="accounttext">
            <p className="paccount">Personal account</p>
            <p className="usd">USD</p>
          </div>
          <img src={usaflag} alt="flag" />
        </div>
        <div className="amount">
          <p className="pamount">$10,250.00</p>
        </div>
      </div>
    </G.Account>
  );
};

export default Account;
