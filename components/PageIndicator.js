import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./css/pageIndicator.scss";

const PageIndicator = ({ activeSegment }) => {
  const [height, setHeight] = useState(0);
  const indicatorVariants = {
    initial: {
      height: `0%`,
    },
    pageOne: {
      height: `33%`,
    },
    pageTwo: {
      height: `66%`,
    },
    pageThree: {
      height: `100%`,
    },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
    },
  };
  useEffect(() => {
    switch (activeSegment) {
      case 1:
        setHeight(33);
        break;
      case 2:
        setHeight(66);
        break;
      case 3:
        setHeight(100);
        break;
    }
  }, [activeSegment]);
  return (
    <motion.div className='page-indicator'>
      <motion.div
        className='active-ind'
        initial='initial'
        animate={
          activeSegment === 1
            ? "pageOne"
            : activeSegment === 2
            ? "pageTwo"
            : "pageThree"
        }
        variants={indicatorVariants}
        transition='transition'
      ></motion.div>
    </motion.div>
  );
};

export default PageIndicator;
