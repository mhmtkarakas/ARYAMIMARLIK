import React from "react";
import "./AboutComponent.css";
import { Link } from "react-router-dom";

import aboutImg from "../../asisst/about-img.jpeg";

const AboutComponent = () => {
  return (
    <div className="about-container">
      <div className="about-content" data-aos="fade-right">
        <p className="description">
          Sağlam Temeller Üzerinde Güven İnşa Ediyor, Kaliteyi ve Hizmeti
          Sizlerle Buluşturuyoruz.
        </p>
        <Link to={"Kurumsal"}>
          <button className="cta-button">Kurumsal</button>
        </Link>
      </div>
      <div className="aboutImg" data-aos="fade-left">
        <img src={aboutImg} alt="Example" />
      </div>
    </div>
  );
};

export default AboutComponent;
