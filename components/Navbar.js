import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import "./css/navbar.scss";

// Images

import Logo from "../assets/img_mywheelbox_logotype.png";

// Icons

import { ArrowRight } from "react-feather";

const NavbarList = ({ list, activeSegment, index }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const indicatorVariants = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: { x: 50, opacity: 0, width: "0%" },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.2,
      delay: 0,
    },
  };

  const handleMouseLeave = () => {
    setIsAnimated(false);
  };

  const handleMouseEnter = () => {
    if (activeSegment !== index) {
      setIsAnimated(true);
    }
  };

  return (
    <>
      <motion.li
        className='navbar-li-cont'
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        whileHover={{ y: -3 }}
      >
        <Link
          to={list.toLowerCase()}
          className='navbar-li-item'
          spy={true}
          smooth={true}
          duration={1000}
          offset={index === 3 ? 75 : 0}
        >
          {list.toUpperCase()}
        </Link>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className='navbar-ind'
            variants={indicatorVariants}
            initial='initial'
            animate={
              activeSegment === index || isAnimated ? "animate" : "initial"
            }
            exit={activeSegment > index ? "exit" : "initial"}
            transition='transition'
            key={isAnimated}
          ></motion.div>
        </AnimatePresence>
      </motion.li>
    </>
  );
};

const Navbar = ({ args, isBGShown, activeSegment }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navbarVariants = {
    initial: {
      y: -10,
      opacity: 0,
      left: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      left: 0,
    },
    exit: {
      y: -10,
      opacity: 0,
      left: 0,
    },
  };

  return (
    <motion.div
      className='navbar-container'
      style={{
        height: 75,
        width: args.width,
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className='background-container'
          variants={navbarVariants}
          initial='initial'
          animate={isBGShown ? "animate" : "inital"}
          exit='exit'
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.2,
            delay: 0,
          }}
          style={{
            height: 75,
            width: args.width,
            background: "var(--secondary)",
          }}
          key={`nav-bg-${isBGShown}`}
        ></motion.div>
      </AnimatePresence>
      <div className='logo-container'>
        <img src={Logo} alt='my-wheelbox-logo' />
      </div>
      <motion.div className='nav-container'>
        <motion.ul className='parent-ul'>
          <NavbarList list='Home' activeSegment={activeSegment} index={1} />
          <NavbarList list='About' activeSegment={activeSegment} index={2} />
          <NavbarList list='Features' activeSegment={activeSegment} index={3} />
        </motion.ul>
      </motion.div>
      <a
        href='https://toplogic.com.ph/'
        target='_blank'
        className='tcc-container'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={btnVariants}
            initial='initial'
            animate={isHovered ? "animate" : "stable"}
            exit='exit'
            transition='transition'
            key={isHovered}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isHovered && <ArrowRight size={15} />}
            {!isHovered && "Our Website"}
          </motion.div>
        </AnimatePresence>
      </a>
    </motion.div>
  );
};

const btnVariants = {
  stable: {
    x: 0,
    opacity: 1,
  },
  initial: {
    x: -10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 10,
    opacity: 0,
  },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.02,
    delay: 0,
  },
};

export default Navbar;
