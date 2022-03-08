import React from "react";
import { Header, Sidebar } from "../../containers";
import * as G from "./screenoneStyle";

const ScreenOne = () => {
  return (
    <G.Container>
      <Sidebar />
      <div className="main-content">
        <Header />
      </div>
    </G.Container>
  );
};

export default ScreenOne;
