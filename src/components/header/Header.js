import Particle from '../particle/Particle';
import './header.scss';
import HeaderSocials from './HeaderSocials';
import { motion } from 'framer-motion';
import { BsFillMouseFill } from 'react-icons/bs';
import AVATAR from '../../assets/images/py-avatar.png';
import LOGO from '../../assets/images/py-logo.png';

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

const Header = () => {
  return (
    <motion.header
      className="header__wrapper"
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <Particle />
      <div className="container header__container">
        <div className="py-logo">
          <motion.img src={LOGO} alt="logo" variants={textAnimate} />
          <div className="socials__title">
            <HeaderSocials />
            <motion.h3 className="text-white" variants={textAnimate}>
              Fullstack Developer
            </motion.h3>
          </div>
        </div>
        <div className="me">
          <motion.img src={AVATAR} alt="me" variants={imageAnimate} />
        </div>
      </div>
      <motion.div variants={textAnimate}>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </motion.div>
      <motion.div variants={btnAnimate}>
        <BsFillMouseFill className="scroll__down-icon" />
      </motion.div>
    </motion.header>
  );
};

export default Header;
