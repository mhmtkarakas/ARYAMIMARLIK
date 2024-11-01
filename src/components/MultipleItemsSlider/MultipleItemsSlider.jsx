import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import slider_1 from "../../asisst/crv.webp";

import "./MultipleItemsSlider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

const MultipleItemsSlider = () => {
  return (
    <div className="swiper-container">
         <h3>Taninmis Yapi Malzemeleri ile Kaliteyi Kesfedin</h3>
      <div className="swiper-slides">
       
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={slider_1} alt="" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider_1} alt="" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider_1} alt="" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider_1} alt="" className="slider-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MultipleItemsSlider;
