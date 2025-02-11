import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import emailjs from '@emailjs/browser';

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset // Add reset function here
	} = useForm();

	const submitForm = (formData) => {
		console.log("Submitted Form Data =", formData);

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
		color: '#ccc', // Set text color to white
		transition: 'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s', // Transition for color as well
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
						style={autofillStyles}
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						placeholder="Your email address"
						style={autofillStyles}
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<input
					{...register("number")}
					type="text"
					name="number"
					placeholder="+088-234-6849"
					style={autofillStyles}
				/>
			</div>
			<div className="aximo-form-field">
				<textarea
					{...register("message")}
					name="message"
					placeholder="Write your message here..."
					style={autofillStyles}
				></textarea>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Send message{" "}
				<span>
					<img src={ArrowRight3Img} alt="ArrowRight3Img" />
				</span>
			</button>
		</form>
	);
}

export default MessageForm;
