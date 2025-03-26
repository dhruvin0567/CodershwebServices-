import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
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
