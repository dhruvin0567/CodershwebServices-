import BrandImg1 from "../../assets/images/brand_Webp/queenv-1.webp"
import BrandImg2 from "../../assets/images/brand_Webp/queenv-2.webp"
import BrandImg3 from "../../assets/images/brand_Webp/queenv-3.webp"
import BrandImg4 from "../../assets/images/brand_Webp/queenv-4.webp"
import Brandcard1 from "../../assets/images/images2/1.png"
import Brandcard2 from "../../assets/images/images2/2.png"
import Brandcard3 from "../../assets/images/images2/3.png"
import VideoSlider_2 from "../../components/common/VideoSlider_2"


function SingleBrandCustom() {
    return (
        <div style={{ overflowX: "hidden" }}>

            <div className="Brand-breadcrumb">
                <div className="container">
                    <br />
                    <br />
                    <br />
                </div>
            </div>

            <div className="case-study-hero-section">
                <img src={BrandImg1} alt="Company_Site" className="img-fluid" />
            </div>

            <div className="cs-text">
                <div className="container-lg ">
                    <div className="row">
                        <div className=" col-md-6 text-start">
                            <div className="p-4 p-lg-5">
                                <h2 className="pb-3">The Brief</h2>
                                <p className="brand-text">
                                    The Split Grip Trainer is a patent-pending tool designed to refine swing mechanics and enhance player performance. With three training modes-split grip, short bat and one-hand-it helps athletes build strength, control, and efficiency, making it an essential aid for improving batting technique. Founded by former professional players Cory Voss and Trevor Goldberg, the Split Grip Trainer combines their deep expertise in baseball and bat crafting. Cory, a Division 1 All-American and former draft pick, owns The Baseball Mill in Pueblo, Colorado, while Trevor, a former collegiate player, has been crafting custom wood bats with Berg Bat Company since he was 15. Together, they created the Split Grip Trainer to elevate training and player performance across all skill levels.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 px-5 bg-light">
                            <ul className="py-4 py-lg-5 mt-0 mt-md-5">
                                <li className="brand-info-li">
                                    <p>Industry</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }} >Sports Equipment</p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Project</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }}>

                                        Brand Design / Development
                                        <br />
                                        Web Design & Development
                                    </p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Technology</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }}>
                                        Shopify Development <br />
                                        E-Commerce & Payments Intigration <br />
                                        Bootstrap UI Framework

                                    </p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Visit</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }}>
                                        <a
                                            rel="noopener noreferrer"
                                            href="https://splitgrip.com/"
                                            target="_blank"
                                            style={{ fontStyle: "none", color: "black" }}
                                        >
                                            splitgrip.com
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-section">
                <div className="case-study-section-img">
                    <img src={BrandImg2} alt="LaptopView_Of_Site" />
                </div>
            </div>

            <div className="cs-richtext text-center">
                <div className="container-lg bg-light p-lg-5 p-sm-4 p-4">
                    <h2 className="mb-4 mb-lg-5">Challange</h2>
                    <div className="cs-richtext-paragraph mx-lg-5 px-lg-5 pb-5">
                        <p className="brand-text" >
                            SplitGrip.com struggled with low user engagement and high cart abandonment rates, primarily due to a website structure that was difficult to navigate and an outdated design. The site’s user experience did not align with the premium brand image that SplitGrip aimed to project. As a result, customers found it hard to easily explore products, leading to frustration and lost sales. Additionally, the design lacked the modern, polished look needed to attract and retain customers. These issues hindered the company’s ability to fully capitalize on its innovative products and premium positioning in the market.
                        </p>
                    </div>
                </div>
            </div>

            <div className="cs-images-section ">
                <div className="container-lg p-4 p-lg-5 p-sm-4">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="cs-img">
                                <img src={BrandImg3} alt="LaptopView_Of_Site " />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="cs-img">
                                <img src={BrandImg4} alt="MobileView_Of_Site " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cs-richtext text-center">
                <div className="container-lg bg-light p-4 p-lg-5 p-sm-4">
                    <h2 className="mb-4 mb-lg-5">Solution & Results</h2>
                    <div className="cs-richtext-paragraph mx-lg-5">
                        <p className="mb-3 brand-text">
                            The team revamped SplitGrip’s WordPress WooCommerce store, prioritizing a user-friendly design with intuitive navigation. High-quality product images and strategically placed call-to-action buttons were integrated to drive conversions. These improvements led to notable results, including a 40% increase in average session duration, a 35% drop in cart abandonment, and a 70% growth in revenue within just three months. The redesigned store not only enhanced the overall shopping experience but also aligned with the premium brand image, resulting in higher customer satisfaction and a significant boost in sales performance.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="container-lg cs-images-section-container px-0">

                    <div className="cs-image-section d-flex justify-content-center pb-5">
                        <img src={BrandImg2} alt=" " />
                    </div>

                </div>
                {/* End */}
                <div className="cs-video-section">
                    <div className="cs-video">
                        <VideoSlider_2 />
                    </div>
                </div>
            </div>

            <div className="image-cards-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 my-4 my-sm-4 my-md-auto ">
                            <img src={Brandcard1} style={{ borderRadius: "25px" }} alt=" " />
                        </div>
                        <div className="col-md-4 col-12 my-4 my-sm-4 my-md-auto ">
                            <img src={Brandcard2} style={{ borderRadius: "25px" }} alt=" " />
                        </div>
                        <div className="col-md-4 col-12 my-4 my-sm-4 my-md-auto">
                            <img src={Brandcard3} style={{ borderRadius: "25px" }} alt=" " />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleBrandCustom