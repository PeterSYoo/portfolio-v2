import Particle from '../particle/Particle';
import CTA from './CTA';
import './header.scss';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <Particle />
      <div className="container header__container">
        <HeaderSocials />

        <div className="py-logo">
          <img src="https://i.imgur.com/93HQrPY.png" alt="logo" />
          <h2 className="text-white">Fullstack Developer</h2>
          <CTA />
        </div>
        <div className="me">
          <img src="https://i.imgur.com/WEtpP6J.png" alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
