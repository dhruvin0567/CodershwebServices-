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
        description: 'We offer data-driven e-commerce SEO strategies tailored for ambitious brands, combining technical SEO, content marketing, and backlink analysis to boost search engine visibility and user experience. Using advanced tools and data insights, we uncover growth opportunities, outperform competitors, and drive sustainable, organic traffic-ensuring long-term success beyond paid advertising.',
        // img: 'path/to/arrow-right-image1.webp' // Make sure to replace with the actual path to your arrow-right image
    },
    {
        id: crypto.randomUUID(),
        // icon: 'fa-solid fa-cogs',
        meta: 'E-commerce Marketing Agencies',
        title: "Drive repeat business through strategic email campaigns.",
        description: "At Codersh, retention drives our email marketing and loyalty strategies. We craft tailored campaigns using email, SMS, loyalty programs, and subscriptions to boost customer lifetime value and ROI. By integrating advanced tools and refining tactics, we help turn first-time shoppers into loyal, repeat customers-maximizing your e-commerce platform’s potential.",
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
                                        Codersh is a trusted Shopify Plus partner, delivering expert e-commerce solutions since 2015. We work with global brands and startups, offering custom UI/UX design, Shopify Plus development, and data-driven solutions. Beyond store optimization, we empower growth with in-house CRO, email marketing, and SEO services. Partner with Codersh for e-commerce solutions that drive success and fuel growth.
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
                                    <p className="mb-4">
                                        Shopify Plus is an enterprise-level e-commerce platform built for high-volume merchants, offering robust servers, top-tier security, and scalable tools for efficient customer service. Key benefits include customizable checkout, up to 9 expansion stores, advanced B2B features, detailed reporting, and unlimited staff accounts. Shopify Plus enables fast-growing brands to focus on customer experiences while the platform effortlessly scales with their growth, eliminating the need for constant infrastructure maintenance.
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
                                        Our Memberships unite designers, developers, and strategists to deliver more than just technical skills—they provide KPI-driven roadmaps aligned with your growth goals. Trusted by leading Shopify Plus brands, our services are delivered exclusively by our in-house experts.<strong>Learn more about Codersh Memberships</strong> and see how we can accelerate your e-commerce success.
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
                                        We uses the latest frameworks and tools to deliver high-quality, custom e-commerce solutions. Our experts in HTML, CSS, JavaScript, and Liquid build or optimize themes with tailored functionality and user-friendly design. We prioritize speed, technical SEO, and compliance to ensure seamless performance and easy content management for your team.
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
                                        As Shopify Plus specialists, We helps brands launch new stores or enhance existing ones with custom themes and tailored features. We prioritize performance, speed, and commercial goals, whether building from scratch or optimizing templates. Our expert migration services ensure smooth transitions from other platforms, making Shopify Plus easy for both teams and customers. Expect visually stunning, high-performing stores designed to drive growth.
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