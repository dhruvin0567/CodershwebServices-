import Star2Img from "../../assets/images/v1/star2.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../animation/FadeInStaggerTwo";
// import FadeInUp from "../animation/FadeInUp";

function FaqAccordion() {
  return (
    <section
      className="section aximo-section-padding3"
      id="faqs"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <div className="aximo-section-title center">
          <h2 id="faq-heading">
            <span className="aximo-title-animation">
              These FAQs help
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Decorative star icon" />
              </span>
            </span>
            <br />
            clients learn about us
          </h2>
        </div>

        <FadeInStaggerTwo
          className="accordion aximo-accordion-wrap"
          id="aximo-accordion"
        >
          {/* faq 1 */}
          <FadeInStaggerTwoChildren
            className="accordion-item"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                itemProp="name"
              >
                Can you help increase my store’s conversion rate?
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#aximo-accordion"
            >
              <div
                className="accordion-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  Yes! We enhance product pages, streamline checkout, and
                  optimize calls-to-action to turn visitors into buyers.
                </div>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* faq 2 */}
          <FadeInStaggerTwoChildren
            className="accordion-item"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseOne"
                itemProp="name"
              >
                Will optimization affect my store’s design?
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div
                className="accordion-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  No, we refine performance without compromising your store’s
                  design. If needed, we make subtle UI improvements for a better
                  user experience.
                </div>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* faq 3 */}
          <FadeInStaggerTwoChildren
            className="accordion-item"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseOne"
                itemProp="name"
              >
                How long does Shopify Optimization take?
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div
                className="accordion-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  Depending on the level of optimization needed, it usually
                  takes between 5 to 10 days.
                </div>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* faq 4 */}
          <FadeInStaggerTwoChildren
            className="accordion-item"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseOne"
                itemProp="name"
              >
                Do you provide ongoing support after optimization?
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div
                className="accordion-body"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  Yes! We offer continuous monitoring and updates to ensure
                  long-term store performance.
                </div>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </section>
  );
}

export default FaqAccordion;
