import { useRef, useState, useEffect } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8o9rqx",
        "template_fukclrh",
        formRef.current,
        "FLyEbw4YN6KA1ewhF"
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          setSuccess(true);
          resetFormAndMessages();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setError(true);
          resetFormAndMessages();
        }
      );
  };

  const resetFormAndMessages = () => {
    formRef.current.reset();

    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className="contact">
      <div className="contact__inner">
        <div className="textContainer">
          <h1>Let's work together</h1>
          <div className="contact-info">
            <div className="item">
              <h2>Email</h2>
              <span>msiddhant22@gmail.com</span>
            </div>
            <div className="item">
              <h2>Phone</h2>
              <span>862.285.8854</span>
            </div>
            <div className="item">
              <h2>Location</h2>
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/siddhant-misra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
              <span>linkedin.com/in/siddhant-misra</span>
            </a>
            <a
              href="https://github.com/Siddhant-Misra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.png" alt="GitHub" />
              <span>github.com/Siddhant-Misra</span>
            </a>
          </div>
        </div>

        <div className="formContainer">
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button type="submit">Submit</button>
            {error && <span className="error-msg">Error sending message</span>}
            {success && <span className="success-msg">Message sent!</span>}
          </form>
        </div>
      </div>

      {isVisible && (
        <button className="scrollToTop" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Contact;
