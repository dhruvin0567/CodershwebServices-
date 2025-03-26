import { useState } from "react";
import PlayBtnImg from "../../../assets/images/v1/play-btn.svg";
import VideoBg from "../../../assets/images/v1/video-bg.webp";
import FadeInUp from "../../animation/FadeInUp";
import VideoPlay from "../../../assets/images/Videos/Asterley Bros, London.webm"

function Video() {
	const [isOpen, setOpen] = useState(false);

	// Inline styles for modal and elements
	const modalStyles = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		background: "rgba(0, 0, 0, 0.8)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 9999
	};

	const overlayStyles = {
		position: "absolute",
		width: "100%",
		height: "100%",
		cursor: "pointer"
	};

	const videoStyles = {
		width: "60%",
		height: "auto",
		maxHeight: "80%",
		borderRadius: "10px"
	};

	const closeButtonStyles = {
		position: "absolute",
		top: "100px",
		right: "225px",
		background: "rgba(255, 255, 255, 0.7)",
		border: "none",
		color: "#000",
		fontSize: "20px",
		fontWeight: "bold",
		padding: "10px 15px",
		borderRadius: "50%",
		cursor: "pointer",
		zIndex: 10000

	};



	return (
		<FadeInUp className="aximo-video-wrap" style={{ position: "relative" }}>
			<img src={VideoBg} alt="VideoBg" style={{ width: "100%" }} />

			{/* Custom Modal for Local Video */}
			{isOpen && (
				<div style={modalStyles}>
					<div style={overlayStyles} onClick={() => setOpen(false)}></div>

					{/* Close Button */}
					<button style={closeButtonStyles} onClick={() => setOpen(false)}>✖</button>

					{/* Video Player (Autoplay OFF) */}
					<video controls style={videoStyles}>
						<source src={VideoPlay} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			)}

			{/* Custom Play Button */}
			<button className="aximo-video-popup play-btn1 video-init" onClick={() => setOpen(true)}>
				<img src={PlayBtnImg} alt="Play Button" />
			</button>
		</FadeInUp>
	);
}

export default Video;
