import Star2Img from "../../../assets/images/v1/star2.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import TeamCard from "./TeamCard";

function Teams({ teams }) {
  return (
    <section
      className="section aximo-section-padding3"
      id="our-team"
      aria-labelledby="our-team-title"
    >
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            We have a team of
            <span className="aximo-title-animation">
              creative people
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Decorative star icon" />
              </span>
            </span>
          </h2>
        </div>
        <div
          className="row"
          role="list"
          aria-label="List of team members at Codersh Web Services"
        >
          {teams.map((team, index) => (
            <FadeInStagger
              key={team.id}
              index={index}
              className="col-xl-3 col-md-4 col-sm-6 col-6"
              role="listitem"
            >
              <TeamCard team={team} index={index} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
