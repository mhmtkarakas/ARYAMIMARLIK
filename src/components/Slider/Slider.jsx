import React from "react";
import "./Slider.css";

import slider_1 from "../../asisst/slider_1.jpg";
import slider_2 from "../../asisst/slider_2.jpg";
import slider_3 from "../../asisst/slider_3.webp";
import slider_4 from "../../asisst/slider_4.jpg";
import slider_5 from "../../asisst/slider_5.jpg";
import slider_6 from "../../asisst/slider_6.jpg";
import slider_7 from "../../asisst/slider_7.jpg";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider_1}
              className="d-block w-100"
              alt="KutahyaSeramik"
            />
            <div className="carousel-caption d-md-block">
              <p className="motto">
                Geçmişten Günümüze Kalitenin Peşinde, <br />
                Geleceğin İzinde
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider_2}
              className="d-block w-100"
              alt="KutahyaSeramik"
            />
          </div>
          <div className="carousel-item">
            <img
              src={slider_7}
              className="d-block w-100"
              alt="KutahyaSeramik"
            />
          </div>
          <div className="carousel-item">
            <img
              src={slider_6}
              className="d-block w-100"
              alt="AkgunSeramik"
            />
          </div>
          <div className="carousel-item">
            <img src={slider_3} className="d-block w-100" alt="OrkaBanyo" />
          </div>
          <div className="carousel-item">
            <img src={slider_4} className="d-block w-100" alt="CreavitBanyo" />
          </div>
          <div className="carousel-item">
            <img
              src={slider_5}
              className="d-block w-100"
              alt="KutahyaSeramik"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
