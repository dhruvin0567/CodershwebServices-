import { Link } from 'react-router-dom';
import FadeInStagger from "../../components/animation/FadeInStagger";
import FadeInLeft from "../../components/animation/FadeInLeft";
import FadeInRight from "../../components/animation/FadeInRight";
import FadeInUp from "../../components/animation/FadeInUp";
import ServiceCard from "../../components/home-four/services/ServiceCard";
import BlogCard from "../../components/home-six/blogs/BlogCard";
import BreadCrumb from '../../components/common/Breadcrumb'
import Clutch from '../../assets/images/images2/clutch.svg'
import StarImg from '../../assets/images/images2/star.png'

import Icon1 from '../../assets/images/images2/cms-setup.png'
import Icon2 from '../../assets/images/images2/psd-to-wordpress.png'
import Icon3 from '../../assets/images/images2/web-custom-development.png'
import Icon4 from '../../assets/images/images2/web-development.png'
import Icon5 from '../../assets/images/images2/plugin.png'
import Icon6 from '../../assets/images/images2/maintenance.png'
import Icon7 from '../../assets/images/images2/woo-commerce.png'
import Icon8 from '../../assets/images/images2/blog.png'
import Icon9 from '../../assets/images/images2/api.png'

import Thumb1Img from '../../assets/images/images2/Android-1.png'
import Thumb2Img from '../../assets/images/images2/Android-2.png'

import ProcessImg1 from '../../assets/images/images2/reauirement-gathering.png'
import ProcessImg2 from '../../assets/images/images2/uiux.png'
import ProcessImg3 from '../../assets/images/images2/prototype.png'
import ProcessImg4 from '../../assets/images/images2/dynamic-development.png'
import ProcessImg5 from '../../assets/images/images2/testing.png'
import ProcessImg6 from '../../assets/images/images2/live-development.png'
import ProcessImg7 from '../../assets/images/images2/question.png'

import Workcard1 from '../../assets/images/ourwork/New-Project-1-1024x1024.jpg'
import Workcard2 from '../../assets/images/ourwork/New-Project-3-1024x1024.jpg'
import Workcard3 from '../../assets/images/ourwork/New-Project-1024x1024.jpg'


const serviceData = [
    {
        id: crypto.randomUUID(),
        title: "Android App Design and Development",
        iconImg: Icon1,
        description: "Craft visually appealing and functional Android applications that enhance user engagement and satisfaction."
    },
    {
        id: crypto.randomUUID(),
        title: "Custom Android App Development",
        iconImg: Icon2,
        description: "Develop tailor-made Android apps that align with your brand's identity and provide a unique mobile experience."
    },
    {
        id: crypto.randomUUID(),
        title: "Android UI/UX Design",
        iconImg: Icon3,
        description: "Create intuitive and user-friendly interfaces that ensure a smooth and delightful user experience."
    },
    {
        id: crypto.randomUUID(),
        title: "Cross-Platform App Development",
        iconImg: Icon4,
        description: "Extend your app's reach with cross-platform development, ensuring compatibility across various devices and operating systems."
    },
    {
        id: crypto.randomUUID(),
        title: "Android E-commerce App Development",
        iconImg: Icon5,
        description: "Elevate your online presence with customized e-commerce solutions designed specifically for the Android platform."
    },
    {
        id: crypto.randomUUID(),
        title: "Android App Integration Services",
        iconImg: Icon6,
        description: "Seamlessly integrate third-party services and APIs to enhance the functionality and features of your Android app."
    },
    {
        id: crypto.randomUUID(),
        title: "Android App Maintenance and Support",
        iconImg: Icon7,
        description: "Ensure the continuous success of your Android app with dedicated maintenance and support services."
    },
    {
        id: crypto.randomUUID(),
        title: "Android App Testing Services",
        iconImg: Icon8,
        description: "Guarantee the reliability and performance of your app with thorough testing services, including functionality, usability, and security testing."
    },
    {
        id: crypto.randomUUID(),
        title: "Android App Consultation Services",
        iconImg: Icon9,
        description: "Tap into our expertise for strategic insights and recommendations tailored to your business objectives in the Android app ecosystem."
    },
];


const featuresData = [
    {
        id: crypto.randomUUID(),
        iconImg: ProcessImg1, // Update with actual path
        title: '1. Gathering requirements',
    },
    {
        id: crypto.randomUUID(),
        iconImg: ProcessImg2, // Update with actual path
        title: '2. UI/UX Design',
    },
    {
        id: crypto.randomUUID(),
        iconImg: ProcessImg3, // Update with actual path
        title: '3. Static Prototype',
    },
    {
        id: crypto.randomUUID(),
        iconImg: ProcessImg4, // Update with actual path
        title: '4. Dynamic Development',
    },
    {
        id: crypto.randomUUID(),
        iconImg: ProcessImg5, // Update with actual path
        title: '5. Quality Assurance',
    },
    {
        id: crypto.randomUUID(),
        iconImg: ProcessImg6, // Update with actual path
        title: '6. Live Deployment',
    },
    {
        id: crypto.randomUUID(),
        iconImg: ProcessImg7, // Update with actual path
        title: '7. Support and Upkeep',
    },
];

