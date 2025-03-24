import { useState, useMemo, useCallback } from 'react';
import FadeInStagger from '../../animation/FadeInStagger';

// Import all images at once using a more maintainable pattern
const cardImages = import.meta.glob('/src/assets/images/images2/*.png*', { eager: true });
const getImage = (name) => cardImages[`/src/assets/images/images2/${name}.png`]?.default ||
    cardImages[`/src/assets/images/images2/${name}.png.webp`]?.default;

// Card data with lazy image loading
const cards = [
    { category: "shopify", country: "south africa", industry: "wine", image: "Van-Hunks", name: "Vank Hunks" },
    { category: "shopify", country: "uk", industry: "wine", image: "Madame-F", name: "Madame F" },
    { category: "shopify", country: "uk", industry: "wine", image: "Liberation-Cocktails", name: "Liberation Cocktails" },
    { category: "shopify", country: "uk", industry: "wine", image: "BONE-IDYLL", name: "Bone Idyll" },
    { category: "shopify", country: "usa", image: "potown-homepage", name: "PowTown Store" },
    { category: "shopify", country: "usa", industry: "health", image: "Violet-Blanc-Beauty", name: "Violet Blanc" },
    { category: "shopify", country: "usa", industry: "food & beverages", image: "TylersCoffee", name: "Tylers Coffee" },
    { category: "shopify", country: "usa", image: "BUY-VAPE-USA", name: "Buy Vape USA" },
    { category: "shopify", country: "usa", image: "No-Mo-Stache", name: "No Mo-Stache" },
    { category: "wordpress", country: "usa", industry: "sports", image: "SplitGrip", name: "Split Grip" },
    { category: "shopify", country: "usa", image: "Infinity-Loops", name: "Infinity Loops" },
    { category: "shopify", country: "usa", image: "wallplanks", name: "Wallplanks" },
    { category: "shopify", country: "usa", industry: "fashion", image: "Rowan-Oak-Clothing-Co", name: "Rowan Oak" },
    { category: "shopify", country: "usa", image: "Aolithium-Professional", name: "Aolithium" },
    { category: "shopify", country: "usa", industry: "fashion", image: "Baby-Gold", name: "Baby Gold" },
    { category: "shopify", country: "usa", industry: "food & beverages", image: "Aubi-Ramsa-Ice-Cream-Co-", name: "Aubi & Ramsa" },
    { category: "shopify", country: "germany", industry: "travel and tourist", image: "Airpaq-Sustainability-meets-functionality-Airpaq-GmbH", name: "Airpaq" },
    { category: "shopify", country: "uk", industry: "fashion", image: "Women-s-Clothing-Store-Clothing-Boutique-CUBIC-Outside-the-Box", name: "CUBIC" },
    { category: "shopify", country: "uk", industry: "food & beverages", image: "thewelshproducestall-the-welsh-produce-stall", name: "The Welsh Produce Stall" },
    { category: "shopify", country: "uk", industry: "food & beverages", image: "fuel", name: "Fuel" },
    { category: "shopify", image: "oceans6media", name: "Ocean 6 Media" },
    { category: "shopify", country: "australia", industry: "fashion", image: "NEUX-Ethically-Made-Australian-Designed-Quality-Womenswear-", name: "Neux" },
    { category: "wordpress", country: "usa", image: "jojosdogwalking", name: "jojos Dog Walking" },
    { category: "shopify", country: "usa", industry: "food & beverages", image: "Indulge-in-Hudson-Pecan-Natures-Tastiest-Guilt-Free-Snack-Hudson-Pecan-Company", name: "Hudson Pecan Company Inc" },
    { category: "shopify", country: "usa", industry: "fashion", image: "IKKS-Official-Website-Women-s-Children-s-Men-s-Fashion-Fall-Winter-2023", name: "IKKS" },
    { category: "wordpress", country: "usa", industry: "food & beverages", image: "IFC-Ideal-Food-Corp-", name: "IFC" },
    { category: "shopify", country: "usa", industry: "auto mobile", image: "Bumperninja", name: "Bumper Ninja" },
    { category: "shopify", country: "usa", industry: "health care", image: "Biotrust", name: "Bio Trust" },
    { category: "shopify", image: "vidtre", name: "Video Platform" },
].map(card => ({
    ...card,
    id: crypto.randomUUID(),
    image: getImage(card.image)
}));

// Predefined filter options for consistent UI
const FILTER_OPTIONS = {
    categories: ["all", "shopify", "wordpress"],
    countries: ["all", "south africa", "uk", "usa", "germany", "australia"],
    industries: [
        "all", "wine", "health", "food & beverages",
        "sports", "fashion", "travel and tourist",
        "auto mobile", "health care"
    ]
};

const Portfolio1content = () => {
    const [filters, setFilters] = useState({
        category: "all",
        country: "all",
        industry: "all"
    });

    // Memoized filtered cards
    const filteredCards = useMemo(() => {
        return cards.filter(card => {
            const matchesCategory = filters.category === "all" || card.category === filters.category;
            const matchesCountry = filters.country === "all" || card.country === filters.country;
            const matchesIndustry = filters.industry === "all" || card.industry === filters.industry;

            return matchesCategory && matchesCountry && matchesIndustry;
        });
    }, [filters]);

    // Generic filter handler
    const handleFilterChange = useCallback((filterType, value) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    }, []);

    return (
        <div>
            {/* Filter Section */}
            <div className="categories-form-wrapper py-5">
                <div className="categories-form container">
                    <div className="filter-container d-flex align-items-center">
                        {/* Category Filter */}
                        <select
                            className="form-select"
                            value={filters.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                        >
                            {FILTER_OPTIONS.categories.map(option => (
                                <option key={option} value={option}>
                                    {option === "all" ? "All Categories" : option.charAt(0).toUpperCase() + option.slice(1)}
                                </option>
                            ))}
                        </select>

                        {/* Country Filter */}
                        <select
                            className="form-select"
                            value={filters.country}
                            onChange={(e) => handleFilterChange('country', e.target.value)}
                        >
                            {FILTER_OPTIONS.countries.map(option => (
                                <option key={option} value={option}>
                                    {option === "all" ? "All Countries" : option.charAt(0).toUpperCase() + option.slice(1)}
                                </option>
                            ))}
                        </select>

                        {/* Industry Filter */}
                        <select
                            className="form-select"
                            value={filters.industry}
                            onChange={(e) => handleFilterChange('industry', e.target.value)}
                        >
                            {FILTER_OPTIONS.industries.map(option => (
                                <option key={option} value={option}>
                                    {option === "all" ? "All Industries" : option.split(' & ').map(
                                        part => part.charAt(0).toUpperCase() + part.slice(1)
                                    ).join(' & ')}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Project Cards Section */}
            <div className="project-cards-section py-5">
                <div className="container-fluid">
                    <div className="row">
                        {filteredCards.map((card) => (
                            <FadeInStagger
                                key={card.id}
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