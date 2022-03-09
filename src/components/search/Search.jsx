import React from "react";
import * as G from "./searchStyle";
import searchicon from "../../assets/svg/searchicon.svg";

const Search = () => {
  return (
    <G.Search>
      <img src={searchicon} alt="" />
      <input className="searchinput" type="text" placeholder="Search" />
    </G.Search>
  );
};

export default Search;
