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

import projImg1 from "/images/solutions/business-directory/hpn-global.webp";
import projImg2 from "/images/solutions/business-directory/tyrepages.webp";
import projImg3 from "/images/solutions/business-directory/redesign-hub.webp";
const slidesData = [
  { image: projImg1, alt: "HPN Global Homepage Screenshot" },
  { image: projImg2, alt: "Tyrepages Website Preview" },
  { image: projImg3, alt: "Redesign Hub Landing Page" },
  { image: projImg1, alt: "HPN Global Homepage Screenshot Duplicate" },
  { image: projImg2, alt: "Tyrepages Website Preview Duplicate" },
  { image: projImg3, alt: "Redesign Hub Landing Page Duplicate" },
];

import Logo1Img from "/images/solutions/business-directory/tyrepage.webp";
import Logo2Img from "/images/solutions/business-directory/hpn-logo-1.webp";
import Logo3Img from "/images/solutions/business-directory/redesign-hub-logo.webp";
const logosData = [
  { image: Logo1Img, alt: "Tyrepage Business Logo" },
  { image: Logo2Img, alt: "HPN Global Logo" },
  { image: Logo3Img, alt: "Redesign Hub Official Logo" },
  { image: Logo1Img, alt: "Tyrepage Business Logo Duplicate" },
  { image: Logo2Img, alt: "HPN Global Logo Duplicate" },
  { image: Logo3Img, alt: "Redesign Hub Official Logo Duplicate" },
];

const featuresList = [
  { text: "Advanced Search and Filter Functionality", icon: CheckIcon },
  { text: "User-Friendly Business Listings", icon: CheckIcon },
  { text: "Mobile and SEO-Optimized Design", icon: CheckIcon },
  { text: "Reviews and Ratings Integration", icon: CheckIcon },
  { text: "Easy Admin Panel for Updates", icon: CheckIcon },
  {
    text: "Monetization Features (e.g., paid listings, advertisements)",
    icon: CheckIcon,
  },
];

function Bussinessdirectorydata() {
  return (
    <>
      <main>
        <section aria-labelledby="partner-logos">
          <FadeInStaggerTwo>
            <FadeInStaggerTwoChildren>
              <SolutionPageLogoSlider
                logos={logosData}
                title="Partnering with Leading Bussiness Leaders Worldwide."
              />
            </FadeInStaggerTwoChildren>
            <FadeInStaggerTwoChildren>
              <SolutionProjectSlider slides={slidesData} />
            </FadeInStaggerTwoChildren>
          </FadeInStaggerTwo>
        </section>

        <section aria-labelledby="business-directory-info">
          <SolutionDynamicInfo
            title="Professional Business"
            subtitle=" Directory Website Solutions"
            description=" In today’s fast-paced digital world, having a professional and user-friendly business directory website
                            is essential for standing out and thriving. Whether you’re looking to create a local business directory,
                            a niche industry listing, or a comprehensive nationwide platform, we’re here to make it happen. With our
                            experience in building successful directory websites, we design platforms that are not only visually
                            appealing but also highly functional and scalable. Our solutions help you connect businesses with their
                            target audience, drive user engagement, and generate revenue through smart monetization options. Partner
                            with us to bring your vision to life and create a directory website that truly delivers results."
            ctaText="Get In Touch"
            ctaLink="/contact-us"
            iconImage={Star2Img}
            features={featuresList}
          />
        </section>

        <section aria-labelledby="testimonials">
          <SolutionTestimonialSlider />
        </section>
      </main>
    </>
  );
}

export default Bussinessdirectorydata;
