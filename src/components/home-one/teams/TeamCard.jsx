import { Link } from "react-router-dom";

function TeamCard({ team: { name, designation, img }, index }) {
  return (
    <article
      className="aximo-team-wrap"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="aximo-team-thumb">
        <img src={img} alt={`Photo of ${name}, ${designation}`} />
        {index === 0 && (
          <div className="aximo-social-icon team-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/CodershWeb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codersh Twitter"
                >
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/Codershweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codersh Facebook"
                >
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/codersh.web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codersh Instagram"
                >
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/30213091/admin/analytics/followers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codersh LinkedIn"
                >
                  <i className="icon-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="aximo-team-data">
        <Link to="/single-team">
          <h3>{name}</h3>
        </Link>
        <p itemProp="jobTitle">{designation}</p>
      </div>
    </article>
  );
}

export default TeamCard;
