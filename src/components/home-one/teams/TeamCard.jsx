import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="aximo-team-wrap">
			<div className="aximo-team-thumb">
				<img src={img} alt={name} />
				<div className="aximo-social-icon team-social">
					<ul>
						<li>
							<a href="https://twitter.com" target="_blank">
								<i className="icon-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://facebook.com" target="_blank">
								<i className="icon-facebook"></i>
							</a>
						</li>
						<li>
							<a href="https://instagram.com" target="_blank">
								<i className="icon-instagram"></i>
							</a>
						</li>
						<li>
							<a href="https://linkedin.com" target="_blank">
								<i className="icon-linkedin"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-team-data">
				<Link to="/single-team">
					<h3>{name}</h3>
				</Link>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;
