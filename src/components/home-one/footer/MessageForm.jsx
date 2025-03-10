import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const submitForm = async (formData) => {
		console.log("Submitted Form Data =", formData);

		try {
			const response = await fetch("https://projects.codersh.com/aximo/wp-json/wp/v2/form-submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok) {
				console.log("Form submitted successfully:", result);
				alert("Thank you! Your form has been submitted.");
				reset(); // Reset the form fields after successful submission
			} else {
				console.error("Form submission failed:", result);
				alert("Form submission failed. Please try again.");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("An error occurred. Please try again.");
		}
	};

	const autofillStyles = {
		WebkitAppearance: "none",
		backgroundImage: "none",
		backgroundColor: "transparent",
		color: "#ccc",

		transition: "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",

	};

	const additionalStyles = {
		fontWeight: "400",
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
					style={Object.assign({}, autofillStyles, additionalStyles)}
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



