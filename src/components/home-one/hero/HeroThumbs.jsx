// import { useState, useEffect } from 'react';
import HeroThumbImg1 from "../../../assets/images/v1/icon/Techless.webp";
import HeroThumbImg2 from "../../../assets/images/v1/icon/Cohort.webp";
import HeroThumbImg3 from "../../../assets/images/v1//icon/Kinvara.webp";
// import HeroThumbImg4 from "../../../assets/images/v1/icon/hero-thumb-4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function HeroThumbs() {
  return (
    <div className="aximo-hero-thumb jos" data-jos_animation="fade-right">
      {/* Trusted brand logos slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide>
          <img
            src={HeroThumbImg1}
            alt="Techless brand logo on Shopify"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={HeroThumbImg2}
            alt="Cohort brand showcased on Shopify"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={HeroThumbImg3}
            alt="Kinvara eCommerce success story"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroThumbs;