const blogsData = [
    {
        id: crypto.randomUUID(),
        title: "Online Book Store",
        content: "Shift4shop | React | Styled Components",
        img: Workcard1,
    },
    {
        id: crypto.randomUUID(),
        title: "Texas Fowlers",
        content: "Shift4shop | Bootstrap | JavaScript",
        img: Workcard2,
    },
    {
        id: crypto.randomUUID(),
        title: "Redesign Hub",
        content:
            "Wordpress | Elementor Pro | Calendly",
        img: Workcard3,
    },
];

function AndroidAppDev() {


    return (
        <div>
            <BreadCrumb title="Android App Development" />

            <div className="top-rated">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Link to="#" className="clutch-widget d-flex mb-4 mb-lg-0">
                                <span className="me-2">
                                    <p className="mb-0">Reviewed On</p>
                                    <img src={Clutch} alt width={82} />
                                </span>
                                <span className="d-flex flex-column justify-content-between">
                                    <img src={StarImg} alt width={90} />
                                    <p className="review-amount mb-0">16 Reviews</p>
                                </span>
                            </Link>
                        </div>
                        <div className="col-lg-9 d-flex align-items-center">
                            <p className="top-rated-text ms-lg-4">
                                Top Rated 5.0 out of 5.0 for Codersh by 120+ clients on more than 1200+ projects. <Link to="/ourwork2">View Work</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding3 position-relative">
                <div className="container">
                    <div className="mb-5 text-center">
                        <div className="row">
                            <div className="col">
                                <h3 style={{ fontSize: '2.5rem' }}> Android App Development Services We Offer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {serviceData.map((service, index) => (
                            <FadeInStagger key={service.id} index={index} className="col-xl-4 col-md-6 col-lg-6">
                                <ServiceCard service={service} />
                            </FadeInStagger>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section ">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-lg-6">
                            <FadeInLeft className="aximo-content-thumb3">
                                <img src={Thumb1Img} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="aximo-default-content2 libre-font m-left-gap-small">
                                <h3 className="mb-4">Hire Android App Developer</h3>
                                <p className="fs-18 mb-4">
                                    Take charge of your Android app development project with Codersh Web Services. Our dedicated infrastructure and expert Android app developers ensure a customized engagement model that aligns with your vision, providing flexibility and transparency for your mobile success.
                                </p>

                                <ul className="mb-4">
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Monthly Payment
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        No Setup Expenses
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Guarantee of no hidden fees
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Track Hours and Pay with Precision
                                    </li>
                                </ul>

                                <FadeInUp className="aximo-btn-wrap2">
                                    <Link to="#" className="iwt-button">
                                        Hire Us Now
                                    </Link>
                                </FadeInUp>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-sm-5 d-flex align-items-center order-lg-1 order-2">
                            <div className="aximo-default-content2 libre-font m-left-gap-small">
                                <h3 className="mb-4">
                                    Why Choose Android App Development for Your Project
                                </h3>
                                <p className="fs-18 mb-4">
                                    Choose Codersh Web Services and Android app development for a powerful, user-centric, and scalable mobile solution. Discover the advantages of Android app development for a vast user base and a seamless mobile experience.
                                </p>

                                <ul className="mb-4">
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Extensive User Base
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Open Source Platform
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Customizable User Interface
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Rich App Ecosystem
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Google Play Store Visibility
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check" style={{ color: '#000000', marginRight: '20px' }} />
                                        Continuous Updates and Innovations
                                    </li>
                                </ul>

                                <FadeInUp className="aximo-btn-wrap2">
                                    <Link to="#" className="iwt-button">
                                        Get Free Quotes Now!
                                    </Link>
                                </FadeInUp>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-sm-5 order-lg-2 order-1">
                            <FadeInRight className="aximo-content-thumb3">
                                <img src={Thumb2Img} alt="Thumb" />
                            </FadeInRight>
                        </div>
                    </div>

                </div>
            </div>

            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title">
                        <div className="row text-center">
                            <div className="col">
                                <h3 style={{ fontSize: '2.5rem' }}>Process We Follow</h3>
                                <p>We design, build and support websites and apps for clients worldwide. <br />We make your
                                    business stand
                                    out.
                                    Interested? Let's chat.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            {featuresData.map((service, index) => (
                                <FadeInStagger key={service.id} index={index} className="col-xl-4 col-md-6 col-lg-6">
                                    <ServiceCard service={service} />
                                </FadeInStagger>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding32">
                <div className="container">
                    <div className="aximo-section-title playfair">
                        <div className="row">
                            <div className="col text-center">
                                <h3 style={{ fontSize: '2.5rem' }}>Our Recent Work</h3>
                                <p>Our portfolio speaks loudly that we are giving best solutions for every ideas.</p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        {blogsData.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AndroidAppDev