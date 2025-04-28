import BreadCrumb from "../../../components/common/Breadcrumb"
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../components/animation/FadeInStaggerTwo";
import { Link } from 'react-router-dom';
import ThumbImg1 from "../../../assets/images/images2/service5_1_2.webp";
import ThumbImg2 from "../../../assets/images/images2/service5_2.webp";
import ThumbImg3 from "../../../assets/images/images2/service5_3.webp";
import ThumbImg4 from "../../../assets/images/images2/service8_2.webp";
// import Star2Img from "../../../assets/images/v1/icon/star2.webp";
import { createGlobalStyle } from 'styled-components';
import SEO from "../../../components/common/SEO";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

function Support_Maintanace() {
    return (
        <div>
            <GlobalStyle />
            <SEO
                title="Shopify Support & Maintenance Services | Codersh Web Services"
                description="Ensure your Shopify store runs smoothly with Codersh Web Services. Our comprehensive support and maintenance services cover updates, troubleshooting, and performance optimization."
                keywords="Shopify support, Shopify maintenance, Shopify store updates, e-commerce troubleshooting, store performance optimization, Shopify experts, Codersh Web Services"
                canonical="https://react-vite-codersh.vercel.app/support-&-maintanance"
            />
            <BreadCrumb title="Support & Maintanance" />

            <FadeInStaggerTwo>
                <FadeInStaggerTwoChildren>
                    <div className="section aximo-project-page text-center light-bg">
                        <div className="container aximo-section-padding5  shopify-services-data">
                            <h3 className="mb-2 dark-text">
                                Ongoing Shopify Expertise: Connect with Skilled Developers, Designers, and Growth Strategists Anytime, Throughout the Month.
                            </h3>
                            <p className="section-description dark-text">
                                With one membership retainer, access all our expert Shopify services every month. Our membership provides dedicated support and optimization services designed to help your Shopify or Shopify Plus store grow, improve, and thrive in today’s competitive market.
                            </p>

                        </div>
                    </div>
                </FadeInStaggerTwoChildren>
                <FadeInStaggerTwoChildren>
                    <div className="section aximo-project-page text-center dark-bg">
                        <div className="container aximo-section-padding5 shopify-services-data">
                            <h3 className="mb-2 light-text" >
                                Partner with a Dedicated Shopify Team Committed to Your Store’s Success, Driving Continuous Growth and Innovation. Your Goals Are Our Priority.
                            </h3>
                            <p className="section-description light-text">

                                Codersh offers comprehensive monthly support retainer services for Shopify and Shopify Plus store owners. Our memberships provide access to an expert team specializing in development, design, technical support, and strategic consultancy. With flexible hours tailored to your business needs, Codersh ensures seamless growth and ongoing optimization for stores of all sizes. Managed by a dedicated team of Shopify professionals, our retainer services deliver reliable support and expert solutions month after month, helping your store thrive in a competitive e-commerce landscape.

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
                                    <h3 className="mb-2">Shopify Development Retainer</h3>
                                    <h2 className="mb-2">Leverage Conversions with Premium, Cutting-Edge Technology.</h2>
                                    <p className="mb-4">
                                        Codersh Web Services offers access to a team of highly skilled Shopify developers through our retainer services. As accredited Shopify experts, we specialize in launching impactful features for your customers, whether through bespoke development or integrating best-in-class Shopify apps. From fixing bugs and making tweaks to creating custom apps and implementing subscription features, our developers ensure your store is equipped with the tools and functionality it needs to succeed.

                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-0  shopify-services-btn">
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
                                    <h3 className="mb-2">Shopify Retainer</h3>
                                    <h2 className="mb-2">Captivate Shoppers With Premium Design</h2>
                                    <p className="mb-4">
                                        Our specialized web designers craft UI designs that perfectly reflect your brand’s identity while prioritizing conversions and growth. By staying consistent with your brand guidelines and focusing on creating a standout experience, we ensure your online store captivates and engages your audience. With the competitive landscape of e-commerce growing rapidly, leveraging Codersh’s design expertise through your Shopify retainer will give your store a critical edge.
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
                                    <h3 className="mb-2">Shopify Optimization Retainer</h3>
                                    <h2 className="mb-2">Conversion Rate Optimization</h2>
                                    <p className="mb-4">
                                        Our CRO agency services are designed to help Shopify and Shopify Plus store owners achieve sustainable growth and improved conversion rates. By combining expert web design, development, technical support, and strategic consultancy, we optimize every aspect of your store to enhance user behavior and drive purchasing decisions. Codersh’s CRO strategies are tailored to improve key metrics and support long-term success for your business.
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
                                    <h3 className="mb-2">Technical Support & Shopify Support Services</h3>
                                    <h2 className="mb-2">Your dedicated support team, ready when needed.</h2>
                                    <p className="mb-4">
                                        Running an online store can be challenging, but Codersh is here to help. Through email and ongoing communication, we provide comprehensive support to your team, handling queries and troubleshooting issues specific to your store. Unlike standard Shopify support, we delve deep into your store’s unique needs. For businesses seeking urgent assistance or priority development, our service level agreement add-on, "Codersh Response," ensures rapid and reliable support.
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
        </div>
    )
}

export default Support_Maintanace