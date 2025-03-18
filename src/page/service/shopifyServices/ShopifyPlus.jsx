import BreadCrumb from "../../../components/common/Breadcrumb"
// import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import ThumbImg1 from "../../../assets/images/images2/Services4_1.png";
import ThumbImg2 from "../../../assets/images/images2/Services4_2.png";
import ThumbImg3 from "../../../assets/images/images2/Services4_3.png";
import ThumbImg4 from "../../../assets/images/images2/service4_card1.png";
import ThumbImg5 from "../../../assets/images/images2/service4_card2.png";
import { Link } from 'react-router-dom';
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../components/animation/FadeInStaggerTwo";
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

// import Shape4Img from "../../../assets/images/v5/shape4.png";
// import ServiceCardImg1 from "../../../assets/images/images2/service4_card1_2.png";
// import ServiceCardImg2 from "../../../assets/images/images2/service4_card2_1.png";

const services = [
    //    {
    //         id: crypto.randomUUID(),
    //         // icon: 'fa-solid fa-chart-line',
    //         title: 'Analytics-powered growth strategies for Shopify Plus businesses.',
    //         description: 'Codersh Web Services leverages the latest code frameworks, tools, and methodologies to deliver high-quality e-commerce solutions. Our team of experts in HTML, CSS, JavaScript, and Liquid builds custom themes from scratch or optimizes existing templates with tailored functionality. Every store is designed with usability in mind, ensuring content management is simple for all team members. With a strong focus on speed, technical SEO, and compliance, we deliver seamless and innovative e-commerce solutions to meet your business needs.',
    //         img: ServiceCardImg1, // Make sure to replace with the actual path to your arrow-right image
    //     },
    //     {
    //         id: crypto.randomUUID(),
    //         // icon: 'fa-solid fa-headset',
    //         title: 'Creating future-ready Shopify stores with scalability in mind.',
    //         description: 'As specialists in Shopify Plus, we support brands in launching new stores or enhancing existing ones with bespoke themes and tailored features. Whether creating a store from the ground up or leveraging existing templates, we prioritize performance, speed, and commercial alignment. Our comprehensive migration services ensure seamless transitions from other platforms, making Shopify Plus easy to use for both businesses and their customers. With Codersh, you can expect stunning, functional stores designed to drive growth.',
    //         img: ServiceCardImg2, // Make sure to replace with the actual path to your arrow-right image
    //     },
    {
        id: crypto.randomUUID(),
        // icon: 'fa-solid fa-globe',
        meta: 'Shopify Plus Agency - SEO',
        title: "Boost your store's visibility with expert e-commerce SEO.",
        description: 'Codersh offers data-driven e-commerce SEO strategies tailored to ambitious brands. Combining technical optimization, content marketing, and backlink analysis, we ensure your store ranks competitively in search engines while enhancing user experience. By utilizing powerful industry tools and in-depth data insights, we identify opportunities, outpace competitors, and drive long-term growth. Our holistic approach keeps your brand visible on major search engines while focusing on sustainable, organic growth beyond traditional paid advertising methods.',
        // img: 'path/to/arrow-right-image1.jpg' // Make sure to replace with the actual path to your arrow-right image
    },
    {
        id: crypto.randomUUID(),
        // icon: 'fa-solid fa-cogs',
        meta: 'E-commerce Marketing Agencies',
        title: "Drive repeat business through strategic email campaigns.",
        description: "Retention is at the heart of our email marketing and customer loyalty services. Codersh designs strategic campaigns leveraging email, SMS, loyalty programs, and subscription strategies to maximize customer lifetime value. Our retention marketers tailor every approach to your business, ensuring increased ROI and improved customer retention. By integrating advanced technologies and refining strategies, we help you make the most of your e-commerce platform's capabilities. Partner with Codersh to turn first-time shoppers into loyal, repeat customers.",
        // img: 'path/to/arrow-right-image2.jpg' // Make sure to replace with the actual path to your arrow-right image
    },
];

