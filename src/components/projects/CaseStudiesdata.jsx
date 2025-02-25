import FadeInStagger from "../../components/animation/FadeInStagger";
import GridBlogCard from "../../components/blog/grid-blog/GridBlogCard";

import Case1Img from '../../assets/images/images2/image_2024_07_05T14_06_31_811Z-768x380.png';
import Case2Img from '../../assets/images/images2/Screenshot-2024-07-26-153702-768x379.png';
import Case3Img from '../../assets/images/images2/Screenshot-2024-07-26-153524-768x380.png';
import Case4Img from '../../assets/images/images2/Screenshot-2024-07-26-153615-768x381.png';
import Case5Img from '../../assets/images/images2/Screenshot-2024-07-26-154119-768x380.png';
import Case6Img from '../../assets/images/images2/Screenshot-2024-07-15-173730-768x374.png';
import Case7Img from '../../assets/images/images2/Screenshot-2024-07-15-170221-768x338.png';



const gridBlogData = [
  {
    id: crypto.randomUUID(),
    title: "Van Hunks: Spicing Up Their Shopify Store",
    img: Case1Img,
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "Madame F – Celebrating Diversity in Every Glass",
    img: Case2Img,
    link: "#",
  },

  {
    id: crypto.randomUUID(),
    title: "Chez Omar – French Caribbean Cuisine: NYC’s Digital Flavor",
    img: Case4Img,
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify E-Commerce Development Project for ReinventU",
    img: Case5Img,
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify E-Commerce Development Project for a Kids Clothing Store",
    img: Case6Img,
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "How a luxury clothing brand utilized Codersh to bring their Stores online",
    img: Case7Img,
    link: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "LIBERATION COCKTAILS – Elevating the Pre-Mixed Cocktail Experience with a Custom Shopify Solution",
    img: Case3Img,
    link: "#",
  },
];



function CaseStudiesdata() {
  return (
    <div>

      <div className="section aximo-section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {gridBlogData.map((blog, index) => (
                  <FadeInStagger className="col-xl-4" key={blog.id} index={index}>
                    <GridBlogCard blog={blog} />
                  </FadeInStagger>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CaseStudiesdata

