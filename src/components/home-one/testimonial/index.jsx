import Star2Img from "../../../assets/images/v1/star2.png";
// import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";

import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [

	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"I had a great experience with Shah. The design is very nice. And he was really fast to understand what I needed !",
		author: "Jay Rowland",
		designation: "Co - founder - Vidste",
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Arvind was super responsive and answered any questions I had in a timely manner.",
		author: "Victoria Johnson",
		designation: "VP @ Turtles and Tees",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Very good communication, good listener, very skilled at what he does and only offers the best!",
		author: "Natalie Morris",
		designation: "CEO - Christianbookbag",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Shah was a great communicator and the quality of his work was good",
		author: "Mihir Sukhtankar",
		designation: "President - Bimmeronly",
	},

	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Arvind is as professional as it gets. Works fast and efficiently. Gets jobs done everytime.",
		author: "Theo Doussineau",
		designation: "Founder - Redesignhub",
	},

	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Arvind was an excellent developer with great communication skills. His work went beyond what I was expecting and I would love to continue working with him.",
		author: "Julia Dennis",
		designation: "Bungalow Creative",
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Work was great! I Will definitely use in the future. Arvind delivered good work on this project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong",
		author: "Margarita Chen",
		designation: "Owner - chenchef",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Best service provider I have ever worked with.I had a problem with my website and Mr.Shah was so helpful in getting it up and running again.",
		author: "David Wickers",
		designation: "Owner | New Frontier Hobbies",
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Great help with problems that I didn't know how to solve myself. Provided great improvements to my website that I did not know were available. Communication was prompt and thorough.",
		author: "Derrest Williamss",
		designation: "Owner - 500belowcars",
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
						<FadeInStagger index={index} className="col-lg-4 col-md-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
