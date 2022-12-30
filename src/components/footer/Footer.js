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
    <footer
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <a href="#" className="footer__logo">
        <img src={LOGO} alt="logo" variants={imageAnimate} />
      </a>
      <ParticleFooter />
      <ul className="permalinks">
        <li>
          <a href="#" variants={textAnimate}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" variants={textAnimate}>
            About
          </a>
        </li>
        <li>
          <a href="#toolkit" variants={textAnimate}>
            Toolkit
          </a>
        </li>
        <li>
          <a href="#portfolio" variants={textAnimate}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" variants={textAnimate}>
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={RESUME} target="_blank" rel="noreferrer">
          <button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="footer__resume-btn"
            variants={btnAnimate}
          >
            <font className="footer__resume-text">Resumé</font>
          </button>
        </a>
        <a
          href="https://peters-blog.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="footer__resume-btn"
            variants={btnAnimate}
          >
            <font className="footer__resume-text">Blog</font>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/petersyoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__linkedin-btn"
          variants={btn2Animate}
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/PeterSYoo"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github-btn"
          variants={btn2Animate}
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright" variants={textAnimate}>
        <small>&copy; Peter Yoo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
