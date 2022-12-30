import './contact.scss';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineMail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useState } from 'react';

const imageAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: 'spring', bounce: 0.4, duration: 0.5 },
  },
};

const btnAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.05 },
  },
};

const textAnimate = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.5 },
  },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q7620ov',
        'template_g0tmeje',
        form.current,
        '4SRkwz54ROm3Wq0x-'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setSubmitted(false);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <h5 variants={textAnimate}>Get In Touch</h5>
      <h2 variants={textAnimate}>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" variants={btnAnimate}>
            <MdOutlineMail className="contact__option-icon" />
            <h4 variants={textAnimate}>Email</h4>
            <h5 variants={textAnimate}>petersyoox@gmail.com</h5>
            <a
              href="mailto:petersyoox@gmail.com"
              target="_blank"
              rel="noreferrer"
              variants={btnAnimate}
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {submitted ? (
          <div className="submitted">
            <h1>Thank you!</h1>
            <h3>I will respond as soon as possible!</h3>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              variants={textAnimate}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              variants={textAnimate}
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              variants={textAnimate}
            ></textarea>
            <div>
              <button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="contact__submit-btn"
                variants={btnAnimate}
              >
                <font className="contact__submit-text">Send Message</font>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
