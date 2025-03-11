import BreadCrumb from "../../../components/common/Breadcrumb"
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../components/animation/FadeInStaggerTwo";
import { Link } from 'react-router-dom';
import ThumbImg1 from "../../../assets/images/images2/service5_1_2.png";
import ThumbImg2 from "../../../assets/images/images2/service5_2.png";
import ThumbImg3 from "../../../assets/images/images2/service5_3.png";
import ThumbImg4 from "../../../assets/images/images2/service5_4.png";
function ConversionRate() {
    return (
        <div>
            <BreadCrumb title="Conversion Rate Optimization" />

            <FadeInStaggerTwo>
                <FadeInStaggerTwoChildren>
                    <div className="section aximo-project-page text-center light-bg">
                        <div className="container aximo-section-padding5  shopify-services-data">
                            <h2 className="mb-4 dark-text" style={{ fontSize: '50px' }}>
                                As your trusted Shopify CRO partner, Codersh helps digital brands maximize their store's success and deliver powerful results.
                            </h2>
                            <p className="section-description dark-text">
                                Codersh Web Services takes pride in delivering CRO services for ambitious brands across industries. Our Shopify-focused CRO agency helps online stores drive sustainable growth and unlock their full sales potential.
                            </p>

                        </div>
                    </div>
                </FadeInStaggerTwoChildren>
                <FadeInStaggerTwoChildren>
                    <div className="section aximo-project-page text-center dark-bg">
                        <div className="container aximo-section-padding5 shopify-services-data">
                            <h2 className="mb-4 light-text" style={{ fontSize: '50px' }}>
                                A trusted Shopify CRO partner ready to help your business excel. Transform your website's conversions today.
                            </h2>
                            <p className="section-description light-text">

                                Codersh Web Services offers specialized CRO agency services to help Shopify and Shopify Plus store owners achieve sustainable growth and hit their conversion rate targets. Our services encompass Shopify web design, development, technical support, and strategic consultancy, ensuring your store performs optimally at every stage. Delivered through our membership plans, we focus on changing user behavior to turn visitors into loyal customers, regardless of your business size or industry.

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
                                    <h3 style={{ marginBottom: '16px' }}>Shopify CRO Agency - Shopify developer</h3>
                                    <h2 style={{ fontSize: '50px' }}>Combining Technical Expertise with Growth Strategies to Turn Visitors into Loyal Customers.</h2>
                                    <p>
                                        As an accredited Shopify expert, Codersh Web Services boasts a team of highly skilled developers who excel at creating bespoke features tailored to your business needs. We also integrate top-tier Shopify app technologies to enhance your store’s performance. By collaborating with you, we develop a strategic roadmap that prioritizes on-site performance and customer satisfaction, delivering features that drive tangible results.

                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
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
                                    <h3 style={{ marginBottom: '16px' }}>Shopify conversion rate optimization (CRO) - Design</h3>
                                    <h2 style={{ fontSize: '50px' }}>Design Impactful Shopify Experiences that Engage and Resonate with Customers.</h2>
                                    <p>
                                        An engaging design is key to increasing customer retention and boosting conversions. At Codersh, we craft designs that are visually appealing, brand-aligned, and user-friendly, presenting information in a clear and accessible way. By focusing on design as a critical component of conversion optimization, we help create a seamless customer journey that keeps users engaged and motivated to purchase.

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
                                <img src={ThumbImg3} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7  colo-12  shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h3 style={{ marginBottom: '16px' }}>CRO agency - Split testing & reporting</h3>
                                    <h2 style={{ fontSize: '50px' }}>Let data power your decisions.</h2>
                                    <p>
                                        At Codersh, we believe that data is the cornerstone of effective e-commerce strategies. Our team employs tools like A/B testing, feature reporting, and monthly analytics to track performance and identify opportunities for improvement. By leveraging this data-driven approach, we ensure that every decision contributes to the continuous enhancement of your store’s metrics.
                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
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
                                    <h3 style={{ marginBottom: '16px' }}>CRO - AOV, LTV & Engagement</h3>
                                    <h2 style={{ fontSize: '50px' }}>Building success through essential metrics for sustainable growth.</h2>
                                    <p>
                                        Beyond conversion rate optimization, Codersh Web Services considers key performance indicators like average order value (AOV), lifetime value (LTV), and engagement metrics such as session duration and bounce rates. We adopt a holistic approach to CRO strategies, focusing on creating exceptional customer experiences that not only drive sales but also foster long-term loyalty.
                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
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
                                <img src={ThumbImg2} alt="Thumb" />
                            </FadeInLeft>
                        </div>
                        <div className="col-lg-7  colo-12  shopify-services-data">
                            <FadeInRight>
                                <div className="aximo-default-content">
                                    <h3 style={{ marginBottom: '16px' }}>Growth & Strategy.</h3>
                                    <h2 style={{ fontSize: '50px' }}>Merging knowledge and skill with tested strategies for
                                        consistent growth.</h2>
                                    <p>
                                        For businesses seeking a dedicated partner in e-commerce growth, Codersh’s membership plans provide the ultimate solution. Our team works tirelessly to improve conversion rates through tailored design, feature development, and in-depth audits, all while offering day-to-day support. These memberships are designed to deliver long-term success and comprehensive KPI-driven optimization for Shopify and Shopify Plus stores.
                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
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
        </div>
    )
}

export default ConversionRate