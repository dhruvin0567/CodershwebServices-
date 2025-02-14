import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Star2Img from "../../../assets/images/v1/star2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";



function Winestoredata() {



    return (
        <div>

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
                        A beautifully redesigned wine store with an optimized user journey can
                        make all the difference in attracting wine enthusiasts and turning
                        visitors into loyal customers. Whether you’re running a boutique wine
                        shop or a large online store, our expertise in website redesign and
                        conversion rate optimization (CRO) is tailored to your unique needs. With
                        a focus on elegant design, seamless navigation, and strategic
                        optimization, we ensure that your website not only looks stunning but
                        also drives measurable results. Let’s create a wine store experience that
                        captivates your audience and boosts your sales like never before.
                    </p>
                    <Link className="get-in-touch-btn aximo-default-btn pill " to="/contact-us" style={{ color: "black" }} >
                        Get In Touch
                    </Link>
                </div>
            </div>
            {/* End */}

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
                        modules={[Autoplay]} // Adding the Autoplay module
                    >
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/bone-logo.webp" alt="Bone Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/Claudine-logo.webp" alt="Claudine Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/artisan-logo.webp" alt="Artisan Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/asterley-bros.webp" alt="Asterley Bros Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/Double-Dutch-logo.webp" alt="Double Dutch Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/gattertop-logo.webp" alt="Gattertop Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/liberation-logo.webp" alt="Liberation Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/madamef-logo.webp" alt="Madamef Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/src/assets/assets/Images/van-hunks.webp" alt="Van Hunks Logo" />
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
                        <ul>
                            <li><i className="fa-regular fa-circle-check"></i> Modern and Elegant Website Redesign</li>
                            <li><i className="fa-regular fa-circle-check"></i> Mobile-Friendly and Responsive Design</li>
                            <li><i className="fa-regular fa-circle-check"></i> Streamlined Product Browsing and Search</li>
                        </ul>
                        <ul>
                            <li><i className="fa-regular fa-circle-check"></i> Simplified Checkout to Reduce Abandonment</li>
                            <li><i className="fa-regular fa-circle-check"></i> Integrated Inventory and Shipping Systems</li>
                            <li><i className="fa-regular fa-circle-check"></i> Data-Driven CRO Strategies</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Winestoredata