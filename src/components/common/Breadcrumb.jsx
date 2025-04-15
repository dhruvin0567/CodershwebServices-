import { Link } from "react-router-dom";
import BreadcrumbBG from "../../assets/images/images2/tinified/angularjs_1.webp";
function BreadCrumb({ title }) {
	return (
		<div className="aximo-breadcrumb" style={{ backgroundImage: `url(${BreadcrumbBG})` }}>
			<div className="container">
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						{title === "Blog Details" && (
							<li>
								<Link to="/ourblog">Blog</Link>
							</li>
						)}
						{title === "Case Study Details" && (
							<li>
								<Link to="/case-studies">Case Studies</Link>
							</li>
						)}
						<li aria-current="page">{title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
