import React from "react";
import * as G from "./historyStyles";

const History = ({ text, img, amount }) => {
  return (
    <G.History>
      <div className="imghistory">
        <img src={img} alt="" />
      </div>
      <div className="historytext">
        <p className="historytext">{text}</p>
        <p className="historyamount">{amount}</p>
      </div>
    </G.History>
  );
};

export default History;
