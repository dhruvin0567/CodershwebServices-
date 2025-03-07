import BreadCrumb from "../../../components/common/Breadcrumb";
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInUp from "../../../components/animation/FadeInUp";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import { Link } from 'react-router-dom';
import Check from "../../../assets/images/icon/check.svg";
import question from "../../../assets/images/icon/question.svg";
import ThumbImg1 from "../../../assets/images/images2/service8_2.png";
import ThumbImg2 from "../../../assets/images/images2/service4_card1.png";
import ThumbImg3 from "../../../assets/images/images2/service8_3.png";
import ThumbImg4 from "../../../assets/images/images2/service8_1.png";
// import ThumbImg4 from "../../../assets/images/images2/service12_4.webp";
// import ThumbImg5 from "../../../assets/images/images2/services12_5.jpg";
// import Shape4Img from "../../../assets/images/v5/shape4.png";

const servicesData = [
    {
        id: 1,
        icon: 'fa-solid fa-globe',
        title: 'Enhancing Customer Experience',
        description: 'Adding subscriptions to your Shopify store creates a seamless shopping experience, making it easier for customers to access products while fostering loyalty and repeat purchases. Subscriptions simplify reordering, improve customer retention, and increase lifetime value (LTV) by streamlining the entire shopping process.',
    },
    {
        id: 2,
        icon: 'fa-solid fa-money-bill-wave',
        title: 'Driving Predictable Revenue',
        description: 'Subscriptions provide a reliable and predictable revenue stream, offering stability for better inventory management, cash flow control, and long-term strategic planning. With recurring revenue, your Shopify store can focus on business growth and goal achievement without worrying about fluctuations in sales.',
    },
    {
        id: 3,
        icon: 'fa-solid fa-balance-scale',
        title: 'Boosting Customer Loyalty',
        description: 'Subscriptions often encourage higher financial commitment than one-time purchases, helping to turn casual shoppers into loyal customers. Regular deliveries eliminate the need for re-engagement with the checkout process, offering a hassle-free experience that keeps customers coming back.',
    },
    {
        id: 4,
        icon: 'fa-solid fa-shipping-fast',
        title: 'Leveraging Data-Driven Insights',
        description: 'Subscriptions offer invaluable data on customer behavior, churn rates, and revenue trends. This data helps businesses forecast growth, improve marketing strategies, and optimize customer retention. By tracking metrics like churn rate (typically 6-10% depending on the industry), businesses can fine-tune their offerings and retention strategies.',
    },
    {
        id: 5,
        icon: 'fa-solid fa-domain',
        title: 'Maximizing Acquisition ROI',
        description: 'Subscribers tend to have a higher lifetime value than non-subscribers, which maximizes the ROI on customer acquisition efforts. With subscribers generating long-term value, paid campaigns become more cost-effective, lowering the overall cost of acquisition over time.',
    },
    {
        id: 6,
        icon: 'fa-solid fa-language',
        title: 'Encouraging Upselling Opportunities',
        description: 'Subscriptions open the door to upselling and cross-selling opportunities. Tools like ReCharge make it easy to offer complementary products alongside subscriptions, increasing the average order value (AOV). For example, a pet food subscription can include one-time treats, boosting sales and enhancing customer experience.',
    },
    {
        id: 7,
        icon: 'fa-solid fa-bullseye',
        title: 'Building Brand Loyalty',
        description: 'Timely and convenient deliveries keep customers engaged with your brand. Regular reminder emails and consistent product deliveries ensure your brand stays top-of-mind, demonstrating reliability and convenience that strengthens brand loyalty.',
    },
    {
        id: 8,
        icon: 'fa-solid fa-rocket',
        title: 'Conclusion',
        description: 'Subscriptions on Shopify are a powerful tool for driving growth, fostering customer loyalty, and ensuring a predictable revenue stream. At Codersh Web Services, we specialize in integrating custom Shopify subscription solutions powered by ReCharge, tailoring the experience to fit your brand and customer needs. Ready to unlock the full potential of subscriptions? Let’s elevate your Shopify store and maximize LTV together.',
    },
];

