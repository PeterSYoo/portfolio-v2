import RESUME from '../../assets/peter_yoo-resume.pdf';
import { motion } from 'framer-motion';

// const imageAnimate = {
//   offScreen: { x: -100, opacity: 0 },
//   onScreen: {
//     x: 0,
//     opacity: 1,
//     rotate: [0, 10, 0],
//     transition: { type: "spring", bounce: 0.4, duration: 1 },
//   },
// };

const btnAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

// const textAnimate = {
//   offScreen: { y: 100, opacity: 0 },
//   onScreen: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", bounce: 0.4, duration: 1 },
//   },
// };

const CTA = () => {
  return (
    <div className="cta">
      <span>
        <a href={RESUME} target="_blank" rel="noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cta__resume-btn"
            variants={btnAnimate}
          >
            <font className="cta__resume-text">Resumé</font>
          </motion.button>
        </a>
      </span>
      {/*       <span>
        <a
          href="https://peters-blog.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cta__resume-btn"
            variants={btnAnimate}
          >
            <font className="cta__resume-text">Blog</font>
          </motion.button>
        </a>
      </span> */}
    </div>
  );
};

export default CTA;
