import Star2Img from "../../assets/images/v1/star2.webp";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
// import FadeInUp from "../animation/FadeInUp";

function FaqAccordion() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						<span className="aximo-title-animation">
							These FAQs help
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
						<br />clients learn about us
					</h2>
				</div>

				<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
					<FadeInStaggerTwoChildren className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
							>
								Can you help increase my store’s conversion rate?
							</button>
						</h3>
						<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								Yes! We enhance product pages, streamline checkout, and optimize calls-to-action to turn visitors into buyers.
							</div>
						</div>
					</FadeInStaggerTwoChildren>

					<FadeInStaggerTwoChildren className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
							>
								Will optimization affect my store’s design?
							</button>
						</h3>
						<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								No, we refine performance without compromising your store’s design. If needed, we make subtle UI improvements for a better user experience.
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
							>
								How long does Shopify Optimization take?
							</button>
						</h3>
						<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								Depending on the level of optimization needed, it usually takes between 5 to 10 days.
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
							>
								Do you provide ongoing support after optimization?
							</button>
						</h3>
						<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								Yes! We offer continuous monitoring and updates to ensure long-term store performance.
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>


			</div>
		</div>
	);
}

export default FaqAccordion;