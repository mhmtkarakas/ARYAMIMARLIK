import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import phone from "../../asisst/phone.png";
import email from "../../asisst/email.png";
import location from "../../asisst/location.png";

const Footer = () => {
  return (
    <div className="footer_container" >
      <div className="footer-card-group">
        <div className="footer-card" data-aos="fade-right">
          <img src={phone} className="card-img-top" alt="phoneicon" />
          <div className="footer-card-body">
            <h5 className="footer-card-title">TELEFON</h5>
            <p className="footer-card-text">05319249988</p>
            <p className="footer-card-text">05301785979</p>
          </div>
        </div>
        <div className="footer-card" data-aos="fade-up">
          <img src={email} className="card-img-top" alt="emailicon" />
          <div className="footer-card-body">
            <h5 className="footer-card-title">EMAIL</h5>
            <p className="footer-card-text">karakas.mustafa@yahoo.com</p>
          </div>
        </div>
        <div className="footer-card" data-aos="fade-left">
          <img src={location} className="card-img-top" alt="adresicon" />
          <div className="footer-card-body">
            <h5 className="footer-card-title">ADRES</h5>
            <p className="footer-card-text">
              Nur Mah. Vali Ozan Cad. <br />
              Artuklu Kaymakamligi Karsisi <br /> Dimar Sitesi Alti
              Artuklu/MARDIN
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <Link
            to={
              "https://www.instagram.com/aryamimarlikinsaat?igsh=NWxqYjNiZDc3OGt1"
            }
            target="_blank"
          >
            {" "}
            <FaInstagram className="icon" />
          </Link>
        </div>
        <div className="footer-center">
          <h2>Arya Dizayn İnşaat</h2>
        </div>
        <div className="footer-info">
          <p>
            © 2024 Arya Dizayn İnşaat | Created by Mehmet Karakaş | 0542 331
            7650
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
