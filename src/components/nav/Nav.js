import './nav.scss';
import { useState } from 'react';
import { ImHome } from 'react-icons/im';
import { ImUser } from 'react-icons/im';
import { GiToolbox } from 'react-icons/gi';
import { ImBriefcase } from 'react-icons/im';
import { AiFillMessage } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <motion.a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <ImHome />
      </motion.a>
      <motion.a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <ImUser />
      </motion.a>
      <motion.a
        href="#toolkit"
        onClick={() => setActiveNav('#toolkit')}
        className={activeNav === '#toolkit' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <GiToolbox />
      </motion.a>
      <motion.a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <ImBriefcase />
      </motion.a>
      <motion.a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <AiFillMessage />
      </motion.a>
    </nav>
  );
};

export default Nav;