function ShopifyPlus() {

    return (
        <div>
            <GlobalStyle />
            <BreadCrumb title="Shopify Plus" />


            <FadeInStaggerTwo>
                <FadeInStaggerTwoChildren>
                    <div className="section aximo-project-page text-center dark-bg">
                        <div className="container aximo-section-padding5 shopify-services-data">
                            <h2 className="mb-4 light-text" style={{ fontSize: '50px' }}>
                                As a Certified Shopify Plus Partner We Build, Develop, and Scale Digital Retail Brands
                                {/* <span className="aximo-title-animation">
                                    Exploring Decoupled
                                    <span className="aximo-title-icon">
                                        <img src={Star2Img} alt="Star2Img" />
                                    </span>
                                </span>
                                <br />Commerce on Shopify Plus? */}
                            </h2>
                            <h3 className="mb-4 light-text">
                                Your Trusted Shopify Plus Experts: Empowering  E-Commerce Growth from Concept to Expansion</h3>
                            <p className="section-description light-text">
                                Codersh Web Services is a trusted Shopify Plus agency specializing in helping e-commerce brands launch new stores and scale existing ones. With expertise in design, development, SEO, and email marketing, Codersh delivers comprehensive solutions tailored to drive growth. From Shopify Plus upgrades and seamless migrations to new store launches, our team of experts ensures that brands fully leverage the platform's potential. Partner with Codersh to create innovative, high-performing e-commerce experiences that set your business apart.
                            </p>
                        </div>
                    </div>
                </FadeInStaggerTwoChildren>
            </FadeInStaggerTwo>



            <div className="section aximo-section-padding2">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-5">
                            <FadeInLeft className="aximo-content-thumb shopify-services-img">
                                <img src={ThumbImg1} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7  colo-12  shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h2 style={{ fontSize: '50px' }}>Trusted by Merchants for Expertise, Growth, and Data-Driven Innovation</h2>
                                    <p>
                                        Codersh Web Services is a trusted Shopify Plus partner, offering top-tier expertise and accreditation to create exceptional e-commerce experiences. Since 2015, we’ve collaborated with global brands and ambitious startups, blending deep e-commerce knowledge with innovative talent. Our services include custom UI/UX design, Shopify Plus development, and data-driven solutions that engage customers. We don’t just build and optimize stores; we empower brands to grow through in-house CRO, email marketing, and SEO services. Partner with Codersh for e-commerce solutions that fuel growth and success.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Get In Touch
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
                                    <h2 style={{ fontSize: '50px' }}>Unlock Your Business Potential with Advanced Shopify Plus Solutions</h2>
                                    {/* <h3 style={{ marginBottom: '16px' }}>Custom Shopify themes tailored to your brand needs.</h3> */}
                                    <p>
                                        Shopify Plus is an enterprise-level e-commerce platform designed for high-volume merchants to sell seamlessly. With Shopify's robust servers, it handles unmatched traffic levels, provides top-tier security, and offers tools for efficient customer service at scale.
                                    </p>
                                    <p>
                                        Key benefits include customizable checkout, up to 9 expansion stores, advanced B2B features, detailed reporting, unlimited staff accounts, and more. Shopify Plus empowers fast-growing e-commerce brands to focus on delivering exceptional customer experiences while the platform scales alongside their growth, eliminating the need for constant infrastructure maintenance.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Start Your Journey!
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
                                    <h2 style={{ fontSize: '50px' }}>
                                        Drive Sustainable Growth with Data-Driven Codersh Partnership Programs on Shopify Plus
                                    </h2>
                                    <p>
                                        designers, developers, and strategists. Codersh Memberships go beyond just skills, providing strategic, KPI-focused roadmaps aligned with broader growth objectives. Trusted by some of the world’s fastest-growing Shopify Plus brands, these services are delivered exclusively by our dedicated in-house team. <strong>Learn more about Codersh Memberships</strong> to discover how we can support your e-commerce growth journey.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Connect With Us
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
                                    <h2 style={{ fontSize: '50px' }}>Analytics-powered growth strategies for Shopify Plus businesses.</h2>
                                    {/* <h3 style={{ marginBottom: '16px' }}>Custom Shopify themes tailored to your brand needs.</h3> */}
                                    <p>
                                        Codersh Web Services leverages the latest code frameworks, tools, and methodologies to deliver high-quality e-commerce solutions. Our team of experts in HTML, CSS, JavaScript, and Liquid builds custom themes from scratch or optimizes existing templates with tailored functionality. Every store is designed with usability in mind, ensuring content management is simple for all team members. With a strong focus on speed, technical SEO, and compliance, we deliver seamless and innovative e-commerce solutions to meet your business needs.
                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
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
                                <img src={ThumbImg5} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7  colo-12  shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h2 style={{ fontSize: '50px' }}>
                                        Creating future-ready Shopify stores with scalability in mind.
                                    </h2>
                                    <p>
                                        As specialists in Shopify Plus, we support brands in launching new stores or enhancing existing ones with bespoke themes and tailored features. Whether creating a store from the ground up or leveraging existing templates, we prioritize performance, speed, and commercial alignment. Our comprehensive migration services ensure seamless transitions from other platforms, making Shopify Plus easy to use for both businesses and their customers. With Codersh, you can expect stunning, functional stores designed to drive growth.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="/contact-us" className="iwt-button">
                                            Contact Us
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInRight>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding4 pt-0">
                <div className="container">
                    <div className="aximo-service-wrap">
                        <div className="row">
                            {services.map((item, index) => (
                                <FadeInStagger
                                    key={item.id}
                                    index={index}
                                    className="col-12"
                                >
                                    <div className="aximo-iconbox-wrap">
                                        <div className="aximo-iconbox-icon">
                                            <strong>{item.meta}</strong>
                                        </div>
                                        <div className="aximo-iconbox-data">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            {/* <Link className="post-read-more aximo-icon" to="#" style={{ fontSize: '18px' }}>
                                                Read more <img src={ArrowRightImg} alt="Arrow" />
                                            </Link> */}
                                        </div>
                                    </div>
                                </FadeInStagger>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopifyPlus;