import React from "react";
import * as G from "./walletaccountStyle";
import plus from "../../assets/svg/plus.svg";
import { Account } from "../../components";

const Walletaccount = () => {
  return (
    <G.Wallet>
      <div className="walletwrapper">
        <h4>Wallet</h4>
        <div className="accountcontainer">
          <Account />
          <img className="addimg" src={plus} alt="add" />
        </div>
      </div>
    </G.Wallet>
  );
};

export default Walletaccount;
