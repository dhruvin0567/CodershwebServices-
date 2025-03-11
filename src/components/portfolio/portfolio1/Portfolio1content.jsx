import { useState } from 'react';


import CardIMg1 from "/src/assets/images/images2/Van-Hunks.png.webp";
import CardImg2 from "/src/assets/images/images2/Madame-F.png.webp";
import CardImg3 from "/src/assets/images/images2/Liberation-Cocktails.png.webp";
import CardImg4 from "/src/assets/images/images2/BONE-IDYLL.png.webp";
import CardImg5 from "/src/assets/images/images2/potown-homepage.png.webp";
import CardImg6 from "/src/assets/images/images2/Violet-Blanc-Beauty.png.webp";
import CardImg7 from "/src/assets/images/images2/TylersCoffee.png.webp";
import CardImg8 from "/src/assets/images/images2/BUY-VAPE-USA.png.webp";
import CardImg9 from "/src/assets/images/images2/No-Mo-Stache.png.webp";
import CardImg10 from "/src/assets/images/images2/SplitGrip.png.webp";
import CardImg11 from "/src/assets/images/images2/Infinity-Loops.png.webp";
import CardImg12 from "/src/assets/images/images2/wallplanks.png.webp";
import CardImg13 from "/src/assets/images/images2/Rowan-Oak-Clothing-Co.png.webp";
import CardImg14 from "/src/assets/images/images2/Aolithium-Professional.png";
import CardImg15 from "/src/assets/images/images2/Baby-Gold.png";
import CardImg16 from "/src/assets/images/images2/Aubi-Ramsa-Ice-Cream-Co-.png.webp";
import CardImg17 from "/src/assets/images/images2/Airpaq-Sustainability-meets-functionality-Airpaq-GmbH.png.webp";
import CardImg18 from "/src/assets/images/images2/Women-s-Clothing-Store-Clothing-Boutique-CUBIC-Outside-the-Box.png.webp";
import CardImg19 from "/src/assets/images/images2/thewelshproducestall-the-welsh-produce-stall.png.webp";
import CardImg20 from "/src/assets/images/images2/fuel.png";
import CardImg21 from "/src/assets/images/images2/oceans6media.png";
import CardImg22 from "/src/assets/images/images2/NEUX-Ethically-Made-Australian-Designed-Quality-Womenswear-.png.webp";
import CardImg23 from "/src/assets/images/images2/jojosdogwalking.png.webp";
import CardImg24 from "/src/assets/images/images2/Indulge-in-Hudson-Pecan-Natures-Tastiest-Guilt-Free-Snack-Hudson-Pecan-Company.png.webp";
import CardImg25 from "/src/assets/images/images2/IKKS-Official-Website-Women-s-Children-s-Men-s-Fashion-Fall-Winter-2023.png.webp";
import CardImg26 from "/src/assets/images/images2/IFC-Ideal-Food-Corp-.png.webp";
import CardImg27 from "/src/assets/images/images2/Bumperninja.png.webp";
import CardImg28 from "/src/assets/images/images2/Biotrust.png";
import CardImg29 from "/src/assets/images/images2/vidtre.png.webp";
import FadeInStagger from '../../animation/FadeInStagger';


// Sample data for project cards (can be replaced with real data)
// Example card data
const cards = [

    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "south africa",
        industry: "wine",
        image: CardIMg1,
        name: "Vank Hunks",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "uk",
        industry: "wine",
        image: CardImg2,
        name: "Madame F",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "uk",
        industry: "wine",
        image: CardImg3,
        name: "Liberation Cocktails",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "uk",
        industry: "wine",
        image: CardImg4,
        name: "Bone Idyll",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        image: CardImg5,
        name: "PowTown Store",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "health",
        image: CardImg6,
        name: "Violet Blanc",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "food & beverages",
        image: CardImg7,
        name: "Tylers Coffee",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        image: CardImg8,
        name: "Buy Vape USA",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        image: CardImg9,
        name: "No Mo-Stache",
    },
    {
        id: crypto.randomUUID(),
        category: "wordpress",
        country: "usa",
        industry: "sports",
        image: CardImg10,
        name: "Split Grip",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        image: CardImg11,
        name: "Infinity Loops",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        image: CardImg12,
        name: "Wallplanks",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "fashion",
        image: CardImg13,
        name: "Rowan Oak",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        image: CardImg14,
        name: "Aolithium",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "fashion",
        image: CardImg15,
        name: "Baby Gold",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "food & beverages",
        image: CardImg16,
        name: "Aubi & Ramsa",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "germany",
        industry: "travel and tourist",
        image: CardImg17,
        name: "Airpaq",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "uk",
        industry: "fashion",
        image: CardImg18,
        name: "CUBIC",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "uk",
        industry: "food & beverages",
        image: CardImg19,
        name: "The Welsh Produce Stall",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "uk",
        industry: "food & beverages",
        image: CardImg20,
        name: "Fuel",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        image: CardImg21,
        name: "Ocean 6 Media",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "australia",
        industry: "fashion",
        image: CardImg22,
        name: "Neux",
    },
    {
        id: crypto.randomUUID(),
        category: "wordpress",
        country: "usa",
        image: CardImg23,
        name: "jojos Dog Walking",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "food & beverages",
        image: CardImg24,
        name: "Hudson Pecan Company Inc",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "fashion",
        image: CardImg25,
        name: "IKKS",
    },
    {
        id: crypto.randomUUID(),
        category: "wordpress",
        country: "usa",
        industry: "food & beverages",
        image: CardImg26,
        name: "IFC",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "auto mobile",
        image: CardImg27,
        name: "Bumper Ninja",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        country: "usa",
        industry: "health care",
        image: CardImg28,
        name: "Bio Trust",
    },
    {
        id: crypto.randomUUID(),
        category: "shopify",
        image: CardImg29,
        name: "Video Platform",
    },
    // Add more card data as needed
];


const Portfolio1content = () => {


    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedIndustry, setSelectedIndustry] = useState("all");

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
            <div className="project-cards-section py-5">
                <div className="container-fluid">
                    <div className="row">
                        {filteredCards.map((card, index) => (
                            <FadeInStagger
                                key={index}
                                className="col-lg-3 col-sm-6 project-card"
                                data-category={card.category}
                                data-country={card.country}
                                data-industry={card.industry}
                            >
                                <div className="imagescrolling-wrapper portfolio-image-wrapper">
                                    <img
                                        src={card.image}
                                        loading="lazy"
                                        alt={card.name}
                                        className="image-scrolling portfolio-image"
                                    />
                                </div>
                                <h3 className="project-name py-3 text-center">{card.name}</h3>
                            </FadeInStagger>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio1content;
