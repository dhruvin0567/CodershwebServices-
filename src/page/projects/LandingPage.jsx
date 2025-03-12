import BreadCrumb from "../../components/common/Breadcrumb";
import ShahImg from "../../assets/images/images2/shah.png";
import vape1 from "../../assets/images/images2/Screenshot_1.png";
import badge1 from "../../assets/images/images2/badge-1.png";
import badge2 from "../../assets/images/images2/badge-2.png";
import badge3 from "../../assets/images/images2/badge-3.png";
import badge4 from "../../assets/images/images2/badge-4.png";
import Logo from "../../assets/images/images2/logo-white.svg";
import Group1 from "../../assets/images/images2/Group_3.svg";
import Group2 from "../../assets/images/images2/Group_8_1.svg";
import Trophy from "../../assets/images/images2/trophy.png";
import Mobile from "../../assets/images/images2/mobile.png";
import static2 from "../../assets/images/images2/image 2.png";
import spin from "../../assets/images/images2/circle1.png";
import wrapperImg1 from "../../assets/images/images2/image_2025_02_24T07_59_50_301Z.png";
import wrapperImg2 from "../../assets/images/images2/image_2025_02_24T07_59_58_147Z.png";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo/logo-white.svg";
import Cloud from "../../assets/images/images2/614b5b07b77be58b407afc62_stacked-area-up.svg";

import video1 from '../../assets/images/Videos/Video-1-compressed.mp4';
import video2 from '../../assets/images/Videos/Video-2-compressed.mp4';
import video3 from '../../assets/images/Videos/Video-3-compressed.mp4';
import video4 from '../../assets/images/Videos/Video-4-compressed.mp4';
import video5 from '../../assets/images/Videos/Video-5-compressed.mp4';
import video6 from '../../assets/images/Videos/Video-6-compressed.mp4';
import { useState, useRef, useEffect } from 'react';  // Import Link from react-router-dom
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
// import FadeInStagger from "../animation/FadeInStagger";
import '../../assets/assets/css/swiper-bundle.min.css'; // Import Swiper styles
import FadeInStagger from "../../components/animation/FadeInStagger";


const projects = [
    {
        name: 'Van Hunks',
        image: '/src/assets/images/images2/Van-Hunks.png.webp',
    },
    {
        name: 'Madame F',
        image: '/src/assets/images/images2/Madame-F.png.webp',
    },
    {
        name: 'Liberation Cocktails',
        image: '/src/assets/images/images2/Liberation-Cocktails.png.webp',
    },
    {
        name: 'Bone Idyll',
        image: '/src/assets/images/images2/BONE-IDYLL.png.webp',
    },
    {
        name: 'Violet Blanc',
        image: '/src/assets/images/images2/Violet-Blanc-Beauty.png.webp',
    },
    {
        name: 'Tylers Coffee',
        image: '/src/assets/images/images2/TylersCoffee.png.webp',
    },
    {
        name: 'Buy Vape USA',
        image: '/src/assets/images/images2/BUY-VAPE-USA.png.webp',
    },
    {
        name: 'No Mo-Stache',
        image: '/src/assets/images/images2/No-Mo-Stache.png.webp',
    },
    {
        name: 'Split Grip',
        image: '/src/assets/images/images2/SplitGrip.png.webp',
    },
    {
        name: 'Wallplanks',
        image: '/src/assets/images/images2/wallplanks.png.webp',
    },
    {
        name: 'Rowan Oak',
        image: '/src/assets/images/images2/Rowan-Oak-Clothing-Co.png.webp',
    },
    {
        name: 'Aolithium',
        image: '/src/assets/images/images2/Aolithium-Professional.png',
    },
    {
        name: 'Baby Gold',
        image: '/src/assets/images/images2/Baby-Gold.png',
    },
    {
        name: 'Aubi & Ramsa',
        image: '/src/assets/images/images2/Aubi-Ramsa-Ice-Cream-Co-.png.webp',
    },
    {
        name: 'Airpaq',
        image: '/src/assets/images/images2/Airpaq-Sustainability-meets-functionality-Airpaq-GmbH.png.webp',
    },
    {
        name: 'CUBIC',
        image: '/src/assets/images/images2/Women-s-Clothing-Store-Clothing-Boutique-CUBIC-Outside-the-Box.png.webp',
    },
    {
        name: 'The Welsh Produce Stall',
        image: '/src/assets/images/images2/thewelshproducestall-the-welsh-produce-stall.png.webp',
    },
    {
        name: 'Fuel',
        image: '/src/assets/images/images2/fuel.png',
    },
    {
        name: 'Ocean 6 Media',
        image: '/src/assets/images/images2/oceans6media.png',
    },
    {
        name: 'Neux',
        image: '/src/assets/images/images2/NEUX-Ethically-Made-Australian-Designed-Quality-Womenswear-.png.webp',
    }
];

