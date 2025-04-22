import { useState, useMemo, useCallback } from 'react';
import FadeInStagger from '../../animation/FadeInStagger';

// Import images
const cardImages = import.meta.glob('/src/assets/images/images2/*.webp*', { eager: true });
const getImage = (name) => cardImages[`/src/assets/images/images2/${name}.webp`]?.default ||
    cardImages[`/src/assets/images/images2/${name}.png.webp`]?.default;

// Cards data
const cards = [
    { category: "Shopify", country: "South Africa", industry: "Wine", image: "Van-Hunks", name: "Vank Hunks" },
    { category: "Shopify", country: "Germany", industry: "Travel and Tourist", image: "Airpaq-Sustainability-meets-functionality-Airpaq-GmbH", name: "Airpaq" },
    { category: "Shopify", country: "Australia", industry: "Fashion", image: "NEUX-Ethically-Made-Australian-Designed-Quality-Womenswear-", name: "Neux" },
    { category: "Shopify", country: "UK", industry: "Wine", image: "Madame-F", name: "Madame F" },
    { category: "Shopify", country: "UK", industry: "Wine", image: "Liberation-Cocktails", name: "Liberation Cocktails" },
    { category: "Shopify", country: "UK", industry: "Wine", image: "BONE-IDYLL", name: "Bone Idyll" },
    { category: "Shopify", country: "UK", industry: "Fashion", image: "Women-s-Clothing-Store-Clothing-Boutique-CUBIC-Outside-the-Box", name: "CUBIC" },
    { category: "Shopify", country: "UK", industry: "Food and Beverages", image: "thewelshproducestall-the-welsh-produce-stall", name: "The Welsh Produce Stall" },
    { category: "Shopify", country: "UK", industry: "Food and Beverages", image: "fuel", name: "Fuel" },
    { category: "Shopify", country: "USA", industry: "Online Retail", image: "potown-homepage", name: "PowTown Store" },
    { category: "Shopify", country: "USA", industry: "Health Care", image: "Violet-Blanc-Beauty", name: "Violet Blanc" },
    { category: "Shopify", country: "USA", industry: "Food and Beverages", image: "TylersCoffee", name: "Tylers Coffee" },
    { category: "Shopify", country: "USA", industry: "      ", image: "BUY-VAPE-USA", name: "Buy Vape USA" },
    { category: "Shopify", country: "USA", industry: "Fashion", image: "No-Mo-Stache", name: "No Mo-Stache" },
    { category: "Shopify", country: "USA", industry: "Fashion", image: "Infinity-Loops", name: "Infinity Loops" },
    { category: "Shopify", country: "USA", industry: "Online Retail", image: "wallplanks", name: "Wallplanks" },
    { category: "Shopify", country: "USA", industry: "Fashion", image: "Rowan-Oak-Clothing-Co", name: "Rowan Oak" },
    { category: "Shopify", country: "USA", industry: "Travel and Tourist", image: "Aolithium-Professional", name: "Aolithium" },
    { category: "Shopify", country: "USA", industry: "Fashion", image: "Baby-Gold", name: "Baby Gold" },
    { category: "Shopify", country: "USA", industry: "Food and Beverages", image: "Aubi-Ramsa-Ice-Cream-Co-", name: "Aubi & Ramsa" },
    { category: "Shopify", country: "USA", industry: "Food and Beverages", image: "Indulge-in-Hudson-Pecan-Natures-Tastiest-Guilt-Free-Snack-Hudson-Pecan-Company", name: "Hudson Pecan Company Inc" },
    { category: "Shopify", country: "USA", industry: "Fashion", image: "IKKS-Official-Website-Women-s-Children-s-Men-s-Fashion-Fall-Winter-2023", name: "IKKS" },
    { category: "Shopify", country: "USA", industry: "Auto Mobile", image: "Bumperninja", name: "Bumper Ninja" },
    { category: "Shopify", country: "USA", industry: "Health Care", image: "Biotrust", name: "Bio Trust" },
    { category: "Shopify", country: "       ", industry: "Media Service", image: "vidtre", name: "Video Platform" },
    { category: "Shopify", country: "       ", industry: "Media Service", image: "oceans6media", name: "Ocean 6 Media" },
].map(card => ({
    ...card,
    id: crypto.randomUUID(),
    image: getImage(card.image)
}));

// Filter options
const FILTER_OPTIONS = {
    categories: ["Shopify"],
    countries: ["South Africa", "UK", "USA", "Germany", "Australia"],
    industries: [
        "Wine", "Health", "Food and Beverages",
        "Fashion", "Travel and Tourist",
        "Auto Mobile", "Health Care", "Online Retail"
    ]
};

