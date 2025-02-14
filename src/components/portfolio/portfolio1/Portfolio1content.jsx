import { useState } from 'react';

const Portfolio1content = () => {

    // Sample data for project cards (can be replaced with real data)
    const cards = [

        {
            name: 'Van Hunks',
            imgSrc: '/assets/Images/Van-Hunks.png.webp',
            category: 'shopify',
            country: 'south africa',
            industry: 'wine',
        },
        {
            name: 'Madame F',
            imgSrc: '/assets/Images/Madame-F.png.webp',
            category: 'shopify',
            country: 'uk',
            industry: 'wine',
        },
        {
            name: 'Liberation Cocktails',
            imgSrc: '/assets/Images/Liberation-Cocktails.png.webp',
            category: 'shopify',
            country: 'uk',
            industry: 'wine',
        },
        {
            name: 'Bone Idyll',
            imgSrc: '/assets/Images/BONE-IDYLL.png.webp',
            category: 'shopify',
            country: 'uk',
            industry: 'wine',
        },
        {
            name: 'PowTown Store',
            imgSrc: '/assets/Images/potown-homepage.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: '',
        },
        {
            name: 'Violet Blanc',
            imgSrc: '/assets/Images/Violet-Blanc-Beauty.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: 'health',
        },
        {
            name: 'Tylers Coffee',
            imgSrc: '/assets/Images/TylersCoffee.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: 'food & beverages',
        },
        {
            name: 'Buy Vape USA',
            imgSrc: '/assets/Images/BUY-VAPE-USA.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: '',
        },
        {
            name: 'No Mo-Stache',
            imgSrc: '/assets/Images/No-Mo-Stache.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: '',
        },
        {
            name: 'Split Grip',
            imgSrc: '/assets/Images/SplitGrip.png.webp',
            category: 'wordpress',
            country: 'usa',
            industry: 'sports',
        },
        {
            name: 'Infinity Loops',
            imgSrc: '/assets/Images/Infinity-Loops.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: '',
        },
        {
            name: 'Wallplanks',
            imgSrc: '/assets/Images/wallplanks.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: '',
        },
        {
            name: 'Rowan Oak',
            imgSrc: '/assets/Images/Rowan-Oak-Clothing-Co.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: 'fashion',
        },
        {
            name: 'Aolithium',
            imgSrc: '/assets/Images/Aolithium-Professional.png',
            category: 'shopify',
            country: 'usa',
            industry: '',
        },
        {
            name: 'Baby Gold',
            imgSrc: '/assets/Images/Baby-Gold.png',
            category: 'shopify',
            country: 'usa',
            industry: 'fashion',
        },
        {
            name: 'Aubi & Ramsa',
            imgSrc: '/assets/Images/Aubi-Ramsa-Ice-Cream-Co-.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: 'food & beverages',
        },
        {
            name: 'Airpaq',
            imgSrc: '/assets/Images/Airpaq-Sustainability-meets-functionality-Airpaq-GmbH.png.webp',
            category: 'shopify',
            country: 'germany',
            industry: 'travel and tourist',
        },
        {
            name: 'CUBIC',
            imgSrc: '/assets/Images/Women-s-Clothing-Store-Clothing-Boutique-CUBIC-Outside-the-Box.png.webp',
            category: 'shopify',
            country: 'uk',
            industry: 'fashion',
        },
        {
            name: 'The Welsh Produce Stall',
            imgSrc: '/assets/Images/thewelshproducestall-the-welsh-produce-stall.png.webp',
            category: 'shopify',
            country: 'uk',
            industry: 'food & beverages',
        },
        {
            name: 'Fuel',
            imgSrc: '/assets/Images/fuel.png',
            category: 'shopify',
            country: 'uk',
            industry: 'food & beverages',
        },
        {
            name: 'Ocean 6 Media',
            imgSrc: '/assets/Images/oceans6media.png',
            category: 'shopify',
            country: '',
            industry: '',
        },
        {
            name: 'Neux',
            imgSrc: '/assets/Images/NEUX-Ethically-Made-Australian-Designed-Quality-Womenswear-.png.webp',
            category: 'shopify',
            country: 'australia',
            industry: 'fashion',
        },
        {
            name: 'jojos Dog Walking',
            imgSrc: '/assets/Images/jojosdogwalking.png.webp',
            category: 'wordpress',
            country: 'usa',
            industry: '',
        },
        {
            name: 'Hudson Pecan Company Inc',
            imgSrc: '/assets/Images/Indulge-in-Hudson-Pecan-Natures-Tastiest-Guilt-Free-Snack-Hudson-Pecan-Company.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: 'food & beverages',
        },
        {
            name: 'IKKS',
            imgSrc: '/assets/Images/IKKS-Official-Website-Women-s-Children-s-Men-s-Fashion-Fall-Winter-2023.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: 'fashion',
        },
        {
            name: 'IFC',
            imgSrc: '/assets/Images/IFC-Ideal-Food-Corp-.png.webp',
            category: 'wordpress',
            country: 'usa',
            industry: 'food & beverages',
        },
        {
            name: 'Bumper Ninja',
            imgSrc: '/assets//Images/Bumperninja.png.webp',
            category: 'shopify',
            country: 'usa',
            industry: 'auto mobile',
        },
        {
            name: 'Bio Trust',
            imgSrc: '/assets/Images/Biotrust.png',
            category: 'shopify',
            country: 'usa',
            industry: 'health care',
        },
        {
            name: 'Video Platform',
            imgSrc: '/assets/Images/vidtre.png.webp',
            category: 'shopify',
            country: '',
            industry: '',
        },

    ];

    // State for dropdown selections
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedIndustry, setSelectedIndustry] = useState("all");

    // State for filtered cards
    const [filteredCards, setFilteredCards] = useState(cards); // Initially show all cards

    // Normalize function for case-insensitive matching
    const normalizeText = (text) => {
        return text ? text.trim().toLowerCase().replace(/\s+/g, " ") : "";
    };

    // Filter logic for the cards
    const handleFilter = () => {
        const filtered = cards.filter((card) => {
            const cardCategory = normalizeText(card.category);
            const cardCountry = normalizeText(card.country);
            const cardIndustry = normalizeText(card.industry);

            const categoryMatch = selectedCategory === "all" || cardCategory === normalizeText(selectedCategory);
            const countryMatch = selectedCountry === "all" || cardCountry === normalizeText(selectedCountry);
            const industryMatch = selectedIndustry === "all" || cardIndustry === normalizeText(selectedIndustry);

            return categoryMatch && countryMatch && industryMatch;
        });
        setFilteredCards(filtered); // Update filtered cards
    };

    // Handle dropdown changes
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
    const handleCountryChange = (e) => setSelectedCountry(e.target.value);
    const handleIndustryChange = (e) => setSelectedIndustry(e.target.value);





    return (
        <div>
            {/* Filter Section */}
            <div className="categories-form-wrapper py-5">
                <div className="categories-form container">
                    <div className="filter-container d-flex align-items-center">
                        <select
                            className="form-select"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="all">All Categories</option>
                            <option value="shopify">Shopify</option>
                            <option value="wordpress">WordPress</option>
                        </select>
                        <select
                            className="form-select"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                        >
                            <option value="all">All Countries</option>
                            <option value="south africa">South Africa</option>
                            <option value="uk">UK</option>
                            <option value="usa">USA</option>
                            <option value="germany">Germany</option>
                            <option value="australia">Australia</option>
                        </select>
                        <select
                            className="form-select"
                            value={selectedIndustry}
                            onChange={handleIndustryChange}
                        >
                            <option value="all">All Industries</option>
                            <option value="wine">Wine</option>
                            <option value="health">Health</option>
                            <option value="food & beverages">Food & Beverages</option>
                            <option value="sports">Sports</option>
                            <option value="fashion">Fashion</option>
                            <option value="travel and tourist">Travel And Tourist</option>
                            <option value="auto mobile">Auto Mobile</option>
                            <option value="health care">Health Care</option>
                        </select>
                        <button className="filter-btn" onClick={handleFilter}>
                            Filter
                        </button>
                    </div>
                </div>
            </div>


            {/* Project Cards Section */}
            <div className="project-cards-section">
                <div className="container-fluid">
                    <div className="row">
                        {filteredCards.map((card, index) => (
                            <div
                                // key={card.id}
                                key={index}
                                className="col-lg-3 col-sm-6 project-card"
                                data-category={card.category}
                                data-country={card.country}
                                data-industry={card.industry}
                            >
                                <div className="imagescrolling-wrapper portfolio-image-wrapper">
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="image-scrolling portfolio-image"
                                    />
                                </div>
                                <h3 className="project-name py-3 text-center">{card.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio1content;
