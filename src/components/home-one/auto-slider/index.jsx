import Star3Img from "../../../assets/images/v1/star3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [

	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
];



function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper
						allowTouchMove={false}
						centeredSlides={true}
						speed={6000}
						spaceBetween={30} // Space between slides
						slidesPerView={"auto"} // Number of slides visible at once
						loop={true} // Infinite loop of the slides
						autoplay={{
							delay: 1,
							disableOnInteraction: false,
						}} // Autoplay settings
						modules={[Autoplay]} // Adding the Autoplay module
					>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
									<img src={item.img} alt={item.title} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
