import BreadCrumb from "../../components/common/Breadcrumb";
import Teams from "../../components/home-one/teams";
// Team member images
// import Team10Img from "../../assets/images/team/team10.png";
// import Team11Img from "../../assets/images/team/team11.png";
// import Team12Img from "../../assets/images/team/team12.png";
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";
import Team5Img from "../../assets/images/team/team5.png";
import Team6Img from "../../assets/images/team/team6.png";
import Team7Img from "../../assets/images/team/team7.png";
import Team8Img from "../../assets/images/team/team8.png";
import Team9Img from "../../assets/images/team/team9.png";

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
	{
		id: crypto.randomUUID(),
		name: "Neer Lashkari",
		designation: "Wordpress Developer",
		img: Team5Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Maitri Gandhi",
		designation: "Frontend Developer",
		img: Team4Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Bhavik Hadiyel",
		designation: "Frontend Developer",
		img: Team6Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Dhruv Parmar",
		designation: "Shopify Developer",
		img: Team7Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Ravi Gajariya",
		designation: "Web Designer",
		img: Team9Img,
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Fradik Hazbag",
	// 	designation: "Researcher",
	// 	img: Team10Img,
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Sam Kainiz",
	// 	designation: "Lead Developer",
	// 	img: Team11Img,
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	name: "Mac Jackson",
	// 	designation: "Marketing Expert",
	// 	img: Team12Img,
	// },
];
function Team() {
	return (
		<>
			<BreadCrumb title="Our Team" />
			<Teams teams={teamsData} />
		</>
	);
}

export default Team;
