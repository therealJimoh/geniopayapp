import React from 'react'
import { Welcome } from '../../components';
import * as G from "./headerStyle";
import notification from "../../assets/svg/notification.svg";

const Header = () => {
  return (
    <G.Container>
        <div className="headerwrapper">
            <div className="welcome">
                <Welcome text="welcome, huss smith" />
            </div>
            <G.HeaderEl>
                <div className="search"></div>
                <div className="planted"></div>
                <img src={notification} alt="" />
                <div className="profiledetails"></div>
            </G.HeaderEl>
        </div>
    </G.Container>
  )
}

export default Header