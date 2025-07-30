// import { Link } from "react-router-dom";
// import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
  return (
    <article className="aximo-iconbox-wrap">
      <div className="aximo-iconbox-icon">
        <i className={`${icon}`} aria-hidden="true"></i>
      </div>
      <div className="aximo-iconbox-data">
        <h3>{title}</h3>
        <p className="aximo-p-second">{description}</p>
        {/* <Link to="/single-service" className="aximo-icon">
					<img src={ArrowRightImg} alt="arrow right" />
				</Link> */}
      </div>
    </article>
  );
}

export default ServiceCard;
