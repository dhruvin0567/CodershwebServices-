import React from "react";
// import rightarrow from "../../../../assets/images/icon/arrow-right.svg";
import rightarrow from "../../assets/images/icon/arrow-right.svg";

function BlogCards({ title, slug, image, delay }) {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
      <div className="single-post-item wow fadeInUpX" data-wow-delay={delay}>
        <div className="post-thumbnail">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="post-content mt-4">
          <a href={`/blog/${slug}`}>
            <h3 className="entry-title">{title}</h3>
          </a>
          <a className="post-read-more" href={`/blog/${slug}`}>
            read more <img src={rightarrow} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
