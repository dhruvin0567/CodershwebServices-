import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Star2Img from "../../assets/images/v1/star2.webp";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
import ContactVideo from "../../assets/images/Videos/reel.mp4";
import { useRef, useState, useEffect } from "react";

// Replace with your EmailJS keys
const SERVICE_ID = "service_ry5xraq";
const TEMPLATE_ID = "template_2ixe2hu";
const PUBLIC_KEY = "xXD66OwtNN0ehOvWz";

function ContactForm() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

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

  const submitForm = async (formData) => {
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      console.log("Email Successfully sent!", result.text);
      reset();
      navigate("/thank-you");
    } catch (error) {
      console.log("Failed to send email", error);
      alert("Something went wrong. Please try again.");
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
                      e.stopPropagation();
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
