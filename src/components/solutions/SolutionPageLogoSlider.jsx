import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // make sure to import required css

// ✅ memoized functional component for performance
const SolutionPageLogoSlider = ({ logos = [], title = "" }) => {
    if (!logos || logos.length === 0) return null;

    return (
        <section
            className="aximo-project-page logo-slider dark-bg border-t"
            aria-label={title || "Brand Logos"}
        >
            <div className="container py-5">
                {title && (
                    <h3 className="light-text text-center mb-5 font-semibold text-xl">
                        {title}
                    </h3>
                )}

                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    loop
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
                    {logos.map((logo) => (
                        <SwiperSlide key={logo.id || logo.image} className="logo-img-slider">
                            <img
                                src={logo.image}
                                alt={logo.alt || "Brand logo"}
                                loading="lazy"
                                decoding="async"
                                className="max-h-16 mx-auto object-contain"
                                width={120}
                                height={80}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

// ✅ Use memo to avoid re-render when props not changed
export default memo(SolutionPageLogoSlider);
