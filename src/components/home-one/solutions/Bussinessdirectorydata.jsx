// import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Star2Img from "../../../assets/images/v1/star2.png";



function Bussinessdirectorydata() {
    return (
        <div>

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
                    <a className="aximo-default-btn pill get-in-touch-btn" href="contact-us.html">
                        Get In Touch
                    </a>
                </div>
            </div>
            {/* End */}


            <div className="section aximo-project-page logo-slider dark-bg">
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

        </div>
    )
}

export default Bussinessdirectorydata