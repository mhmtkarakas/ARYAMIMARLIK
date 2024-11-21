import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="container ">
      <div className="row">
        {/* Sol Taraf: Google Harita */}
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <iframe
        
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3172.244166313564!2d40.69773907586323!3d37.33672777209907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDIwJzEyLjIiTiA0MMKwNDInMDEuMSJF!5e0!3m2!1str!2str!4v1731686480569!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "8px", minHeight: "400px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Sağ Taraf: İletişim Formu */}
        <div className="col-md-6" data-aos="fade-left">
          <h2 className="mb-4">Bize Ulaşın</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label " >
                Adınız
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Adınızı giriniz"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-posta
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="E-posta adresinizi giriniz"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mesajınız
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Mesajınızı yazınız"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
