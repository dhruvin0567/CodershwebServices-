// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/assets/css/swiper-bundle.min.css'; // Import Swiper styles
import TestimonialCard from "./TestimonialCard";
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import video1 from '../../../assets/images/Videos/Video-1-compressed.mp4';
import video2 from '../../../assets/images/Videos/Video-2-compressed.mp4';
import video3 from '../../../assets/images/Videos/Video-3-compressed.mp4';
import video4 from '../../../assets/images/Videos/Video-4-compressed.mp4';
import video5 from '../../../assets/images/Videos/Video-5-compressed.mp4';
import video6 from '../../../assets/images/Videos/Video-6-compressed.mp4';
import FadeInStagger from "../../animation/FadeInStagger";



const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Absolutely Fantastic",
		description:
			"The Biggest thing was he got the design from the beginning mockup and didn't waste any time and everything ran on schedule with making lots of minor didn't waste any time and everything ran on schedule with making adjustments to a level of amazing quality!",
		author: "Amber Page",
		designation: "Portland,Oregon",
		img: Thumb1Img
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Work was great!",
		description:
			"Working with Shah was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
		author: "Phillip Hunt ",
		designation: "Detroit,Michigan",
		img: Thumb4Img
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Great to work with!",
		description:
			"Made an amazing website for our org. We have him our vision and everything came out even better than imagined. Use him for all website needs you will be pleased! Use him for all website needs you will be pleased!",
		author: "Milano Joe",
		designation: "Seattle,Washington",
		img: Thumb1Img
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Excellent Developer",
		description:
			"His work went beyond what I was expecting and I would love to continue working with him. His work went beyond what I was expecting and I would love to continue working with him continue working with him.",
		author: "Danial Mark",
		designation: "San Antonio,Texas",
		img: Thumb2Img
	},
];

function Testimonial() {
	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024, // Define the breakpoint for large screens like laptops
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768, // Define the breakpoint for tablets
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480, // Define the breakpoint for mobile screens
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};

	const videoFiles = [video1, video2, video3, video4, video5, video6];
	const [currentVideo, setCurrentVideo] = useState(null);  // Track the currently playing video
	const videoRefs = useRef([]); // Store references to video elements
	const swiperRef = useRef(null); // Reference to Swiper instance

	// Manually handle the "Play/Pause" of videos
	const handlePlayPause = (index) => {
		const videoElement = videoRefs.current[index];

		if (currentVideo === index) {
			// Pause the video if it's the currently playing one
			videoElement.pause();
			setCurrentVideo(null);
		} else {
			// Play the new video and pause the previous one
			videoElement.play();
			setCurrentVideo(index);
			// Pause other videos
			videoRefs.current.forEach((video, i) => {
				if (i !== index) video.pause();
			});
		}
	};

	// Close video when clicked outside of the video container
	const handleClickOutside = (e) => {
		if (!e.target.closest('.video-wrap')) {
			videoRefs.current.forEach((video) => video.pause());
			setCurrentVideo(null);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	// Custom navigation button handlers
	const goToNextSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};
	const goToPrevSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	return (
		<div>
			<FadeInStagger>
				<div className="section aximo-section-padding3">
					<div className="container">
						<div className="aximo-section-title center">
							<h2>
								Clients are always
								<span className="aximo-title-animation">
									satisfied with us
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
								</span>
							</h2>
						</div>
						<Slider {...settings}>
							{testimonialsData.map((testimonial) => (
								<div key={testimonial.id} style={{ padding: "0 15px" }}>
									<TestimonialCard testimonial={testimonial} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</FadeInStagger>

			<FadeInStagger>
				<div className="review-section text-center pb-5">
					<div className="container border-top py-5">
						<div>
							<h3>Our Client's Reviews</h3>
							<p>
								We are very proud of the service we provide and stand by every product we carry. See our testimonials
								from our happy customers.
							</p>
						</div>
						<div className="slider-wrapper">
							<Swiper
								ref={swiperRef}
								spaceBetween={20}
								loop={true}
								slidesPerView={5}
								speed={1000}
								modules={[Navigation, Autoplay]}
								autoplay={{
									delay: 3000, // Slide change delay in milliseconds
									disableOnInteraction: false, // Autoplay will not be disabled after interactions
								}}
								breakpoints={{
									320: { slidesPerView: 1 },
									480: { slidesPerView: 1 },
									768: { slidesPerView: 3 },
									1024: { slidesPerView: 4 },
								}}
							>
								{videoFiles.map((video, index) => (
									<SwiperSlide key={index}>

										<button className="video-button" onClick={() => handlePlayPause(index)}>
											<div className="video-wrap">
												<video
													className="myVideo"
													width="100%" // Ensure the video takes up 100% of its slide space
													height="auto"
													ref={(el) => (videoRefs.current[index] = el)}
												>
													<source
														src={video} // Use the imported video file here
														type="video/mp4"
													/>
													Your browser does not support the video tag.
												</video>
												{/* Hide play button only for the currently playing video */}
												{currentVideo !== index && (
													<span className="custom-play-button">▶</span>
												)}
											</div>
										</button>

									</SwiperSlide>
								))}
							</Swiper>


							{/* Custom Navigation Buttons */}
							<div
								className="swiper-button-prev prevBtn"
								onClick={goToPrevSlide}
							>
								<svg
									fill="#000000"
									width="30"
									height="30"
									viewBox="0 0 24 24"
									id="left-arrow"
									xmlns="http://www.w3.org/2000/svg"
									className="icon line"
								>
									<path
										id="primary"
										d="M21,12H3M6,9,3,12l3,3"
										style={{
											fill: 'none',
											stroke: 'rgb(0, 0, 0)',
											strokeLinecap: 'round',
											strokeLinejoin: 'round',
											strokeWidth: 1.5,
										}}
									/>
								</svg>
							</div>
							<div
								className="swiper-button-next nextBtn"
								onClick={goToNextSlide}
							>
								<svg
									fill="#000000"
									width="30"
									height="30"
									viewBox="0 0 24 24"
									id="right-arrow"
									xmlns="http://www.w3.org/2000/svg"
									className="icon line"
								>
									<path
										id="primary"
										d="M3,12H21M18,9l3,3-3,3"
										style={{
											fill: 'none',
											stroke: 'rgb(0, 0, 0)',
											strokeLinecap: 'round',
											strokeLinejoin: 'round',
											strokeWidth: 1.5,
										}}
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</FadeInStagger>
		</div>
	);
}

export default Testimonial;
