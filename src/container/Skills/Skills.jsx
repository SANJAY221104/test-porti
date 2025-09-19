import React from "react";
import { skillsData } from "../../data";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-item">
            <h4>{item.skill}</h4>
            <p>{item.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
