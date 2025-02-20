import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import Star2Img from "../../assets/images/v1/icon/star2.png";
import '../../assets/assets/css/swiper-bundle.min.css'; // Import Swiper styles

const ReviewSection = () => {

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

            <div className="section aximo-project-page aximo-section-padding5">
                <div className="container-fluid">

                    <Swiper
                        spaceBetween={30} // Space between slides
                        slidesPerView={4} // Number of slides visible at once
                        loop={true} // Infinite loop of the slides
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} // Autoplay settings
                        speed={1000}  // Transition speed in ms (1000ms = 1 second)
                        modules={[Autoplay]} // Adding the Autoplay module
                        breakpoints={{
                            // When window width is >= 320px
                            320: {
                                slidesPerView: 1, // 1 slide per view
                            },
                            // When window width is >= 480px
                            480: {
                                slidesPerView: 2, // 2 slides per view
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 2, // 3 slides per view
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 4, // 4 slides per view
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.1s">
                                <img src="src/assets/Images_2/artisan-f-p.webp" alt="Credi Coach" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credi Coach</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }}>
                                        <svg
                                            width="34"
                                            height="28"
                                            viewBox="0 0 34 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.2s">
                                <img src="src/assets/Images_2/asterley-bros-f-p.webp" alt="Credit Saint" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit Saint</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }}>
                                        <svg
                                            width="34"
                                            height="28"
                                            viewBox="0 0 34 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.3s">
                                <img src="src/assets/Images_2/bone-f-p.webp" alt="Credit 101" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit 101</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }}>
                                        <svg
                                            width="34"
                                            height="28"
                                            viewBox="0 0 34 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.4s">
                                <img src="src/assets/Images_2/Claudine-f-p.webp" alt="Framework Credit" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Framework Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }}>
                                        <svg
                                            width="34"
                                            height="28"
                                            viewBox="0 0 34 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.5s">
                                <img src="src/assets/Images_2/Double-Dutch-f-p.webp" alt="Premier Credit" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Premier Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }}>
                                        <svg
                                            width="34"
                                            height="28"
                                            viewBox="0 0 34 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" data-wow-delay="0.6s">
                                <img src="src/assets/Images_2/gattertop-f-p.webp" alt="SD Capital" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>SD Capital</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#">
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" data-wow-delay="0.7s">
                                <img src="src/assets/Images_2/liberation-f-p.webp" alt="Stellar Credit" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Stellar Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#">
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" data-wow-delay="0.7s">
                                <img src="src/assets/Images_2/madamef-f-p.webp" alt="Stellar Credit" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Stellar Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#">
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" data-wow-delay="0.7s">
                                <img src="src/assets/Images_2/negroni-soc-f-p.webp" alt="Stellar Credit" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Stellar Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#">
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" data-wow-delay="0.7s">
                                <img src="src/assets/Images_2/van-hunks-f-p.webp" alt="Stellar Credit" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Stellar Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#">
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <div className="section aximo-project-page text-center dark-bg">
                <div className="container aximo-section-padding5">
                    <h2 className="mb-4 light-text">
                        <span className="aximo-title-animation">
                            Elevate Your Wine Store’s
                            <span className="aximo-title-icon">
                                <img src={Star2Img} alt="Star2Img" />
                            </span>
                        </span>
                        <br />
                        Design and Maximize Conversions
                    </h2>
                    <p className="section-description light-text">
                        A beautifully redesigned wine store with an optimized user journey can make all the difference in
                        attracting wine enthusiasts and turning visitors into loyal customers. Whether you’re running a boutique
                        wine shop or a large online store, our expertise in website redesign and conversion rate optimization
                        (CRO) is tailored to your unique needs. With a focus on elegant design, seamless navigation, and
                        strategic optimization, we ensure that your website not only looks stunning but also drives measurable
                        results. Let’s create a wine store experience that captivates your audience and boosts your sales like
                        never before.
                    </p>
                    <Link className="get-in-touch-btn aximo-header-btn pill " to="/contact-us" style={{ borderRadius: "50px" }} >
                        Get In Touch
                    </Link>
                </div>
            </div>

            <div className="section aximo-project-page logo-slider dark-bg">
                <div className="container border-top py-5">
                    <h3 className="light-text text-center mb-3">
                        Partnering with Leading Wine Retailers Worldwide.
                    </h3>
                    <Swiper
                        spaceBetween={30} // Space between slides
                        slidesPerView={5} // Number of slides visible at once
                        loop={true} // Infinite loop of the slides
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} // Autoplay settings
                        speed={1000}  // Transition speed in ms (1000ms = 1 second)
                        modules={[Autoplay]} // Adding the Autoplay module
                        breakpoints={{
                            // When window width is >= 320px
                            320: {
                                slidesPerView: 3, // 1 slide per view
                            },
                            // When window width is >= 480px
                            480: {
                                slidesPerView: 3, // 2 slides per view
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 3, // 3 slides per view
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 5, // 4 slides per view
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src="src/assets/Images_2/bone-logo.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/Claudine-logo.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/artisan-logo.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/asterley-bros.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/Double-Dutch-logo.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/gattertop-logo.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/liberation-logo.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/madamef-logo.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/Images_2/van-hunks.webp" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="section aximo-project-page py-5 services">
                <div className="container my-5">
                    <h3 className="text-center mb-5">
                        Features of Our Service
                    </h3>
                    <div className="services-list d-md-flex justify-content-around">
                        <ul className>
                            <li><i className="fa-regular fa-circle-check" /> Modern and Elegant Website Redesign</li>
                            <li><i className="fa-regular fa-circle-check" /> Mobile-Friendly and Responsive Design</li>
                            <li><i className="fa-regular fa-circle-check" /> Streamlined Product Browsing and Search</li>
                        </ul>
                        <ul className>
                            <li><i className="fa-regular fa-circle-check" /> Simplified Checkout to Reduce Abandonment</li>
                            <li><i className="fa-regular fa-circle-check" /> Integrated Inventory and Shipping Systems </li>
                            <li><i className="fa-regular fa-circle-check" /> Data-Driven CRO Strategies </li>
                        </ul>
                    </div>
                </div>
            </div>


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
                            slidesPerView={4}
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
                            {['Video-1', 'Video-2', 'Video-3', 'Video-4', 'Video-5', 'Video-6'].map((video, index) => (
                                <SwiperSlide key={index}>
                                    <button
                                        className="video-button"
                                        onClick={() => handlePlayPause(index)}
                                    >
                                        <div className="video-wrap">
                                            <video
                                                className="myVideo"
                                                width="100%" // Ensure the video takes up 100% of its slide space
                                                height="auto"
                                                ref={(el) => (videoRefs.current[index] = el)}
                                            >
                                                <source
                                                    src={`src/assets/videos/${video}-compressed.mp4`}
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

        </div>
    );
};

export default ReviewSection;
