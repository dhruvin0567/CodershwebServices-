/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>

							<NavItem dropdown title="Company">
								<Dropdown>
									<DropdownItem url="about-us">About Us</DropdownItem>
									<DropdownItem url="team">Team</DropdownItem>
									<DropdownItem url="testimonial">Testimonial</DropdownItem>
									<DropdownItem url="faq">FAQ</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Services">
								<Dropdown>
									<DropdownItem url="customStore">Custom Store Project</DropdownItem>
									<DropdownItem url="shopify-migrations">Shopify Migrations</DropdownItem>
									<DropdownItem url="headless-shopify">Headless & Shopify</DropdownItem>
									<DropdownItem url="shopify-plus">Shopify Plus</DropdownItem>
								</Dropdown>
								{/* <Dropdown>
									<DropdownItem dropdown title="Shopify Services">
										<Dropdown noShape>
											<DropdownItem url="woocommercedevelopment">WooCommerce-Development</DropdownItem>
											<DropdownItem url="pestrashop">PestraShop  Development</DropdownItem>
											<DropdownItem url="shift4shop">Shift4Shop  Development</DropdownItem>
											<DropdownItem url="bigcommerce">BigCommerce  Development</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title="Mobile App Development">
										<Dropdown noShape>
											<DropdownItem url="androidappdev">AndroidAppDev  Development</DropdownItem>
										</Dropdown>
									</DropdownItem>
								</Dropdown> */}
							</NavItem>
							<NavItem dropdown title="Work">
								<Dropdown>
									<DropdownItem url="case-studies">Case Studies</DropdownItem>
									<DropdownItem url="portfolio">Portfolio</DropdownItem>
									<DropdownItem url="ourblog">Our Blog</DropdownItem>
									<DropdownItem url="brand">brand</DropdownItem>
								</Dropdown>
							</NavItem>
							{/* <NavItem dropdown title="Pages">
								<Dropdown>	
									<DropdownItem url="pricing">Pricing</DropdownItem>	
								</Dropdown>
							</NavItem> */}
							<NavItem dropdown title="Solutions">
								<Dropdown>
									<DropdownItem url="creditrepair">Credit Repair</DropdownItem>
									<DropdownItem url="itdigitalagency">It Digital Agency</DropdownItem>
									<DropdownItem url="winestore">Wine store</DropdownItem>
									<DropdownItem url="businessdirectory">Business Directory</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="contact-us">Contact Us</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="CWS" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
