import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./css/footer.scss";

const Footer = ({ args, activeSegment, setActiveSegment }) => {
  return (
    <div className='footer-container'>
      <div className='footer-txt'>
        Powered by TopLogic Consulting Corporation. All rights reserved. All
        trademarks are property of their respective owners in the Philippines
        and other countries.
      </div>
      <div className='footer-index'>
        <div className='main-index'>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className='zero-ind'
              key={activeSegment}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
              }}
            >
              0
            </motion.div>
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className='num-ind'
              key={activeSegment}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.3,
              }}
            >
              {activeSegment}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='sub-index'>/03</div>
      </div>
    </div>
  );
};

export default Footer;
