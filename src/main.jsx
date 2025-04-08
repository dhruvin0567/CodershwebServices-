import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// Critical CSS (loaded synchronously)
import "./assets/css/main.css";
import "./assets/css/app.css";

// Inline font-display for critical font loading (Ensures early display)
const fontCSS = document.createElement('style');
fontCSS.innerHTML = `
  @font-face {
    font-family: 'Syne';
    src: url('https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap');
    font-display: swap;
  }
`;
document.head.appendChild(fontCSS);

// Lazy-loaded non-critical CSS
const loadNonCriticalCSS = () => {
	// Bootstrap JS (deferred)
	import("bootstrap/dist/js/bootstrap.bundle.min");

	// React Modal Video (only loads when needed)
	import("react-modal-video/css/modal-video.css");

	// Lazy load image (only loads when needed)
	import("react-lazy-load-image-component/src/effects/blur.css");

	// Fonts (preloaded in HTML)
	import("./assets/css/fontawesome.css");
	import("./assets/css/icomoon.css");
	import("./font.js");

	// Swiper (only loads when needed)
	Promise.all([
		import("swiper/css"),
		import("swiper/css/autoplay"),
		import("swiper/css/mousewheel"),
		import("swiper/css/navigation"),
		import("swiper/css/pagination"),
		import("swiper/css/scrollbar")
	]);

	// Mobile nav (only loads on mobile devices)
	if (window.innerWidth <= 768) {
		import("./assets/css/mobile-nav.css");
	}
};

// Start loading non-critical resources after hydration
setTimeout(loadNonCriticalCSS, 2000);

// Create root and render
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
