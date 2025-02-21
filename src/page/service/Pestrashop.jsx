
import BreadCrumb from '../../components/common/Breadcrumb'
// import Logo from '../../assets/images/images2/prestashop.png'
import Clutch from '../../assets/images/images2/clutch.svg'
import StarImg from '../../assets/images/images2/star.png'

import ServiceIcon1 from '../../assets/images/images2/cms-setup.png'
import ServiceIcon2 from '../../assets/images/images2/psd-to-wordpress.png'
import ServiceIcon3 from '../../assets/images/images2/web-custom-development.png'
import ServiceIcon4 from '../../assets/images/images2/web-development.png'
import ServiceIcon5 from '../../assets/images/images2/plugin.png'
import ServiceIcon6 from '../../assets/images/images2/maintenance.png'
import ServiceIcon7 from '../../assets/images/images2/woo-commerce.png'
import ServiceIcon8 from '../../assets/images/images2/blog.png'
import ServiceIcon9 from '../../assets/images/images2/api.png'

import Imgwithtxt1 from '../../assets/images/images2/Prestashop-1.png'
import Imgwithtxt2 from '../../assets/images/images2/Prestashop-2.png'

import ProcessCard1 from '../../assets/images/images2/reauirement-gathering.png'
import ProcessCard2 from '../../assets/images/images2/uiux.png'
import ProcessCard3 from '../../assets/images/images2/prototype.png'
import ProcessCard4 from '../../assets/images/images2/dynamic-development.png'
import ProcessCard5 from '../../assets/images/images2/testing.png'
import ProcessCard6 from '../../assets/images/images2/live-development.png'
import ProcessCard7 from '../../assets/images/images2/question.png'

import Workcard1 from '../../assets/images/ourwork/New-Project-1-1024x1024.jpg'
import Workcard2 from '../../assets/images/ourwork/New-Project-3-1024x1024.jpg'
import Workcard3 from '../../assets/images/ourwork/New-Project-1024x1024.jpg'

