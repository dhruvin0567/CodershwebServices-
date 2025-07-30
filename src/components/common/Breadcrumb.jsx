import { Link } from "react-router-dom";
import BreadcrumbBG from "../../assets/images/images2/tinified/angularjs_1.webp";
function BreadCrumb({ title }) {
  return (
    <div
      className="aximo-breadcrumb"
      style={{ backgroundImage: `url(${BreadcrumbBG})` }}
    >
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav aria-label="breadcrumb" className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {title === "Blog Details" && (
              <li>
                <Link to="/ourblog">Blog</Link>
              </li>
            )}
            {title === "Case Study Details" && (
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
            )}
            <li aria-current="page">{title}</li>
          </ul>
        </nav>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.yourdomain.com",
              },
              ...(title === "Blog Details"
                ? [
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Blog",
                      item: "https://www.yourdomain.com/ourblog",
                    },
                  ]
                : []),
              ...(title === "Case Study Details"
                ? [
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Case Studies",
                      item: "https://www.yourdomain.com/case-studies",
                    },
                  ]
                : []),
              {
                "@type": "ListItem",
                position: 3,
                name: title,
                item: `https://www.yourdomain.com/${title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`,
              },
            ],
          })}
        </script>
      </div>
    </div>
  );
}

export default BreadCrumb;
