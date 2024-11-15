import React from "react";
import "./BusinessPartners.css";
import { Link } from "react-router-dom";

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
            <Link  to={"https://www.duratiles.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_13} alt="Akgün Seramik" />
            </Link>
            <Link className="link" to={"https://www.duratiles.com.tr/"} target="_blank">
              {" "}
              <p>Akgün Seramik</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://ngkutahyaseramik.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_1} alt="NG Kütahya Seramik" />
            </Link>
            <Link className="link" to={"https://ngkutahyaseramik.com.tr/"} target="_blank">
              {" "}
              <p>NG Kütahya Seramik</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.creavit.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_2} alt="Creavit" />
            </Link>
            <Link className="link" to={"https://www.creavit.com.tr/"} target="_blank">
              {" "}
              <p>Creavit</p>
            </Link>
          </div>
          <div class="image-item" to={"https://www.roca.com.tr/"} target="_blank">
            <Link>
              {" "}
              <img src={mslider_3} alt="Roca Banyo" />
            </Link>
            <Link className="link" to={"https://www.roca.com.tr/"} target="_blank">
              {" "}
              <p>Roca Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://pentabanyo.com/"} target="_blank">
              {" "}
              <img src={mslider_4} alt="Penta Banyo" />
            </Link>
            <Link className="link" to={"https://pentabanyo.com/"} target="_blank">
              {" "}
              <p>Penta Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.sukar.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_5} alt="Sukar Su Gideri" />
            </Link>
            <Link className="link" to={"https://www.sukar.com.tr/"} target="_blank">
              {" "}
              <p>Sukar Su Gideri</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.artemis.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_6} alt="Artemis" />
            </Link>
            <Link className="link" to={"https://www.artemis.com.tr/"} target="_blank">
              {" "}
              <p>Artemis</p>
            </Link>
          </div>
          <div class="image-item">
            <Link  to={"https://www.evabanyo.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_7} alt="Eva Banyo" />
            </Link>
            <Link className="link" to={"https://www.evabanyo.com.tr/"} target="_blank">
              {" "}
              <p >Eva Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.orkabanyo.com/tr"} target="_blank">
              {" "}
              <img src={mslider_8} alt="Orka Banyo" />
            </Link>
            <Link className="link" to={"https://www.orkabanyo.com/tr"} target="_blank">
              {" "}
              <p>Orka Banyo</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.yasham.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_9} alt="Yasham Duvar Kağıtları" />
            </Link>
            <Link className="link" to={"https://www.yasham.com.tr/"} target="_blank">
              {" "}
              <p>Yasham Duvar Kağıtları</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://crauf.com/"} target="_blank">
              {" "}
              <img src={mslider_10} alt="Crauf" />
            </Link>
            <Link className="link" to={"https://crauf.com/"} target="_blank" >
              {" "}
              <p>Crauf</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.kyk.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_11} alt="KYK Yapı Kimyasalları" />
            </Link>
            <Link className="link" to={"https://www.kyk.com.tr/"} target="_blank">
              {" "}
              <p>KYK Yapı Kimyasalları</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.saint-gobain.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_12} alt="Weber Yapı Kimyasalları" />
            </Link>
            <Link className="link" to={"https://www.saint-gobain.com.tr/"} target="_blank">
              {" "}
              <p>Weber Yapı Kimyasalları</p>
            </Link>
          </div>
          <div class="image-item">
            <Link to={"https://www.fixa.com.tr/"} target="_blank">
              {" "}
              <img src={mslider_14} alt="Resim 6" />
            </Link>
            <Link className="link" to={"https://www.fixa.com.tr/"} target="_blank">
              <p>Fixa Yapı Kimyasalları</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
