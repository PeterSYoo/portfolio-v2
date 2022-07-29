import { motion } from 'framer-motion';
import RESUME from '../../assets/peter_yoo-resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={RESUME} target="_blank" rel="noreferrer">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta__resume-btn"
        >
          <font className="cta__resume-text">Resume</font>
        </motion.button>
      </a>
    </div>
  );
};

export default CTA;
