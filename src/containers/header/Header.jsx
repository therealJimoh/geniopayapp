import React, { useState } from "react";
import { Profiledetails, Search, Welcome } from "../../components";
import * as G from "./headerStyle";
import { notification, planticon } from "./import";
import * as Icons from "react-icons/fa";
import * as AIcons from "react-icons/ai";
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
  speaker,
} from "./import";
import { Navitem, Walletballance } from "../../components";
import { IconContext } from "react-icons";

const Liner = () => {
  return <G.Line></G.Line>;
};
const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{color: "#000000"}}>
        <G.Container>
          <div className="headerwrapper">
            <div className="bars">
              <Icons.FaBars onClick={showSidebar} />
            </div>
            <div className="welcome">
              <Welcome text="welcome, huss smith" />
            </div>
            <div className="headerEl">
              <Search />
              <div className="planted">
                <img src={planticon} alt="planticon" />
                <p>0 planted</p>
              </div>
              <img src={notification} alt="" />
              <Profiledetails />
            </div>
          </div>
        </G.Container>
        <G.Sidebar>
          <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div className="menu-bars navbar-toggle">
              <AIcons.AiOutlineClose onClick={showSidebar} />
            </div>
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
                <Walletballance
                  text="awarded points"
                  number="35"
                  img={staricon}
                />
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
                    <p className="refertextp">
                      Use the below link to invite friends
                    </p>
                  </div>
                </div>
                <button className="invite"> Invite Friends</button>
              </div>
            </div>
          </div>
        </G.Sidebar>
      </IconContext.Provider>
    </>
  );
};

export default Header;
