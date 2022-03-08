import React from "react";
import * as G from "./welcomeStyle";

const Welcome = ({ text }) => {
  return (
    <G.Container>
      <h3>{text}</h3>
    </G.Container>
  );
};

export default Welcome;
