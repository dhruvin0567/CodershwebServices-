import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import GoogleMap from "../components/contact/GoogleMap";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
function ContactUs() {

	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			<GoogleMap />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
