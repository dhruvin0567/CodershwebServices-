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




function LandingPage() {
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
                            <img src={Cloud} alt="" />
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
                {/* <div className="swiper projects-slider">
                    <div className="swiper-wrapper">
                        <img className="swiper-slide" src="assets/image/artisan-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/asterley-bros-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/bone-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/Claudine-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/Double-Dutch-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/gattertop-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/liberation-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/madamef-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/negroni-soc-f-p.webp" alt />
                        <img className="swiper-slide" src="assets/image/van-hunks-f-p.webp" alt />
                    </div>
                </div> */}
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

            <div className="row align-items-center dark-bg m-2 m-md-5 m-sm-2 p-2 p-md-5 landing-form">
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
                                <img src={ShahImg} alt="" width="100%" />
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
                            <img src={vape1} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <p className="light-text">
                                <b>2. </b> We’ll build and launch your site before you complete payment.
                            </p>
                            <img src={vape1} alt="" />
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














        </div >
    );
}

export default LandingPage;
