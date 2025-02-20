import BreadCrumb from "../components/common/Breadcrumb"
import { Link } from 'react-router-dom';



function Brand() {

    const brandImages = [
        "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png",
        "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png",
        "16.png", "17.png", "18.png", "19.png", "20.png"
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
                                    <img src={`src/assets/Images/images2/${image}`} alt={`brand ${index + 1}`} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Brand