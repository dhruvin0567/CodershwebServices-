import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
// import { InstagramEmbed } from 'react-social-media-embed';
import { useForm } from "react-hook-form";
// import ContactThumb from "../../assets/images/contact/contact-thumb-1.webp";
import Star2Img from "../../assets/images/v1/star2.webp";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
import ContactVideo from "../../assets/images/Videos/reel.mp4";
// import VideoPoster from "../../assets/images/Videos/Screenshot 2025-04-14 120605.png";
// import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from "react";

function ContactForm() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Pause video on outside click
  useEffect(() => {
    const handleBodyClick = (e) => {
      if (videoRef.current && !videoRef.current.contains(e.target)) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("click", handleBodyClick);
    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate(); // Initialize navigate function

  // Submit form
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
        // alert("Thank you! Your form has been submitted.");
        reset(); // Reset the form fields after successful submission

        // Navigate to the Thank You page
        navigate("/thank-you"); // Use React Router to navigate to the Thank You page
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
    color: "#000", // Set text color to white
    transition:
      "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s", // Transition for color as well
  };

  return (
    <section
      className="section aximo-section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                  Contact us for
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Highlight Star" loading="lazy" />
                  </span>
                </span>
                <br />
                personal experience
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 order-lg-2 Video-Column">
            <FadeInRight className="aximo-contact-thumb">
              <div
                className="video-wrapper"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                style={{ position: "relative" }}
              >
                <video
                  ref={videoRef}
                  loop
                  playsInline
                  className="contact-video"
                  src={ContactVideo}
                  preload="metadata"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  alt="User Review Video"
                  aria-label="Contact form video preview"
                >
                  Your browser does not support the video tag.
                </video>

                {showControls && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent click from bubbling to body
                      handlePlayPause();
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(0,0,0,0.6)",
                      border: "none",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  >
                    {isPlaying ? (
                      <i className="fa-solid fa-pause" />
                    ) : (
                      <i className="fa-solid fa-play" />
                    )}
                  </button>
                )}
              </div>
            </FadeInRight>
          </div>

          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="aximo-main-field">
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register("name", { required: "Name is required." })}
                      type="text"
                      name="name"
                      autoComplete="name"
                      id="name"
                      style={autofillStyles}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter email address" error={errors.email}>
                    <input
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      type="email"
                      autoComplete="email"
                      name="email"
                      id="email"
                      style={autofillStyles}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter Phone Number" error={errors.number}>
                    <input
                      {...register("number", {
                        required: "Phone is required.",
                        pattern: {
                          value: /^[0-9+\-()\s]+$/,
                          message:
                            "Phone number can only contain numbers, spaces, +, and -.",
                        },
                        maxLength: {
                          value: 15,
                          message: "Phone number cannot exceed 15 characters.",
                        },
                      })}
                      type="tel"
                      name="number"
                      id="number"
                      autoComplete="tel"
                      style={autofillStyles}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <label>Write your message here...</label>
                  <textarea
                    {...register("message", {
                      required: "Message is required.",
                    })}
                    name="message"
                    style={{ fontSize: "18px" }}
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
    </section>
  );
}

export default ContactForm;
