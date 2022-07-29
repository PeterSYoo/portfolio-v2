import Particle from '../particle/Particle';
import CTA from './CTA';
import './header.scss';
import HeaderSocials from './HeaderSocials';
import { motion } from 'framer-motion';
import { BsFillMouseFill } from 'react-icons/bs';

const Header = () => {
  return (
    <motion.header
      className="header__wrapper"
      initial={{ width: 0 }}
      animate={{ width: '100vw' }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.25 },
      }}
    >
      <Particle />
      <div className="container header__container">
        <div className="py-logo">
          <img src="https://i.imgur.com/93HQrPY.png" alt="logo" />
          <div className="socials__title">
            <HeaderSocials />
            <h3 className="text-white">software engineer</h3>
          </div>
        </div>
        <div className="me">
          <img src="https://i.imgur.com/WEtpP6J.png" alt="me" />
        </div>
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
      <BsFillMouseFill className="scroll__down-icon" />
    </motion.header>
  );
};

export default Header;
