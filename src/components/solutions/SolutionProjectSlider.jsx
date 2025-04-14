
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Don't forget to import Swiper styles

function SolutionProjectSlider({ slides }) {
    return (
        <div>
            <div className="section aximo-project-page aximo-section-padding5">
                <div className="container-fluid">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="aximo-project-thumb wow fadeInUpX Solution-slider"
                                    style={{ cursor: "grab" }}
                                    data-wow-delay={`${0.1 + index * 0.1}s`}
                                >
                                    <img src={slide.image} alt={slide.alt} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SolutionProjectSlider