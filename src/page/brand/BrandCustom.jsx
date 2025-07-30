import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeInStagger from "../../components/animation/FadeInStagger";
import BreadCrumb from "../../components/common/Breadcrumb";

const Brand = () => {
  const brandImages = useMemo(
    () => [
      { id: "rd-homes", image: "1.webp" },
      { id: "elevation-107", image: "2.webp" },
      { id: "kick-ash-basket", image: "4.webp" },
      { id: "texas-fowlers", image: "6.webp" },
      { id: "aubi-and-ramsa", image: "7.webp" },
      { id: "cool-out", image: "8.webp" },
      { id: "obvi-protien", image: "10.webp" },
      { id: "liberation-cocktails", image: "11.webp" },
      { id: "bone-idyll", image: "12.webp" },
      { id: "moth-drinks", image: "13.webp" },
      { id: "artisan-drink", image: "14.webp" },
      { id: "fuel-10k", image: "15.webp" },
      { id: "queen-v", image: "17.webp" },
      { id: "vidl-life", image: "19.webp" },
      { id: "geon-alps", image: "20.webp" },
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Brands We've Worked With | Codersh Web Services</title>
        <meta
          name="description"
          content="Explore a showcase of brands we've partnered with for Shopify design and development. See how Codersh helps brands grow online."
        />
        <meta
          property="og:title"
          content="Top Brands | Shopify Partners | Codersh"
        />
        <meta
          property="og:description"
          content="Browse trusted brands that trust Codersh Web Services for Shopify success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/brand" />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview.jpg"
        />
      </Helmet>

      <BreadCrumb title="Brand" />

      <main>
        <section
          className="brands-section py-5 my-sm-5"
          aria-labelledby="brands-heading"
        >
          <div className="container-fluid">
            <div className="row" role="list">
              {brandImages.map((brand, index) => (
                <div
                  className="col-lg-3 col-sm-4 col-6 mb-3 p-3"
                  key={brand.id}
                  role="listitem"
                >
                  <FadeInStagger>
                    <Link
                      to={`/brand/${brand.id}`}
                      className="brand-card"
                      aria-label={`View details for ${brand.name}`}
                    >
                      <article itemScope itemType="https://schema.org/Brand">
                        <img
                          src={`/images/brands/brands-cards/${brand.image}`}
                          alt={`${brand.name} logo`}
                          loading="lazy"
                          className="img-fluid"
                          itemProp="logo"
                        />
                        <meta itemProp="name" content={brand.name} />
                      </article>
                    </Link>
                  </FadeInStagger>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Brand;
