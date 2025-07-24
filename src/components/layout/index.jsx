import { Outlet } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Preloader from "../common/Preloader";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppButton from "../common/WhatsAppButton";
function Layout() {
	useScrollTop();
	return (
		<>
			<Preloader />
			<Outlet />
			<ScrollToTop />
			<WhatsAppButton />
		</>
	);
}

export default Layout;
