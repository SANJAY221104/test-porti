import React from "react";
import { headerData } from "../../data";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-section">
      <h1>Hello, I'm <span>{headerData.name}</span></h1>
      <h3>{headerData.tagline}</h3>
    </div>
  );
};

export default Header;
