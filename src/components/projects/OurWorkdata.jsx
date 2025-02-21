import { useState } from 'react';
import { motion } from 'framer-motion';
import Background1Image from '../../assets/images/ourwork/Background-5.png';
import Background2Image from '../../assets/images/ourwork/New-Project-5.jpg';
import Background3Image from '../../assets/images/ourwork/New-Project-4.jpg';
import Background4Image from '../../assets/images/ourwork/m-1024x1024.jpg';
import Background5Image from '../../assets/images/ourwork/IKKS.png';
import Background6Image from '../../assets/images/ourwork/Background-6.png';
import Background7Image from '../../assets/images/ourwork/New-Project-2-1024x1024.jpg';
import Background8Image from '../../assets/images/ourwork/New-Project-1024x1024.jpg';
import Background9Image from '../../assets/images/ourwork/New-Project-3-1024x1024.jpg';
import Background10Image from '../../assets/images/ourwork/New-Project-1-1024x1024.jpg';


const projectData = [
    {
        id: crypto.randomUUID(),
        category: 'ecommerce-development',
        img: Background1Image,
        name: 'Premium Supplements Brand',
        technology: 'Shopify | Bootstrap v5 | JavaScript',
    },
    {
        id: crypto.randomUUID(),
        category: "web-development",
        img: Background2Image,
        name: "Digital Agency | USA",
        technology: "Wordpress | Bootstrap | Stripe",
    },
    {
        id: crypto.randomUUID(),
        category: "ecommerce-development",
        img: Background1Image,
        name: "Kids Primium Clothing Store",
        technology: "Shopify | Liquid | CSS3",
    },
    {
        id: crypto.randomUUID(),
        category: "ecommerce-development",
        img: Background3Image,
        name: "Online Kitchen Accessories",
        technology: "Shopify | CSS3 | JavaScript",
    },
    {
        id: crypto.randomUUID(),
        category: "web-development",
        img: Background4Image,
        name: "Luxury Resort Website",
        technology: "Wordpress | Elementor Pro | Calendly",
    },
    {
        id: crypto.randomUUID(),
        category: "ecommerce-development",
        img: Background5Image,
        name: "Luxury Clothing Brand",
        technology: "PHP | Heroku | Sass",
    },
    {
        id: crypto.randomUUID(),
        category: "ecommerce-development",
        img: Background6Image,
        name: "Clean Water Store",
        technology: "Wordpress + MIVA",
    },
    {
        id: crypto.randomUUID(),
        category: "ecommerce-development",
        img: Background7Image,
        name: "Take Flight",
        technology: "Wordpress | Elementor Pro | Woocommerce",
    },
    {
        id: crypto.randomUUID(),
        category: "web-development",
        img: Background8Image,
        name: "Redesign Hub",
        technology: "Wordpress | Elementor Pro | Calendly",
    },
    {
        id: crypto.randomUUID(),
        category: "web-development",
        img: Background9Image,
        name: "Texas Fowlers",
        technology: "Shift4shop | Bootstrap | JavaScript",
    },
    {
        id: crypto.randomUUID(),
        category: "web-development",
        img: Background10Image,
        name: "Online Book Store",
        technology: "Shift4shop | React | Styled Components",
    },
    // Add more project data here as needed
];

function OurWorkdata() {


    const [activeFilter, setActiveFilter] = useState('all');

    const handleTabClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <div>


            <div className="our-work-section">
                <div className="tab-container">
                    <button className={`tab-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleTabClick('all')} data-filter="all">All Projects</button>
                    <button className={`tab-btn ${activeFilter === 'ecommerce-development' ? 'active' : ''}`} onClick={() => handleTabClick('ecommerce-development')} data-filter="ecommerce-development">Ecommerce Development</button>
                    <button className={`tab-btn ${activeFilter === 'web-development' ? 'active' : ''}`} onClick={() => handleTabClick('web-development')} data-filter="web-development">Web Development</button>
                </div>
                <div className="container-fluid pb-5">
                    <div className="row">
                        {projectData.map((project) => (
                            (activeFilter === 'all' || activeFilter === project.category) && (
                                <div className="col-lg-3 project" data-category={project.category} key={project.id}>
                                    <motion.div
                                        className="work-card"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <img src={project.img} alt={project.name} className="work-image" />
                                        <div className="about-work">
                                            <h5 className="work-name">{project.name}</h5>
                                            <p className="work-technology">{project.technology}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            )
                        ))}
                    </div>
                </div>

            </div>



        </div>
    )
}

export default OurWorkdata