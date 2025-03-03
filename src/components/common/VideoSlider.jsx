import video1 from '../../assets/images/Videos/Video-1-compressed.mp4';
import video2 from '../../assets/images/Videos/Video-2-compressed.mp4';
import video3 from '../../assets/images/Videos/Video-3-compressed.mp4';
import video4 from '../../assets/images/Videos/Video-4-compressed.mp4';
import video5 from '../../assets/images/Videos/Video-5-compressed.mp4';
import video6 from '../../assets/images/Videos/Video-6-compressed.mp4';
import { useState, useRef, useEffect } from 'react';  // Import Link from react-router-dom
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import FadeInStagger from "../animation/FadeInStagger";
import '../../assets/assets/css/swiper-bundle.min.css'; // Import Swiper styles

function VideoSlider() {

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
                                    1024: { slidesPerView: 5 },
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
    )
}

export default VideoSlider