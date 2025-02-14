import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy;  All Rights Reserved 2025. | Powered by Codersh.</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
