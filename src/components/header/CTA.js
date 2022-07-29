import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="cta">
      <a href="#" target="_blank" rel="norefererr">
        <motion.button
          // whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta__resume-btn"
        >
          <font className="cta__resume-text">Resume</font>
        </motion.button>
      </a>
      <a href="#contact">
        <motion.button
          // whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta__contact-btn"
        >
          <font className="cta__contact-text">Contact</font>
        </motion.button>
      </a>
    </div>
  );
};

export default CTA;
