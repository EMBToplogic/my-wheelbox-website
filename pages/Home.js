import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload } from "@react-three/drei";

// Components

import Car from "../components/Car";

// Images

// import Car from "../assets/car-top.png";

// CSS

import "./css/home.scss";

const CarContainer = () => {
  return (
    <div className='three-container'>
      <Canvas className='canvas' camera={{ position: [-3, -2, -2] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[-0, 5, 2]} intensity={2} />
        <Suspense fallback={null}>
          <Car />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Home = ({ args }) => {
  return (
    <motion.div
      className='home-container'
      style={{
        height: args.height,
        width: args.width,
      }}
      name='home'
    >
      <div id='bgText'>WHEELBOX</div>
      <div className='row-1'>
        <h2>Introducing</h2>
        <h1>MY WHEELBOX</h1>
      </div>
      <div className='row-2'>{/* <img src={Car} /> */}</div>
      <div className='row-3'>
        <div>
          Expedita voluptas in et sint ipsam omnis. Nobis corrupti rerum rerum
          maiores earum eos eos. Quia recusandae eligendi tempore esse. Nulla ad
          earum voluptatem alias recusandae. Mollitia voluptatem eum nobis
          maxime iusto sunt velit.
        </div>
      </div>
      <CarContainer />
    </motion.div>
  );
};

export default Home;
