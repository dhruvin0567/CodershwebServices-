import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Absolutely Fantastic",
		description:
			"The biggest achievement was that he got the design right from the initial mockup and didn't waste any time. Everything ran on schedule while he made numerous minor adjustments to achieve an amazing level of quality.",
		author: "Amber Page",
		designation: "Portland,Oregon",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Work was great!",
		description:
			"Working with Shah was a game-changer for our brand. Their exceptional creativity and vision breathed new life into our visuals. The logo they created perfectly captures our essence and has become instantly recognizable. We couldn't be happier with the results!",
		author: "Phillip Hunt",
		designation: "Detroit,Michigan",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Great to work with!",
		description:
			"Made an amazing website for our org. We have him our vision and everything came out even better than imagined. Use him for all website needs you will be pleased! Use him for all website needs you will be pleased!",
		author: "Milano Joe",
		designation: "Seattle,Washington",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Excellent Developer",
		description:
			"His work went beyond what I was expecting and I would love to continue working with him. His work went beyond what I was expecting and I would love to continue working with him continue working with him.",
		author: "Danial Mark",
		designation: "San Antonio,Texas",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Clients are always
						<span className="aximo-title-animation">
							satisfied with us
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
