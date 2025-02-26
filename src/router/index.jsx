import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import LayoutEight from "../components/layout/LayoutEight.jsx";
import Layout from "../components/layout/index.jsx";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import Team from "../page/team";

// import Service from "../page/service";
import ErrorPage from "../error-page";
// import Reset from "../page/auth/ResetPassword.jsx";
// import SignIn from "../page/auth/SignIn";
// import SignUp from "../page/auth/SignUp";
// import CommingSoon from "../page/utility/CommingSoon.jsx";
import BlogGridPage from "../page/blog/BlogGridPage.jsx";
// import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
// import LayoutFive from "../components/layout/LayoutFive.jsx";
// import LayoutFour from "../components/layout/LayoutFour.jsx";
// import LayoutSeven from "../components/layout/LayoutSeven.jsx";
// import LayoutSix from "../components/layout/LayoutSix.jsx";
// import LayoutThree from "../components/layout/LayoutThree.jsx";
// import LayoutTwo from "../components/layout/LayoutTwo.jsx";
// import BlogPage from "../page/blog/BlogPage.jsx";
// import SingleBlogPage from "../page/blog/SingleBlog.jsx";
// import HomeFive from "../page/home/HomeFive.jsx";
// import HomeFour from "../page/home/HomeFour.jsx";
// import HomeSeven from "../page/home/HomeSeven.jsx";
// import HomeSix from "../page/home/HomeSix.jsx";
// import HomeThree from "../page/home/HomeThree.jsx";
// import HomeTwo from "../page/home/HomeTwo.jsx";
// import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
// import SinglePortfolio from "../page/portfolio/SinglePortfolio";
// import SingleService from "../page/service/SingleService.jsx";
// import SingleTeam from "../page/team/SingleTeam.jsx";

// extrapages implimented
import Portfolio from "../page/portfolio/Portfolio.jsx";
import Winestore from "../page/solutions/Winestore.jsx";
import Businessdirectory from "../page/solutions/Businessdirectory.jsx";
import Creditrepair from "../page/solutions/Creditrepair.jsx";
import Itdigitalagency from "../page/solutions/Itdigitalagency.jsx";

import CaseStudies from "../page/projects/CaseStudies.jsx";
import OurWork from "../page/projects/OurWork.jsx";
import SingleBlog2 from "../page/blog/SingleBlog2.jsx";
import Brand from "../page/Brand.jsx";
import Blog1 from "../page/blog/Blog.jsx";
import Pestrashop from "../page/service/Pestrashop.jsx";
import Shift4shop from "../page/service/Shift4shop.jsx";
import BigCommerce from "../page/service/BigCommerce.jsx";
import WooCommerceDevelopment from "../page/service/WooCommerceDevelopment.jsx";
import OurWork2 from "../page/projects/OurWork2.jsx";
import AndroidAppDev from "../page/service/AndroidAppDev.jsx";

// import Portfolio2 from "../page/portfolio/Portfolio2.jsx";
// import Categories from "../page/portfolio/Categories.jsx";
// import Countries from "../page/portfolio/Countries.jsx";
// import Industries from "../page/portfolio/Industries.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},

					{
						path: "/testimonial",
						element: <TestimonialPage />,
					},

					{
						path: "/pricing",
						element: <Pricing />,
					},
					{
						path: "/brand",
						element: <Brand />,
					},
					// {
					// 	path: "/blog",
					// 	element: <BlogPage />,
					// },
					// {
					// 	path: "/single-blog",
					// 	element: <SingleBlogPage />,
					// },

					{
						path: "/blog-grid",
						element: <BlogGridPage />,
					},
					{
						path: "/singleblog2",
						element: <SingleBlog2 />,
					},
					{
						path: "/blog1",
						element: <Blog1 />,
					},
					// {
					// 	path: "/service",
					// 	element: <Service />,
					// },
					// {
					// 	path: "/single-service",
					// 	element: <SingleService />,
					// },
					{
						path: "/casestudies",
						element: <CaseStudies />,
					},
					{
						path: "/ourwork",
						element: <OurWork />,
					},
					{
						path: "/ourwork2",
						element: <OurWork2 />,
					},
					{
						path: "/Businessdirectory",
						element: <Businessdirectory />,
					},
					{
						path: "/creditrepair",
						element: <Creditrepair />,
					},
					{
						path: "/itdigitalagency",
						element: <Itdigitalagency />,
					},
					{
						path: "/winestore",
						element: <Winestore />,
					},
					{
						path: "/team",
						element: <Team />,
					},
					// {
					// 	path: "/single-team",
					// 	element: <SingleTeam />,
					// },
					// {
					// 	path: "/portfolio-one",
					// 	element: <PortfolioOneColumn />,
					// },

					// {
					// 	path: "/single-portfolio",
					// 	element: <SinglePortfolio />,
					// },
					// {
					// 	path: "/portfolio-two",
					// 	element: <PortfolioTwoColumn />,
					// },
					{
						path: "/portfolio",
						element: <Portfolio />,
					},
					// {
					// 	path: "/portfolio2",
					// 	element: <Portfolio2 />,
					// },
					// {
					// 	path: "/categories",
					// 	element: <Categories />,
					// },
					// {
					// 	path: "/countries",
					// 	element: <Countries />,
					// },
					// {
					// 	path: "/industries",
					// 	element: <Industries />,
					// },
					{
						path: "*",
						element: <ErrorPage />,
					},
					{
						path: "/pestrashop",
						element: <Pestrashop />,
					},
					{
						path: "/shift4shop",
						element: <Shift4shop />,
					},
					{
						path: "/bigcommerce",
						element: <BigCommerce />,
					},
					{
						path: "/woocommercedevelopment",
						element: <WooCommerceDevelopment />,
					},
					{
						path: "/androidappdev",
						element: <AndroidAppDev />,
					},
				],
			},
			// {
			// 	path: "/",
			// 	element: <LayoutTwo />,
			// 	children: [
			// 		{
			// 			path: "/home-two",
			// 			element: <HomeTwo />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutThree />,
			// 	children: [
			// 		{
			// 			path: "/home-three",
			// 			element: <HomeThree />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutFour />,
			// 	children: [
			// 		{
			// 			path: "/home-four",
			// 			element: <HomeFour />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutFive />,
			// 	children: [
			// 		{
			// 			path: "/home-five",
			// 			element: <HomeFive />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutSix />,
			// 	children: [
			// 		{
			// 			path: "/home-six",
			// 			element: <HomeSix />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutSeven />,
			// 	children: [
			// 		{
			// 			path: "/home-seven",
			// 			element: <HomeSeven />,
			// 		},
			// 	],
			// },
			{
				path: "/",
				element: <LayoutEight />,
				children: [
					// {
					// 	path: "/coming-soon",
					// 	element: <CommingSoon />,
					// },
					// {
					// 	path: "/reset-password",
					// 	element: <Reset />,
					// },
					// {
					// 	path: "/sign-up",
					// 	element: <SignUp />,
					// },
					// {
					// 	path: "/sign-in",
					// 	element: <SignIn />,
					// },
				],
			},
		],
	},
]);