const images = [
    '/src/assets/images/images2/artisan-f-p.webp',
    '/src/assets/images/images2/asterley-bros-f-p.webp',
    '/src/assets/images/images2/bone-f-p.webp',
    '/src/assets/images/images2/Claudine-f-p.webp',
    '/src/assets/images/images2/Double-Dutch-f-p.webp',
    '/src/assets/images/images2/gattertop-f-p.webp',
    '/src/assets/images/images2/liberation-f-p.webp',
    '/src/assets/images/images2/madamef-f-p.webp',
    '/src/assets/images/images2/negroni-soc-f-p.webp',
    '/src/assets/images/images2/van-hunks-f-p.webp',
];

const logos = [
    "/src/assets/images/images2/shopify-plus-experts-mp (2).png",
    "/src/assets/images/images2/facebook-mp.png",
    "/src/assets/images/images2/klaviyo-mp.png",
    "/src/assets/images/images2/shopify-patrner-mp.png",
    "/src/assets/images/images2/google-partners-mp.png"
];

const reviews = [
    {
        image: "/src/assets/images/images2/rating.png",
        quote: "They exceeded my expectations, delivering everything I requested and more.",
        feedback: "The website has a sleek, modern design, and the in-house team is highly satisfied with the exceptional customer service they received. Codersh Web Services expertise, dedication, and proactive approach ensured a smooth process, successfully meeting all requirements.",
        name: "Alex Carter",
    },
    {
        image: "/src/assets/images/images2/rating.png",
        quote: "\"37% Conversion Rate Boost Following Website Redesign!\"",
        feedback: "Shah and Codersh Web Services provide a turnkey DFY solution for improving conversion rates. After seeing one of his ads, I scheduled a call, and within five minutes, I was confident he was the right choice. We began with a website redesign, which immediately boosted our conversion rate by 39%.",
        name: "Jordan Reynolds",
    },
    {
        image: "/src/assets/images/images2/rating.png",
        quote: "\"DFY Website – Optimized for Maximum Conversions!\"",
        feedback: "I needed a high-converting website, and after reviewing their conversion checklist and case studies, I decided to move forward. The results exceeded my expectations—the site is converting better than I ever imagined, and the best part? They handled everything for me.",
        name: "Taylor Mitchell",
    },
    {
        image: "/src/assets/images/images2/rating.png",
        quote: "\"The skilled and versatile team at Codersh Web Services collaborated seamlessly.\"",
        feedback: "The client is delighted with Codersh Web Services' service. The team maintained a smooth workflow throughout the engagement, actively seeking feedback and ensuring the client felt like a top priority through responsive communication. Their diverse expertise also enabled them to deliver complex solutions effectively.",
        name: "Casey Bennett",
    },
    {
        image: "/src/assets/images/images2/rating.png",
        quote: "\"I truly appreciated their collaborative approach.\"",
        feedback: "Thanks to Codersh Web Services' support, the client tripled their follower base and saw a significant increase in email leads. The team established an efficient workflow, shared valuable insights, and provided prompt responses. Additionally, they consistently had the right solutions to every question.",
        name: "Morgan Sullivan",
    },
    {
        image: "/src/assets/images/images2/rating.png",
        quote: "\"Shah and his team are top-tier marketers.\"",
        feedback: "Partnering with Shah & his team has been an incredible experience. They built and optimized our landing pages, dramatically improving our ROI on paid traffic campaigns. In fact, we saw a 25% increase in our landing page conversion rates. Shah’s expertise, combined with Monica and Cecelia’s dedication, has been invaluable to our success. Amazing work, team!",
        name: "Riley Thompson",
    },
    {
        image: "/src/assets/images/images2/rating.png",
        quote: "\"The most impressive aspect is that Codersh Web Services truly understood our vision and brand.\"",
        feedback: "Codersh Web Services delivered a professional, robust, and visually stunning website with clean wireframes and seamless navigation. The team excels in content writing and communication, ensuring clarity throughout the process. Along with efficient project management, they also provide valuable insights and recommendations.",
        name: "Jamie Parker",
    }
];


