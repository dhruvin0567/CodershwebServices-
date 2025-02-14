// import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Star2Img from "../../../assets/images/v1/star2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";



function Creditrepairdata() {



    return (
        <div>


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
                    <a className="aximo-default-btn pill get-in-touch-btn" href="contact-us.html">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="section aximo-project-page logo-slider dark-bg">
                <div className="container border-top py-5">
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
                    >
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/logo-1.webp" alt="Logo 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/logo-2.webp" alt="Logo 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/logo-3.webp" alt="Logo 3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/logo-4.webp" alt="Logo 4" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/logo-5.webp" alt="Logo 5" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/credit-101-logo.webp" alt="Credit 101 Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/credit-saint-logo.webp" alt="Credit Saint Logo" />
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
                            <li><i className="fa-regular fa-circle-check" /> Mobile-Responsive Design</li>
                            <li><i className="fa-regular fa-circle-check" /> SEO-Optimized Pages</li>
                            <li><i className="fa-regular fa-circle-check" /> Integrated Lead Capture Forms</li>
                        </ul>
                        <ul className>
                            <li><i className="fa-regular fa-circle-check" /> User-Friendly Dashboard</li>
                            <li><i className="fa-regular fa-circle-check" /> Fast Load Times</li>
                            <li><i className="fa-regular fa-circle-check" /> Secure Payment Integration (if applicable)</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* End */}





        </div>
    )
}

export default Creditrepairdata