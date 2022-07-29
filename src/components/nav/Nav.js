import './nav.scss';
import { useState } from 'react';
import { ImHome } from 'react-icons/im';
import { ImUser } from 'react-icons/im';
import { GiToolbox } from 'react-icons/gi';
import { ImBriefcase } from 'react-icons/im';
import { AiFillMessage } from 'react-icons/ai';
import { motion, Variants } from 'framer-motion';

const btnAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: -5 },
  },
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <motion.nav
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
        variants={btnAnimate}
      >
        <ImHome />
      </motion.a>
      <motion.a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
        variants={btnAnimate}
      >
        <ImUser />
      </motion.a>
      <motion.a
        href="#toolkit"
        onClick={() => setActiveNav('#toolkit')}
        className={activeNav === '#toolkit' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
        variants={btnAnimate}
      >
        <GiToolbox />
      </motion.a>
      <motion.a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
        variants={btnAnimate}
      >
        <ImBriefcase />
      </motion.a>
      <motion.a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
        variants={btnAnimate}
      >
        <AiFillMessage />
      </motion.a>
    </motion.nav>
  );
};

export default Nav;
