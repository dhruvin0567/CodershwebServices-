import Star2Img from "../../assets/images/v1/icon/star2.webp";
import CheckIcon from "../../assets/images/icon/check.svg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";

import SolutionProjectSlider from "./SolutionProjectSlider";
import SolutionPageLogoSlider from "./SolutionPageLogoSlider";
import SolutionTestimonialSlider from "./SolutionTestimonialSlider";
import SolutionDynamicInfo from "./SolutionDynamicInfo";

import Slider1Img from '../../assets/images/images2/tinified/artisan-f-p.webp';
import Slider2Img from '../../assets/images/images2/tinified/asterley-bros-f-p.webp';
import Slider3Img from '../../assets/images/images2/tinified/bone-f-p.webp';
import Slider4Img from '../../assets/images/images2/tinified/Claudine-f-p.webp';
import Slider5Img from '../../assets/images/images2/tinified/Double-Dutch-f-p.webp';
import Slider6Img from '../../assets/images/images2/tinified/gattertop-f-p.webp';
import Slider7Img from '../../assets/images/images2/tinified/liberation-f-p.webp';
import Slider8Img from '../../assets/images/images2/tinified/madamef-f-p.webp';
import Slider9Img from '../../assets/images/images2/tinified/negroni-soc-f-p.webp';
import Slider10Img from '../../assets/images/images2/tinified/van-hunks-f-p.webp';
const slidesData = [
    { image: Slider1Img, alt: "Credi Coach" },
    { image: Slider2Img, alt: "Credit Saint" },
    { image: Slider3Img, alt: "Credit 101" },
    { image: Slider4Img, alt: "Framework Credit" },
    { image: Slider5Img, alt: "Premier Credit" },
    { image: Slider6Img, alt: "SD Capital" },
    { image: Slider7Img, alt: "Stellar Credit 1" },
    { image: Slider8Img, alt: "Stellar Credit 2" },
    { image: Slider9Img, alt: "Stellar Credit 3" },
    { image: Slider10Img, alt: "Stellar Credit 4" },
];

import Logo1Img from '../../assets/images/images2/bone-logo.webp';
import Logo2Img from '../../assets/images/images2/Claudine-logo.webp';
import Logo3Img from '../../assets/images/images2/artisan-logo.webp';
import Logo4Img from '../../assets/images/images2/asterley-bros.webp';
import Logo5Img from '../../assets/images/images2/Double-Dutch-logo.webp';
import Logo6Img from '../../assets/images/images2/gattertop-logo.webp';
import Logo7Img from '../../assets/images/images2/liberation-logo.webp';
import Logo8Img from '../../assets/images/images2/madamef-logo.webp';
import Logo9Img from '../../assets/images/images2/van-hunks.webp';
const logosData = [
    { image: Logo1Img, alt: "Logo 1" },
    { image: Logo2Img, alt: "Logo 2" },
    { image: Logo3Img, alt: "Logo 3" },
    { image: Logo4Img, alt: "Logo 4" },
    { image: Logo5Img, alt: "Logo 5" },
    { image: Logo6Img, alt: "Logo 6" },
    { image: Logo7Img, alt: "Logo 7" },
    { image: Logo8Img, alt: "Logo 8" },
    { image: Logo9Img, alt: "Logo 9" },
];

const featuresList = [
    { text: "Modern and Elegant Website Redesign", icon: CheckIcon },
    { text: "Mobile-Friendly and Responsive Design", icon: CheckIcon },
    { text: "Streamlined Product Browsing and Search", icon: CheckIcon },
    { text: "Simplified Checkout to Reduce Abandonment", icon: CheckIcon },
    { text: "Integrated Inventory and Shipping Systems", icon: CheckIcon },
    { text: "Data-Driven CRO Strategies", icon: CheckIcon },
];


const ReviewSection = () => {

    return (
        <div>
            <FadeInStaggerTwo>
                <FadeInStaggerTwoChildren>
                    <SolutionPageLogoSlider
                        logos={logosData}
                        title="Partnering with Leading Wine Retailers Worldwide."
                    />
                </FadeInStaggerTwoChildren>
                <FadeInStaggerTwoChildren>
                    <SolutionProjectSlider slides={slidesData} />
                </FadeInStaggerTwoChildren>
            </FadeInStaggerTwo>

            <SolutionDynamicInfo
                title="Elevate Your Wine Store’s"
                subtitle="Design and Maximize Conversions"
                description="A beautifully redesigned wine store with an optimized user journey can make all the difference in
            attracting wine enthusiasts and turning visitors into loyal customers. Whether you’re running a boutique
            wine shop or a large online store, our expertise in website redesign and conversion rate optimization
            (CRO) is tailored to your unique needs. With a focus on elegant design, seamless navigation, and
            strategic optimization, we ensure that your website not only looks stunning but also drives measurable
            results. Let’s create a wine store experience that captivates your audience and boosts your sales like
            never before."
                ctaText="Get In Touch"
                ctaLink="/contact-us"
                iconImage={Star2Img}
                features={featuresList}
            />

            <SolutionTestimonialSlider />
        </div>
    );
};

export default ReviewSection;
