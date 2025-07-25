import { Link, useLocation } from "react-router-dom";

function Mega_Menu_Services() {
    const location = useLocation();

    return (
        <div className="mega-menu">
            <div className="row m-3">

                {/* Column 1 */}
                <div className="col-3 ps-4">
                    <p className="mega-menu-title">Ecommerce Development</p>
                    <ul>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/woocommerce-development"
                                className={location.pathname === "/services/woocommerce-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">WooCommerce Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/shift-four-shop-development"
                                className={location.pathname === "/services/shift-four-shop-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Shift4Shop Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/prestashop-development"
                                className={location.pathname === "/services/prestashop-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">PrestaShop Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/big-commerce-development"
                                className={location.pathname === "/services/big-commerce-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">BigCommerce Development</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="col-3 px-0">
                    <p className="mega-menu-title">Web Development</p>
                    <ul>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/wordpress-development"
                                className={location.pathname === "/services/wordpress-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">WordPress Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/php-development"
                                className={location.pathname === "/services/php-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">PHP Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/laravel-development"
                                className={location.pathname === "/services/laravel-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Laravel Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/react-js-development"
                                className={location.pathname === "/services/react-js-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">ReactJs Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/angular-js-development"
                                className={location.pathname === "/services/angular-js-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Angular Js Development</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="col-3 px-0">
                    <p className="mega-menu-title">Mobile App Development</p>
                    <ul>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/android-app-development"
                                className={location.pathname === "/services/android-app-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Android App Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/ios-app-development"
                                className={location.pathname === "/services/ios-app-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">iOS App Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/hybrid-app-development"
                                className={location.pathname === "/services/hybrid-app-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Hybrid App Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/flutter-development"
                                className={location.pathname === "/services/flutter-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Flutter Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/react-native-development"
                                className={location.pathname === "/services/react-native-development" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">React Native Development</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="col-3 px-0">
                    <p className="mega-menu-title">UIUX Design</p>
                    <ul>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/wireframe-design"
                                className={location.pathname === "/services/wireframe-design" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Wireframe Design</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/website-redesign"
                                className={location.pathname === "/services/website-redesign" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Website Redesign Service</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link
                                to="/services/mobile-app-design"
                                className={location.pathname === "/services/mobile-app-design" ? "active-link" : ""}
                            >
                                <span className="menu-item-text">Mobile App Design</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Mega_Menu_Services;
