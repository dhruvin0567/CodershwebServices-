import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SolutionPageLogoSlider = ({ logos = [], title = "" }) => {
  if (!logos || logos.length === 0) return null;

  return (
    <section
      className="aximo-project-page logo-slider dark-bg border-t"
      aria-label={`${title} logo carousel`}
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
          observer={true}
          observeParents={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={logo.id || `logo-${index}`}>
              <img
                src={logo.image}
                width={120}
                height={80}
                className="max-h-16 mx-auto object-contain"
                alt={logo.alt || `Logo ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(SolutionPageLogoSlider);
