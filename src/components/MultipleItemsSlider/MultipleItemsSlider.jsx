import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

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

import "./MultipleItemsSlider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

const MultipleItemsSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="swiper-container" data-aos="fade-up">
      <div className="swiper-slides">
        <h3>Seçkin Yapı Malzemeleri ile Kalitenin Farkını Yaşayın</h3>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src={mslider_1}
              alt="NGkutahyaSeramik"
              className="slider-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_2} alt="CreavitBanyo" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_3} alt="Roca" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_4} alt="Penta" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_5} alt="Sukar" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_6} alt="Artemis" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_7} alt="EvaBanyo" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_8} alt="OrkaBanyo" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_9} alt="YashamDuvarKagidi" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mslider_10} alt="Crauf" className="slider-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MultipleItemsSlider;
