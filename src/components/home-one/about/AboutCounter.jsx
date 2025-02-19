import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Success Ratio</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={92} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Recurring Clients</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={5} duration={3} redraw={true} enableScrollSpy />
					</span>
					.0
				</h2>
				<p>Ratings On Clutch.co</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={1000} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Projects Delivered</p>
			</div>
		</div>
	);
}

export default AboutCounter;
