import BreadCrumb from "../../../components/common/Breadcrumb"
import FadeInLeft from "../../../components/animation/FadeInLeft";
import FadeInRight from "../../../components/animation/FadeInRight";
import FadeInStagger from "../../../components/animation/FadeInStagger";
import FadeInUp from "../../../components/animation/FadeInUp";
import ThumbImg1 from "../../../assets/images/images2/service6-1.png";
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
// import QuestionImg from "../../../assets/images/icon/question.svg";
import { Link } from 'react-router-dom';

const faqData = {
    faq1: [
        {
            id: crypto.randomUUID(),
            title: "Localized Selling with a Multi-Store Approach on Shopify",
            text1: "Selling internationally on Shopify offers two main strategies: localizing a single store or setting up separate stores for each region. While both have their benefits and challenges, the multi-store approach offers full control, allowing for tailored customization for each market. This includes unique product offerings, region-specific campaigns, and content adjustments to better connect with local audiences. Although localizing a single store is an option, managing multiple variations under one account can quickly become complex.",
            text2: "A key advantage of using separate Shopify stores for each region is the level of control it offers. Merchants can easily tailor product catalogs, imagery, and content to meet the unique preferences of each market, creating a more personalized customer experience. This targeted approach boosts engagement and drives higher conversions. Plus, Shopify Plus includes up to nine expansion stores at no extra cost, making it a cost-effective solution for businesses looking to scale efficiently.",
        },
        {
            id: crypto.randomUUID(),
            title: "Why Shopify Plus is Ideal for International Expansion?",
            text1: "Beyond its robust infrastructure, Shopify Plus equips merchants with features that empower marketing and e-commerce teams. Automations like inventory flagging or campaign launches are essential when managing a portfolio of stores, ensuring consistent performance across regions. Additionally, tools like Shopify’s Geolocation app redirect customers to region-specific stores seamlessly, improving their experience while optimizing store performance for localized markets.",
        },

    ],


    faq2: [
        {
            id: crypto.randomUUID(),
            title: "Overcoming the Challenges of a Multi-Store Strategy",
            text1: "Managing multiple Shopify stores comes with challenges like inventory synchronization, increased workload for updates, and logistical complexities. A centralized inventory management system is crucial for tracking stock levels across all channels. Additionally, using a Product Information Management (PIM) system, such as Akeneo, streamlines product updates and synchronization across stores. It’s also essential to address issues like cross-region purchasing and smooth currency transitions for global customers",
            text2: "Shopify Plus is built to simplify international operations for high-demand businesses. Features like Shopify Flow automate tasks such as inventory alerts and VIP customer management, while Launchpad helps schedule global campaigns across time zones. Advanced checkout scripts offer customization for in-cart promotions, reducing complexity and boosting efficiency across multiple stores.",
        },
        {
            id: crypto.randomUUID(),
            title: "Final Thoughts",
            text1: "Selling internationally with Shopify can be straightforward with the right strategy and tools in place. At Codersh Web Services, we’ve assisted merchants like Liberation Cocktails in creating successful multi-store setups driven by geolocation technology. Whether you’re considering a single or multi-store approach, we’re here to help you design and implement an international selling strategy that ensures a smooth, optimized shopping experience for customers worldwide.",
        },

    ],
};

