// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/assets/css/swiper-bundle.min.css"; // Import Swiper styles
import TestimonialCard from "./TestimonialCard";
import Star2Img from "../../../assets/images/v1/star2.webp";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.webp";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.webp";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.webp";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.webp";
import FadeInStagger from "../../animation/FadeInStagger";

const testimonialsData = [
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: "Absolutely Fantastic",
    description:
      "The Biggest thing was he got the design from the beginning mockup and didn't waste any time and everything ran on schedule with making lots of minor didn't waste any time and everything ran on schedule with making adjustments to a level of amazing quality!",
    author: "Amber Page",
    designation: "Portland, Oregon",
    img: Thumb1Img,
    imgAlt: "Amber Page - Client from Portland",
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: "Work was great!",
    description:
      "Working with Shah was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
    author: "Phillip Hunt ",
    designation: "Detroit, Michigan",
    img: Thumb4Img,
    imgAlt: "Phillip Hunt - Client from Detroit",
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    title: "Great to work with!",
    description:
      "Made an amazing website for our org. We have him our vision and everything came out even better than imagined. Use him for all website needs you will be pleased! Use him for all website needs you will be pleased!",
    author: "Milano Joe",
    designation: "Seattle, Washington",
    img: Thumb3Img,
    imgAlt: "Milano Joe - Client from Seattle",
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: "Excellent Developer",
    description:
      "His work went beyond what I was expecting and I would love to continue working with him. His work went beyond what I was expecting and I would love to continue working with him continue working with him.",
    author: "Danial Mark",
    designation: "San Antonio, Texas",
    img: Thumb2Img,
    imgAlt: "Danial Mark - Client from San Antonio",
  },
];
function TestimonialSwiper() {
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
        },
      },
      {
        breakpoint: 768, // Define the breakpoint for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Define the breakpoint for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <FadeInStagger>
        <section
          className="section aximo-section-padding3"
          aria-labelledby="testimonial-heading"
        >
          <div className="container">
            <div className="aximo-section-title center pb-5">
              <h2>
                Clients are always
                <span className="aximo-title-animation">
                  satisfied with us
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Happy client icon with star" />
                  </span>
                </span>
              </h2>
            </div>
            <Slider {...settings}>
              {testimonialsData.map((testimonial) => (
                <article key={testimonial.id} style={{ padding: "0 15px" }}>
                  <TestimonialCard testimonial={testimonial} />
                </article>
              ))}
            </Slider>
          </div>
        </section>
      </FadeInStagger>
    </>
  );
}

export default TestimonialSwiper;
