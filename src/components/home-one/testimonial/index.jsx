import FadeInStagger from "../../animation/FadeInStagger";
import VideoSlider from "../../common/VideoSlider";
import TestimonialSwiper from "./TestimonialSwiper";
import Star2Img from "../../../assets/images/v1/icon/star2.webp";

function Testimonial() {
  return (
    <section
      className="testimonial-section aximo-section-padding6"
      aria-labelledby="client-reviews-title"
      itemScope
      itemType="https://schema.org/Review"
    >
      <TestimonialSwiper />
      <FadeInStagger>
        <div className="review-section text-center aximo-section-padding6">
          <div className="container">
            <div className="pb-5">
              <h2 id="client-reviews-title" className="mb-4" itemProp="name">
                <span className="aximo-title-animation">
                  Our Client's Reviews
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Decorative star icon" />
                  </span>
                </span>
              </h2>

              <p className="mb-4" itemProp="reviewBody">
                We are very proud of the service we provide and stand by every
                product we carry.
                <br />
                See our testimonials from our happy customers.
              </p>
            </div>
            <VideoSlider />
          </div>
        </div>
      </FadeInStagger>
    </section>
  );
}

export default Testimonial;
