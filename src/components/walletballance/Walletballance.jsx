import React from "react";
import * as G from "./walletbalanceStyle";



const Walletballance = ({ text, seenicon, number, img }) => {
  return (
    <G.Container>
      <div className="walletwrapper">
        <div className="imgwrapper">
          <img src={img} alt="" />
        </div>
        <div className="textcont">
          <p className="text">{text}</p>
          <p className="num">{number}</p>
        </div>
        <img src={seenicon} alt="" />
      </div>
    </G.Container>
  );
};

export default Walletballance;
