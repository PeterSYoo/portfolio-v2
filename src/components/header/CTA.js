import RESUME from '../../assets/peteryoo-resume.pdf';
import { motion, Variants } from 'framer-motion';

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
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
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

const CTA = () => {
  return (
    <div className="cta">
      <a href={RESUME} target="_blank" rel="noreferrer">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta__resume-btn"
          variants={btnAnimate}
        >
          <font className="cta__resume-text">Resume</font>
        </motion.button>
      </a>
    </div>
  );
};

export default CTA;
