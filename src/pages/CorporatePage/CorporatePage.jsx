import React from "react";
import "./CorporatePage.css";
import headerImage from "../../asisst/kurumsal.jpg"; // Header için resim yolu

const CorporatePage = () => {
  return (
    <div className="corporate-page">
      {/* Üst Resim Alanı */}
      <div
        className="header-image d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${headerImage})`,
          height: "30vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-uppercase fw-bold">Kurumsal</h1>
      </div>

      {/* İçerik Alanı */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Sol Tarafta Şirket Bilgileri */}
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="mb-4">Şirket Hakkında</h2>
            <p>
              Arya Mimarlık İnşaat, sektörde yılların tecrübesiyle müşteri
              memnuniyetini ön planda tutarak hizmet vermektedir. Profesyonel
              ekibi ve modern teknolojileri kullanarak projelerinizde çözüm
              ortağınız olmaktan gurur duyar.
            </p>
            <p>
              <strong>Misyonumuz:</strong> Kaliteli ve güvenilir hizmet sunmak.
            </p>
            <p>
              <strong>Vizyonumuz:</strong> Türkiye'nin önde gelen inşaat ve
              mimarlık firmaları arasında yer almak.
            </p>
          </div>

          {/* Sağ Tarafta Logo ve Şirket İsmi */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src="" alt="Arya Mimarlık Logo" className="img-fluid mb-3" style={{ maxWidth: "200px" }} />
            <h3 className="fw-bold">Arya Mimarlık İnşaat</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePage;
