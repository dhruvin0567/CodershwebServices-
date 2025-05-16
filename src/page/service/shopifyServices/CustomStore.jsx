import BreadCrumb from "../../../components/common/Breadcrumb"
import ThumbImg1 from "../../../assets/images/images2/2.webp";
import ThumbImg2 from "../../../assets/images/images2/4.webp";
import ThumbImg3 from "../../../assets/images/images2/7.webp";
import ThumbImg4 from "../../../assets/images/images2/8.webp";
import ThumbImg5 from "../../../assets/images/images2/9.webp";
import ThumbImg6 from "../../../assets/images/images2/10.webp";
import ThumbImg7 from "../../../assets/images/images2/11.webp";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { Link } from 'react-router-dom';
// import CheckImg from "../../../assets/images/v7/check.webp";
import { createGlobalStyle } from 'styled-components';
import SEO from "../../../components/common/SEO";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;


function CustomStore() {
    return (
        <div>
            <GlobalStyle />
            <SEO
                title="Custom Shopify Store Development | Codersh Web Services"
                description="Create a unique, high-performance Shopify store with Codersh Web Services. Our expert developers provide custom design, advanced functionality, and seamless integration."
                keywords="Custom Shopify store, Shopify store development, Shopify design, custom store design, e-commerce solutions, Shopify experts, advanced Shopify features, Codersh Web Services"
                canonical="https://react-vite-codersh.vercel.app/customStore"
            />
            <BreadCrumb title="Custom Store Projects" />

            <div className="section aximo-section-padding2">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-5">
                            <FadeInLeft className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg1} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7 colo-12 shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h2 className="mb-2">Built for Your Revenue Goals, Powered by Expertise</h2>
                                    <h3 className="mb-2">Custom Shopify themes tailored to your brand needs.</h3>
                                    <p className="mb-4">
                                        Whether you're a budding startup or an established brand, we craft Shopify themes that align with your business objectives and support sustainable growth. Our team focuses on maximizing your store’s potential by designing themes optimized for engagement, speed, and long-term success.

                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Get Started Today
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInRight>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 order-lg-2">
                            <FadeInRight className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg2} alt="thumb" />
                            </FadeInRight>
                        </div>
                        <div className="col-lg-7 shopify-services-data">
                            <FadeInLeft>
                                <div className="aximo-default-content">
                                    <h2 className="mb-2">Built for Your Revenue Goals, Powered by Expertise</h2>
                                    <h3 className="mb-2">Custom Shopify themes tailored to your brand needs.</h3>
                                    <p className="mb-4">
                                        Whether you're a budding startup or an established brand, we craft Shopify themes that align with your business objectives and support sustainable growth. Our team focuses on maximizing your store’s potential by designing themes optimized for engagement, speed, and long-term success.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Get Started Today
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInLeft>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-5">
                            <FadeInLeft className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg3} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7  colo-12  shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h2 className="mb-2">Discovery, Strategy & Planning</h2>
                                    <h3 className="mb-2">Every successful store starts with a solid foundation.</h3>
                                    <p className="mb-4">
                                        Our process begins with an in-depth understanding of your brand, audience, and industry. We analyze competitors, map out user journeys, and create sitemaps to ensure an efficient and conversion-focused website structure. This stage lays the groundwork for a Shopify store that speaks to your audience and drives results.
                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Contact Us Now!
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInRight>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 order-lg-2">
                            <FadeInRight className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg4} alt="thumb" />
                            </FadeInRight>
                        </div>
                        <div className="col-lg-7 shopify-services-data">
                            <FadeInLeft>
                                <div className="aximo-default-content">
                                    <h2 className="mb-2">CRO Optimized Design That Captivates & Converts</h2>
                                    <h3 className="mb-2">Stand out with designs as unique as your brand.
                                    </h3>
                                    <p className="mb-4">
                                        Using insights from our discovery phase, we craft bespoke designs that resonate with your audience and amplify your brand’s personality. From wireframes to high-fidelity visuals, every element is carefully designed to boost engagement, increase sales, and leave a lasting impression on your customers.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Contact Us Now
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInLeft>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-5">
                            <FadeInLeft className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg5} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7  colo-12  shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h2 className="mb-2">Shopify Development Optimized for Results</h2>
                                    <h3 className="mb-2">Where design meets powerful functionality.</h3>
                                    <p className="mb-4">
                                        Our experienced Shopify developers turn designs into pixel-perfect, high-performing themes. We ensure that your store is fully optimized for all devices and browsers, with fast loading times and built-in SEO best practices. Need custom integrations or private Shopify apps? We’ve got you covered.
                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Let's Built It
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInRight>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 order-lg-2">
                            <FadeInRight className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg6} alt="thumb" />
                            </FadeInRight>
                        </div>
                        <div className="col-lg-7 shopify-services-data">
                            <FadeInLeft>
                                <div className="aximo-default-content">
                                    <h2 className="mb-2">Seamless Testing & Launch
                                    </h2>
                                    <h3 className="mb-2">Flawless execution for a stress-free launch.
                                    </h3>
                                    <p className="mb-4">
                                        Before your store goes live, we conduct rigorous testing to eliminate bugs and ensure a smooth experience for your customers. Our team handles every detail, so your launch day is as seamless as possible.
                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Let's Built It
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInLeft>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-5">
                            <FadeInLeft className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg7} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7  colo-12  shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h2 className="mb-2">Beyond Launch: Optimization & Support</h2>
                                    <h3 className="mb-2">Your growth partner for the long haul.</h3>
                                    <p className="mb-4">
                                        Our commitment doesn’t end at launch. We offer ongoing optimization and support to ensure your store evolves to meet your customers’ needs. From performance enhancements to feature updates, we’re here to help your business thrive long-term.
                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Get Started Today
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInRight>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomStore