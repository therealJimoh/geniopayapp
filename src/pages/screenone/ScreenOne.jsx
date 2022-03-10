import React from "react";
import { Charts, Header, Quicklinks, Sidebar, Transactions, Walletaccount } from "../../containers";
import * as G from "./screenoneStyle";

const ScreenOne = () => {
  return (
    <G.Container>
      <Sidebar />
      <div className="main-content">
        <Header />
        <Walletaccount />
        <Quicklinks />
        <Transactions />
        <Charts />
      </div>
    </G.Container>
  );
};

export default ScreenOne;
