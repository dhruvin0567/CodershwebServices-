// import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import { Link } from 'react-router-dom';
function Mega_Menu() {
    return (

        <div className="mega-menu">
            <div className="row m-3 ">
                <div className="col-4 ps-4">
                    <p className="mega-menu-title">New Shopify Stores</p>
                    <ul>
                        <li className="mega-menu-item ">
                            <Link to="/customStore">
                                <span className="menu-item-text">Custom Store Project</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Shopify Migrations</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Headless & Shopify</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Shopify Plus</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4   px-0">
                    <p className="mega-menu-title">Existing Shopify Stores</p>
                    <ul>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Support & Maintanance</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Shopify CRO Agency</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Internationalization</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Subscriptions</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4  px-0">
                    <p className="mega-menu-title">Other Services</p>
                    <ul>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Email & Sms Marketing</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Shopify App Development</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">commerce SEO</span>
                            </Link>
                        </li>
                        <li className="mega-menu-item">
                            <Link to="#">
                                <span className="menu-item-text">Shopify B2B & Wholesale</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Mega_Menu