
import BreadCrumb from '../../components/common/Breadcrumb'
import Logo from '../../assets/images/images2/bigcommerce.png'
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

import Imgwithtxt1 from '../../assets/images/images2/Bigcommerce-image-1.png'
import Imgwithtxt2 from '../../assets/images/images2/Bigcommerce-image-2-1.png'

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

function BigCommerce() {
    return (
        <div>
            <BreadCrumb title="Big Commerce" />

            <div className="aximo-breadcrumb">
                <div className="container">
                    <img src={Logo} alt width={100} />
                    <h1 className="post__title mb-2" style={{ fontSize: '50px' }}>
                        Codersh Web Services - Your BigCommerce Development Partner
                    </h1>
                    <p className="banner-desciption">
                        Embark on a journey of e-commerce excellence with Codersh Web Services, your dedicated partner in
                        delivering comprehensive BigCommerce development services. Our team of skilled professionals is
                        committed to creating a seamless and powerful online shopping experience tailored to your brand's unique
                        requirements.
                    </p>
                    {/* <nav class="breadcrumbs">

                  </nav> */}
                </div>
            </div>

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
                        BigCommerce Development Services We Offer
                    </h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon1} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce Store Setup and Configuration
                                </h6>
                                <p>Establish a robust online presence with expert setup and configuration services for your
                                    BigCommerce store.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon2} alt />
                                </div>
                                <h6 className="service-title">
                                    Custom BigCommerce Website Development
                                </h6>
                                <p>Elevate your brand with a unique and visually appealing website tailored to the BigCommerce
                                    platform.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon3} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce Theme Development &amp; Customization
                                </h6>
                                <p>Stand out in the competitive e-commerce landscape with bespoke theme development and
                                    customization.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon4} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce App Development
                                </h6>
                                <p>
                                    Extend the functionality of your store with custom app development services designed for
                                    BigCommerce.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon5} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce Migration Services
                                </h6>
                                <p>Seamlessly transition your online store to BigCommerce, ensuring data integrity and minimal
                                    downtime.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon6} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce API Integration
                                </h6>
                                <p>
                                    Enhance the connectivity of your store by integrating third-party services seamlessly
                                    through BigCommerce APIs.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon7} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce Maintenance and Support
                                </h6>
                                <p>Ensure the ongoing success of your BigCommerce store with dedicated maintenance and support
                                    services.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon8} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce SEO Optimization
                                </h6>
                                <p>
                                    Boost your online visibility with our specialized SEO optimization services tailored for
                                    BigCommerce.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-card">
                                <div className="service-icon">
                                    <img src={ServiceIcon9} alt />
                                </div>
                                <h6 className="service-title">
                                    BigCommerce Consulting Services
                                </h6>
                                <p>Tap into our expertise for strategic insights and recommendations to maximize the potential
                                    of your BigCommerce store.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
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
                                    Hire BigCommerce Developer
                                </h3>
                                <p className="iwt-description mb-4">
                                    Take control of your BigCommerce development project with Codersh Web Services. Our dedicated
                                    infrastructure and expert BigCommerce developers ensure a customized engagement model, providing
                                    flexibility and transparency for your e-commerce success.
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
                                        Guarantee of No Hidden Fees
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                        Track Hours and Pay with Precision
                                    </li>
                                </ul>
                                <a href="#" className="iwt-button">
                                    Hire Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End */}
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
                                    Why Choose BigCommerce for Your Project
                                </h3>
                                <p className="iwt-description mb-4">
                                    Choose Codersh Web Services and BigCommerce for a powerful, scalable, and customer-centric
                                    online store. Discover the advantages of BigCommerce development for a seamless and successful
                                    e-commerce presence.
                                </p>
                                <ul className="mb-5">
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                        User-Friendly Interface
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                        Mobile Responsiveness
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                        Robust Security Features
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                        Scalability for Growing Businesses
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                        Extensive App Marketplace
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '5px' }} />
                                        24/7 Support
                                    </li>
                                </ul>
                                <a href="#" className="iwt-button">
                                    Get Free Quotes Now!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End */}
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

export default BigCommerce