const servicesData2 = [
    {
        id: 1,
        title: "1/ Introduction to Shopify Subscriptions",
        description:
            "Before launching a subscription-based business on Shopify, it’s crucial to select products and subscription types that align with your strategy and deliver value to your customers. Options like trial packs, refill subscriptions, content access, or membership perks (such as free delivery) can be effective choices. Once your offerings are defined, leverage Shopify’s tools and third-party apps to efficiently create, manage, and scale your subscription services.",

    },
    {
        id: 2,
        title: "2/ Innovative Subscription Ideas for Your Shopify Store",
        description: "",

    },
    {
        id: 3,
        title: "3/ Shopify Subscriptions Features and Tools",
        description:
            "Shopify subscriptions seamlessly integrate into your store, providing businesses with tools to set up, manage, and optimize subscription-based products. Key features include customizable subscription widgets, inventory forecasting rules, and smooth payment processing. Third-party apps like ReCharge, along with integrations with tools like Klaviyo and Gorgias, further simplify subscription management.",

    },
    {
        id: 4,
        title: "4/ Custom Shopify Subscription Solutions",
        description:
            "Codersh Web Services specializes in creating custom subscription models for Shopify and Shopify Plus stores. From personalized subscription widgets to custom CSS and navigation, we offer tailored solutions that align with your brand’s identity and enhance the customer experience. Contact our Shopify subscription team today to turn your store into a recurring revenue powerhouse!",

    },

];

