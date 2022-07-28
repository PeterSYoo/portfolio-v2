import './nav.scss';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
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
        <AiOutlineHome />
      </motion.a>
      <motion.a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <AiOutlineUser />
      </motion.a>
      <motion.a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <BiBook />
      </motion.a>
      <motion.a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        whileTap={{ scale: 0.9 }}
      >
        <BiMessageSquareDetail />
      </motion.a>
    </nav>
  );
};

export default Nav;
