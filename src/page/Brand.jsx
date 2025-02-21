
import BreadCrumb from "../components/common/Breadcrumb";
import { Link } from 'react-router-dom';

// Import all the images statically
import img1 from '../assets/Images/images2/1.png';
import img2 from '../assets/Images/images2/2.png';
import img3 from '../assets/Images/images2/3.png';
import img4 from '../assets/Images/images2/4.png';
import img5 from '../assets/Images/images2/5.png';
import img6 from '../assets/Images/images2/6.png';
import img7 from '../assets/Images/images2/7.png';
import img8 from '../assets/Images/images2/8.png';
import img9 from '../assets/Images/images2/9.png';
import img10 from '../assets/Images/images2/10.png';
import img11 from '../assets/Images/images2/11.png';
import img12 from '../assets/Images/images2/12.png';
import img13 from '../assets/Images/images2/13.png';
import img14 from '../assets/Images/images2/14.png';
import img15 from '../assets/Images/images2/15.png';
import img16 from '../assets/Images/images2/16.png';
import img17 from '../assets/Images/images2/17.png';
import img18 from '../assets/Images/images2/18.png';
import img19 from '../assets/Images/images2/19.png';
import img20 from '../assets/Images/images2/20.png';

function Brand() {
    // Array of imported image variables
    const brandImages = [
        img1, img2, img3, img4, img5, img6, img7, img8,
        img9, img10, img11, img12, img13, img14, img15,
        img16, img17, img18, img19, img20
    ];

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
