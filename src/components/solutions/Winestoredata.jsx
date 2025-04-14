import Star2Img from "../../assets/images/v1/icon/star2.webp";
import CheckIcon from "../../assets/images/icon/check.svg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";

import SolutionProjectSlider from "./SolutionProjectSlider";
import SolutionPageLogoSlider from "./SolutionPageLogoSlider";
import SolutionTestimonialSlider from "./SolutionTestimonialSlider";
import SolutionDynamicInfo from "./SolutionDynamicInfo";

import ProjImg1 from '../../assets/images/images2/tinified2/artisan.webp';
import ProjImg2 from '../../assets/images/images2/tinified2/asterley-bros.webp';
import ProjImg3 from '../../assets/images/images2/tinified2/bone.webp';
import ProjImg4 from '../../assets/images/images2/tinified2/Claudine.webp';
import ProjImg5 from '../../assets/images/images2/tinified2/Double-Dutch.webp';
import ProjImg6 from '../../assets/images/images2/tinified2/gattertop.webp';
import ProjImg7 from '../../assets/images/images2/tinified2/liberation.webp';
import ProjImg8 from '../../assets/images/images2/tinified2/madamef.webp';
import ProjImg9 from '../../assets/images/images2/tinified2/negroni-soc.webp';
import ProjImg10 from '../../assets/images/images2/tinified2/van-hunks.webp';
const slidesData = [
    { image: ProjImg1, alt: "artisan-homepage" },
    { image: ProjImg2, alt: "asterley-bros-homepaget" },
    { image: ProjImg3, alt: "bone-ideal-homepaget" },
    { image: ProjImg4, alt: "claudine-homepaget" },
    { image: ProjImg5, alt: "double-duotch-homepaget" },
    { image: ProjImg6, alt: "gattertop-homepaget" },
    { image: ProjImg7, alt: "liberation-homepaget" },
    { image: ProjImg8, alt: "madamef-homepaget" },
    { image: ProjImg9, alt: "negoinesoc-homepaget" },
    { image: ProjImg10, alt: "van-hunks-homepaget" },
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
