import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vStMRPgw3QKH7q59KYge2Rga2g8rEp4hPZ_kH2TUBjuY9W5CANQ3kGCqFf__U1sTMbbd5yCBMGqVW9_/pub"
        target="_blank"
        rel="noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta__resume-btn"
        >
          <font className="cta__resume-text">Resume</font>
        </motion.button>
      </a>
    </div>
  );
};

export default CTA;
