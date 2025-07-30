import Story1Img from "../../../assets/images/about/story1-1.webp";
import Story2Img from "../../../assets/images/about/story2-1.webp";
import Story3Img from "../../../assets/images/about/story3-1.webp";
import Story4Img from "../../../assets/images/about/story4-1.webp";
import Story5Img from "../../../assets/images/about/story5-1.webp";
import Story6Img from "../../../assets/images/about/story6-1.webp";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function StoryPhotos() {
  return (
    <FadeInStaggerTwo className="row" aria-label="Company Story Photos">
      <FadeInStaggerTwoChildren className="col-lg-8">
        <div className="aximo-story-thumb">
          <img
            src={Story1Img}
            alt="Modern developer workstation at Codersh Web Services with dual monitors and productivity setup"
          />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-4">
        <div className="aximo-story-thumb">
          <img
            src={Story2Img}
            alt="Codersh software engineer coding a Shopify project in the company office"
          />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-4">
        <div className="aximo-story-thumb">
          <img
            src={Story3Img}
            alt="Frontend developer at Codersh Web Services working in front of a company memory wall"
          />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-8">
        <div className="aximo-story-thumb">
          <img
            src={Story4Img}
            alt="Codersh Web Services development team collaborating on a Shopify store build"
          />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-8">
        <div className="aximo-story-thumb">
          <img
            src={Story5Img}
            alt="Codersh Web Services team celebrating cultural festival in traditional Indian attire"
          />
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="col-lg-4">
        <div className="aximo-story-thumb">
          <img
            src={Story6Img}
            alt="Backend developer testing web functionality at Codersh Web Services workstation"
          />
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default StoryPhotos;