function LandingPage() {

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
            <BreadCrumb title="Landing Page" />

            <header>
                <nav className="navbar navbar-expand-lg dark-bg">
                    <div className="container-fluid">
                        <div className="brand-logo pe-4 me-0" style={{ borderRight: "2px solid white", width: "250px" }}>
                            <Link to="index.html">
                                <img src={logo} alt="Logo" className="light-version-logo" />
                            </Link>
                        </div>
                        <span className="text-light ps-4">
                            We design beautiful web experiences that convert 286% more business
                            <img src={Cloud} alt="Cloud Logo" />
                        </span>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-block d-sm-flex gap-1" role="search">
                                <input className="form-control landing-form-input2" type="email" placeholder="alex.carter@example.com*" aria-label="Search" />
                                <button className="btn landing-form-btn" type="submit">Get A Free Audit</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="hero-section mx-sm-5 pt-sm-5 pt-4 mb-4 overflow-hidden">
                <div className="container">
                    <h1 className="ani-h1 text-center mb-4 light-text">"We Build High-Converting Websites That Turn Visitors Into
                        Customers."</h1>
                    <h4 className="text-center mx-auto mb-4 light-text">"Elevate your business with a stunning, conversion-optimized
                        website designed to turn visitors into customers. And the best part? Our Guarantee: Love the design or
                        you don’t pay!"
                    </h4>
                    <form className="d-block d-sm-flex gap-1 justify-content-center mb-5" role="search">
                        <input className="form-control mb-2 mb-sm-0  landing-form-input3" type="email" placeholder="alex.carter@example.com*" aria-label="Search" />
                        <button className="btn  landing-form-btn" type="submit">Get A Free Audit</button>
                    </form>
                </div>
                <div className="swiper-container pb-2">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        loop={true}
                        slidesPerView={5}
                        speed={5000}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 0, // Slide change delay in milliseconds
                            disableOnInteraction: false, // Autoplay will not be disabled after interactions
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>

            <section className="section d-none d-md-block dark-bg p-5">
                <div className="row">
                    <div className="content-one col-lg-6 col-sm-12">
                        <div className="img-part">
                            <div className="first-part-img">
                                <img className="first-img" src="/src/assets/images/images2/asterley-landing.webp" alt />
                            </div>
                            <div className="second-img-part">

                                <img className="second-img" src="/src/assets/images/images2/madamef-landing.webp" alt />
                            </div>
                        </div>
                        <img id="stickyImage" src="/src/assets/images/images2/hero_window.png" alt="Sticky Image" />
                    </div>
                    <div className="content-two col-lg-6 col-sm-12">
                        <div className="content-two-img">
                            <div>
                                <img src="/src/assets/images/images2/levels_window.png" alt />
                            </div>
                            <div className="mobile-img-part">
                                <img className="mobile-bg-img" src="/src/assets/images/images2/jewelry_window.png" alt />
                                <img className="mobile-img" src="/src/assets/images/images2/mobile-img.png" alt />
                                <img className="arrow-img" src="/src/assets/images/images2/drop.png" alt />
                            </div>
                        </div>
                        <div className="sticky-section-content">
                            <h3 className="content-two-headline mb-4 text-light">We’re experts in building visually stunning, user-friendly websites and funnels.</h3>
                            <ul className="content-two-des text-light">
                                <li className="mb-4">
                                    <h6 className="text-light">Premium-Grade Design</h6>
                                    <p>
                                        Our designs make an impact. Your new site will attract attention and turn visitors into
                                        customers.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h6 className="text-light">Seamlessly Adapts to Any Device</h6>
                                    <p>
                                        Since 78% of all traffic is mobile, your site needs to be as seamless on phones as it is on
                                        desktops.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h6 className="text-light">Premium-Grade Design</h6>
                                    <p>
                                        With battle-tested conversion design techniques, we help transform visitors into long-term
                                        customers.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="our-work">
                <div className="container-fluid mt-5">
                    <h2 className="mb-2 text-center">
                        Take a look at <br /> our latest work!
                    </h2>
                    <h4 className="mb-5 text-center">"Designed to captivate, engage, and convert your visitors into loyal
                        customers."</h4>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div key={index} className="col-lg-3 col-sm-6 col-6 project-card mb-4">
                                <FadeInStagger>
                                    <div className="imagescrolling-wrapper portfolio-image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="image-scrolling portfolio-image"
                                        />
                                    </div>
                                    <h3 className="project-name py-3 text-center">{project.name}</h3>
                                </FadeInStagger>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="reviewsSection dark-bg py-5">
                <div className="container py-3">
                    <h4 className="light-text text-center">
                        Business Owners Say It All!
                    </h4>
                    <div className="partner-logo-carousel swiper">
                        <div className="partner-logo-slider">
                            <Swiper
                                spaceBetween={50}
                                loop={true}
                                slidesPerView={4}
                                speed={5000}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 0, // Slide change delay in milliseconds
                                    disableOnInteraction: false, // Autoplay will not be disabled after interactions
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 2 },
                                    480: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                }}
                            >
                                {logos.map((logo, index) => (
                                    <SwiperSlide key={index} className="partner-logo">
                                        <img className="mx-auto d-block" width="150" src={logo} alt={`Partner ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="reviews-comments light-text">
                        <h6 className="light-text text-center mb-4">Our Customers Speak Highly of Us
                            <img src="/src/assets/images/images2/rating.png" alt width={100} />
                        </h6>
                        <div className="row justify-content-center align-items-center g-2">
                            <div className="col-lg-3 text-center d-none d-lg-block">
                                <h5 className="light-text">Excellent</h5>
                                <img src="/src/assets/images/images2/rating.png" alt width={150} /><br />
                                <small>Based on 43 reviews</small> <br />
                                Trustpilot
                            </div>
                            <div className="col-lg-9">
                                <div className="swiper client-comment-carousel">
                                    <div className="client-review-slider">
                                        <Swiper
                                            spaceBetween={30}
                                            loop={true}
                                            slidesPerView={3}
                                            speed={1000}
                                            modules={[Navigation, Autoplay]}
                                            autoplay={{
                                                delay: 2500, // Slide change delay in milliseconds
                                                disableOnInteraction: false, // Autoplay will not be disabled after interactions
                                            }}
                                            breakpoints={{
                                                320: { slidesPerView: 1 },
                                                480: { slidesPerView: 1 },
                                                768: { slidesPerView: 2 },
                                                1024: { slidesPerView: 3 },
                                            }}
                                        >
                                            {reviews.map((review, index) => (
                                                <SwiperSlide key={index} className="client-review-cmnt">
                                                    <img src={review.image} alt="Rating" width={80} />
                                                    <h6 className="light-text">{review.quote}</h6>
                                                    <p>{review.feedback}</p>
                                                    <small>{review.name}</small>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="design-section p-2 p-sm-2 p-md-5 ">
                <div className="container-fluid container-big py-3 py-lg-5">
                    <div className="row pb-5">
                        <div className="col-lg-9">
                            <h2 className="ani-h2">
                                Premium Design That Speaks Volumes.
                            </h2>
                            <p>Our team of expertly vetted designers has mastered their craft, allowing us to deliver
                                high-quality, conversion-optimized websites and funnels tailored to your business every time.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <div className="image-spinner mt-sm-5 mt-lg-0 mt-5">
                                <img src={static2} alt className="static-image" width={150} />
                                <img src={spin} alt className="spinning-image" />
                            </div>
                        </div>
                    </div>
                    <div className="i-box-wrapper row">
                        <div className="col-lg-4 mb-5">
                            <div className="i-box">
                                <h5>Make Your Brand Stand Out. <img src={Trophy} alt /></h5>
                                <p>For any business, competition is everywhere. The best and most efficient way to stand out is
                                    with a website that immediately grabs your audience’s attention.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="i-box">
                                <h5>Optimized for all devices. <img src={Mobile} alt /></h5>
                                <p>For every business, competition is fierce. The fastest and most effective way to stand out
                                    is with a website that immediately captivates your audience.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="i-box">
                                <h5>Gain Trust &amp; Authority. <img src={Trophy} alt /></h5>
                                <p>
                                    First impressions define future interactions. We make sure your website leaves the best one
                                    every time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center dark-bg m-2 m-md-5 m-sm-2 p-2 p-md-5 landing-form">
                <div className="row d-flex align-items-center py-4">
                    <div className="col-lg-5 col-12 mb-md-4 mb-0 mb-lg-0">
                        <h3 className="ani-h3 light-text mb-3 mb-0 ">
                            Ready to bring your project to life?
                        </h3>
                    </div>
                    <div className="col-lg-7 col-12">
                        <form className="d-block d-sm-flex gap-1 justify-content-center" role="search">
                            <input className="form-control mb-2 mb-sm-0 landing-form-input" type="email" placeholder="alex.carter@example.com*" aria-label="Search" />
                            <button className="btn landing-form-btn" type="submit">Get A Free Audit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="sliding-text p-5 d-none d-lg-block">
                <div className="container container-big">
                    <div className="row">
                        <div className="col-lg-8 d-flex flex-column justify-content-end">
                            <h2>CONVERT</h2>
                            <div className="text-slider-wrapper d-flex align-items-center">
                                {/* <span class="swiper text-slider">
                              <div class="swiper-wrapper">
                                  <h3 class="swiper-slide"> HIGH-END DESIGN</h3>
                                  <h3 class="swiper-slide"> HIGH-END DESIGN</h3>
                              </div>
                          </span> */}
                                <div className="marquee_container">
                                    <div className="marquee">
                                        <h3><Marquee speed={70} loop={0}>HIGH-END DESIGN</Marquee></h3>
                                    </div>
                                </div>
                                <h2> YOUR</h2>
                            </div>
                            <h2> VISITORS</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="image-wrapper mb-5">
                                <img src={wrapperImg1} alt width={400} className="mb-5" />
                            </div>
                            <div className="image-wrapper mt-5">
                                <img className="ms-auto d-block" src={wrapperImg2} alt width={400} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark-bg py-4 py-lg-5">
                <div className="container container-big py-0 py-lg-5">
                    <h2 className="light-text light-text mb-4 mb-lg-5 pb-0 pb-lg-5">
                        Design shapes culture —<br />
                        Culture builds values —<br />
                        Values define the <span className="highlight">future</span><br />
                    </h2>
                    <div >
                        <FadeInStagger>
                            <div className="review-section text-center pb-5">
                                <div className="container">
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
                </div>
            </div>

            <div className="about-owner px-2 py-5 p-md-5 p-sm-2 pb-0 pb-md-0">
                <div className="container-fluid container-big ">
                    <div className="about-us1 mx-0">
                        <h3 className="mb-3">Wondering what makes us different from other web development agencies?</h3>
                        <h2 className="mb-3">We are digital marketing experts with a passion for development.</h2>
                        <h5 className="mb-3">
                            Unlike traditional web development agencies that focus solely on coding, our background in digital
                            marketing has given us deep insights into what makes a website convert—and what doesn’t.
                        </h5>
                    </div>
                    <div className="row mt-5 pt-0 pt-sm-5">
                        <div className="col-lg-6 d-flex flex-column justify-content-end">
                            <div className="">
                                <h3>My name is Shah. </h3>
                                <br />
                                <p>
                                    I’m the founder of Codersh Web Services.
                                    <br />
                                    <br />
                                    For the past few years, I’ve been dedicated to mastering the art of web development—creating fast,
                                    scalable, and high-performing websites that deliver seamless user experiences.
                                    <br />
                                    <br />
                                    With a background in consulting at Deloitte, I’ve learned that a well-built website isn’t just about
                                    aesthetics—it’s about performance, reliability, and functionality.
                                    <br />
                                    <br />
                                    At the core, I’m a developer who’s passionate about building exceptional web experiences (maybe a little
                                    too much).
                                </p>
                                <div className="social-icons d-flex gap-3 mb-5">
                                    <a href="#" className="social-icon1">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="#" className="social-icon1">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="social-icon1">
                                        <i className="fa-solid fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="owner-image">
                                <img src={ShahImg} alt="Harsh-Shah CEO" width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="we-do">
                        <div className="container-fluid">
                            <div className="wd-1">
                                <p>
                                    If your goal is to dominate your industry, ensuring users have an outstanding first impression when
                                    they land on your website is absolutely essential.
                                </p>
                            </div>
                            <h2 className="mb-5 mb-md-0">We build trust with your audience then turn them into loyal, paying customers.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="countdown-index py-5 px-2 p-md-5 pt-0">
                <div className="container pt-0 pt-sm-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="mb-3">Discover how an underperforming website could be holding your business back.</h5>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-lg-4 mb-3">
                            <h2>74% </h2>
                            <p>of users admit to judging a company's credibility based on its website design.</p>
                        </div>
                        <div className="col-lg-4  mb-3">
                            <h2>86% </h2>
                            <p>of B2C customers admit that design is the number one factor influencing their purchase decision.</p>
                        </div>
                        <div className="col-lg-4  mb-3">
                            <h2>78% </h2>
                            <p>of a website visitor’s first impressions are purely based on design.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark-bg we-invest py-5 px-2 p-md-5">
                <div className="container-fluid container-big">
                    <div className="heading-wrapper mb-5 text-center" style={{ margin: "auto", maxWidth: "800px" }}>
                        <h2 className="light-text mb-3">We Invest Upfront</h2>
                        <p className="light-text">
                            You shouldn’t have to bear all the risk upfront. Our philosophy is to invest in people first that’s why we
                            design, develop, and launch your site before payment even crosses your mind.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="light-text">
                                <b>1. </b> We’ll design your entire site and offer unlimited revisions.
                            </p>
                            <img src={vape1} alt=" Product Image1" />
                        </div>
                        <div className="col-lg-6">
                            <p className="light-text">
                                <b>2. </b> We’ll build and launch your site before you complete payment.
                            </p>
                            <img src={vape1} alt="Product Image2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="counts py-5 px-2 p-md-5 pb-0">
                <div className="container-fluid container-big">
                    <h5 className="text-center mb-3">That also works.</h5>
                    <h2 className="text-center">You can see for yourself <br /> that we’re getting results.</h2>
                    <div className="row py-5">
                        <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                            <div className="dark-bg p-4 counts-card">
                                <h2 className="light-text  mb-3 mb-lg-0">38%</h2>
                                <p className="light-text">Lower customer acquisition costs on Meta (Facebook &amp; Instagram).</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                            <div className="dark-bg p-4 counts-card">
                                <h2 className="light-text  mb-3 mb-lg-0">25%</h2>
                                <p className="light-text">Landing page to checkout click-through rate.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                            <div className="dark-bg p-4 counts-card">
                                <h2 className="light-text  mb-3 mb-lg-0">285%</h2>
                                <p className="light-text">Growth in conversion rate versus industry standards.</p>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 mb-3 mb-lg-0">
                            <div className="dark-bg p-4 counts-card">
                                <h2 className="light-text  mb-3 mb-lg-0">96%</h2>
                                <p className="light-text">Boost in ad spend post-Solvexmedia design integration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="awards">
                <div className="container-fluid p-5 container-big border-top">
                    <h2 className="text-center">Top Rated Web Development Company Since 2014</h2>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <img className="d-flex mx-auto" src={badge1} alt />
                        </div>
                        <div className="col-lg-3  col-md-6 col-12">
                            <img className="d-flex mx-auto" src={badge2} alt />
                        </div>
                        <div className="col-lg-3  col-md-6 col-12">
                            <img className="d-flex mx-auto" src={badge3} alt />
                        </div>
                        <div className="col-lg-3  col-md-6 col-12">
                            <img className="d-flex mx-auto" src={badge4} alt />
                        </div>
                    </div>
                </div>
            </div>

            <div className="comparing-us p-5 d-none d-md-flex">
                <div className="container" >
                    <div className="heading-wrapper" style={{ margin: "auto", maxWidth: "800px" }}>
                        <h2 className="text-center">Why Choose Us</h2>
                        <p className="text-center mb-5">We create custom websites and landing pages that offer a red-carpet
                            experience, turning visitors into customers effortlessly.</p>
                    </div>
                    <div className="comparing-table">
                        <table>
                            <tbody><tr>
                                <td />
                                <td className="dark-bg">
                                    <div className="d-flex justify-content-center company-logo p-3">
                                        <img src={Logo} alt width={200} />
                                    </div>
                                </td>
                                <td className="text-center">Traditional Web Agencies</td>
                                <td className="text-center">Freelancers</td>
                            </tr>
                                <tr>
                                    <td className="p-2">Comprehensive, Hassle-Free Solution</td>
                                    <td className="dark-bg">
                                        <div className="d-flex justify-content-center">
                                            <img src={Group1} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">288% Higher Average Conversion Rate Than Industry Standard</td>
                                    <td className="dark-bg">
                                        <div className="d-flex justify-content-center">
                                            <img src={Group1} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Designed by Experts with a Proven $28M+ Revenue Track Record</td>
                                    <td className="dark-bg">
                                        <div className="d-flex justify-content-center">
                                            <img src={Group1} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Love It or It’s Free Guarantee.</td>
                                    <td className="dark-bg">
                                        <div className="d-flex justify-content-center">
                                            <img src={Group1} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Endless Revisions at No Extra Cost</td>
                                    <td className="dark-bg">
                                        <div className="d-flex justify-content-center">
                                            <img src={Group1} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <img src={Group2} alt width={15} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td className="dark-bg" />
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>

            {/* <section className="section d-none d-md-block dark-bg">
                <div className="row">
                    <div className="content-one col-lg-6 col-sm-12">
                        <div className="img-part">
                            <div className="first-part-img">
                                <img className="first-img" src="/src/assets/images/images2/asterley-landing.webp" alt />
                            </div>
                            <div className="second-img-part">

                                <img className="second-img" src="/src/assets/images/images2/madamef-landing.webp" alt />
                            </div>
                        </div>
                        <img id="stickyImage" src="/src/assets/images/images2/hero_window.png" alt="Sticky Image" />
                    </div>
                    <div className="content-two col-lg-6 col-sm-12">
                        <div className="content-two-img">
                            <div>
                                <img src="/src/assets/images/images2/levels_window.png" alt />
                            </div>
                            <div className="mobile-img-part">
                                <img className="mobile-bg-img" src="/src/assets/images/images2/jewelry_window.png" alt />
                                <img className="mobile-img" src="/src/assets/images/images2/mobile-img.png" alt />
                                <img className="arrow-img" src="/src/assets/images/images2/drop.png" alt />
                            </div>
                        </div>
                        <div className="sticky-section-content">
                            <h3 className="content-two-headline mb-4 text-light">We’re experts in building visually stunning, user-friendly websites and funnels.</h3>
                            <ul className="content-two-des text-light">
                                <li className="mb-4">
                                    <h6 className="text-light">Premium-Grade Design</h6>
                                    <p>
                                        Our designs make an impact. Your new site will attract attention and turn visitors into
                                        customers.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h6 className="text-light">Seamlessly Adapts to Any Device</h6>
                                    <p>
                                        Since 78% of all traffic is mobile, your site needs to be as seamless on phones as it is on
                                        desktops.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h6 className="text-light">Premium-Grade Design</h6>
                                    <p>
                                        With battle-tested conversion design techniques, we help transform visitors into long-term
                                        customers.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section> */}






        </div >
    );
}

export default LandingPage;
