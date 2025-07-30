import Star2Img from "../../assets/images/v1/icon/star2.webp";
import CheckIcon from "../../assets/images/icon/check.svg";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../animation/FadeInStaggerTwo";

import SolutionProjectSlider from "./SolutionProjectSlider";
import SolutionPageLogoSlider from "./SolutionPageLogoSlider";
import SolutionTestimonialSlider from "./SolutionTestimonialSlider";
import SolutionDynamicInfo from "./SolutionDynamicInfo";

import ProjImg1 from "/images/solutions/wine-store/artisan.webp";
import ProjImg2 from "/images/solutions/wine-store/asterley-bros.webp";
import ProjImg3 from "/images/solutions/wine-store/bone.webp";
import ProjImg4 from "/images/solutions/wine-store/Claudine.webp";
import ProjImg5 from "/images/solutions/wine-store/Double-Dutch.webp";
import ProjImg6 from "/images/solutions/wine-store/gattertop.webp";
import ProjImg7 from "/images/solutions/wine-store/liberation.webp";
import ProjImg8 from "/images/solutions/wine-store/madamef.webp";
import ProjImg9 from "/images/solutions/wine-store/negroni-soc.webp";
import ProjImg10 from "/images/solutions/wine-store/van-hunks.webp";
const slidesData = [
  { image: ProjImg1, alt: "Artisan Wine Store Homepage" },
  { image: ProjImg2, alt: "Asterley Bros Wine Retail Homepage" },
  { image: ProjImg3, alt: "Bone Ideal Wine Shop Front Page" },
  { image: ProjImg4, alt: "Claudine Wine Store Website" },
  { image: ProjImg5, alt: "Double Dutch Wine Store Homepage" },
  { image: ProjImg6, alt: "Gattertop Wine Brand Website" },
  { image: ProjImg7, alt: "Liberation Wine Shop Front Page" },
  { image: ProjImg8, alt: "Madame F Online Wine Store" },
  { image: ProjImg9, alt: "Negroni Society Wine Ecommerce Page" },
  { image: ProjImg10, alt: "Van Hunks Wine Store Website Preview" },
];

import Logo1Img from "/images/solutions/wine-store/bone-logo.webp";
import Logo2Img from "/images/solutions/wine-store/Claudine-logo.webp";
import Logo3Img from "/images/solutions/wine-store/artisan-logo.webp";
import Logo4Img from "/images/solutions/wine-store/asterley-bros-logo.webp";
import Logo5Img from "/images/solutions/wine-store/Double-Dutch-logo.webp";
import Logo6Img from "/images/solutions/wine-store/gattertop-logo.webp";
import Logo7Img from "/images/solutions/wine-store/liberation-logo.webp";
import Logo8Img from "/images/solutions/wine-store/madamef-logo.webp";
import Logo9Img from "/images/solutions/wine-store/van-hunks-logo.webp";
const logosData = [
  { image: Logo1Img, alt: "Bone Wine Store Logo" },
  { image: Logo2Img, alt: "Claudine Wine Logo" },
  { image: Logo3Img, alt: "Artisan Wine Logo" },
  { image: Logo4Img, alt: "Asterley Bros Logo" },
  { image: Logo5Img, alt: "Double Dutch Wine Brand Logo" },
  { image: Logo6Img, alt: "Gattertop Distillery Logo" },
  { image: Logo7Img, alt: "Liberation Wine Store Logo" },
  { image: Logo8Img, alt: "Madame F Logo" },
  { image: Logo9Img, alt: "Van Hunks Logo" },
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
    <main>
      <section aria-labelledby="wine-clients">
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
      </section>

      <section aria-labelledby="wine-store-info">
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
      </section>

      <section aria-labelledby="wine-testimonials">
        <SolutionTestimonialSlider />
      </section>
    </main>
  );
};

export default ReviewSection;
