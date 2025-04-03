import Star2Img from "../../assets/images/v1/star2.webp";
import FadeInUp from "../animation/FadeInUp";
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
						clients learn about us
					</h2>
				</div>

				<FadeInUp className="accordion aximo-accordion-wrap" id="aximo-accordion">
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
							>
								What is Shopify Optimization?

							</button>
						</h3>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Shopify Optimization improves your store’s speed, user experience, and conversion rates by refining design, performance, and functionality.
							</div>
						</div>
					</div>
					{/* <div className="accordion-item">
						<h3 className="accordion-header" id="headingOne">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
							>
								What industries or types of clients do you typically work with?
							</button>
						</h3>
						<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								This question helps potential clients determine if the agency has experience in their
								specific industry or with similar projects. Our agency stands out due to our creative
								expertise, attention to detail, and commitment to delivering designs that not only look
								great.
							</div>
						</div>
					</div> */}
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
							>
								How do you optimize Shopify store speed?
							</button>
						</h3>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								We optimize images, remove unused apps, minimize code, enable Shopify’s CDN, and implement best practices to improve load time.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
							>
								Can you help increase my store’s conversion rate?
							</button>
						</h3>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Yes! We enhance product pages, streamline checkout, and optimize calls-to-action to turn visitors into buyers.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
							>
								Will optimization affect my store’s design?
							</button>
						</h3>
						<div
							id="collapseFour"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								No, we refine performance without compromising your store’s design. If needed, we make subtle UI improvements for a better user experience.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFive"
							>
								How long does Shopify Optimization take?
							</button>
						</h3>
						<div
							id="collapseFive"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Depending on the level of optimization needed, it usually takes between 5 to 10 days.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSix"
							>
								Do you provide ongoing support after optimization?
							</button>
						</h3>
						<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								Yes! We offer continuous monitoring and updates to ensure long-term store performance.
							</div>
						</div>
					</div>
				</FadeInUp>
			</div>
		</div>
	);
}

export default FaqAccordion;
