import React from "react";
import { testimonialData } from "../../data";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-list">
        {testimonialData.map((item, index) => (
          <div key={index} className="testimonial-item">
            <p>"{item.feedback}"</p>
            <h5>- {item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
