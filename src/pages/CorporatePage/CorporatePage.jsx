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
          <div className="col-md-6 about-section" data-aos="fade-right">
            <h2 className="mb-4 " >Hakkımızda</h2>
            <p>
              Arya Mimarlık İnşaat olarak, inşaat ve perakende sektörlerinde
              müşteri memnuniyetini ve kaliteyi ön planda tutan bir hizmet
              anlayışıyla faaliyetlerimizi sürdürmekteyiz. 2012 yılında
              Mardin'de Çizgi Mimarlık adıyla başladığımız yolculuğumuza, son
              iki yıldır Arya Mimarlık İnşaat olarak yenilikçi bir vizyonla
              devam ediyoruz.</p>
              <p>Seramik sektöründe, hem toptan hem de perakende
              satışlarda uzmanlaşarak inşaat projelerine değer katmayı
              amaçlıyoruz. Geniş ürün yelpazemizle müşterilerimize yalnızca
              seramik değil; aynı zamanda vitrifiye, duvar kâğıdı, ve diğer
              dekorasyon ürünlerinde de çözüm ortağı olmaktan mutluluk
              duyuyoruz.</p> 
              <p>Sektördeki güçlü duruşumuz ve yılların getirdiği
              tecrübeyle Mardin'deki lider firmalardan biri haline gelerek,
              estetik, dayanıklılık ve uygun fiyatı bir arada sunan
              ürünlerimizle fark yaratıyoruz.
              Yenilikçi bakış açımız, müşteri
              odaklı hizmet anlayışımız ve güvenilirliğimizle, her geçen gün
              daha fazla kişiye ve projeye ulaşıyoruz. </p> 
              <p>Bizimle çalışan herkese
              en iyi hizmeti sunmak için buradayız. Arya Mimarlık İnşaat, sizin
              projelerinizi güzelleştiren güvenilir bir çözüm ortağı olmaktan
              gurur duyar!</p>
          
            <p>
              <strong>Misyonumuz:</strong> İnşaat ve perakende sektörlerinde
              kaliteli ürünleri herkes için ulaşılabilir kılmak ve projelere
              değer katmak.
            </p>
            <p>
              <strong>Vizyonumuz:</strong> Türkiye genelinde güvenilir ve tercih
              edilen bir marka olarak sektörde öncü olmak.
            </p>
          </div>

          {/* Sağ Tarafta Logo ve Şirket İsmi */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src=""
              alt="Arya Mimarlık Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "200px" }}
            />
            <h3 className="fw-bold">Arya Mimarlık İnşaat</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePage;
