import './toolkit.scss';
import { CgCheckR } from 'react-icons/cg';
import { motion } from 'framer-motion';

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

const Toolkit = () => {
  return (
    <motion.section
      id="toolkit"
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h5 variants={textAnimate}>What Skills I Have</motion.h5>
      <motion.h2 variants={textAnimate}>My toolkit</motion.h2>
      <div className="container toolkit__container">
        <motion.div className="toolkit__frontend" variants={btnAnimate}>
          <motion.h3 variants={textAnimate}>Frontend Development</motion.h3>
          <motion.div className="toolkit__content" variants={btnAnimate}>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>jQuery</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </motion.div>
        </motion.div>
        {/* END OF FRONTEND */}
        <motion.div className="toolkit__backend" variants={btnAnimate}>
          <motion.h3 variants={textAnimate}>Backend Development</motion.h3>
          <motion.div className="toolkit__content" variants={btnAnimate}>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>Mongoose</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <CgCheckR className="toolkit__details-icon" />
              <div>
                <h4>ExpressJS</h4>
              </div>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Toolkit;
