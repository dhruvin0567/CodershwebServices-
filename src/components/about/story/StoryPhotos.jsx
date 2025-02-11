import Story1Img from "../../../assets/images/about/story1.png";
import Story2Img from "../../../assets/images/about/story2.png";
import Story3Img from "../../../assets/images/about/story3.png";
import Story4Img from "../../../assets/images/about/story4.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function StoryPhotos() {
	return (
		<FadeInStaggerTwo className="row">
			<FadeInStaggerTwoChildren className="col-lg-8">
				<div className="aximo-story-thumb">
					<img src={Story1Img} alt="Story1Img" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-4">
				<div className="aximo-story-thumb">
					<img src={Story2Img} alt="StroryIMg 2" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-4">
				<div className="aximo-story-thumb">
					<img src={Story3Img} alt="StoryImg 3" />
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-8">
				<div className="aximo-story-thumb">
					<img src={Story4Img} alt="Story4Img" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default StoryPhotos;
