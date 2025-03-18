import BrandImg1 from "../../assets/images/brand/split-grip-1.png"
import BrandImg2 from "../../assets/images/brand/split-grip-2.png"
import BrandImg3 from "../../assets/images/brand/split-grip-3.png"
import BrandImg4 from "../../assets/images/brand/Screenshot 2025-03-18 113553.png"

import Brandcard1 from "../../assets/images/images2/1.png"
import Brandcard2 from "../../assets/images/images2/2.png"
import Brandcard3 from "../../assets/images/images2/3.png"


function SingleBrand() {
    return (
        <div>

            <div className="case-study-hero-section">
                <img src={BrandImg1} alt />
                {/* <div className="case-study-hero-section-img"></div> */}
            </div>

            <div className="cs-text">
                <div className="container-lg ">
                    <div className="row">
                        <div className=" col-md-6 text-start">
                            <div className="p-5">
                                <h2 className="pb-3">The Brief</h2>
                                <p className="brand-text">
                                    The Split Grip Trainer is a patent-pending tool designed to refine swing mechanics and boost player performance. Offering three training modes- split grip, short bat, and one-hand-it helps athletes develop strength, control, and efficiency, making it an essential training aid for improving batting technique.
                                </p>
                                <p className="brand-text">
                                    Founded by former professional players Cory Voss and Trevor Goldberg, the Split Grip Trainer combines their extensive expertise in baseball and bat crafting. Cory, a Division 1 All-American and former draft pick, owns The Baseball Mill in Pueblo, Colorado, while Trevor, a former collegiate player, has been crafting custom wood bats through Berg Bat Company since the age of 15. Together, they developed the Split Grip Trainer to improve training and elevate player performance across all skill levels.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 px-5 bg-light">
                            <ul className="py-5">
                                <li className="brand-info-li">
                                    <p>Industry</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }} >Sports Equipment</p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Project</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Technology</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <img src={BrandImg2} alt />
                </div>
            </div>

            <div className="cs-richtext text-center">
                <div className="container-lg bg-light p-5">
                    <h2 className="mb-5">Challange</h2>
                    <div className="cs-richtext-paragraph mx-lg-5 px-lg-5 pb-5">
                        <p className="brand-text" >
                            SplitGrip.com struggled with low user engagement and high cart abandonment rates, primarily due to a website structure that was difficult to navigate and an outdated design. The site’s user experience did not align with the premium brand image that SplitGrip aimed to project. As a result, customers found it hard to easily explore products, leading to frustration and lost sales. Additionally, the design lacked the modern, polished look needed to attract and retain customers. These issues hindered the company’s ability to fully capitalize on its innovative products and premium positioning in the market.
                        </p>
                    </div>
                </div>
            </div>

            <div className="cs-images-section ">
                <div className="container-lg p-5">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="cs-img">
                                <img src={BrandImg3} alt />
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-sm-5 mt-5 mt-md-0">
                            <div className="cs-img">
                                <img src={BrandImg4} alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cs-richtext text-center">
                <div className="container-lg bg-light p-5">
                    <h2 className="mb-5">Solution & Results</h2>
                    <div className="cs-richtext-paragraph mx-lg-5">
                        <p className="mb-3 brand-text">
                            The team revamped SplitGrip’s WordPress WooCommerce store, focusing on creating a more user-friendly design with intuitive navigation. High-quality product images and strategically placed call-to-action buttons were integrated to drive conversions. These enhancements led to significant improvements:
                        </p>
                        <p className="mb-0 brand-text">
                            average session duration increased by 40%
                        </p>
                        <p className="mb-0 brand-text">
                            cart abandonment dropped by 35%
                        </p>
                        <p className=" brand-text">
                            and revenue grew by 70% within just three months
                        </p>
                        <p className="mb-0  brand-text">
                            The redesigned store not only improved the overall shopping experience but also aligned with the premium brand image, resulting in higher customer satisfaction and stronger sales performance.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="container-lg cs-images-section-container px-lg-0">

                    <div className="cs-image-section d-flex justify-content-center">
                        <img src={BrandImg2} alt />
                    </div>

                </div>
                {/* End */}
                <div className="cs-video-section">
                    <div className="cs-video">
                        <video
                            src="/src/assets/images/brand/6222e2cd1b48d34290cc67b7ba43dc6c.mp4"
                            controls
                            style={{ width: '100%', height: '800px', objectFit: 'cover', objectPosition: "top" }}
                        />

                    </div>
                </div>
            </div>

            <div className="image-cards-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-3 my-sm-3 my-md-0">
                            <img src={Brandcard1} style={{ borderRadius: "25px" }} alt />
                        </div>
                        <div className="col-md-4 my-3 my-sm-3 my-md-0">
                            <img src={Brandcard2} style={{ borderRadius: "25px" }} alt />
                        </div>
                        <div className="col-md-4 my-3 my-sm-3 my-md-0">
                            <img src={Brandcard3} style={{ borderRadius: "25px" }} alt />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleBrand