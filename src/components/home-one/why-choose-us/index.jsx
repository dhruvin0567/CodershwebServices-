import Accordion from "./Accordion";
import Content from "./Content";
function WhyChooseUs() {
  return (
    <section className="section" id="why-choose-us">
      <div className="container">
        <div className="aximo-faq-wrap">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <Content />
            </div>
            <div className="col-lg-5">
              <Accordion />
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json">
        {`
				{
					"@context": "https://schema.org",
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "What services does Codersh offer?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Codersh provides Shopify development, SEO, and custom web design services tailored for e-commerce businesses."
							}
						},
						{
							"@type": "Question",
							"name": "Why choose Codersh for Shopify development?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Codersh specializes in Shopify Plus, delivering fast, scalable, and conversion-optimized storefronts."
							}
						}
					]
				}
				`}
      </script>
    </section>
  );
}

export default WhyChooseUs;
