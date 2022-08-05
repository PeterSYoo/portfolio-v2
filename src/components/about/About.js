import './about.scss';
import { motion } from 'framer-motion';
import QUOTE from '../../assets/images/quote-bg.png';

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
    transition: { type: 'spring', bounce: 0.4, duration: -2 },
  },
};

const textAnimate = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h5 variants={textAnimate}>Get To Know</motion.h5>
      <motion.h2 variants={textAnimate}>About Me</motion.h2>

      <div className="container about__container">
        <div className="about__me">
          <motion.div className="about__me-quote" variants={imageAnimate}>
            <img src={QUOTE} alt="quote" className="quote__bg" />
          </motion.div>
        </div>
        <div className="about__content">
          <motion.p variants={textAnimate}>
            Hi! My name is Peter and I’ve fallen in love with coding. I come
            from an art background, I studied illustration in college and have
            worked professionally as a storyboard artist. I started my coding
            journey back in March 2022 when I was first introduced to JavaScript
            and I haven't stopped running since. I have an eye for minimalist
            design that's sleek and professional and I enjoy both the frontend
            and backend of coding. I'm always curious about new technologies and
            have a passion for learning new things.
          </motion.p>

          <div className="contact__me">
            <a href="#contact" rel="norefererr">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="contact__me-btn"
                variants={btnAnimate}
              >
                <font className="contact__me-text">Contact Me</font>
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
