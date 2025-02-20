import { Link } from "react-router-dom";
import { motion } from "framer-motion";



// import Case1Img from "src/assets/images/Images_2/image_2024_07_05T14_06_31_811Z-768x380.png";


const caseStudiesData = [
  {
    id: crypto.randomUUID(),
    title: "Van Hunks: Spicing Up Their Shopify Store",
    img: "src/assets/images/Images_2/image_2024_07_05T14_06_31_811Z-768x380.png",
    link: "/casestudies/Van Hunks: Spicing Up Their Shopify Store",
  },
  {
    id: crypto.randomUUID(),
    title: "Madame F – Celebrating Diversity in Every Glass",
    img: "src/assets/images/Images_2/Screenshot-2024-07-26-153702-768x379.png",
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "LIBERATION COCKTAILS – Elevating the Pre-Mixed Cocktail Experience with a Custom Shopify Solution",
    img: "src/assets/images/Images_2/Screenshot-2024-07-26-153524-768x380.png",
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "Chez Omar – French Caribbean Cuisine: NYC’s Digital Flavor",
    img: "src/assets/images/Images_2/Screenshot-2024-07-26-153615-768x381.png",
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify E-Commerce Development Project for ReinventU",
    img: "src/assets/images/Images_2/Screenshot-2024-07-26-154119-768x380.png",
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify E-Commerce Development Project for a Kids Clothing Store",
    img: "src/assets/images/Images_2/Screenshot-2024-07-15-173730-768x374.png",
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "How a luxury clothing brand utilized Codersh to bring their Stores online",
    img: "src/assets/images/Images_2/Screenshot-2024-07-15-170221-768x338.png",
    link: "#",
  }
];



function CaseStudiesdata() {
  return (
    <div>

      <div className="blogs">
        <div className="container">
          <div className="row">
            {caseStudiesData.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className="col-lg-4 col-sm-6"
                initial={{ opacity: 0 }} // Initial state: invisible
                animate={{ opacity: 1 }} // Animate to full opacity
                transition={{
                  delay: index * 0.2, // Stagger delay based on index
                  duration: 0.6, // Duration of fade-in
                }}
              >
                <div className="blog-card">
                  {/* Blog Image */}
                  <img className="blog-image" src={caseStudy.img} alt={caseStudy.title} />
                  <div className="blog-content">
                    {/* Blog Title Link */}
                    <Link to={caseStudy.link}>
                      <h6 className="blog-title">{caseStudy.title}</h6>
                    </Link>
                    {/* Read more link */}
                    <Link to={caseStudy.link} className="blog-link">
                      Read more
                      <img
                        src="src/assets/images/Images_2/arrow-right.svg"
                        alt="arrow"
                        className="readMore-btn"
                        height="17px"
                        style={{ marginLeft: "5px" }}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default CaseStudiesdata

