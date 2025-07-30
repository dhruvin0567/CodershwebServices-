// import CaseStudyDetails from "./CaseStudyDetails";
import Field from "../../common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SingleCSdetailsStatic from "./SingleCSdetailsStatic";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function SingleCaseStudy() {
  const { slug } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate(); // Initialize navigate function

  const submitForm = async (formData) => {
    console.log("Submitted Form Data =", formData);

    try {
      const response = await fetch(
        "https://projects.codersh.com/aximo/wp-json/wp/v2/form-submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);

        reset(); // Reset the form fields after successful submission

        navigate("/thank-you"); // Navigate to the Thank You page
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
    fontSize: "18px",
    WebkitAppearance: "none",
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "#000",
    transition:
      "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
  };

  return (
    <div className="section post-details-page aximo-section-padding2">
      <Helmet>
        <title>
          {slug?.replaceAll("-", " ")} | Shopify Case Study | Codersh
        </title>
        <meta
          name="description"
          content="Read this Shopify case study on how Codersh helped build a high-converting eCommerce store. Learn more!"
        />
        <link
          rel="canonical"
          href={`https://www.codersh.com/case-studies/${slug}`}
        />
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <CaseStudyDetails /> */}

            <SingleCSdetailsStatic slug={slug} />
          </div>

          <aside
            className="col-lg-4"
            aria-label="Contact form to connect with Codersh"
          >
            <section className="right-sidebar" role="complementary">
              <header className="px-2 mb-3">
                <h3>Let's Connect!</h3>
              </header>

              <form
                className="aximo-main-form"
                onSubmit={handleSubmit(submitForm)}
                aria-label="Contact Codersh form"
              >
                {/* Name Field */}
                <div className="aximo-main-field">
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register("name", {
                        required: "Name is required.",
                      })}
                      type="text"
                      name="name"
                      id="name"
                      className="form-input"
                      style={autofillStyles}
                      aria-required="true"
                    />
                  </Field>
                </div>

                {/* Email Field */}
                <div className="aximo-main-field">
                  <Field label="Enter email address" error={errors.email}>
                    <input
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      type="email"
                      name="email"
                      id="email"
                      className="form-input"
                      style={autofillStyles}
                      aria-required="true"
                    />
                  </Field>
                </div>

                {/* Phone Number Field */}
                <div className="aximo-main-field">
                  <Field label="Enter Phone Number" error={errors.number}>
                    <input
                      {...register("number", {
                        required: "Phone number is required.",
                        pattern: {
                          value: /^[0-9+()-\s]+$/, // Allow numbers, +, (), -, and spaces
                          message: "Please enter a valid phone number.",
                        },
                        maxLength: {
                          value: 15, // Maximum length of 15 characters
                          message: "Phone number cannot exceed 15 characters.",
                        },
                      })}
                      type="tel"
                      name="number"
                      id="number"
                      className="form-input"
                      style={autofillStyles}
                      aria-required="true"
                    />
                  </Field>
                </div>

                {/* Message Field */}
                <div className="aximo-main-field">
                  <Field
                    label="Write your message here..."
                    error={errors.message}
                  >
                    <textarea
                      {...register("message", {
                        required: "Message is required.",
                      })}
                      name="message"
                      className="input-textarea"
                      style={{ fontSize: "18px" }}
                      aria-required="true"
                    ></textarea>
                  </Field>
                </div>

                {/* Submit Button */}
                <button
                  id="aximo-main-btn"
                  type="submit"
                  className="form-input"
                  aria-label="Submit contact form"
                >
                  Send Message
                </button>
              </form>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default SingleCaseStudy;
