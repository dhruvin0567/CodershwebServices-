// import React from 'react'
import { Link } from "react-router-dom";


function SolutionDynamicInfo({
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    iconImage,
    features,
    dark = true, // optional prop to control background theme
}) {

    const sectionClass = `section aximo-project-page text-center ${dark ? "dark-bg" : ""}`;
    const textClass = dark ? "light-text" : "dark-text";

    return (
        <div>
            {/* Main Content Section */}
            <div className={sectionClass}>
                <div className="container aximo-section-padding5">
                    <h2 className={`mb-4 ${textClass}`}>
                        <span className="aximo-title-animation">
                            {title}
                            {iconImage && (
                                <span className="aximo-title-icon mx-2">
                                    <img src={iconImage} alt="Decorative Icon" />
                                </span>
                            )}
                        </span>
                        <br />
                        {subtitle}
                    </h2>

                    <p className={`section-description ${textClass}`}>
                        {description}
                    </p>

                    {ctaLink && ctaText && (
                        <Link
                            to={ctaLink}
                            className="get-in-touch-btn aximo-header-btn pill"
                            style={{ borderRadius: "50px" }}
                            aria-label={ctaText}
                        >
                            {ctaText}
                        </Link>
                    )}
                </div>
            </div>

            {/* Features Section */}
            {features && features.length > 0 && (
                <div className="section aximo-project-page py-5 services">
                    <div className="container my-5">
                        <h3 className="text-center mb-5">Features of Our Service</h3>
                        <div className="services-list d-md-flex justify-content-around flex-wrap gap-4">
                            {[...Array(Math.ceil(features.length / 3))].map((_, colIndex) => (
                                <ul key={colIndex} className="list-unstyled">
                                    {features
                                        .slice(colIndex * 3, colIndex * 3 + 3)
                                        .map((feature, index) => (
                                            <li key={index} className="d-flex align-items-start mb-3">
                                                {feature.icon && (
                                                    <img
                                                        src={feature.icon}
                                                        alt="Check icon"
                                                        style={{ marginRight: "12px" }}
                                                        width={30}
                                                        height={30}
                                                    />
                                                )}
                                                <span>{feature.text}</span>
                                            </li>
                                        ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SolutionDynamicInfo