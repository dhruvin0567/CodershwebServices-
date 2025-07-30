import React from "react";
import arrow_right from "../../../assets/images/icon/arrow-right8.svg";
import blog1 from "../../../assets/images/blog/blog1.webp";
import blog2 from "../../../assets/images/blog/blog2.webp";
import blog3 from "../../../assets/images/blog/blog3.webp";
import blog4 from "../../../assets/images/blog/blog4.webp";
import blog5 from "../../../assets/images/blog/blog5.webp";
// import blog6 from "../../../assets/images/blog/blog6.webp";
import blog7 from "../../../assets/images/blog/blog7.webp";
import blog8 from "../../../assets/images/blog/blog8.webp";
import blog9 from "../../../assets/images/blog/blog9.webp";
import blog10 from "../../../assets/images/blog/blog10.webp";
import BlogCards from "../BlogCards";

function GridBlog() {
  const blogData = [
    {
      id: 1,
      image: blog1,
      title:
        "From A 30-Minute Meetup To A 4-Hour Masterclass: Lessons From Zybra’s SaaS Journy",
    },
    {
      id: 2,
      image: blog2,
      title:
        "How Does Codersh Enhance Shopify Potential Through Core Web Vitals?",
    },
    {
      id: 3,
      image: blog2,
      title: "Codersh Web Services Takes Center Stage at WordCamp Ahmedabad",
    },
    {
      id: 4,
      image: blog4,
      title:
        "A Step-by-Step Guide to Auditing Your Shopify Store’s Performance",
    },
    {
      id: 5,
      image: blog5,
      title: "Why Shopify Speed Optimization Isn’t Just $50.",
    },
    {
      id: 6,
      image: blog1,
      title:
        "How Optimizing Your Website's Speed Can Significantly Impact Customer Experience and Drive More Sales",
    },
    {
      id: 7,
      image: blog7,
      title:
        "Unleashing the Power of Shopify: A Phenomenal $9.3 Billion BFCM Triumph!",
    },
    {
      id: 8,
      image: blog8,
      title:
        "Unlocking the Incredible Power of Site Speed: How Faster Load Times Drive Higher Conversions and Skyrocket Sales",
    },
    {
      id: 9,
      image: blog9,
      title: "Optimizing Shopify Store Performance: A Technical Guide",
    },
    {
      id: 10,
      image: blog10,
      title: "10 Proven Strategies to Speed Up Your Shopify Store",
    },
  ];
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          {/* Blog Grid */}
          <div className="col-lg-12">
            <div className="row g-4">
              {blogData &&
                blogData.map((item, index) => {
                  return (
                    <BlogCards
                      key={index}
                      image={item.image}
                      title={item.title}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridBlog;
