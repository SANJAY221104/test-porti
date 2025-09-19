import React from "react";
import { workData } from "../../data";
import "./Work.scss";

const Work = () => {
  return (
    <div className="work-section">
      <h2 className="section-title">My Projects</h2>
      <div className="work-list">
        {workData.map((item, index) => (
          <div key={index} className="work-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
