import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/petersyoo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
