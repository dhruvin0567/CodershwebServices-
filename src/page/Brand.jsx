import { useEffect, useState } from 'react';
import BreadCrumb from "../components/common/Breadcrumb";
import { Link } from 'react-router-dom';

function Brand() {
    const [brandImages, setBrandImages] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const images = [];
            const imageCount = 20; // Adjust to the number of images you have

            for (let i = 1; i <= imageCount; i++) {
                const image = await import(`../assets/Images/images2/${i}.png`);
                images.push(image.default); // Push the image path
            }
            setBrandImages(images);
        };

        importImages();
    }, []);

    return (
        <div>
            <BreadCrumb title="brand" />

            <div className="brands-section py-5 my-sm-5">
                <div className="container-fluid">
                    <div className="row">
                        {brandImages.map((image, index) => (
                            <div className="col-lg-3 col-sm-4 col-6 mb-3" key={index}>
                                <Link className="brand-card" to="#">
                                    <img src={image} alt={`brand ${index + 1}`} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
