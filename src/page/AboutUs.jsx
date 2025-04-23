import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import SEO from "../components/common/SEO";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
// import Teams from "../components/home-one/teams";
// Teams images
// import Team1Img from "../assets/images/team/team1.webp";
// import Team2Img from "../assets/images/team/team2.webp";
// import Team3Img from "../assets/images/team/team3.webp";
// import Team8Img from "../assets/images/team/team8.webp";

// const teamsData = [
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Harsh Shah",
// 		designation: "CEO & Founder",
// 		img: Team1Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Kinjal Shah",
// 		designation: "HR Manager",
// 		img: Team2Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Vishwas Shah",
// 		designation: "QA",
// 		img: Team3Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		name: "Sweta Parmar",
// 		designation: "Sr. Wordpress Developer",
// 		img: Team8Img,
// 	},
// ];

function AboutUs() {
	return (
		<>
			<SEO
				title="About Codersh Web Services | Shopify Development Company"
				description="Learn more about Codersh Web Services, a team of Shopify development experts helping e-commerce brands thrive with custom solutions, seamless migration, and performance optimization."
				keywords="About Codersh, Shopify development experts, e-commerce solutions, Shopify customization, Shopify agency, Shopify web design, Shopify store optimization"
				canonical="https://react-vite-codersh.vercel.app/about-us"
			/>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			<AutoSlider />
			<br />
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}

export default AboutUs;
