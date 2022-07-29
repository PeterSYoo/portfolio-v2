import './footer.scss';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import RESUME from '../../assets/peteryoo-resume.pdf';
import LOGO from '../../assets/images/py-logo.png';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={LOGO} alt="logo" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#toolkit">Toolkit</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={RESUME} target="_blank" rel="noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="footer__resume-btn"
          >
            <font className="footer__resume-text">Resume</font>
          </motion.button>
        </a>
        <a
          href="https://www.linkedin.com/in/petersyoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__linkedin-btn"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/PeterSYoo"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github-btn"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Peter Yoo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
