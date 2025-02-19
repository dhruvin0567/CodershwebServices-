import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team3Img from "../assets/images/team/team3.png";
import Team8Img from "../assets/images/team/team8.png";

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Harsh Shah",
		designation: "CEO & Founder",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Kinjal Shah",
		designation: "HR Manager",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Vishwas Shah",
		designation: "QA",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Sweta Parmar",
		designation: "Sr. Wordpress Developer",
		img: Team8Img,
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Neer Lashkari",
	// 	designation: "Wordpress Developer",
	// 	img: Team5Img,
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Maitri Gandhi",
	// 	designation: "Frontend Developer",
	// 	img: Team6Img,
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Bhavik Hadiyel",
	// 	designation: "Frontend Developer",
	// 	img: Team7Img,
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Dhruv Parmar",
	// 	designation: "Shopify Developer",
	// 	img: Team8Img,
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Ravi Gajariya",
	// 	designation: "Web Designer",
	// 	img: Team9Img,
	// },
];

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
