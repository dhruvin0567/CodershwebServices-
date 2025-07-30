import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.webp";
import StarImg from "../../../assets/images/v1/star2.webp";
import User1Img from "../../../assets/images/v1/user1.webp";
import User2Img from "../../../assets/images/v1/user2.webp";
import User3Img from "../../../assets/images/v1/user3.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function HeroContent() {
  return (
    <div className="aximo-hero-content">
      <FadeInStaggerTwo>
        <FadeInStaggerTwoChildren>
          <h1 className="light-text hero-section-title">
            Trusted Ecommerce{" "}
            <span className="aximo-title-animation">
              <img
                src={StarImg}
                alt="Shopify expert star"
                style={{ top: "5px", right: "-80px" }}
              />
              & Shopify Agency
            </span>
          </h1>
          <p>
            We're a leading Shopify & Shopify Plus agency who design and develop
            strategic ecommerce websites, also grown from humble roots and
            become a versatile digital marketing partner for our clients.
          </p>
        </FadeInStaggerTwoChildren>

        <FadeInStaggerTwoChildren>
          <div className="aximo-hero-user-wrap">
            <div className="aximo-hero-user-thumb">
              <div className="aximo-hero-user-thumb-item">
                <img src={User1Img} alt="Happy Shopify client 1" />
              </div>
              <div className="aximo-hero-user-thumb-item">
                <img src={User3Img} alt="Satisfied ecommerce partner 2" />
              </div>
              <div className="aximo-hero-user-thumb-item">
                <img src={User2Img} alt="Trusted client using Shopify store" />
              </div>
            </div>
            <div className="aximo-hero-user-data">
              <p>Trusted by 1000+ Ecommerce Clients</p>
            </div>
          </div>
        </FadeInStaggerTwoChildren>

        <FadeInStaggerTwoChildren>
          <Link className="aximo-call-btn" to="/contact-us">
            Let's Talk About Your Project <i className="icon-call"></i>
          </Link>
          <div className="aximo-hero-shape">
            <img src={ShapeImg} alt="Decorative shape for Shopify design" />
          </div>
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>
    </div>
  );
}

export default HeroContent;
