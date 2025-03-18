import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  #root {
	 overflow-x: hidden; 
  }
`;

function TestimonialPage() {
	return (
		<>
			<GlobalStyle />
			<BreadCrumb title="Testimonial" />
			<Testimonial />
		</>
	);
}

export default TestimonialPage;
