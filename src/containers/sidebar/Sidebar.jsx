import React from "react";
import * as G from "./sidebarStyle";
import {
  logo,
  walletfill,
  boldeye,
  staricon,
  dash,
  walletoutline,
  cardoutline,
  fxoutline,
  beneficiaryoutline,
  perksoutline,
  speaker
} from "./import";
import { Navitem, Walletballance } from "../../components";

const Liner = () => {
  return <G.Line></G.Line>;
};

const Sidebar = () => {
  return (
    <G.Container>
      <div className="sidebarwrapper">
        <div className="logowrapper">
          <img src={logo} alt="" />
        </div>
        <div className="walletinfo">
          <Walletballance
            text="wallet ballance"
            number="$15,001.00"
            img={walletfill}
            seenicon={boldeye}
          />
          <Liner />
          <Walletballance text="awarded points" number="35" img={staricon} />
          <Liner />
          <div className="btn">
            <G.Payin>Pay-In</G.Payin>
            <G.Payout>Pay-Out</G.Payout>
          </div>
        </div>
        <div className="nav-list">
          <div className="dashboard">
            <img src={dash} alt="" />
            <p> Dashboard</p>
          </div>
          <div className="lists">
            <Navitem img={walletoutline} text="wallet" />
            <Navitem img={cardoutline} text="cards" />
            <Navitem img={fxoutline} text="fx center" />
            <Navitem img={beneficiaryoutline} text="beneficiaries" />
            <Navitem img={perksoutline} text="perks" />
          </div>
        </div>
        <div className="refer">
          <div className="speakertext">
              <img src={speaker} alt="" />  
              <div className="refertext">
                <h6 className="refertexth6">Refer and earn</h6>
                <p className="refertextp">Use the below link to invite friends</p>  
              </div>
          </div>
          <button className="invite"> Invite Friends</button>
        </div>
      </div>
    </G.Container>
  );
};

export default Sidebar;