const Portfolio1content = () => {
    const [filters, setFilters] = useState({
        category: "all",
        country: "all",
        industry: "all"
    });

    const [facetFilters, setFacetFilters] = useState({
        categories: [],
        countries: [],
        industries: []
    });

    // Toggle the facet filter checkbox selection
    const toggleFacetFilter = (type, value) => {
        setFacetFilters(prev => {
            const current = prev[type] || [];
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];
            return { ...prev, [type]: updated };
        });
    };

    // Handle dropdown filter changes
    const handleFilterChange = useCallback((filterType, value) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    }, []);

    // Filter cards based on selected filters
    const filteredCards = useMemo(() => {
        return cards.filter(card => {
            const matchCategory =
                (filters.category === "all" || card.category === filters.category) &&
                (facetFilters.categories.length === 0 || facetFilters.categories.includes(card.category));

            const matchCountry =
                (filters.country === "all" || card.country === filters.country) &&
                (facetFilters.countries.length === 0 || facetFilters.countries.includes(card.country));

            const matchIndustry =
                (filters.industry === "all" || card.industry === filters.industry) &&
                (facetFilters.industries.length === 0 || facetFilters.industries.includes(card.industry));

            return matchCategory && matchCountry && matchIndustry;
        });
    }, [filters, facetFilters]);

    return (
        <div>
            <div className="categories-form-wrapper py-5 ">
                {/* Dropdown Filters */}
                <div className="categories-form container the-main-outerbox ">
                    <div className="filter-container d-flex flex-wrap gap-3 dropdownfilter-portfolio">
                        <select className="form-select" value={filters.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}>
                            <option value="all">All Categories</option>
                            {FILTER_OPTIONS.categories.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>

                        <select className="form-select" value={filters.country}
                            onChange={(e) => handleFilterChange('country', e.target.value)}>
                            <option value="all">All Countries</option>
                            {FILTER_OPTIONS.countries.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>

                        <select className="form-select" value={filters.industry}
                            onChange={(e) => handleFilterChange('industry', e.target.value)}>
                            <option value="all">All Industries</option>
                            {FILTER_OPTIONS.industries.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Modern Responsive Faceted Filters */}
                    <div className="mx-4 mx-md-5">
                        <div className="faceted-filters-container">
                            {/* Desktop / Tablet View */}
                            <div className="faceted-filters-scroll d-none d-md-flex">
                                {Object.entries(FILTER_OPTIONS).map(([filterType, values]) => (
                                    <div key={filterType} className="filter-group">
                                        <div className="filter-group-label">{filterType}</div>
                                        <div className="filter-options">
                                            {values.map(value => (
                                                <button
                                                    key={value}
                                                    className={`filter-chip ${facetFilters[filterType]?.includes(value) ? 'active' : ''}`}
                                                    onClick={() => toggleFacetFilter(filterType, value)}
                                                >
                                                    {value.split(' & ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' & ')}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile View */}
                            <div className="faceted-filters-mobile d-flex d-md-none flex-column gap-3">
                                {Object.entries(FILTER_OPTIONS).map(([filterType, values]) => (
                                    <div key={filterType} className="filter-group-mobile">
                                        <details>
                                            <summary className="filter-group-label">{filterType}</summary>
                                            <div className="filter-options mt-2">
                                                {values.map(value => (
                                                    <button
                                                        key={value}
                                                        className={`filter-chip ${facetFilters[filterType]?.includes(value) ? 'active' : ''}`}
                                                        onClick={() => toggleFacetFilter(filterType, value)}
                                                    >
                                                        {value.split(' & ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' & ')}
                                                    </button>
                                                ))}
                                            </div>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>


            </div>



            {/* Project Cards Section */}
            <div className="project-cards-section py-5 px-2">
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

            {/* Modern CSS Styles */}
            <style jsx>{`
                .faceted-filters-container {
                    width: 100%;
                    overflow-x: auto;
                    // padding-bottom: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .faceted-filters-scroll {
                    display: flex;
                    gap: 1.5rem;
                    padding: 0.5rem 0;
                    min-width: max-content;
                    // background: #f5f5f5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // border-radius: 15px;
                    margin: 0px 5px;
                    // box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                }
                
                .filter-group {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: #fffff5;
                    border-radius: 10px;
                    padding: 1rem 1rem;
                    // box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                }
                
                .filter-group-label {
                    font-weight: 600;
                    font-size: 0.85rem;
                    color: #495057;
                    text-transform: capitalize;
                    white-space: nowrap;
                }
                
                .filter-options {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .filter-chip {
                    border: none;
                    background: #ffffff;
                    color: #495057;
                    padding: 0.5rem 1rem;
                    border-radius: 10px;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.25);
                }
                
                .filter-chip:hover {
                    background: #bff747;
                    transform: translateY(-1px);
                }
                
                .filter-chip.active {
                    background: #bff747;
                    color: #000;
                    // font-weight: 500;
                    transition: all 0.2s ease;

                }
                
                /* Custom scrollbar */
                .faceted-filters-container::-webkit-scrollbar {
                    height: 6px;
                }
                
                .faceted-filters-container::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                
                .faceted-filters-container::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 10px;
                }
                
                .faceted-filters-container::-webkit-scrollbar-thumb:hover {
                    background: #aaa;
                }

                @media (max-width: 768px) {
                    .faceted-filters-mobile details {
                        background: #fffff5;
                        border-radius: 10px;
                        padding: 1rem;
                        margin: 3px 3px;
                        box-shadow: 0 1px 5px rgba(0,0,0,0.25);
                        transition: all 0.3s ease;
                        overflow: hidden;
                    }

                    .faceted-filters-mobile summary {
                        cursor: pointer;
                        font-weight: 600;
                        color: #495057;
                        font-size: 1rem;
                        list-style: none;
                        position: relative;
                        padding-right: 20px;
                    }

                    .faceted-filters-mobile summary::-webkit-details-marker {
                        display: none;
                    }

                    .faceted-filters-mobile summary::after {
                        content: "›";
                        position: absolute;
                        right: 0;
                        top: 0;
                        transform: rotate(0deg);
                        transition: transform 0.3s ease;
                    }

                    .faceted-filters-mobile details[open] summary::after {
                        transform: rotate(90deg);
                    }

                    .faceted-filters-mobile .filter-options {
                        padding-top: 0.75rem;
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                    }

                    .faceted-filters-mobile .filter-chip {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .filter-group-mobile {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Portfolio1content;