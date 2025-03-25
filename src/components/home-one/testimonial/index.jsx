import FadeInStagger from "../../animation/FadeInStagger";
import VideoSlider from "../../common/VideoSlider";
import TestimonialSwiper from "./TestimonialSwiper";

function Testimonial() {
	return (
		<div>
			<TestimonialSwiper />
			<FadeInStagger>
				<div className="review-section text-center  aximo-section-padding6">
					<div className="container">
						<div>
							<h3>Our Client's Reviews</h3>
							<p>
								We are very proud of the service we provide and stand by every product we carry.
								See our testimonials from our happy customers.
							</p>
						</div>
						<VideoSlider />
					</div>
				</div>
			</FadeInStagger>
		</div>
	);
}

export default Testimonial;
