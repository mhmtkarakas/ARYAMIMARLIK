import React from "react";
import "./Footer.css";

import phone from "../../asisst/phone.png";
import email from "../../asisst/email.png";
import location from "../../asisst/location.png";

const Footer = () => {
  return (
   <div className="footer_container">
<div className="footer-card-group">
  <div className="footer-card">
    <img src={phone} className="card-img-top" alt="phoneicon"/>
    <div className="footer-card-body">
      <h5 className="footer-card-title">TELEFON</h5>
      <p className="footer-card-text">05319249988</p>
      <p className="footer-card-text">05301785979</p>

    </div>
  </div>
  <div className="footer-card">
    <img src={email} className="card-img-top" alt="emailicon"/>
    <div className="footer-card-body">
      <h5 className="footer-card-title">EMAIL</h5>
      <p className="footer-card-text">karakas.mustafa@yahoo.com</p>
     
    </div>
  </div>
  <div className="footer-card">
    <img src={location} className="card-img-top" alt="adresicon"/>
    <div className="footer-card-body">
      <h5 className="footer-card-title">ADRES</h5>
      <p className="footer-card-text">Nur Mah. Vali Ozan Cad. <br/>Artuklu Kaymakamligi Karsisi <br/> Dimar Sitesi Alti Artuklu/MARDIN</p>
    
    </div>
  </div>
</div>
   </div>
  )
};

export default Footer;
