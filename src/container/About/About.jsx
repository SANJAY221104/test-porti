import React from "react";
import { aboutData } from "../../data";

const About = () => {
  return (
    <div className="about-section">
      <p>{aboutData.bio}</p>
    </div>
  );
};

export default About;
