import About from "../../components/home-one/about";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";
// import Teams from "../../components/home-one/teams";
// import Testimonial from "../../components/home-one/testimonial";
import AutoSlider from "../../components/home-one/auto-slider";
import TestimonialSwiper from "../../components/home-one/testimonial/TestimonialSwiper";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { createGlobalStyle } from "styled-components";
import ComparisonTable from "../../components/common/ComparisonTable";
// import Favicon from "../../assets/images/images2/favicon.webp";
// import { Helmet } from 'react-helmet';
import SEO from "../../components/common/SEO";

const GlobalStyle = createGlobalStyle`
  #root {
     overflow-x: hidden;
  }
`;

// Teams images
// import Team1Img from "../../assets/images/team/team1.webp";
// import Team2Img from "../../assets/images/team/team2.webp";
// import Team3Img from "../../assets/images/team/team3.webp";
// import Team4Img from "../../assets/images/team/team4.webp";

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
      <GlobalStyle />
      <SEO
        title="Codersh Web Services | Shopify Development Company"
        description="Codersh Web Services helps e-commerce brands grow with expert Shopify solutions. From seamless store migration to custom design and performance optimization, we deliver success-driven Shopify development."
        keywords="Shopify development, Shopify customization, Shopify experts, Shopify store design, Shopify migration, Shopify agency, e-commerce growth, Shopify performance optimization, Shopify Services agency, Codersh Web Services, Codersh, Codersh Website"
        canonical="https://react-vite-codersh.vercel.app/"
      />
      <SpeedInsights />
      <Hero />
      <Services services={servicesData} />
      <About />
      <Projects />
      <WhyChooseUs />
      <ComparisonTable />
      <TestimonialSwiper />
      {/* <Testimonial /> */}
      <AutoSlider />
      <div style={{ marginBottom: "20px" }}></div>
      {/* <Teams teams={teamsData} /> */}
    </>
  );
}

export default HomeOne;
