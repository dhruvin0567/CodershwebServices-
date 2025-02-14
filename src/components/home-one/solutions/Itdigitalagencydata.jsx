// import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Star2Img from "../../../assets/images/v1/star2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


function Itdigitalagencydata() {
    return (
        <div>

            <div className="section aximo-project-page text-center dark-bg">
                <div className="container aximo-section-padding5">
                    <h2 className="mb-4 light-text">
                        <span className="aximo-title-animation">
                            Modern and Professional
                            <span className="aximo-title-icon">
                                <img src={Star2Img} alt="Star2Img" />
                            </span>
                        </span>
                        <br />
                        Websites for IT Digital Agencies
                    </h2>
                    <p className="section-description light-text">
                        Your IT digital agency deserves a website that showcases your expertise and drives client acquisition.
                        In a competitive industry, first impressions matter, and a professionally designed website can set you
                        apart from the rest. We specialize in creating tailored, cutting-edge websites for IT digital agencies
                        that are visually striking, fully functional, and optimized for growth. With a deep understanding of
                        your industry’s needs, we design platforms that highlight your services, showcase your portfolio, and
                        provide a seamless user experience for your clients. Let’s create a website that reflects your agency’s
                        professionalism and helps you achieve your business goals.
                    </p>
                    <a className="aximo-default-btn pill get-in-touch-btn" href="contact-us.html">
                        Get In Touch
                    </a>
                </div>
            </div>


            <div className="section aximo-project-page logo-slider dark-bg">
                <div className="container border-top py-5">
                    <h3 className="light-text text-center mb-3">
                        Trusted by Industry Leaders in IT and Digital Services.
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
                            <img src="/src/assets/assets/Images/alt-it-logo.webp" alt="Alt IT Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/HoBarbe-logo.webp" alt="HoBarbe Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/ll-it-nw-logo.webp" alt="LL IT NW Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/informadist-logo.webp" alt="Informadist Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/orangenexus-logo.webp" alt="Orange Nexus Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/The-IT-Consultancy-logo.webp" alt="The IT Consultancy Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/global-tech-distribution.webp" alt="Global Tech Distribution Logo" />
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
                            <li><i className="fa-regular fa-circle-check" /> Fully Responsive and Mobile-Friendly Design</li>
                            <li><i className="fa-regular fa-circle-check" /> SEO-Optimized Structure</li>
                            <li><i className="fa-regular fa-circle-check" /> Services Showcase and Portfolio Integration</li>
                        </ul>
                        <ul className>
                            <li><i className="fa-regular fa-circle-check" /> Fast and Secure Performance</li>
                            <li><i className="fa-regular fa-circle-check" /> Blog and Resource Center</li>
                            <li><i className="fa-regular fa-circle-check" /> Social Media Integration</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* End */}



        </div>
    )
}

export default Itdigitalagencydata