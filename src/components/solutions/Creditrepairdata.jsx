import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Star2Img from "../../assets/images/v1/icon/star2.webp";
import '../../assets/assets/css/swiper-bundle.min.css'; // Import Swiper styles
import Check from "../../assets/images/icon/check.svg";

import Slider1Img from '../../assets/images/images2/tinified/credi-coach-front-page.webp';
import Slider2Img from '../../assets/images/images2/tinified/Credit-Saint-Ranked-1-By-Top-Financial-Sites-front-page.webp';
import Slider3Img from '../../assets/images/images2/tinified/Credit101-front-page.webp';
import Slider4Img from '../../assets/images/images2/tinified/Framework-Credit-front-page.webp';
import Slider5Img from '../../assets/images/images2/tinified/preimier-credit-front-page.webp';
import Slider6Img from '../../assets/images/images2/tinified/sd-capital-front-page.webp';
import Slider7Img from '../../assets/images/images2/tinified/stellar-credit-front-page.webp';

import Logo1Img from '../../assets/images/images2/logo-1.webp';
import Logo2Img from '../../assets/images/images2/logo-2.webp';
import Logo3Img from '../../assets/images/images2/logo-3.webp';
import Logo4Img from '../../assets/images/images2/logo-4.webp';
import Logo5Img from '../../assets/images/images2/logo-5.webp';
import Logo6Img from '../../assets/images/images2/credit-101-logo.webp';
import Logo7Img from '../../assets/images/images2/credit-saint-logo.webp';

import VideoSlider from '../common/VideoSlider';
import FadeInStagger from "../animation/FadeInStagger";




function Creditrepairdata() {

    return (
        <div>
            <FadeInStagger>

                <div className="section aximo-project-page logo-slider dark-bg border-top">
                    <div className="container  py-5">
                        <h3 className="light-text text-center mb-3">
                            Trusted by Professionals in the Credit Repair Industry
                        </h3>
                        <Swiper
                            spaceBetween={30} // Space between slides
                            slidesPerView={5} // Number of slides visible at once
                            loop={true} // Infinite loop of the slides
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }} // Autoplay settings
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
                                <img src={Logo1Img} alt="Logo 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo2Img} alt="Logo 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo3Img} alt="Logo 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo4Img} alt="Logo 4" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo5Img} alt="Logo 5" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo6Img} alt="Credit 101 Logo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo7Img} alt="Credit Saint Logo" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="section aximo-project-page aximo-section-padding5">
                    <div className="container-fluid">

                        <Swiper
                            spaceBetween={30} // Space between slides
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
                                    slidesPerView: 2, // 3 slides per view
                                },
                                // When window width is >= 1024px
                                1024: {
                                    slidesPerView: 3, // 4 slides per view
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.1s">
                                    <img src={Slider1Img} alt="Credi Coach" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credi Coach</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.2s">
                                    <img src={Slider2Img} alt="Credit Saint" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit Saint</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.3s">
                                    <img src={Slider3Img} alt="Credit 101" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit 101</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.4s">
                                    <img src={Slider4Img} alt="Framework Credit" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Framework Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.5s">
                                    <img src={Slider5Img} alt="Premier Credit" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Premier Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.6s">
                                    <img src={Slider6Img} alt="SD Capital" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>SD Capital</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.7s">
                                    <img src={Slider7Img} alt="Stellar Credit" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Stellar Credit</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>

                <div className="section aximo-project-page text-center dark-bg">
                    <div className="container aximo-section-padding5">
                        <h2 className="mb-4 light-text">
                            <span className="aximo-title-animation">
                                Your Partner in Building
                                <span className="aximo-title-icon">
                                    <img src={Star2Img} alt="Star2Img" />
                                </span>
                            </span>
                            <br />
                            Credibility Online
                        </h2>
                        <p className="section-description light-text">
                            In today’s competitive credit repair industry, having a professional and user-friendly website is no
                            longer
                            optional – it’s essential. Your website serves as the face of your business, the first impression that
                            potential clients have of your services. A well-designed credit repair website can help you build trust,
                            streamline lead generation, and showcase your expertise in solving credit challenges. At Codersh, we
                            specialize in creating custom websites tailored specifically to the needs of credit repair
                            professionals.
                            From sleek, modern designs to strategic functionalities like lead capture forms and SEO optimization, we
                            provide solutions that help you stand out in the marketplace. Let us help you create a website that not
                            only
                            reflects your professionalism but also drives results and fosters growth for your business.
                        </p>
                        <Link className="get-in-touch-btn aximo-header-btn pill " to="/contact-us" style={{ borderRadius: "50px" }} >
                            Get In Touch
                        </Link>
                    </div>
                </div>

                <div className="section aximo-project-page py-5 services">
                    <div className="container my-5">
                        <h3 className="text-center mb-5">
                            Features of Our Service
                        </h3>
                        <div className="services-list d-md-flex justify-content-around">
                            <ul className>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} /> Mobile-Responsive Design</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} /> SEO-Optimized Pages</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} /> Integrated Lead Capture Forms</li>
                            </ul>
                            <ul className>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} /> User-Friendly Dashboard</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} /> Fast Load Times</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} /> Secure Payment Integration (if applicable)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <FadeInStagger>
                    <div className="review-section text-center pb-5">
                        <div className="container border-top py-5">
                            <div>
                                <h3>Our Client's Reviews</h3>
                                <p>
                                    We are very proud of the service we provide and stand by every product we carry.
                                    See our testimonials from our happy customers.
                                </p>
                            </div>
                            <VideoSlider />
                        </div>
                    </div>
                </FadeInStagger>
            </FadeInStagger>
        </div>
    )
}

export default Creditrepairdata