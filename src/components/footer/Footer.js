import './footer.scss';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import RESUME from '../../assets/peter_yoo-resume.pdf';
import LOGO from '../../assets/images/py-logo.png';
import { motion } from 'framer-motion';
import ParticleFooter from '../particle-footer/ParticleFooter';

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
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const btn2Animate = {
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
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <a href="#" className="footer__logo">
        <motion.img src={LOGO} alt="logo" variants={imageAnimate} />
      </a>
      <ParticleFooter />
      <ul className="permalinks">
        <li>
          <motion.a href="#" variants={textAnimate}>
            Home
          </motion.a>
        </li>
        <li>
          <motion.a href="#about" variants={textAnimate}>
            About
          </motion.a>
        </li>
        <li>
          <motion.a href="#toolkit" variants={textAnimate}>
            Toolkit
          </motion.a>
        </li>
        <li>
          <motion.a href="#portfolio" variants={textAnimate}>
            Portfolio
          </motion.a>
        </li>
        <li>
          <motion.a href="#contact" variants={textAnimate}>
            Contact
          </motion.a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={RESUME} target="_blank" rel="noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="footer__resume-btn"
            variants={btnAnimate}
          >
            <font className="footer__resume-text">Resumé</font>
          </motion.button>
        </a>
        <a
          href="https://peters-blog.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="footer__resume-btn"
            variants={btnAnimate}
          >
            <font className="footer__resume-text">Blog</font>
          </motion.button>
        </a>
        <motion.a
          href="https://www.linkedin.com/in/petersyoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__linkedin-btn"
          variants={btn2Animate}
        >
          <BsLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/PeterSYoo"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github-btn"
          variants={btn2Animate}
        >
          <FaGithub />
        </motion.a>
      </div>

      <motion.div className="footer__copyright" variants={textAnimate}>
        <small>&copy; Peter Yoo. All rights reserved.</small>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
