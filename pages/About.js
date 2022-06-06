import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./css/about.scss";

// Images

import Phone from "../assets/dashboard-iphone.png";
import BG from "../assets/ab-bg.png";

const About = ({ args }) => {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <motion.div
      className='about-container'
      name='about'
      style={{
        height: args.height,
        width: args.width,
        backgroundImage: `url(${BG})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className='text-container'>
        <h1 ref={ref}>About the App</h1>
        <div className='desc'>
          Expedita voluptas in et sint ipsam omnis. Nobis corrupti rerum rerum
          maiores earum eos eos. Quia recusandae eligendi tempore esse. Nulla ad
          earum voluptatem alias recusandae. Mollitia voluptatem eum nobis
          maxime iusto
        </div>
        <div className='desc'>Lorem Ipsum</div>
      </div>
      <div className='image-container'>
        <img src={Phone} alt='my-wheelbox-dashboard' />
      </div>
    </motion.div>
  );
};

export default About;
