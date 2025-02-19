import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import Star2Img from "../../assets/images/v1/icon/star2.png";
import '../../assets/assets/css/swiper-bundle.min.css'; // Import Swiper styles

function Bussinessdirectorydata() {

    const [playingIndex, setPlayingIndex] = useState(null); // Track which video is playing
    const swiperRef = useRef(null);
    const videoRefs = useRef([]); // To store references to all video elements

    // Event handlers for play and pause events
    const handlePlay = (index, video) => {
        const allVideos = videoRefs.current;
        if (swiperRef.current) swiperRef.current.swiper.autoplay.stop();

        // Pause all other videos and show their play buttons
        allVideos.forEach((v, i) => {
            if (i !== index) {
                v.pause();
                const playButton = v.closest('.video-wrap')?.querySelector('.custom-play-button');
                if (playButton) {
                    playButton.style.display = 'block';
                }
            }
        });

        // Hide play button for the currently playing video
        const playButton = video.closest('.video-wrap')?.querySelector('.custom-play-button');
        if (playButton) {
            playButton.style.display = 'none';
        }
    };

    const handlePause = () => {
        const allVideos = videoRefs.current;
        allVideos.forEach((v) => {
            const playButton = v.closest('.video-wrap')?.querySelector('.custom-play-button');
            if (playButton) {
                playButton.style.display = 'block';
            }
        });

        // Check if all videos are paused
        const allPaused = allVideos.every((v) => v.paused);
        if (allPaused && swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    useEffect(() => {
        const allVideos = videoRefs.current;

        // Attach event listeners for each video
        allVideos.forEach((video, index) => {
            if (video) {
                video.addEventListener('play', () => handlePlay(index, video));
                video.addEventListener('pause', handlePause);
            }
        });

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            allVideos.forEach((video, index) => {
                if (video) {
                    video.removeEventListener('play', () => handlePlay(index, video));
                    video.removeEventListener('pause', handlePause);
                }
            });
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    // Function to handle video play/pause click
    const handlePlayClick = (index) => {
        const video = videoRefs.current[index];

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

        // Update playingIndex to track which video is playing
        setPlayingIndex(index);
    };



    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Set to true if screen width is 1024px or more
            setIsLaptop(window.innerWidth >= 1024);
        };

        // Add event listener on mount
        window.addEventListener('resize', handleResize);

        // Call once to set initial state
        handleResize();

        // Cleanup the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>

            <div className="section aximo-project-page aximo-section-padding5" style={isLaptop ? { padding: '130px 191px 106px' } : {}}
            >
                <div className="container-fluid">
                    <Swiper
                        spaceBetween={30} // Space between slides
                        // centeredSlides={true}
                        slidesPerView={3} // Number of slides visible at once
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
                                slidesPerView: 3, // 3 slides per view
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 3, // 4 slides per view
                            },
                        }}

                    >
                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.1s">
                                <img src="/src/assets/assets/images/hpn-global-front-page.webp" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credi Coach</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.2s">
                                <img src="/src/assets/assets/images/tyrepages-front-page.webp" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit Saint</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="aximo-project-thumb wow fadeInUpX" style={{ cursor: "grab" }} data-wow-delay="0.3s">
                                <img src="/src/assets/assets/images/redesign-hub-front-page.webp" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit 101</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>



                        {/* Add more SwiperSlides as needed */}
                    </Swiper>
                </div>
            </div>

            <div className="section aximo-project-page text-center dark-bg">
                <div className="container aximo-section-padding5">
                    <h2 className="mb-4 light-text">
                        <span className="aximo-title-animation">
                            Professional Business
                            <span className="aximo-title-icon">
                                <img src={Star2Img} alt="Star2Img" />
                            </span>
                        </span>
                        <br />
                        Directory Website Solutions
                    </h2>
                    <p className="section-description light-text">
                        In today’s fast-paced digital world, having a professional and user-friendly business directory website
                        is essential for standing out and thriving. Whether you’re looking to create a local business directory,
                        a niche industry listing, or a comprehensive nationwide platform, we’re here to make it happen. With our
                        experience in building successful directory websites, we design platforms that are not only visually
                        appealing but also highly functional and scalable. Our solutions help you connect businesses with their
                        target audience, drive user engagement, and generate revenue through smart monetization options. Partner
                        with us to bring your vision to life and create a directory website that truly delivers results.
                    </p>
                    <Link className="get-in-touch-btn aximo-header-btn pill " to="/contact-us" style={{ borderRadius: "50px" }} >
                        Get In Touch
                    </Link>
                </div>
            </div>
            {/* End */}

            {/* <div className="section aximo-project-page logo-slider dark-bg">
                <div className="container border-top py-5">
                    <h3 className="light-text text-center mb-3">Partnering with Leading Wine Retailers Worldwide.
                    </h3>
                    <div className="logo-slider row">
                        <div className="col-lg-4">
                            <img src="/src/assets/assets/Images/tyrepage.webp" alt className="mx-auto d-block" />
                        </div>
                        <div className="col-lg-4">
                            <img src="/src/assets/assets/Images/hpn-logo-1.webp" alt className="mx-auto d-block" />
                        </div>
                        <div className="col-lg-4">
                            <img src="/src/assets/assets/Images/redesign-hub-logo.webp" alt className="mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </div> */}

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
                            <img src="/src/assets/assets/Images/tyrepage.webp" alt="" className="mx-auto d-block" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/hpn-logo-1.webp" alt="" className="mx-auto d-block" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/redesign-hub-logo.webp" alt="" className="mx-auto d-block" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/tyrepage.webp" alt="" className="mx-auto d-block" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/hpn-logo-1.webp" alt="" className="mx-auto d-block" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/redesign-hub-logo.webp" alt="" className="mx-auto d-block" />
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
                            <li><i className="fa-regular fa-circle-check" /> Advanced Search and Filter Functionality</li>
                            <li><i className="fa-regular fa-circle-check" /> User-Friendly Business Listings</li>
                            <li><i className="fa-regular fa-circle-check" /> Mobile and SEO-Optimized Design</li>
                        </ul>
                        <ul className>
                            <li><i className="fa-regular fa-circle-check" /> Reviews and Ratings Integration</li>
                            <li><i className="fa-regular fa-circle-check" /> Easy Admin Panel for Updates</li>
                            <li><i className="fa-regular fa-circle-check" /> Monetization Features (e.g., paid listings,
                                advertisements)</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* End */}

            <div className="review-section text-center pb-5 ">
                <div className="container border-top py-5">
                    <div>
                        <h3>Our Client's Reviews</h3>
                        <p>We are very proud of the service we provide and stand by every product we carry. See our testimonials
                            from our happy customers.
                        </p>
                    </div>
                    <div className="slider-wrapper d-flex">
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
                            {[1, 2, 3, 4, 5, 6].map((index) => (
                                <SwiperSlide key={index} style={{ padding: "0px 0px" }}>
                                    <button
                                        className="video-button"
                                        onClick={() => handlePlayClick(index)}
                                        style={{ position: 'relative' }}
                                    >
                                        <div className="video-wrap">
                                            <video
                                                ref={(el) => (videoRefs.current[index] = el)}
                                                onClick={() => handlePlayClick(index)}
                                                className="myVideo"
                                                width="380px"
                                                height="auto"
                                                autoPlay={playingIndex === index} // Auto play if this is the selected video
                                                controls={playingIndex === index ? true : false} // Hide controls if this video is playing
                                                onPause={() => setPlayingIndex(null)} // Reset when the video is paused
                                                onEnded={() => setPlayingIndex(null)} // Reset when the video ends
                                            >
                                                <source
                                                    src={`/src/assets/assets/Videos/Video-${index}-compressed.mp4`}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                            <span
                                                className="custom-play-button"
                                                style={{
                                                    position: 'absolute',
                                                    padding: '0',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    fontSize: '40px',
                                                    color: 'white',
                                                    pointerEvents: playingIndex === index ? 'none' : 'auto', // Disable when video is playing
                                                    display: playingIndex === index ? 'none' : 'block', // Hide play button if video is playing
                                                }}
                                            >
                                                ▶
                                            </span>
                                        </div>
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom navigation buttons */}
                        <div className="swiper-button-prev prevBtn" onClick={() => swiperRef.current.swiper.slidePrev()}>
                            {/* Left arrow SVG */}
                            <svg fill="#000000" width={30} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line">
                                <path
                                    id="primary"
                                    d="M21,12H3M6,9,3,12l3,3"
                                    style={{ fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.5' }}
                                ></path>
                            </svg>
                        </div>

                        <div className="swiper-button-next nextBtn" onClick={() => swiperRef.current.swiper.slideNext()}>
                            {/* Right arrow SVG */}
                            <svg fill="#000000" width={30} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line">
                                <path
                                    id="primary"
                                    d="M3,12H21M18,9l3,3-3,3"
                                    style={{ fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.5' }}
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bussinessdirectorydata