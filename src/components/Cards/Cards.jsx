import React from "react";
import "./Cards.css";

import eye from "../../asisst/shared-vision.png";
import tile from "../../asisst/tile.png";
import people from "../../asisst/people.png";

const Cards = () => {
  return (
    <div className="card-container" >
      <div className="card-group text-center " >
        <div className="card " data-aos="fade-right">
          <img src={eye} className="card-img-top" alt="Goz" />
          <div className="card-body ">
            <h3 className="card-title my-4 fw-bold">Modern ve Vizyoner Bakış Açısı</h3>
            <p className="card-text my-2">
              Modern ve vizyoner bakış açımızla, yeniliklere açık,
              sürdürülebilir ve geleceğe yön veren çözümler sunmaya
              odaklanıyoruz. Kalite ve estetik odaklı çözümlerle sektörde fark
              yaratmak amacıyla yenilikçi bir yaklaşım benimsiyoruz. Bu
              anlayışla, her projede yalnızca günümüz trendlerine değil,
              geleceğin beklentilerine de yön veriyoruz.
            </p>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <img src={tile} className="card-img-top" alt="Fayans" />
          <div className="card-body">
            <h3 className="card-title my-4 fw-bold">Şık ve Kaliteli Ürünler</h3>
            <p className="card-text my-2">
              Ürünlerimiz, şıklığı ve kaliteyi bir araya getirerek yaşam
              alanlarınıza zarif dokunuşlar katıyor. Dayanıklılığı ön planda
              tutarak her tarza hitap eden koleksiyonlarımızla estetik ve
              fonksiyonelliği birleştiriyoruz.
            </p>
          </div>
        </div>
        <div className="card" data-aos="fade-left">
          <img src={people} className="card-img-top" alt="Personel" />
          <div className="card-body" >
            <h4 className="card-title my-4 fw-bold">Alanında Uzman, Deneyimli Kadro</h4>
            <p className="card-text my-2">
              Alanında uzman ve deneyimli ekibimiz, her aşamada müşterilerimize
              en iyi hizmeti sunmayı hedeflemektedir. Tasarımdan uygulamaya
              kadar tüm süreçlerde titizlikle çalışan ekibimiz, beklentilerinizi
              karşılayacak kaliteli çözümler üretir. İhtiyaçlarınıza uygun
              danışmanlık ve destek sunarak, her projede mükemmel sonuçlara
              ulaşmanızı sağlarız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
