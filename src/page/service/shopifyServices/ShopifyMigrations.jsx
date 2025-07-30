import BreadCrumb from "../../../components/common/Breadcrumb";
import ThumbImg2 from "../../../assets/images/images2/Shopify_connect.webp";
import ThumbImg1 from "../../../assets/images/images2/6.webp";
import Star2Img from "../../../assets/images/v1/icon/star2.webp";
import Shape4Img from "../../../assets/images/v5/shape4.webp";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import { Link } from "react-router-dom";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import ServiceCard from "../../../components/home-two/services/ServiceCard";
import FeatureImg1 from "../../../assets/images/images2/shopifyplus-300x300.jpg.webp";
import FeatureImg2 from "../../../assets/images/images2/bold-300x300.jpg.webp";
import FeatureImg3 from "../../../assets/images/images2/klarna-300x300.jpg.webp";
import FeatureImg4 from "../../../assets/images/images2/klaviyo-300x300.jpg.webp";
import FeatureImg5 from "../../../assets/images/images2/mailchimp-300x300.jpg.webp";
import FeatureImg6 from "../../../assets/images/images2/applepay-300x300.jpg.webp";
import FeatureImg7 from "../../../assets/images/images2/feefo-300x300.jpg.webp";
import FeatureImg8 from "../../../assets/images/images2/zendesk-300x300.jpg.webp";
import FeatureImg9 from "../../../assets/images/images2/loyaltylion-300x300.jpg.webp";
import Check from "../../../assets/images/icon/check.svg";
import { createGlobalStyle } from "styled-components";
import SEO from "../../../components/common/SEO";
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

const servicesData = [
  {
    id: 1,
    icon: "fa-solid fa-business-time",
    title: "In-Depth Planning & Consultation",
    description:
      "We work closely with you to understand your business requirements, identify potential challenges, and create a strategic migration roadmap.",
  },
  {
    id: 2,
    icon: "fa-solid fa-database",
    title: "Data Migration",
    description:
      "Transfer your products, customer details, order history, and content safely and securely, ensuring no data loss during the process.",
  },
  {
    id: 3,
    icon: "fa-solid fa-layer-group",
    title: "Custom Design & Theme Integration",
    description:
      "Whether you want to replicate your current store’s look or start fresh with a unique Shopify 2.0 theme, we’ve got you covered.",
  },
  {
    id: 4,
    icon: "fa-solid fa-chart-line",
    title: "SEO Retention & URL Redirection",
    description:
      "Protect your hard-earned search rankings with precise URL mapping and SEO optimizations to ensure a smooth transition.",
  },
  {
    id: 5,
    icon: "fa-solid fa-plug",
    title: "Third-Party Integration",
    description:
      "Seamlessly integrate your existing tools and apps, or explore Shopify’s vast ecosystem of plugins to enhance your store’s functionality.",
  },
  {
    id: 6,
    icon: "fa-solid fa-check-circle",
    title: "Quality Assurance & Testing",
    description:
      "From functionality to responsiveness, we rigorously test your store to guarantee it delivers a flawless user experience across all devices.",
  },
  {
    id: 7,
    icon: "fa-solid fa-headset",
    title: "Launch & Post-Migration Support",
    description:
      "Experience a stress-free launch with our end-to-end support. Post-launch, we offer continuous optimization to help your store perform at its best.",
  },
];

