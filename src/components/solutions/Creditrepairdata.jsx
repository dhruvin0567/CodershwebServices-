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

import Slider1Img from "/images/solutions/credit-repair/credi-coach-front-page.webp";
import Slider2Img from "/images/solutions/credit-repair/Credit-Saint-Ranked-1-By-Top-Financial-Sites-front-page.webp";
import Slider3Img from "/images/solutions/credit-repair/Credit101-front-page.webp";
import Slider4Img from "/images/solutions/credit-repair/Framework-Credit-front-page.webp";
import Slider5Img from "/images/solutions/credit-repair/preimier-credit-front-page.webp";
import Slider6Img from "/images/solutions/credit-repair/sd-capital-front-page.webp";
import Slider7Img from "/images/solutions/credit-repair/stellar-credit-front-page.webp";
const slidesData = [
  { image: Slider1Img, alt: "Credi Coach website front page" },
  {
    image: Slider2Img,
    alt: "Credit Saint ranked #1 by financial sites",
  },
  { image: Slider3Img, alt: "Credit101 homepage design" },
  { image: Slider4Img, alt: "Framework Credit landing page" },
  { image: Slider5Img, alt: "Premier Credit services homepage" },
  { image: Slider6Img, alt: "SD Capital website layout" },
  { image: Slider7Img, alt: "Stellar Credit front page preview" },
];

import Logo1Img from "/images/solutions/credit-repair/logo-1.webp";
import Logo2Img from "/images/solutions/credit-repair/logo-2.webp";
import Logo3Img from "/images/solutions/credit-repair/logo-3.webp";
import Logo4Img from "/images/solutions/credit-repair/logo-4.webp";
import Logo5Img from "/images/solutions/credit-repair/logo-5.webp";
import Logo6Img from "/images/solutions/credit-repair/credit-101-logo.webp";
import Logo7Img from "/images/solutions/credit-repair/credit-saint-logo.webp";
const logosData = [
  { image: Logo1Img, alt: "Credit Repair Logo 1" },
  { image: Logo2Img, alt: "Credit Repair Logo 2" },
  { image: Logo3Img, alt: "Credit Repair Logo 3" },
  { image: Logo4Img, alt: "Credit Repair Logo 4" },
  { image: Logo5Img, alt: "Credit Repair Logo 5" },
  { image: Logo6Img, alt: "Credit101 Company Logo" },
  { image: Logo7Img, alt: "Credit Saint Company Logo" },
];

const featuresList = [
  { text: "Mobile-Responsive Design", icon: CheckIcon },
  { text: "SEO-Optimized Pages", icon: CheckIcon },
  { text: "Integrated Lead Capture Forms", icon: CheckIcon },
  { text: "User-Friendly Dashboard", icon: CheckIcon },
  { text: "Fast Load Times", icon: CheckIcon },
  { text: "Secure Payment Integration (if applicable)", icon: CheckIcon },
];

function Creditrepairdata() {
  return (
    <main className="credit-repair-solution">
      <FadeInStaggerTwo>
        <FadeInStaggerTwoChildren>
          <section aria-label="Credit repair industry brands">
            <SolutionPageLogoSlider
              logos={logosData}
              title="Trusted by Professionals in the Credit Repair Industry"
            />
          </section>
        </FadeInStaggerTwoChildren>

        <FadeInStaggerTwoChildren>
          <section aria-label="Credit repair project portfolio">
            <SolutionProjectSlider slides={slidesData} />
          </section>
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>

      <section aria-label="Why choose Codersh for credit repair websites">
        <SolutionDynamicInfo
          title="Your Partner in Building"
          subtitle="Credibility Online"
          description="In today’s competitive credit repair industry, having a professional and user-friendly website is no
                            longer optional – it’s essential. Your website serves as the face of your business, the first impression that
                            potential clients have of your services. A well-designed credit repair website can help you build trust,
                            streamline lead generation, and showcase your expertise in solving credit challenges. At Codersh, we
                            specialize in creating custom websites tailored specifically to the needs of credit repair professionals.
                            From sleek, modern designs to strategic functionalities like lead capture forms and SEO optimization, we
                            provide solutions that help you stand out in the marketplace. Let us help you create a website that not
                            only reflects your professionalism but also drives results and fosters growth for your business."
          ctaText="Get In Touch"
          ctaLink="/contact-us"
          iconImage={Star2Img}
          features={featuresList}
        />
      </section>

      <section aria-label="Testimonials from credit repair businesses">
        <SolutionTestimonialSlider />
      </section>
    </main>
  );
}

export default Creditrepairdata;
