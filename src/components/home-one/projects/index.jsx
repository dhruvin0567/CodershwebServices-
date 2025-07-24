import Star2Img from "../../../assets/images/v1/star2.webp";
import Project1Img from "../../../assets/images/v1/project1.webp";
import Project2Img from "../../../assets/images/v1/project2.webp";
import Project3Img from "../../../assets/images/v1/project3.webp";
import Project4Img from "../../../assets/images/v1/project4.webp";
import Project5Img from "../../../assets/images/v1/project5.webp";
import Project6Img from "../../../assets/images/v1/project6.webp";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Madame F",
		description: "The UK's most inclusive vibrant LGBTQ+ Wine Brand",
		img: Project1Img,
		link: "https://react-vite-codersh.vercel.app/case-studies/madame-f-celebrating-diversity-in-every-glass"
	},
	{
		id: crypto.randomUUID(),
		title: "Van Hunks",
		description: "Van Hunks Sparkling Wine is a captivating drink that delights and surprises.",
		img: Project2Img,
		link: "https://react-vite-codersh.vercel.app/case-studies/van-hunks-spicing-up-their-shopify-store"
	},
	{
		id: crypto.randomUUID(),
		title: "Liberation Cocktails",
		description: "We source only the best ingredients, selecting them for how they shape taste and twist tradition.",
		img: Project3Img,
		link: "https://react-vite-codersh.vercel.app/case-studies/liberation-cocktails-elevating-the-pre-mixed-cocktail-experience-with-a-custom-shopify-solution"
	},
	{
		id: crypto.randomUUID(),
		title: "Tylers Coffees",
		description: "Our Acid-Free Coffee Range Offers a Symphony of Flavor, Minus the Sour Aftertaste.",
		img: Project4Img,
		link: "https://react-vite-codersh.vercel.app/case-studies"
	},
	{
		id: crypto.randomUUID(),
		title: "Asterley Bros",
		description: "Two Brothers with a passion for Botanical Spirits in South London.",
		img: Project5Img,
		link: "https://react-vite-codersh.vercel.app/case-studies"
	},
	{
		id: crypto.randomUUID(),
		title: "Double Dutch Drinks",
		description: "We created our Tonics and Mixers with Flavour pairing at the Heart of each rink.",
		img: Project6Img,
		link: "https://react-vite-codersh.vercel.app/case-studies"
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2, // 3 slides per view
		},
		900: {
			slidesPerView: 3,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative projects
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
