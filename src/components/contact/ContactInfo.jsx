import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
// import MapImg from "../../assets/images/icon/map.svg";
import Star2Img from "../../assets/images/v1/star2.webp";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						<span className="aximo-title-animation">
							Contact Information
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row d-flex justify-content-center">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">

						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={Call2Img} alt="Call Img" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Call us</span>

								<a href="tel:+15197293709" style={{ color: "white", fontSize: "21px" }}> +1 519 729 3709</a>
								{/* <p style={{ color: 'black' }}>.</p> */}
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">

						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={EmailImg} alt="Email" />
							</div>
							<div className="aximo-contact-info-data" >
								<span>Email us</span>
								<a href="mailto:arvind@codersh.com" style={{ color: "white", fontSize: "21px" }}>arvind@codersh.com</a>
								{/* <p style={{ color: 'black' }}>.</p> */}
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					{/* <FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={MapImg} alt="Map" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Office address</span>
								
								<a href="https://www.google.com/maps/place/Codersh+Web+Services/@23.0731385,72.5106518,17z/data=!3m2!4b1!5s0x395e9b5927c2aa5d:0x269084b0da0ece14!4m6!3m5!1s0x395e81f21c5da795:0x8c70d1b4999d0473!8m2!3d23.0731336!4d72.5132267!16s%2Fg%2F11g1g8k2fg?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" style={{ color: "white", fontSize: "21px" }}>A-307/502, Empire Business Hub</a>
							</div>
						</div>
					</FadeInStaggerTwoChildren> */}
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
