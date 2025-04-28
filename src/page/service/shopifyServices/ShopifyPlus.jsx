import BreadCrumb from "../../../components/common/Breadcrumb"
// import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import ThumbImg1 from "../../../assets/images/images2/Services4_1.webp";
import ThumbImg2 from "../../../assets/images/images2/patherrimgs/service8_3.webp";
import ThumbImg3 from "../../../assets/images/images2/Services4_3.webp";
import ThumbImg4 from "../../../assets/images/images2/service4_card1.webp";
import ThumbImg5 from "../../../assets/images/images2/service4_card2.webp";
import { Link } from 'react-router-dom';
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../components/animation/FadeInStaggerTwo";
import { createGlobalStyle } from 'styled-components';
import SEO from "../../../components/common/SEO";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

// import Shape4Img from "../../../assets/images/v5/shape4.webp";
// import ServiceCardImg1 from "../../../assets/images/images2/service4_card1_2.webp";
// import ServiceCardImg2 from "../../../assets/images/images2/service4_card2_1.webp";

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
        // img: 'path/to/arrow-right-image1.webp' // Make sure to replace with the actual path to your arrow-right image
    },
    {
        id: crypto.randomUUID(),
        // icon: 'fa-solid fa-cogs',
        meta: 'E-commerce Marketing Agencies',
        title: "Drive repeat business through strategic email campaigns.",
        description: "Retention is at the heart of our email marketing and customer loyalty services. Codersh designs strategic campaigns leveraging email, SMS, loyalty programs, and subscription strategies to maximize customer lifetime value. Our retention marketers tailor every approach to your business, ensuring increased ROI and improved customer retention. By integrating advanced technologies and refining strategies, we help you make the most of your e-commerce platform's capabilities. Partner with Codersh to turn first-time shoppers into loyal, repeat customers.",
        // img: 'path/to/arrow-right-image2.webp' // Make sure to replace with the actual path to your arrow-right image
    },
];

function ShopifyPlus() {

    return (
        <div>
            <GlobalStyle />
            <SEO
                title="Shopify Plus Development | Enterprise E-commerce Solutions | Codersh Web Services"
                description="Elevate your business with Shopify Plus. Codersh Web Services specializes in custom Shopify Plus development, offering advanced features and scalability for enterprise-level stores."
                keywords="Shopify Plus, Shopify Plus development, enterprise e-commerce, Shopify Plus custom solutions, scalable Shopify store, Shopify Plus experts, Codersh Web Services"
                canonical="https://react-vite-codersh.vercel.app/shopify-plus"
            />
            <BreadCrumb title="Shopify Plus" />
            <FadeInStaggerTwo>
                <FadeInStaggerTwoChildren>
                    <div className="section aximo-project-page text-center dark-bg">
                        <div className="container aximo-section-padding5 shopify-services-data">
                            <h3 className="mb-2 light-text">
                                Your Trusted Shopify Plus Experts: <br />
                            </h3>
                            <p className="light-text">
                                Empowering  E-Commerce Growth from Concept to Expansion.
                                As a Certified Shopify Plus Partner We Build, Develop, and Scale Digital Retail Brands.
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
                                    <h2 className="mb-2">Trusted by Merchants for Expertise, Growth, and Data-Driven Innovation</h2>
                                    <p className="mb-4">
                                        Codersh Web Services is a trusted Shopify Plus partner, offering top-tier expertise and accreditation to create exceptional e-commerce experiences. Since 2015, we’ve collaborated with global brands and ambitious startups, blending deep e-commerce knowledge with innovative talent. Our services include custom UI/UX design, Shopify Plus development, and data-driven solutions that engage customers. We don’t just build and optimize stores; we empower brands to grow through in-house CRO, email marketing, and SEO services. Partner with Codersh for e-commerce solutions that fuel growth and success.
                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
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
                                    <h2 className="mb-2">Unlock Your Business Potential with Advanced Shopify Plus Solutions</h2>
                                    {/* <h3 style={{ marginBottom: '16px' }}>Custom Shopify themes tailored to your brand needs.</h3> */}
                                    <p className="mb-2">
                                        Shopify Plus is an enterprise-level e-commerce platform designed for high-volume merchants to sell seamlessly. With Shopify's robust servers, it handles unmatched traffic levels, provides top-tier security, and offers tools for efficient customer service at scale.
                                    </p>
                                    <p className="mb-4">
                                        Key benefits include customizable checkout, up to 9 expansion stores, advanced B2B features, detailed reporting, unlimited staff accounts, and more. Shopify Plus empowers fast-growing e-commerce brands to focus on delivering exceptional customer experiences while the platform scales alongside their growth, eliminating the need for constant infrastructure maintenance.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
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
                                    <h2 className="mb-2">
                                        Drive Sustainable Growth with Data-Driven Codersh Partnership Programs on Shopify Plus
                                    </h2>
                                    <p className="mb-4">
                                        designers, developers, and strategists. Codersh Memberships go beyond just skills, providing strategic, KPI-focused roadmaps aligned with broader growth objectives. Trusted by some of the world’s fastest-growing Shopify Plus brands, these services are delivered exclusively by our dedicated in-house team. <strong>Learn more about Codersh Memberships</strong> to discover how we can support your e-commerce growth journey.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
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
                                    <h2 className="mb-2">Analytics-powered growth strategies for Shopify Plus businesses.</h2>
                                    {/* <h3 style={{ marginBottom: '16px' }}>Custom Shopify themes tailored to your brand needs.</h3> */}
                                    <p className="mb-4">
                                        Codersh Web Services leverages the latest code frameworks, tools, and methodologies to deliver high-quality e-commerce solutions. Our team of experts in HTML, CSS, JavaScript, and Liquid builds custom themes from scratch or optimizes existing templates with tailored functionality. Every store is designed with usability in mind, ensuring content management is simple for all team members. With a strong focus on speed, technical SEO, and compliance, we deliver seamless and innovative e-commerce solutions to meet your business needs.
                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
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
                                    <h2 className="mb-2">
                                        Creating future-ready Shopify stores with scalability in mind.
                                    </h2>
                                    <p className="mb-4">
                                        As specialists in Shopify Plus, we support brands in launching new stores or enhancing existing ones with bespoke themes and tailored features. Whether creating a store from the ground up or leveraging existing templates, we prioritize performance, speed, and commercial alignment. Our comprehensive migration services ensure seamless transitions from other platforms, making Shopify Plus easy to use for both businesses and their customers. With Codersh, you can expect stunning, functional stores designed to drive growth.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
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
                                        <div className="aximo-iconbox-icon mb-2">
                                            <strong>{item.meta}</strong>
                                        </div>
                                        <div className="aximo-iconbox-data">
                                            <h3 className="mb-2">{item.title}</h3>
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