import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <p>
        &copy; {new Date().getFullYear()} Sanjay B. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
