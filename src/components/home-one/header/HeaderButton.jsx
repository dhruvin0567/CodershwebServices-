// import { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
function HeaderButton() {

	// const [showWidget, setShowWidget] = useState(false);
	// useEffect(() => {
	// 	if (showWidget) {
	// 		const script = document.createElement('script');
	// 		script.src = 'https://assets.calendly.com/assets/external/widget.js';
	// 		script.async = true;
	// 		document.body.appendChild(script);
	// 	}
	// }, [showWidget]);

	// const handleClose = () => {
	// 	setShowWidget(false);
	// };

	return (

		<div className="header-btn header-btn-l1 ms-auto d-none d-sm-inline-flex">
			<a
				className="aximo-default-btn pill aximo-header-btn"
				href="https://calendly.com/codersh-web-services/15min"
				target="_blank"
				rel="noopener noreferrer"
			>
				Free Consultation
			</a>
		</div>

		// <div>
		// 	<a
		// 		onClick={() => setShowWidget(true)}
		// 		className="aximo-default-btn pill aximo-header-btn"
		// 	>
		// 		Free Consultation
		// 	</a>

		// 	{showWidget && (
		// 		<div
		// 			style={{
		// 				position: 'fixed',
		// 				top: 0,
		// 				left: 0,
		// 				width: '100vw',
		// 				height: '100vh',
		// 				backgroundColor: 'rgba(0, 0, 0, 0.6)',
		// 				zIndex: 9999,
		// 				display: 'flex',
		// 				alignItems: 'center',
		// 				justifyContent: 'center',
		// 				padding: '20px',
		// 			}}
		// 		>
		// 			<div
		// 				style={{
		// 					position: 'relative',
		// 					width: '100%',
		// 					maxWidth: '600px', // 👈 smaller max width
		// 					height: '600px',    // 👈 smaller height
		// 					background: '#fff',
		// 					borderRadius: '12px',
		// 					overflow: 'hidden',
		// 					boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
		// 				}}
		// 			>
		// 				<div
		// 					className="calendly-inline-widget"
		// 					data-url="https://calendly.com/codersh-web-services/15min"
		// 					style={{ width: '100%', height: '100%' }}
		// 				></div>

		// 				<button
		// 					onClick={handleClose}
		// 					style={{
		// 						position: 'absolute',
		// 						top: '10px',
		// 						right: '10px',
		// 						background: '#f5f5f5',
		// 						border: 'none',
		// 						padding: '6px 10px',
		// 						borderRadius: '50%',
		// 						cursor: 'pointer',
		// 						fontSize: '18px',
		// 					}}
		// 					aria-label="Close"
		// 				>
		// 					✖
		// 				</button>
		// 			</div>
		// 		</div>
		// 	)}
		// </div>
	);
}

export default HeaderButton;




