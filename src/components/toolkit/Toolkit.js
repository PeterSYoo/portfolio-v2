import './toolkit.scss';
import { CgCheckR } from 'react-icons/cg';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
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

const text2Animate = {
  offScreen: { x: -300, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const frontEndData = [
  {
    id: 1,
    icon: <SiHtml5 className="toolkit__details-icon" />,
    name: 'HTML',
  },
  {
    id: 2,
    icon: <SiCss3 className="toolkit__details-icon" />,
    name: 'CSS',
  },
  {
    id: 3,
    icon: <SiJavascript className="toolkit__details-icon" />,
    name: 'JavaScript',
  },
  {
    id: 4,
    icon: <SiTypescript className="toolkit__details-icon" />,
    name: 'TypeScript',
  },
  {
    id: 5,
    icon: <SiJquery className="toolkit__details-icon" />,
    name: 'jQuery',
  },
  {
    id: 6,
    icon: <SiReact className="toolkit__details-icon" />,
    name: 'React',
  },
];

const backEndData = [
  {
    id: 1,
    icon: <SiPython className="toolkit__details-icon" />,
    name: 'Python',
  },
  {
    id: 2,
    icon: <SiMongodb className="toolkit__details-icon" />,
    name: 'MongoDB',
  },
  {
    id: 3,
    icon: <CgCheckR className="toolkit__details-icon" />,
    name: 'Mongoose',
  },
  {
    id: 4,
    icon: <SiExpress className="toolkit__details-icon" />,
    name: 'ExpressJS',
  },
  {
    id: 5,
    icon: <SiNodedotjs className="toolkit__details-icon" />,
    name: 'NodeJS',
  },
  {
    id: 6,
    icon: <SiDjango className="toolkit__details-icon" />,
    name: 'Django',
  },
  {
    id: 7,
    icon: <SiPostgresql className="toolkit__details-icon" />,
    name: 'PostgreSQL',
  },
];

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
        {/* START OF FRONTEND */}
        <motion.div className="toolkit__frontend" variants={btnAnimate}>
          <motion.h3 variants={textAnimate}>Frontend Development</motion.h3>
          <motion.div className="toolkit__content" variants={btnAnimate}>
            {frontEndData.map(({ id, icon, name }) => {
              return (
                <article key={id} className="toolkit__details">
                  <motion.div variants={textAnimate}>{icon}</motion.div>
                  <div>
                    <motion.h4 variants={text2Animate}>{name}</motion.h4>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </motion.div>
        {/* END OF FRONTEND */}
        {/* START OF BACKEND */}
        <motion.div className="toolkit__backend" variants={btnAnimate}>
          <motion.h3 variants={textAnimate}>Backend Development</motion.h3>
          <motion.div className="toolkit__content" variants={btnAnimate}>
            {backEndData.map(({ id, icon, name }) => {
              return (
                <article key={id} className="toolkit__details">
                  <motion.div variants={textAnimate}>{icon}</motion.div>
                  <div>
                    <motion.h4 variants={text2Animate}>{name}</motion.h4>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </motion.div>
        {/* END OF BACKEND */}
      </div>
    </motion.section>
  );
};

export default Toolkit;
