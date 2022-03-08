import React from "react";
import * as G from "./navitemStyle";

const Navitem = ({ img, text }) => {
  return (
    <G.Container>
      <img src={img} alt="" />
      <p>{text}</p>
    </G.Container>
  );
};

export default Navitem;
