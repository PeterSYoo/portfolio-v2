import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <motion.a
        href="https://www.linkedin.com/in/petersyoo/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsLinkedin />
      </motion.a>
      <motion.a
        href="https://github.com/PeterSYoo"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub />
      </motion.a>
    </div>
  );
};

export default HeaderSocials;
