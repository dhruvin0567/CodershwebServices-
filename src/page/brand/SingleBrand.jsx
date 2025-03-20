import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VideoSlider from "../../components/common/VideoSlider";
import useBrands from "../../hooks/useBrands";
import VideoSlider_2 from "../../components/common/VideoSlider_2";

const SINGLE_BRAND_API_URL = "https://codersh.com/wp-json/wp/v2/brands?_embed&slug=";
const MEDIA_API_URL = "https://codersh.com/wp-json/wp/v2/media/";

function SingleBrand() {
    const { brands, loading } = useBrands();
    const { slug } = useParams();
    const [brand, setBrand] = useState(null);

    const processImageFields = async (brandData) => {
        if (!brandData || !brandData.acf) return brandData;

        const processedAcf = { ...brandData.acf };
        const imageFields = [
            "main-image",
            "image2",
            "image3",
            "image4",
            "image5"
        ];

        // Process each image field
        for (const field of imageFields) {
            // Check if field exists and is a number (ID)
            if (processedAcf[field] && typeof processedAcf[field] === 'number') {
                try {
                    const response = await fetch(`${MEDIA_API_URL}${processedAcf[field]}`);
                    const mediaData = await response.json();

                    // Replace the ID with the image URL
                    if (mediaData && mediaData.source_url) {
                        processedAcf[field] = mediaData.source_url;
                    }
                } catch (error) {
                    console.error(`Error fetching image for ${field}:`, error);
                }
            }
        }

        // Return the brand with processed image URLs
        return {
            ...brandData,
            acf: processedAcf
        };
    };


    useEffect(() => {
        fetch(`${SINGLE_BRAND_API_URL}${slug}`)
            .then((response) => response.json())
            .then(async (data) => {
                if (data.length > 0) {
                    // Process the brand data to convert image IDs to URLs
                    const processedBrand = await processImageFields(data[0]);
                    setBrand(processedBrand);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching brand:", error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <div className="brand-fetch">Loading...</div>;

    if (!brand) return <div className="brand-fetch">Brand not found.</div>;
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="Brand-breadcrumb">
                <div className="container">
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <div className="case-study-hero-section">
                <img src={brand?.["main-image"]} alt={brand.title.rendered} />
                {/* <div className="case-study-hero-section-img"></div> */}
            </div>

            <div className="cs-text">
                <div className="container-lg ">
                    <div className="row">
                        <div className=" col-md-6 text-start">
                            <div className="p-5">
                                <h2 className="pb-3">The Brief</h2>
                                <p className="brand-text" dangerouslySetInnerHTML={{ __html: brand?.brief_data }}>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 px-5 bg-light">
                            <ul className="py-5">
                                <li className="brand-info-li">
                                    <p>Industry</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }} dangerouslySetInnerHTML={{ __html: brand?.industry }}></p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Project</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }} dangerouslySetInnerHTML={{ __html: brand?.project }}></p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Technology</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }} dangerouslySetInnerHTML={{ __html: brand?.technology }}></p>
                                </li>
                                <li className="brand-info-li">
                                    <p>Visit</p>
                                    <p className="fw-bold" style={{ marginBottom: "27px" }}>
                                        <a
                                            rel="noopener noreferrer"
                                            href={brand?.site_url}
                                            target="_blank"
                                            style={{ fontStyle: "none", color: "black" }}
                                        >
                                            {brand?.site_url_text}
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-section">
                <div className="case-study-section-img">
                    <img src={brand?.image2} alt={brand.title.rendered} />
                </div>
            </div>

            <div className="cs-richtext text-center">
                <div className="container-lg bg-light p-5">
                    <h2 className="mb-5">Challange</h2>
                    <div className="cs-richtext-paragraph mx-lg-5 px-lg-5 pb-5">
                        <p className="brand-text" dangerouslySetInnerHTML={{ __html: brand?.challenge }}>
                        </p>
                    </div>
                </div>
            </div>

            <div className="cs-images-section ">
                <div className="container-lg p-4 p-md-5">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="cs-img">
                                <img src={brand?.image3} alt />
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <div className="cs-img">
                                <img src={brand?.image4} alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cs-richtext text-center">
                <div className="container-lg bg-light p-5">
                    <h2 className="mb-5">Solution & Results</h2>
                    <div className="cs-richtext-paragraph mx-lg-5">
                        <p className="mb-3 brand-text" dangerouslySetInnerHTML={{ __html: brand?.solution_and_results }}>
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="container-lg cs-images-section-container px-lg-0">

                    <div className="cs-image-section d-flex justify-content-center">
                        <img src={brand?.image5} alt />
                    </div>

                </div>
                {/* End */}
                <div className="cs-video-section">
                    <div className="cs-video">
                        <VideoSlider_2 />
                    </div>
                </div>
            </div>

            <div className="image-cards-section pb-5">
                <div className="container">
                    <div className="row">
                        {brands.slice(-3).reverse().map((brand, index) => (
                            <div className="col-md-4 p-4 p-md-3" key={brand.id} index={index}>
                                <Link className="brand-card" to={brand.link}>
                                    <img src={brand.img} alt={brand.title} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleBrand