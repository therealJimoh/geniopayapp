import React from "react";
import * as G from "./transactionStyle";
import arrowdown from "../../assets/svg/arrowdown.svg";
import { History } from "../../components";
import { statusup, received, send } from "./import";

const Transactions = () => {
  return (
    <G.Transaction>
      <div className="transactwrapper">
        <div className="cta-transact">
          <div className="activity">
            <h4 className="h4activity">Activity</h4>
            <p className="pactivity">Month</p>
            <img src={arrowdown} alt="" />
          </div>
          <h4 className="h4cta">View transaction history</h4>
        </div>
        <div className="transacthistory">
          <History
            img={statusup}
            text="total transaction"
            amount="$88,600.00"
          />
          <History img={received} text="pay in" amount="$4,600.00" />
          <History img={send} text="pay out" amount="$72,600.00" />
        </div>
      </div>
    </G.Transaction>
  );
};

export default Transactions;