// const accordionData = [
//     {
//         id: 1,
//         question: 'What Does Shopify Offer?',
//         answer: 'Shopify is the go-to platform for ecommerce, known for its scalability, rich features, and constant updates. With 6,000+ apps and continuous improvements, Shopify provides unmatched flexibility and power for long-term business growth.',
//     },
//     {
//         id: 2,
//         question: 'Omnichannel & International Selling',
//         answer: 'Shopify’s omnichannel feature lets you sell on platforms like eBay, Amazon, Instagram, and more, while managing everything in one place. It also supports international expansion, helping businesses grow their reach globally.',
//     },
//     {
//         id: 3,
//         question: 'Shopify Powerful Admin',
//         answer: 'Shopify’s user-friendly admin panel allows merchants to easily manage sales, customers, and orders. Its intuitive dashboard and powerful CMS make it easy to update content without technical knowledge or relying on a developer.',
//     },
//     {
//         id: 4,
//         question: 'Reliable and Secure',
//         answer: 'Shopify ensures 99.999% uptime, handling 1 million page views per minute and over 10,000 transactions per minute. With PCI-DSS Level 1 compliance and a dedicated security team, your store is safe from cyber threats.',
//     },
// ];

const servicesData2 = [
  {
    id: crypto.randomUUID(),
    title: "What Does Shopify Offer?",
    description:
      "Shopify is the go-to platform for ecommerce, known for its scalability, rich features, and constant updates. With 6,000+ apps and continuous improvements, Shopify provides unmatched flexibility and power for long-term business growth.",
  },
  {
    id: crypto.randomUUID(),
    title: "Omnichannel & International Selling",
    description:
      "Shopify’s omnichannel feature lets you sell on platforms like eBay, Amazon, Instagram, and more, while managing everything in one place. It also supports international expansion, helping businesses grow their reach globally.",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify Powerful Admin",
    description:
      "Shopify’s user-friendly admin panel allows merchants to easily manage sales, customers, and orders. Its intuitive dashboard and powerful CMS make it easy to update content without technical knowledge or relying on a developer.",
  },
  {
    id: crypto.randomUUID(),
    title: "Reliable and Secure",
    description:
      "Shopify ensures 99.999% uptime, handling 1 million page views per minute and over 10,000 transactions per minute. With PCI-DSS Level 1 compliance and a dedicated security team, your store is safe from cyber threats.",
  },
];

const featuresData = [
  {
    id: crypto.randomUUID(),
    img: FeatureImg1,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg2,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg3,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg4,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg5,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg6,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg7,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg8,
  },
  {
    id: crypto.randomUUID(),
    img: FeatureImg9,
  },
];

