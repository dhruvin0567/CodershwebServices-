import FadeInStagger from "../../components/animation/FadeInStagger";
import BreadCrumb from "../../components/common/Breadcrumb";
import { Link } from 'react-router-dom';

function Brand() {
    const brandImages = [
        "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp",
        "9.webp", "10.webp", "11.webp", "12.webp", "13.webp", "14.webp", "15.webp",
        "16.webp", "17.webp", "18.webp", "19.webp", "20.webp"
    ];

    return (
        <div>
            <BreadCrumb title="Brand" />
            <div className="brands-section py-5 my-sm-5">
                <div className="container-fluid">
                    <div className="row">
                        {brandImages.map((image, index) => (
                            <div className="col-lg-3 col-sm-4 col-6 mb-3 p-3" key={index}>
                                <FadeInStagger>
                                    <Link className="brand-card" to="#">
                                        <img src={`/images/${image}`} alt={`brand ${index + 1}`} />
                                    </Link>
                                </FadeInStagger>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
