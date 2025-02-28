// import React from "react";
import Slider from "react-slick";
import HeroThumbImg from "../../../assets/images/v1/hero-thumb.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroThumbs() {
	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		cssEase: "linear",
	};

	return (
		<div className="aximo-hero-thumb jos" data-jos_animation="fade-right">
			<Slider {...settings}>
				<img src={HeroThumbImg} alt="Hero thumb" />
				<img src={HeroThumbImg} alt="Hero thumb" />
				<img src={HeroThumbImg} alt="Hero thumb" />
				<img src={HeroThumbImg} alt="Hero thumb" />
			</Slider>
		</div>
	);
}

export default HeroThumbs;