const servicesData = [
    {
        id: 1,
        icon: 'fa-solid fa-globe',
        title: 'Finding Your Global Audience with Shopify',
        description: 'Expanding your Shopify store globally starts with pinpointing the right international markets to target. By analyzing your store\'s sessions by location report, you can determine where your visitors are coming from and focus on countries that already show interest in your offerings. If you don’t have international traffic, explore markets with cultural and linguistic similarities or those geographically close to your home base. Such insights help tailor strategies for specific regions, setting the stage for meaningful customer engagement and better conversion rates.',
    },
    {
        id: 2,
        icon: 'fa-solid fa-money-bill-wave',
        title: 'Enabling Multi-Currency Payments for Seamless Transactions',
        description: 'One of the key elements of international ecommerce is allowing customers to pay in their local currency. Shopify Payments offers a seamless way to enable multi-currency support, ensuring international shoppers can browse and check out in their preferred currency. This not only builds trust but also minimizes cart abandonment rates. With features like Shopify’s Geolocation app and custom price adjustments for regional markets, merchants can enhance user experience while ensuring profitability.',
    },
    {
        id: 3,
        icon: 'fa-solid fa-balance-scale',
        title: 'Navigating Taxes and Duties Across Borders',
        description: 'Selling internationally involves complying with varied tax regulations. Shopify simplifies this by automatically including or excluding taxes based on customer locations, catering to the tax norms of regions like Europe and North America. For additional security, integration with tax compliance solutions like Avalara Avatax ensures accurate calculations and protects against penalties, enabling businesses to focus on growth without worrying about tax complications.',
    },
    {
        id: 4,
        icon: 'fa-solid fa-shipping-fast',
        title: 'Effortless Worldwide Shipping with Shopify',
        description: 'Shipping internationally requires a well-thought-out strategy. By configuring shipping zones in Shopify, merchants can create tailored shipping rates for different regions, accounting for size, weight, and potential regulatory restrictions. Partnering with apps like ShipStation ensures smooth global shipping processes, while solutions such as Clicksit can simplify returns, enhancing the post-purchase experience for customers worldwide.',
    },
    {
        id: 5,
        icon: 'fa-solid fa-domain',
        title: 'Localizing Your Storefront with International Domains',
        description: 'Offering international domains allows businesses to craft a localized shopping experience for customers in different countries. These domains display prices in local currencies and adjust content language automatically, building confidence among international shoppers. Shopify\'s built-in SEO optimization ensures that users land on the correct domain for their region, contributing to a seamless browsing and buying experience.',
    },
    {
        id: 6,
        icon: 'fa-solid fa-language',
        title: 'Speaking the Language of Your Customers',
        description: 'Language plays a vital role in connecting with international customers. Nearly 80% of online buyers prefer shopping in their native language. Shopify’s multilingual capabilities, enhanced with tools like Weglot, allow businesses to translate store content efficiently. This ensures that customers from diverse regions feel understood and valued, driving higher engagement and conversions.',
    },
    {
        id: 7,
        icon: 'fa-solid fa-bullseye',
        title: 'Crafting a Tailored Global Marketing Blueprint',
        description: 'To maximize the reach of your international Shopify store, a region-specific marketing strategy is essential. Focused advertising campaigns and targeted promotions can drive traffic to localized versions of your website. By aligning marketing efforts with the preferences of specific markets, you can significantly accelerate demand and conversions.',
    },
    {
        id: 8,
        icon: 'fa-solid fa-rocket',
        title: 'Streamlining Global Operations with Shopify Markets',
        description: 'Shopify Markets is a game-changer for global e-commerce, offering features like duty management, region-specific pricing, and centralized language and currency controls. This all-in-one solution simplifies the complexities of internationalization, empowering merchants to manage global sales seamlessly from a single store. Leverage these features to unlock the full potential of your international e-commerce strategy.',
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


function Internationalization() {

    const iconboxWrapStyle = {
        minHeight: '370px',
    };
    const iconboxWrapStyleMobile = {
        minHeight: 'auto',
    };
    // Detect if the screen width is less than 992px (tablet and mobile)
    const isMobileOrTablet = window.innerWidth < 992;


    return (
        <div>
            <BreadCrumb title="Internationalization With Shopify & Shopify Plus" />

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
                                    <h2 style={{ fontSize: '50px' }}>Shopify & Shopify Plus: The Key to Global Expansion</h2>
                                    <p>
                                        As more businesses expand globally on Shopify, adapting to international markets is essential. Going global allows merchants to reach a larger customer base, boost transactions, and increase revenue. Recent research shows that 35% of Shopify traffic comes from international visitors, highlighting the importance of a global ecommerce strategy. Furthermore, 92% of these visitors prefer shopping in their local currency, with 33% likely to abandon purchases if prices are only in US dollars.

                                    </p>
                                    <p>
                                        Creating a dynamic product offering for global customers can seem challenging, but Shopify makes international selling easy. With tools like multi-currency support and localized storefronts, Shopify and Shopify Plus help merchants navigate the complexities of global ecommerce effortlessly. Here’s your ultimate guide to selling internationally with Shopify and Shopify Plus.

                                    </p>

                                    <FadeInUp className="aximo-btn-wrap2 mt-3  shopify-services-btn">
                                        <Link to="#" className="iwt-button">
                                            Get Started Today
                                        </Link>
                                    </FadeInUp>
                                </div>
                            </FadeInRight>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section aximo-project-page text-center dark-bg">
                <div className="container aximo-section-padding5 shopify-services-data">
                    <h2 className="mb-4 light-text" style={{ fontSize: '50px' }}>
                        Global Commerce with Shopify Plus
                    </h2>
                    <p className="section-description light-text">
                        Shopify Plus is designed for enterprise scalability, which is perfect for businesses expanding globally. It includes all the features of standard Shopify, such as multi-currency, multilingual support, dynamic pricing, and global shipping. Additionally, Shopify Plus offers up to nine expansion stores, allowing businesses to create tailored versions of their main store for different markets.
                        These expansion stores enable precise control over regional strategies, including localized content, pricing, and design. While this requires additional planning, it ensures an optimized shopping experience for diverse audiences, making Shopify Plus a powerful choice for global growth.
                    </p>
                </div>
            </div>
            <div className="section aximo-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap responsive-margin">
                                {faqData.faq1.map((faq) => (
                                    <div key={faq.id} className="aximo-accordion-normal-item">
                                        <div className="aximo-accordion-normal-icon">
                                            <img src={Check} alt="check" />
                                        </div>
                                        <div className="aximo-accordion-normal-data">
                                            <h3>{faq.title}</h3>
                                            <p>{faq.text1}</p>
                                            <p>{faq.text2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap">
                                {faqData.faq2.map((faq) => (
                                    <div key={faq.id} className="aximo-accordion-normal-item">
                                        <div className="aximo-accordion-normal-icon">
                                            <img src={Check} alt="check" />
                                        </div>
                                        <div className="aximo-accordion-normal-data">
                                            <h3>{faq.title}</h3>
                                            <p>{faq.text1}</p>
                                            <p>{faq.text2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding6 pb-0">
                <div className="container">
                    <div className="aximo-service-wrap pb-0" style={{ borderBottom: "none" }}>
                        <div className="row">
                            {servicesData.map((item, index) => (
                                <FadeInStagger key={item.id} index={index} className="col-lg-6">
                                    <div className="aximo-iconbox-wrap" style={isMobileOrTablet ? iconboxWrapStyleMobile : iconboxWrapStyle}>
                                        {/* <div className="aximo-iconbox-icon">
                                            <i className={`${icon}`}></i>
                                        </div> */}
                                        <div className="aximo-iconbox-data">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            {/* <Link to="/single-service" className="aximo-icon">
                                                <img src={ArrowRightImg} alt="arrow right" />
                                            </Link> */}
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
                    <div className="aximo-pricing-border">
                        <div className="row">
                            <div className="col-lg-6 px-3">
                                <div className="aximo-accordion-normal-wrap m_top_responsive">
                                    <div className="aximo-accordion-normal-item">
                                        <div className="aximo-accordion-normal-data">
                                            <h3>Crafting Exceptional Shopify Ecommerce Stores.</h3>
                                            <p>
                                                We are a seasoned e-commerce agency dedicated to collaborating with ambitious brands to design, develop, and enhance exceptional Shopify & Shopify Plus websites. Our solutions drive e-commerce growth, helping brands choose the ideal strategy, design, and technology. Reach out to us today!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-normal-item">
                                        <div className="aximo-accordion-normal-data">

                                            <ul>
                                                <li>
                                                    <img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />
                                                    Custom Shopify Plus Websites
                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />
                                                    Tailored and Captivating Designs
                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />
                                                    Advanced Features and Functionalities
                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />
                                                    Seamless Platform Migrations
                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />
                                                    Strategies to Boost Conversions and Sales
                                                </li>
                                                <li>
                                                    <img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />
                                                    Trusted Expert Partner for Long-Term Growth
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className=" col-lg-6 px-3 mt-md-5 mt-sm-5 mt-xs-5 mt-5 mt-lg-0 ">
                                <div className="row">
                                    {featuresData.map((feature, index) => (
                                        <FadeInStagger key={feature.id} index={index} className="col-sm-6 col-lg-4 col-md-4 col-6" >
                                            <div className="aximo-iconbox-wrap2" style={{ padding: "0px" }}>
                                                <img src={feature.img} alt="Illustrator1Img" />
                                            </div>
                                        </FadeInStagger>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internationalization