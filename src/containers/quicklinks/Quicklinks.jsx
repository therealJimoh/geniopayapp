import React from "react";
import * as G from "./quicklinksStyle";

import { Links } from "../../components";

const Quicklinks = () => {
  return (
    <G.Container>
      <div className="quicklinkwrapper">
        <div className="linkheader">
          <h5 className="headlink">Quick Links</h5>
          <p className="plink">Your frequently used actions for easy access</p>
        </div>
        <Links />
      </div>
    </G.Container>
  );
};

export default Quicklinks;
