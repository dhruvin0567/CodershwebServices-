// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function SolutionPageLogoSlider({ logos, title }) {
    return (
        <div>
            <div className="section aximo-project-page logo-slider dark-bg border-top">
                <div className="container py-5">
                    {title && (
                        <h3 className="light-text text-center mb-5">
                            {title}
                        </h3>
                    )}

                    <Swiper
                        spaceBetween={30}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 3 },
                            480: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide key={index} className="logo-img-slider">
                                <img src={logo.image} alt={logo.alt || "Brand Logo"} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SolutionPageLogoSlider