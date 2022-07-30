import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CTA from './CTA';

const imageAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const btnAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.15 },
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

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <CTA />
      <motion.a
        href="https://www.linkedin.com/in/petersyoo/"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={btnAnimate}
      >
        <BsLinkedin />
      </motion.a>
      <motion.a
        href="https://github.com/PeterSYoo"
        target="_blank"
        rel="noopener noreferrer"
        // whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={btnAnimate}
      >
        <FaGithub />
      </motion.a>
    </div>
  );
};

export default HeaderSocials;
