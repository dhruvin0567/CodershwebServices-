import { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        })
    )
  );
};

const SolutionPageLogoSlider = ({ logos = [], title = "" }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (logos.length > 0) {
      const imageUrls = logos.map((logo) => logo.image);
      preloadImages(imageUrls).then(() => setImagesLoaded(true));
    }
  }, [logos]);

  if (!logos || logos.length === 0) return null;
  if (!imagesLoaded) return null; // or a spinner/placeholder

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
          observer={true}
          observeParents={true}
          preloadImages={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id || logo.image}>
              <img
                src={logo.image}
                decoding="async"
                width={120}
                height={80}
                className="max-h-16 mx-auto object-contain"
                alt={logo.alt || "Brand logo"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(SolutionPageLogoSlider);
