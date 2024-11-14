import React from "react";
import "./BusinessPartners.css";
import businessPartner from "../../asisst/business-partner.jpg";
import mslider_13 from "../../asisst/mslider_13.png";
import mslider_1 from "../../asisst/mslider_1.png";
import mslider_2 from "../../asisst/mslider_2.png";
import mslider_3 from "../../asisst/mslider_3.png";
import mslider_4 from "../../asisst/mslider_4.png";
import mslider_5 from "../../asisst/mslider_5.png";
import mslider_6 from "../../asisst/mslider_6.png";
import mslider_7 from "../../asisst/mslider_7.png";
import mslider_8 from "../../asisst/mslider_8.png";
import mslider_9 from "../../asisst/mslider_9.png";
import mslider_10 from "../../asisst/mslider_10.png";
import mslider_11 from "../../asisst/mslider_11.png";
import mslider_12 from "../../asisst/mslider_12.png";
import mslider_14 from "../../asisst/mslider_14.png";

const BusinessPartners = () => {
  return (
    <div>
      <div class="header-image">
        <h1>İş Ortaklarımız</h1>
      </div>
      <div className="image-gallery-container">
        <div class="image-gallery">
          <div class="image-item">
            <img src={mslider_13} alt="Resim 1" />
            <p>Resim 1</p>
          </div>
          <div class="image-item">
            <img src={mslider_1} alt="Resim 2" />
            <p>Resim 2</p>
          </div>
          <div class="image-item">
            <img src={mslider_2} alt="Resim 3" />
            <p>Resim 3</p>
          </div>
          <div class="image-item">
            <img src={mslider_3} alt="Resim 4" />
            <p>Resim 4</p>
          </div>
          <div class="image-item">
            <img src={mslider_4} alt="Resim 5" />
            <p>Resim 5</p>
          </div>
          <div class="image-item">
            <img src={mslider_5} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_6} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_7} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_8} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_9} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_10} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_11} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_12} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
          <div class="image-item">
            <img src={mslider_14} alt="Resim 6" />
            <p>Resim 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
