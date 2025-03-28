import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function AboutCounter() {
	const [startCounter, setStartCounter] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			setStartCounter(true);
		}
	}, [inView]);

	return (
		<div className="aximo-counter-wrap" ref={ref}>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						{startCounter && <CountUp end={100} duration={3} />}
					</span>
					%
				</h2>
				<p>Success Ratio</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						{startCounter && <CountUp end={92} duration={3} />}
					</span>
					%
				</h2>
				<p>Recurring Clients</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						{startCounter && <CountUp end={5} duration={3} />}
					</span>
					.0
				</h2>
				<p>Ratings On Clutch.co</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						{startCounter && <CountUp end={1000} duration={3} />}
					</span>
					+
				</h2>
				<p>Projects Delivered</p>
			</div>
		</div>
	);
}

export default AboutCounter;