function Pestrashop() {
    return (
        <div>
            <BreadCrumb title="Pestrashop" />

            {/* <div className="aximo-breadcrumb">
                <div className="container">
                    <img src={Logo} alt width={100} />
                    <h1 className="post__title mb-2" style={{ fontSize: '50px' }}>
                        Transforming Businesses with PrestaShop Development Service
                    </h1>
                    <p className="banner-desciption">
                        Codersh Web Services is your trusted ally in unlocking the full potential of PrestaShop for your
                        e-commerce endeavors. Our PrestaShop Development Services are meticulously designed to enhance your
                        online store's performance, delivering a seamless and engaging shopping experience.
                    </p>
                </div>
            </div> */}

            <div className="top-rated">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <a href="#" className="clutch-widget d-flex mb-4 mb-lg-0">
                                <span className="me-2">
                                    <p className="mb-0">Reviewd On</p>
                                    <img src={Clutch} alt width={82} />
                                </span>
                                <span className="d-flex flex-column justify-content-between">
                                    <img src={StarImg} alt width={90} />
                                    <p className="review-ammount mb-0">16 Reviews</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-9 d-flex align-items-center">
                            <p className="top-rated-text ms-lg-4">
                                Top Rated 5.0 out of 5.0 for Codersh by 120+ clients on more than 1200+ projects. <a href="#">View Work</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-section text-center py-5 my-lg-5">
                <div className="container">
                    <h3 className="services-heading mb-4">
                        PrestaShop Development Services We Offer
                    </h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon1} alt />
                                </div>
                                <h6 className="service-title">
                                    PrestaShop Store Setup
                                    and Configuration
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon2} alt />
                                </div>
                                <h6 className="service-title">
                                    Precision Conversion from
                                    Design to PrestaShop Websites
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon3} alt />
                                </div>
                                <h6 className="service-title">
                                    Custom PrestaShop
                                    Website Development
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon4} alt />
                                </div>
                                <h6 className="service-title">
                                    PrestaShop Theme Development &amp; Customization
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon5} alt />
                                </div>
                                <h6 className="service-title">
                                    PrestaShop Plugin Development Service
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon6} alt />
                                </div>
                                <h6 className="service-title">
                                    PrestaShop Migration and
                                    Maintenance Services
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon7} alt />
                                </div>
                                <h6 className="service-title">
                                    PrestaShop Development
                                    Service
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon8} alt />
                                </div>
                                <h6 className="service-title">
                                    PrestaShop Blog
                                    Development Service
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon9} alt />
                                </div>
                                <h6 className="service-title">
                                    PrestaShop API Integration
                                    Service
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-with-text">
                <div className="row m-0">
                    <div className="col-lg-6 p-0">
                        <div className="image-with-text-image">
                            <img src={Imgwithtxt1} alt />
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="image-with-text-text">
                            <h3 className="iwt-heading mb-4">
                                Hire Dedicated PrestaShop Developer
                            </h3>
                            <p className="iwt-description mb-4">
                                Elevate your online store with our PrestaShop Custom Development options. Our dedicated
                                infrastructure and expert PrestaShop developers work exclusively on your project, offering
                                complete control and transparent development processes.
                            </p>
                            <ul className="mb-5">
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Monthly Payment
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    No Setup Expenses
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Transparent Billing with Tracked Hours
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Assurance of No Hidden Fees
                                </li>
                            </ul>
                            <a href="#" className="iwt-button">
                                Hire Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-with-text reverse">
                <div className="row m-0">
                    <div className="col-lg-6 p-0">
                        <div className="image-with-text-image">
                            <img src={Imgwithtxt2} alt />
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="image-with-text-text">
                            <h3 className="iwt-heading mb-4">
                                Why Choose PrestaShop for Your
                                E-commerce Venture
                            </h3>
                            <p className="iwt-description mb-4">
                                Propel your business forward with a dynamic online presence. Opt for our custom PrestaShop
                                Development Services to revolutionize your e-commerce platform, ensuring scalability,
                                flexibility, and a robust foundation.
                            </p>
                            <ul className="mb-5">
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Free to Use and Setup
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    User-Friendly Operation
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Extensive Plugin Library
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Flexibility and Adaptability
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Diverse Range of Themes
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                    Supportive Community
                                </li>
                            </ul>
                            <a href="#" className="iwt-button">
                                Get Free Quotes Now!
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="process-we-follow text-center py-5">
                <div className="container">
                    <div className="heading-wrapper m-auto">
                        <h3 className="mb-2">Process We Follow</h3>
                        <p className="mb-4">We design, build and support websites and apps for clients worldwide. We make your
                            business stand
                            out.
                            Interested? Let's chat.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="process-card">
                                <img src={ProcessCard1} alt />
                                <h6>1. Gathering requirements</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="process-card">
                                <img src={ProcessCard2} alt />
                                <h6>2. UI/UX Design</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="process-card">
                                <img src={ProcessCard3} alt />
                                <h6>3. Static Prototype</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="process-card">
                                <img src={ProcessCard4} alt />
                                <h6>4. Dynamic Development</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="process-card">
                                <img src={ProcessCard5} alt />
                                <h6>5. Quality Assurance</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="process-card">
                                <img src={ProcessCard6} alt />
                                <h6>6. Live Deployment </h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="process-card">
                                <img src={ProcessCard7} alt />
                                <h6>7. Support and Upkeep</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-recent-work pb-5">
                <div className="container">
                    <div className="heading-wrapper m-auto text-center">
                        <h3 className="mb-2">Our Recent Work</h3>
                        <p className="mb-4">Our portfolio speaks loudly that we are giving best solutions for every ideas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 project" data-category="ecommerce-development">
                            <div className="work-card">
                                <img src={Workcard1} alt className="work-image" />
                                <div className="about-work">
                                    <h5 className="work-name">Online Book Store</h5>
                                    <p className="work-technology">Shift4shop | React | Styled Components</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 project" data-category="web-development">
                            <div className="work-card">
                                <img src={Workcard2} alt className="work-image" />
                                <div className="about-work">
                                    <h5 className="work-name">Texas Fowlers</h5>
                                    <p className="work-technology">Shift4shop | Bootstrap | JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 project" data-category="ecommerce-development">
                            <div className="work-card">
                                <img src={Workcard3} alt className="work-image" />
                                <div className="about-work">
                                    <h5 className="work-name">Redesign Hub</h5>
                                    <p className="work-technology">Wordpress | Elementor Pro | Calendly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default Pestrashop