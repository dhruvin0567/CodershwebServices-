// Import your images/SVGs at the top
// import ExampleImg from 'path/to/your/image.svg';

function ServiceCard({ service: { title, description, iconImg } }) {
	return (
		<div className="aximo-iconbox-wrap4">
			<div className="aximo-iconbox-icon4">
				<img loading="lazy" src={iconImg} alt={title} />
			</div>
			<div className="aximo-iconbox-data4">
				<h6 style={{ marginBottom: "15px" }}>{title}</h6>
				<p >{description}</p>
			</div>
		</div>
	);
}

export default ServiceCard;
