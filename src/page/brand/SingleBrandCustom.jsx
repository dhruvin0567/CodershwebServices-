import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Star2Img from "../../assets/images/v1/icon/star2.webp";
import useIsMobile from "./useIsMobile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleBrandCustom() {
  const { brandId } = useParams();
  const [brandData, setBrandData] = useState(null);
  const isMobile = useIsMobile();

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
  };

  useEffect(() => {
    fetch(`/data/brands-details/${brandId}.json`)
      .then((res) => res.json())
      .then((data) => setBrandData(data))
      .catch((err) => console.error("Error loading brand data:", err));
  }, [brandId]);

  if (!brandData) return <div>Loading...</div>;

  const {
    heroImage,
    brief,
    details,
    images,
    challenge,
    solution,
    relatedBrands,
  } = brandData;

  return (
    <main style={{ overflowX: "hidden" }}>
      <Helmet>
        <title>{brief.title} | Shopify Project by Codersh</title>
        <meta
          name="description"
          content={`${brief.description?.slice(
            0,
            160
          )} - Codersh Shopify Case Study`}
        />
        <meta property="og:title" content={brief.title} />
        <meta property="og:description" content={brief.description} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://yourdomain.com/brand/${brandId}`}
        />
      </Helmet>

      <div className="Brand-breadcrumb">
        <div className="container">
          <br />
          <br />
          <br />
        </div>
      </div>

      <section
        className="case-study-hero-section"
        aria-label={`${brief.title} Hero Image`}
      >
        <img
          src={heroImage}
          alt={`${brief.title} website screenshot`}
          className="img-fluid w-100"
          loading="eager"
        />
      </section>

      <section>
        <div className="cs-text" aria-label="Project Overview">
          <div className="container-lg">
            <div className="row">
              <div className="col-md-6 text-start">
                <div className="p-3 p-md-4 p-lg-5">
                  <h2 className="pt-3 pb-3 pt-md-0 pb-md-4">{brief.title}</h2>
                  <p className="brand-text">{brief.description}</p>
                </div>
              </div>

              <div className="col-md-6 brand-info-container">
                <div className="px-2 py-4 px-md-4 px-lg-5 py-md-5 h-100">
                  <ul>
                    <li className="brand-info-li">
                      <p>Industry</p>
                      <p className="brand-text-2">{details.industry}</p>
                    </li>
                    <li className="brand-info-li">
                      <p>Project</p>
                      <p className="brand-text-2">{details.project}</p>
                    </li>
                    <li className="brand-info-li">
                      <p>Technology</p>
                      <p className="brand-text-2">{details.technology}</p>
                    </li>
                    <li className="brand-info-li">
                      <p>Visit</p>
                      <p className="brand-text-2">
                        <a
                          href={details.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontStyle: "none", color: "black" }}
                        >
                          {new URL(details.visit).hostname}
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="image-section" aria-label="Laptop Screenshot">
        <div className="case-study-section-img">
          <img
            src={images.laptop}
            alt={`${brief.title} laptop view`}
            loading="lazy"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="cs-richtext text-center" aria-label="Challenge">
        <div className="container-lg p-4 py-md-5 px-md-4 px-lg-0">
          <h2 className="my-3">
            <span className="aximo-title-animation">
              {challenge.title}
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star icon" />
              </span>
            </span>
          </h2>
          <p className="brand-text">{challenge.description}</p>
        </div>
      </section>

      <section
        className="cs-images-section"
        aria-label="Additional Brand Images"
      >
        <div className="container-lg">
          <div className="row">
            {images.other.map((img, idx) => (
              <div className="col-md-6 mt-4 mt-md-0" key={idx}>
                <div className="cs-img">
                  <img
                    src={img}
                    alt={`View ${idx + 1} of ${brief.title}`}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="cs-richtext text-center"
        aria-label="Final Showcase Image"
      >
        <div className="container-lg p-4 py-md-5 px-md-4 px-lg-0">
          <h2 className="my-3">
            <span className="aximo-title-animation">
              {solution.title}
              <span className="aximo-title-icon">
                <img
                  src={Star2Img}
                  alt={`${brief.title} final showcase`}
                  className="img-fluid"
                  loading="lazy"
                />
              </span>
            </span>
          </h2>
          <p className="brand-text">{solution.description}</p>
        </div>
      </section>

      <section
        className="container-lg cs-images-section-container px-lg-0"
        aria-label="Final Showcase Image"
      >
        <div className="cs-image-section d-flex justify-content-center">
          <img
            src={images.laptop}
            alt={`${brief.title} final showcase`}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </section>

      <section className="image-cards-section py-5" aria-label="Related Brands">
        <div className="container text-center">
          <h2 className="mb-3 mb-lg-4">
            Related Brands
            <span className="aximo-title-animation">
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star icon" />
              </span>
            </span>
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {isMobile ? (
              <Slider {...sliderSettings}>
                {relatedBrands.map((brand) => (
                  <div key={brand.id}>
                    <Link
                      className="brand-card"
                      to={brand.link}
                      aria-label={`Visit ${brand.title}`}
                    >
                      <img
                        src={brand.img}
                        alt={`${brand.title} logo`}
                        style={{ width: "100%" }}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
            ) : (
              relatedBrands.map((brand) => (
                <div className="col-md-4 p-4 p-md-3" key={brand.id}>
                  <Link
                    className="brand-card"
                    to={brand.link}
                    aria-label={`Visit ${brand.title}`}
                  >
                    <img
                      src={brand.img}
                      alt={`${brand.title} logo`}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SingleBrandCustom;
