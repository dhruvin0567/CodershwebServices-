function FeatureCard({ feature: { img, title, description } }) {
	return (
		<div className="aximo-iconbox-wrap6">
			<div className="aximo-iconbox-icon6">
				<img src={img} alt={title} />
			</div>
			<div className="aximo-iconbox-data6">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