function Subscriptions() {

    const iconboxWrapStyle = {
        minHeight: '340px',
    };
    const iconboxWrapStyleMobile = {
        minHeight: 'auto',
    };
    // Detect if the screen width is less than 992px (tablet and mobile)
    const isMobileOrTablet = window.innerWidth < 992;


    return (
        <div>
            <BreadCrumb title="Subscriptions On Shopify" />

            <div className="section aximo-project-page text-center dark-bg border-top">
                <div className="container aximo-section-padding5 shopify-services-data">
                    <h2 className="mb-4 light-text" style={{ fontSize: '50px' }}>
                        Custom Shopify Subscription Integration with ReCharge to Boost Loyalty and Lifetime Value
                    </h2>
                    <p className="section-description light-text">
                        The ecommerce subscription market is rapidly growing, from $15 billion in 2019 to a projected $473 billion by 2025. Subscriptions not only generate recurring revenue but also provide valuable insights into customer behavior, supporting long-term planning and growth. Retaining customers is more cost-effective than acquiring new ones, and Shopify subscriptions make it easier to build loyalty and maximize lifetime value (LTV). At Codersh Web Services, we specialize in designing and integrating custom Shopify subscription solutions tailored to your business needs, whether you're aiming for a seamless subscription experience or seeking advanced analytics to optimize your strategies.
                    </p>
                </div>
            </div>

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
                                    {/* <h3 style={{ marginBottom: '16px' }}>Shopify CRO Agency - Shopify developer</h3> */}
                                    <h2 style={{ fontSize: '50px' }}>Our subscription services include:</h2>
                                    <div className="aximo-accordion-normal-item d-flex justify-content-center justify-content-lg-start">
                                        <div className="text-start">
                                            <ul>
                                                <li>
                                                    <img src={Check} alt="check" className=" text-dark me-3 mb-2" />
                                                    <span className="fw-bold">Custom Design Integration:</span>
                                                    <p className="ms-5">Align subscription features with your brand’s identity.</p>

                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" className=" text-dark me-3 mb-2" />
                                                    <span className="fw-bold">Subscription Management Portals:</span>
                                                    <p className="ms-5"> Enable customers to manage their subscriptions effortlessly.</p>

                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" className=" text-dark me-3 mb-2" />
                                                    <span className="fw-bold">Optimized Retention Strategies:</span>
                                                    <p className="ms-5">Boost LTV with smart subscription offerings.</p>

                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" className=" text-dark me-3 mb-2" />
                                                    <span className="fw-bold">Powerful App Integration:</span>
                                                    <p className="ms-5">Leverage tools like ReCharge to streamline the process.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-start"> Start driving loyalty and recurring revenue with Shopify subscriptions powered by Codersh Web Services. Let us help you create a subscription strategy that works!</p>
                                </div>
                            </FadeInRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            Benefits of Adding Subscriptions to Your Shopify Store
                        </h2>
                    </div>
                    <div className="aximo-service-wrap pb-0" style={{ borderBottom: "none" }}>
                        <div className="row">
                            {servicesData.map((item, index) => (
                                <FadeInStagger key={item.id} index={index} className="col-lg-6">
                                    <div className="aximo-iconbox-wrap" style={isMobileOrTablet ? iconboxWrapStyleMobile : iconboxWrapStyle}>
                                        <div className="aximo-iconbox-data">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </FadeInStagger>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap responsive-margin">
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src={question} alt="check" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What Does a Shopify Subscription Service Offer?</h3>
                                        <p>Subscription ecommerce simplifies the shopping experience by offering personalized, convenient, and often more affordable options for repeat purchases. Adding subscriptions to Shopify enables merchants to provide hassle-free access to products like food, beverages, or beauty items, eliminating the repetitive process of re-entering checkout details for each order. This seamless model not only enhances convenience but also helps businesses build customer loyalty, encouraging one-time buyers to become recurring subscribers.</p>
                                        <p>By offering subscription discounts, merchants can incentivize customers to commit long-term, ensuring a steady stream of recurring revenue. This model empowers businesses to predict future sales, plan for growth, and refine strategies with confidence. Let Codersh Web Services help you unlock the full potential of Shopify subscriptions and take your ecommerce business to the next level!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap">
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src={question} alt="check" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>How Does Shopify Support Subscription Services?</h3>
                                        <p>Shopify now supports native subscription functionality, streamlining the way merchants manage recurring purchases. Previously, subscription orders redirected customers to external checkout pages, causing friction. With Shopify’s new system, customers can add subscription items directly to their cart and complete the purchase within the Shopify checkout, creating a seamless experience. The core of this functionality is “selling plans,” specialized data modules that notify Shopify’s checkout system of subscription items, detailing payment intervals and amounts to efficiently process recurring orders.</p>
                                        <p>While Shopify handles recurring payments, it requires integration with a subscription app for subscriber management and product setup. These apps offer features like subscription dashboards, customer management tools, and in-depth reporting. Shopify also provides additional tools, such as filtering customer lists by subscription status and creating custom shipping rules for subscription orders. Codersh Web Services can help you optimize Shopify’s subscription features to boost recurring revenue and enhance customer loyalty. Let's discuss how we can tailor this for your business!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap">

                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src={question} alt="check" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What Features are Included with Shopify Subscriptions?</h3>
                                        <p>When integrating subscriptions into your Shopify store, it’s essential to understand the key features and tools available—both through Shopify and the apps that power subscription services. Here’s what to expect and how to make the most of it.</p>
                                        <div>
                                            <ul>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Customizable Subscription UI</h6>
                                                    <p>
                                                        Most subscription apps provide a default front-end UI for customers to choose between one-time purchases and subscriptions, often located on product pages, but it can feel generic and misaligned with your brand. At Codersh Web Services, we specialize in creating custom subscription UIs that match your brand’s aesthetics, and we strategically position subscription options across various pages, such as collections, product recommendations, and the cart, to optimize the customer experience.
                                                    </p>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Customer Subscription Portal</h6>
                                                    <p>
                                                        A subscription portal is a vital feature for offering a seamless customer experience. Most leading Shopify subscription apps include a portal where customers can manage their subscriptions independently, reducing strain on your customer service team.
                                                    </p>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Through the portal, customers can:</h6>
                                                    <div className="aximo-team-setails mb-2">
                                                        <ul className="ms-4">
                                                            <li className="mb-0">View active subscriptions.</li>
                                                            <li className="mb-0">Skip, pause, or cancel subscriptions.</li>
                                                            <li className="mb-0">Update subscription details, including shipping information and payment methods.</li>
                                                        </ul>
                                                    </div>
                                                    <p>We view portals as a great opportunity to upsell additional products, turning them into powerful revenue generators!</p>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Subscription Notifications</h6>
                                                    <p>
                                                        Your subscription app will typically handle automated notifications, such as emails or SMS alerts, to keep customers informed. These notifications remind customers about upcoming charges, shipping updates, and give them an opportunity to modify or cancel their subscriptions.
                                                    </p>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Why Partner with Codersh Web Services for Shopify Subscriptions?</h6>
                                                    <p className="mb-2">
                                                        We make your Shopify subscription experience both functional and visually engaging, fully tailored to your brand. From custom interfaces to optimized portals and notifications, we deliver solutions that boost customer satisfaction and recurring revenue.
                                                    </p>
                                                    <p>Let’s talk about how we can elevate your Shopify store with the best subscription strategies today!</p>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap">

                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src={question} alt="check" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>Which Apps Are Best for Enabling Subscriptions on Shopify?</h3>
                                        <p>
                                            Shopify is a powerful platform for managing orders, customers, and payments for subscriptions. However, to customize subscription options like intervals, discounts, and customer preferences, you'll need a specialized app from the Shopify App Store. Here’s a guide to some of the top subscription apps and their unique features:
                                        </p>
                                        <div>
                                            <ul>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">ReCharge Subscriptions</h6>
                                                    <p className="mb-0">
                                                        ReCharge is a leading and trusted subscription management provider for Shopify, trusted by over 15,000 merchants. It offers powerful tools such as:
                                                    </p>
                                                    <div className="aximo-team-setails mb-2">
                                                        <ul className="ms-4">
                                                            <li className="mb-0">Subscription management dashboard.</li>
                                                            <li className="mb-0">
                                                                Build-a-box functionality for customizable subscription bundles.</li>
                                                            <li className="mb-0">Advanced automation for subscription workflows.</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Yotpo Subscriptions</h6>
                                                    <p>
                                                        Perfect for quick setup, Yotpo subscriptions allow merchants to launch subscription offerings in just eight minutes! If you already use other Yotpo products, this app integrates seamlessly, making it an excellent choice for unified customer experience management.
                                                    </p>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Skio Subscriptions</h6>
                                                    <div className="aximo-team-setails mb-2">
                                                        <span>
                                                            Skio stands out for its innovative features, including:
                                                        </span>
                                                        <ul className="ms-4">
                                                            <li className="mb-0">Password-less login for quicker customer access.</li>
                                                            <li className="mb-0">Advanced subscription analytics.</li>
                                                            <li className="mb-0">"Gift your next subscription order" options.</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Bold Subscriptions</h6>
                                                    <p>
                                                        As one of the original Shopify subscription apps, Bold Subscriptions offers reliable and straightforward features. Rated 4.1/5 on the Shopify App Store, Bold remains a solid choice for merchants seeking simplicity.
                                                    </p>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Paywhirl</h6>
                                                    <p className="mb-2">
                                                        Paywhirl simplifies the subscription activation process, allowing merchants to set up subscriptions directly from product pages and start selling quickly.
                                                    </p>
                                                    <p>Let’s talk about how we can elevate your Shopify store with the best subscription strategies today!</p>
                                                </li>
                                                <li className="mb-4">
                                                    <h6 className="mb-2">Smartrr Subscriptions</h6>
                                                    <div className="aximo-team-setails mb-2">
                                                        <span>
                                                            Smartrr prioritizes customer flexibility and experience, offering features such as:
                                                        </span>
                                                        <ul className="ms-4">
                                                            <li className="mb-0">Subscription swapping.</li>
                                                            <li className="mb-0">Skipping or delaying shipments.</li>
                                                            <li className="mb-0">Greater control for customers to manage their subscription preferences.</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
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
                                    {/* <h3 style={{ marginBottom: '16px' }}>Subscriptions on Shopify</h3> */}
                                    <h2 style={{ fontSize: '50px' }}>How Can You Offer Custom Build-A-Box Options with Shopify Subscriptions?</h2>
                                    <p>
                                        Build-a-box is a powerful feature gaining popularity among subscription-based businesses, offering customers greater flexibility. It’s especially effective for brands selling low-cost items in bulk, like small food packages. Customers can personalize their box to meet minimum order thresholds, enhancing their experience while supporting the merchant's business model. At Codersh Web Services, we specialize in integrating branded build-a-box functionality with ReCharge Bundles, ensuring a seamless, customized experience for your customers.
                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="#" className="iwt-button">
                                            Get in Touch
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
                                    <h2 style={{ fontSize: '50px' }}>Why Add Subscriptions to Your Shopify Store?</h2>
                                    {/* <h3 style={{ marginBottom: '16px' }}>Every successful store starts with a solid foundation.</h3> */}
                                    <p>
                                        Integrating subscriptions into your Shopify store streamlines financial management and sales forecasting. With predictable recurring revenue, you can more effectively plan inventory, allocate resources, and focus on growth. Subscription pricing also helps reduce customer acquisition costs by fostering loyalty, allowing businesses to rely less on ads and promotions. This model ensures steady cash flow, providing better planning and peace of mind.
                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="#" className="iwt-button">
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
                                    {/* <h3 style={{ marginBottom: '16px' }}>Subscriptions on Shopify</h3> */}
                                    <h2 style={{ fontSize: '50px' }}>How Subscriptions Boost Lifetime Value (LTV) and Average Order Value (AOV)
                                    </h2>
                                    <p>
                                        Subscriptions foster consistent customer interactions, providing valuable insights into behavior and preferences. This allows you to refine your offerings, increasing satisfaction and loyalty. Subscription-based businesses typically see higher lifetime value (LTV) and average order value (AOV), as recurring customers spend more over time. By building trust and delivering seamless experiences, you’re positioned to upsell additional products and drive long-term growth. For expert subscription management and integrations, Codersh Web Services is your trusted partner. Contact us to unlock the full potential of Shopify subscriptions!
                                    </p>
                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="#" className="iwt-button">
                                            Connect to Us
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInLeft>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="aximo-faq-wrap" style={{ padding: "0px 0px 100px 0px" }}>
                        <div className="col-lg-12 d-flex align-items-center text-center">
                            <div className="aximo-default-content" >
                                <h2>
                                    Types of Shopify Recurring Sales & Choosing the Right
                                    Approach
                                </h2>
                            </div>
                        </div>

                        <div className="aximo-service-increase-wrap mt-5">
                            {servicesData2.map((item, index) => (
                                <div className="aximo-service-increase-row" key={index}>
                                    <div className="aximo-service-increase-item">
                                        <img className="swipeimage" src={item.img} alt="thumb" />
                                        <div className="aximo-service-increase-title">
                                            <h3>{item.title}:</h3>
                                        </div>
                                        {item.id !== 2 && (
                                            <div className="aximo-service-increase-body">
                                                <p>{item.description}</p>
                                            </div>
                                        )}
                                        {item.id === 2 && (
                                            <div className="aximo-service-increase-body">
                                                <p>
                                                    <strong>Product Bundles/Boxes:</strong>
                                                    Curate exciting product bundles or monthly subscription boxes to surprise customers and boost retention.
                                                </p>
                                                <p>
                                                    <strong>Product Refills:</strong>
                                                    Simplify shopping with automatic refills for consumables like pet food, beauty products, or vitamins.
                                                </p>
                                                <p>
                                                    <strong>Try Before You Buy:</strong>
                                                    Offer discounted trial sizes for customers to sample products before committing to a full subscription.
                                                </p>
                                                <p>
                                                    <strong>Content Subscriptions:</strong>
                                                    Provide exclusive access to premium content like magazines or educational resources for consistent revenue.
                                                </p>
                                                <p>
                                                    <strong>Memberships:</strong>
                                                    Offer exclusive perks and rewards through memberships, fostering a loyal community with recurring fees.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Subscriptions