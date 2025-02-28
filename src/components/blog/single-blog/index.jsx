// import ContactForm from "../../contact/ContactForm";
// import Categories from "../Categories";
// import RecentPosts from "../RecentPosts";
// import Search from "../Search";
// import Tags from "../Tags";
import BlogDetails from "./BlogDetails";
import Field from "../../common/Field";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
function SingleBlog() {
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
		<div className="section post-details-page aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<BlogDetails />
					</div>
					<div className="col-lg-4">
						<div className="right-sidebar">
							{/* <Search />
							<Categories />
							<RecentPosts />
							<Tags /> */}
							<div className="aximo-main-form">
								<form onSubmit={handleSubmit(submitForm)}>
									<div className="aximo-main-field">
										<Field label="Your Name" error={errors.name}>
											<input
												{...register("name", { required: "Name is required." })}
												type="name"
												name="name"
												id="name"
												className="form-input"
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
												className="form-input"
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
												className="form-input"
												style={autofillStyles}
											/>
										</Field>
									</div>
									<div className="aximo-main-field">
										<label>Write your message here...</label>
										<textarea
											{...register("message")}
											name="message"
											className="input-textarea"
										></textarea>
									</div>
									<button id="aximo-main-btn" type="submit" className="form-input">
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleBlog;
