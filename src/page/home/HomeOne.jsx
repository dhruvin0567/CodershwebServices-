import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
// import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
// import Team1Img from "../../assets/images/team/team1.png";
// import Team2Img from "../../assets/images/team/team2.png";
// import Team3Img from "../../assets/images/team/team3.png";
// import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "New Shopify Stores",
		description:
			"We specialize in designing and developing bespoke Shopify and Shopify Plus themes that reflect your brand’s unique identity.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Existing Shopify Stores",
		description:
			"Partner with a specialized Shopify team focused on your store's success, ensuring continuous growth and innovation.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Shopify Plus",
		description:
			"Trusted Shopify Plus agency specializing in helping e-commerce brands launch new stores and scale existing ones.s",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Other Services",
		description:
			"Shopify-accredited SEO agency, offering expert SEO services for ambitious Shopify & Shopify Plus brands.",
		icon: "icon-design-thinking",
	},
];

// const teamsData = [
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Andrew Mark",
// 		designation: "Creative Director",
// 		img: Team1Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Jack Taylor",
// 		designation: "Senior Designer",
// 		img: Team2Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Martine Joy",
// 		designation: "Project Manager",
// 		img: Team3Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Adam Straw",
// 		designation: "Web Developer",
// 		img: Team4Img,
// 	},
// ];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}

export default HomeOne;
