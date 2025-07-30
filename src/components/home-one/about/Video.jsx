import { useState } from "react";
import PlayBtnImg from "../../../assets/images/v1/play-btn.svg";
import VideoBg from "../../../assets/images/v1/video-bg.webp";
import FadeInUp from "../../animation/FadeInUp";
import VideoPlay from "../../../assets/images/Videos/Asterley Bros, London.webm";

function Video() {
  const [isOpen, setOpen] = useState(false);

  // Responsive styles
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
    zIndex: 9999,
    padding: "20px",
    boxSizing: "border-box",
  };

  const overlayStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  };

  const videoContainerStyles = {
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
    aspectRatio: "16/9",
    borderRadius: "10px", // Added border radius to container
    overflow: "hidden", // This ensures the video respects the border radius
  };

  const videoStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px", // Also added to video element for browser compatibility
    objectFit: "cover", // Changed from 'contain' to 'cover' for better appearance
  };

  const closeButtonStyles = {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "rgba(255, 255, 255, 0.7)",
    border: "none",
    color: "#000",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 10000,
  };

  return (
    <FadeInUp className="aximo-video-wrap" style={{ position: "relative" }}>
      <img
        src={VideoBg}
        alt="VideoBg preview showing Shopify success story"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "10px", // Added to preview image for consistency
        }}
      />

      {/* Custom Modal for Local Video */}
      {isOpen && (
        <div style={modalStyles}>
          <div style={overlayStyles} onClick={() => setOpen(false)}></div>

          <button style={closeButtonStyles} onClick={() => setOpen(false)}>
            ✖
          </button>

          <div style={videoContainerStyles}>
            <video controls autoPlay style={videoStyles}>
              <source src={VideoPlay} type="video/webm" />
              <source src={VideoPlay} type="video/webm" />
              <track
                src="/captions/asterleybros-en.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
                default
              />
              <p>
                Your browser does not support the video tag. Watch our video on{" "}
                <a href="/contact-us">our services page</a>.
              </p>
            </video>
          </div>
        </div>
      )}

      {/* Custom Play Button */}
      <button
        className="aximo-video-popup play-btn1 video-init"
        onClick={() => setOpen(true)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <img
          src={PlayBtnImg}
          alt="Play Button"
          style={{
            width: "125px",
            "@media (max-width: 768px)": {
              width: "60px",
              height: "60px",
            },
          }}
        />
      </button>

      <script type="application/ld+json">
        {`
				{
					"@context": "https://schema.org",
					"@type": "VideoObject",
					"name": "Asterley Bros Shopify Success",
					"description": "See how Codersh Web Services improved Asterley Bros' e-commerce experience using Shopify Plus.",
					"thumbnailUrl": "https://yourdomain.com/images/video-preview.jpg",
					"uploadDate": "2025-07-01",
					"contentUrl": "https://yourdomain.com/videos/asterley-bros.webm",
					"embedUrl": "https://yourdomain.com#video"
				}
				`}
      </script>
    </FadeInUp>
  );
}

export default Video;