function ShopifyMigrations() {
  // const iconboxWrapStyle = {
  //     minHeight: '280px',
  // };
  const iconboxWrapStyle2 = {
    minHeight: "fit-content",
  };
  const iconboxWrapStyle3 = {
    minHeight: "fit-content",
  };
  const iconboxWrapStyleMobile = {
    minHeight: "fit-content",
  };
  // Detect if the screen width is less than 992px (tablet and mobile)
  const isMobileOrTablet = window.innerWidth < 992;

  // Split servicesData into two arrays
  const firstRowData = servicesData.slice(0, 4); // First 3 items
  const secondRowData = servicesData.slice(4); // Remaining items

  return (
    <div>
      <GlobalStyle />
      <SEO
        title="Shopify Migration Services | Seamless Store Transition - Codersh Web Services"
        description="Migrate your e-commerce store to Shopify with Codersh Web Services. We offer smooth, secure, and hassle-free migration for all your data, products, and customer information."
        keywords="Shopify migration, e-commerce migration, Shopify store migration, Shopify data migration, Shopify product migration, secure Shopify migration, Codersh Web Services"
        canonical="https://react-vite-codersh.vercel.app/shopify-migrations"
      />
      <BreadCrumb title="Shopify Migrations" />

      <div className="section aximo-section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <FadeInRight className="aximo-content-thumb shopify-services-img">
                <img
                  src={ThumbImg1}
                  alt="Shopify Migration Illustration showing eCommerce platform replatforming"
                />
              </FadeInRight>
            </div>
            <div className="col-lg-7 shopify-services-data">
              <FadeInLeft>
                <div className="aximo-default-content">
                  <h2 className="mb-2">
                    Shopify Migration Experts - Let's Replatform to Shopify with
                    Confidence
                  </h2>
                  <p className="mb-4">
                    At Codersh, we specialize in seamless Shopify migrations,
                    helping businesses shift from platforms like Magento,
                    WooCommerce, and BigCommerce to Shopify or Shopify Plus.
                    With a focus on precision and strategy, our migration
                    services ensure your transition is smooth, secure, and
                    optimized for success.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                    <Link
                      to="/contact-us"
                      className="iwt-button"
                      aria-label="Contact us to start your Shopify migration"
                    >
                      Get in touch today!
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
                <img
                  src={ThumbImg2}
                  alt="Shopify store data transfer and integration visual"
                />
              </FadeInLeft>
            </div>
            <div className="col-lg-7  colo-12  shopify-services-data">
              <FadeInRight>
                <div className="aximo-default-content">
                  <h2 className="mb-2">Shopify Migration Services</h2>
                  <p className="mb-2">
                    At Codersh, we specialize in seamless Shopify and Shopify
                    Plus migrations. With years of experience in re-platforming,
                    we help businesses smoothly transition to
                  </p>
                  <p className="mb-4">
                    Whether you're migrating from platforms like Magento,
                    WooCommerce, BigCommerce, or others, We are your trusted
                    partner for a smooth, hassle-free transition to Shopify. Get
                    in touch with us today to learn how we can help streamline
                    your migration.
                  </p>
                  <FadeInUp className="aximo-btn-wrap2 mt-0 shopify-services-btn">
                    <Link
                      to="/contact-us"
                      className="iwt-button"
                      aria-label="Contact us to start your Shopify migration"
                    >
                      Learn More
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
          <div className="aximo-section-title center">
            <h2 className="mb-5">
              Our Shopify Migration
              <span className="aximo-title-animation">
                Process
                <span className="aximo-title-icon">
                  <img
                    src={Star2Img}
                    alt="Decorative star icon highlighting section title"
                  />
                </span>
              </span>
            </h2>
          </div>
          <div className="aximo-service-wrap">
            <div className="row">
              {firstRowData.map((item, index) => (
                <FadeInStagger key={item.id} index={index} className="col-lg-3">
                  <div
                    className="aximo-iconbox-wrap"
                    style={
                      isMobileOrTablet
                        ? iconboxWrapStyleMobile
                        : iconboxWrapStyle2
                    }
                  >
                    <div className="aximo-iconbox-data">
                      <h3 className="mb-2">{item.title}</h3>
                      <p className="aximo-p-second">{item.description}</p>
                    </div>
                  </div>
                </FadeInStagger>
              ))}
            </div>
            <div className="row">
              {secondRowData.map((item, index) => (
                <FadeInStagger key={item.id} index={index} className="col-lg-4">
                  <div
                    className="aximo-iconbox-wrap"
                    style={
                      isMobileOrTablet
                        ? iconboxWrapStyleMobile
                        : iconboxWrapStyle3
                    }
                  >
                    <div className="aximo-iconbox-data">
                      <h3 className="mb-2"> {item.title}</h3>
                      <p className="aximo-p-second">{item.description}</p>
                    </div>
                  </div>
                </FadeInStagger>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            className="aximo-faq-wrap"
            style={{ padding: "0px 0px 100px 0px" }}
          >
            <div className="col-lg-12 d-flex align-items-center text-center">
              <div className="aximo-default-content">
                <h2>Why Migrate to Shopify?</h2>
                <p style={{ marginBottom: "48px" }}>
                  At Codersh, we believe in using cutting-edge technology and
                  growth-driven strategies to deliver exceptional results. When
                  you migrate to Shopify & Shopify Plus, we ensure your store is
                  fast, engaging, and easy to manage for the long haul. We
                  follow best practices to make sure your store is optimized for
                  performance and scalability, so you can focus on growing your
                  business.
                </p>
              </div>
            </div>
            {/* accordions */}
            {/* <div className="aximo-faq-wrap" >
                            <FadeInUp className="accordion aximo-accordion-wrap" id="aximo-accordion">
                                <div className="row">
                                    {accordionData.map((item) => (
                                        <div className="col-lg-6" key={item.id}>
                                            <div className="accordion-item ">
                                                <h3 className="accordion-header">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${item.id}`}
                                                    >
                                                        {item.question}
                                                    </button>
                                                </h3>
                                                <div
                                                    id={`collapse${item.id}`}
                                                    className={`accordion-collapse collapse `}
                                                    data-bs-parent="#aximo-accordion"
                                                >
                                                    <div className="accordion-body">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeInUp>
                        </div> */}
            <div className="aximo-service-increase-wrap">
              {servicesData2.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="aximo-cta2-section aximo-section-padding extra-side-margin dark-bg mb-5"
        style={{ padding: "30px 0px" }}
      >
        <div className="container">
          <div className="aximo-cta2-wrap shopify-services-data">
            <h2 className="mb-4">Looking for a Shopify migration agency?</h2>
            <p className="mb-4">
              We are an experienced Shopify migration agency partnering with
              world-renowned brands and ambitious start-ups supporting
              migrations from a multitude of e-commerce platforms. Contact us to
              discuss our Shopify migration services today!
            </p>
            <FadeInUp>
              <Link
                to="/contact-us"
                className="aximo-default-btn pill aximo-header-btn"
                aria-label="Contact our Shopify migration experts"
              >
                Contact Us
              </Link>
            </FadeInUp>
          </div>
        </div>
        <div className="aximo-cta-shape3">
          <img src={Shape4Img} alt="Decorative background shape used in CTA" />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="aximo-pricing-border">
            <div className="row">
              <div className=" col-lg-6 px-3">
                <div className="row">
                  {featuresData.map((feature, index) => (
                    <FadeInStagger
                      key={feature.id}
                      index={index}
                      className="col-sm-6 col-lg-4 col-md-4 col-6"
                    >
                      <div
                        className="aximo-iconbox-wrap2 mb-0"
                        style={{ padding: "0px" }}
                      >
                        <img
                          src={feature.img}
                          alt={`Partner logo ${
                            index + 1
                          } - Shopify App Integration`}
                        />
                      </div>
                    </FadeInStagger>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 px-3">
                <div className="aximo-accordion-normal-wrap m_top_responsive">
                  <div className="aximo-accordion-normal-item">
                    <div className="aximo-accordion-normal-data">
                      <h3>
                        Transform Your E-commerce with Elite Shopify Development{" "}
                      </h3>
                      <p>
                        We're more than just developers – we're your strategic
                        partners in Shopify's success. As certified Shopify Plus
                        experts, we combine technical mastery with deep platform
                        knowledge to elevate your online store to new heights.
                      </p>
                    </div>
                  </div>
                  <div className="aximo-accordion-normal-item">
                    <div className="aximo-accordion-normal-data">
                      <h3>Our Advantage:</h3>
                      <ul>
                        <li>
                          <img
                            src={Check}
                            alt="Checkmark icon for service benefit"
                            style={{ color: "#000000", marginRight: "20px" }}
                          />
                          Monthly Payment
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="Checkmark icon for service benefit"
                            style={{ color: "#000000", marginRight: "20px" }}
                          />
                          No Setup Expenses
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="Checkmark icon for service benefit"
                            style={{ color: "#000000", marginRight: "20px" }}
                          />
                          Transparent Billing with Tracked Hours
                        </li>
                        <li>
                          <img
                            src={Check}
                            alt="Checkmark icon for service benefit"
                            style={{ color: "#000000", marginRight: "20px" }}
                          />
                          Assurance of No Hidden Fees
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aximo-accordion-normal-item">
                    <div className="aximo-accordion-normal-data">
                      <p>
                        We don't just move your store to Shopify – we optimize
                        it. Through careful curation of the most powerful apps
                        and custom feature development, we create seamless
                        e-commerce experiences that grow with your business. Our
                        partnerships with industry-leading Shopify Plus
                        providers ensure you get access to cutting-edge
                        solutions that deliver real results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopifyMigrations;
