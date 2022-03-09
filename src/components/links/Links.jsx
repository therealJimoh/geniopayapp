import React from "react";
import * as G from "./linksStyle";
import {
  moneywhite,
  walletwhite,
  cardwhite,
  dollarwhite,
  accountwhite,
  paymentwhite,
  voucherwhite,
} from "./import";

const Links = () => {
  return (
    <G.Link>
      <div className="linkwrapper">
        <div className="link">
          <div className="imgwrap1 imgwrap">
            <img src={walletwhite} alt="" />
          </div>
          <p className="pquicklink">add new wallet</p>
        </div>
        <div className="link">
          <div className="imgwrap2 imgwrap">
            <img src={cardwhite} alt="" />
          </div>
          <p className="pquicklink">add new card</p>
        </div>
        <div className="link">
          <div className="imgwrap3 imgwrap">
            <img src={dollarwhite} alt="" />
          </div>
          <p className="pquicklink">ballance exchange</p>
        </div>
        <div className="link">
          <div className="imgwrap4 imgwrap">
            <img src={accountwhite} alt="" />
          </div>
          <p className="pquicklink">transfer to account</p>
        </div>
        <div className="link">
          <div className="imgwrap5 imgwrap">
            <img src={voucherwhite} alt="" />
          </div>
          <p className="pquicklink">generate voucher</p>
        </div>
        <div className="link">
          <div className="imgwrap6 imgwrap">
            <img src={moneywhite} alt="" />
          </div>
          <p className="pquicklink">mobile money</p>
        </div>
        <div className="link">
          <div className="imgwrap7 imgwrap">
            <img src={paymentwhite} alt="" />
          </div>
          <p className="pquicklink">payment link</p>
        </div>
      </div>
    </G.Link>
  );
};

export default Links;
