import { useEffect, useRef } from "react";
import Star3Img from "../../../assets/images/v1/star3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const sliderItems = Array(7).fill({
	title: "Let's create new experiences",
	img: Star3Img,
});

function AutoSlider() {
	const swiperRef = useRef(null);

	useEffect(() => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.autoplay.start();
		}
	}, []);

	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				<Swiper
					ref={swiperRef}
					allowTouchMove={false}
					centeredSlides={true}
					speed={6000}
					spaceBetween={30}
					slidesPerView="auto"
					loop={true}
					autoplay={{
						delay: 1,
						disableOnInteraction: false,
						waitForTransition: false, // Add this
						pauseOnMouseEnter: true, // Optional: pause on hover
					}}
					modules={[Autoplay]}
					onInit={(swiper) => {
						swiper.autoplay.start();
					}}
				>
					{sliderItems.map((item, index) => (
						<SwiperSlide key={`slider-${index}`}>
							<div className="aximo-auto-slider-item">
								<h3>{item.title}</h3>
								<img
									src={item.img}
									alt={item.title}
									loading="lazy"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default AutoSlider;