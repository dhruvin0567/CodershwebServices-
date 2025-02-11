import { useForm } from "react-hook-form";
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
import emailjs from '@emailjs/browser';

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset // Add reset function here
	} = useForm();

	const submitForm = (formData) => {
		console.log("Submitted Form Data = ", formData);

		// Send email to admin
		emailjs.send('service_gqkh37e', 'template_h4wpbbi', formData, 'K_wd5BSwBzwzzQXjf')
			.then(
				() => {
					console.log('Admin email sent successfully.');
				},
				(error) => {
					console.error('Failed to send admin email:', error.text);
				}
			);

		// Send thank-you email to user
		emailjs.send('service_gqkh37e', 'template_pwefvuc', {
			user_name: formData.name,
			user_email: formData.email,
			user_number: formData.number,
			message: formData.message,
			to_email: formData.email
		}, 'K_wd5BSwBzwzzQXjf')
			.then(
				() => {
					console.log('Thank-you email sent successfully.');
					alert('Thank you! Your form has been submitted.');
					reset(); // Reset the form fields after successful submission
				},
				(error) => {
					console.error('Failed to send thank-you email:', error.text);
				}
			);
	};

	const autofillStyles = {
		WebkitAppearance: 'none',
		backgroundImage: 'none',
		backgroundColor: 'transparent',
		color: '#000', // Set text color to white
		transition: 'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s', // Transition for color as well
	};

	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								<span className="aximo-title-animation">
									Contact us for a
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star" />
									</span>
								</span>
								personal experience
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<img src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
											style={autofillStyles}
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
											style={autofillStyles}
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" error={errors.number}>
										<input
											{...register("number", { required: "Phone is required." })}
											type="phone"
											name="number"
											id="number"
											style={autofillStyles}
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea
										{...register("message")}
										name="message"
									></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
