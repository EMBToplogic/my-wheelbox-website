/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const [carPosY, setCarPosY] = useState(0.001);

  function handleScroll(target) {
    // if (target.scrollY === 0) {
    //   setCarPosY(0.001);
    // } else {
    setCarPosY(target.scrollY / 1920 + 0.001 * 0.00000005);
    // }
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleScroll(e.currentTarget);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const group = useRef();
  const { nodes, materials } = useGLTF("/Car.gltf");

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, carPosY, -5]} scale={0.001}>
        <mesh geometry={nodes.rogue_1.geometry} material={materials.body} />
        <mesh geometry={nodes.rogue_2.geometry} material={materials.black_m} />
        <mesh geometry={nodes.rogue_3.geometry} material={materials.glass} />
        <mesh geometry={nodes.rogue_4.geometry} material={materials.d_glass} />
        <mesh geometry={nodes.rogue_5.geometry} material={materials.gum} />
        <mesh geometry={nodes.rogue_6.geometry} material={materials.silver} />
        <mesh geometry={nodes.rogue_7.geometry} material={materials.black} />
        <mesh geometry={nodes.rogue_8.geometry} material={materials.chrome} />
        <mesh geometry={nodes.rogue_9.geometry} material={materials.o_glass} />
        <mesh geometry={nodes.rogue_10.geometry} material={materials.logo} />
        <mesh geometry={nodes.rogue_11.geometry} material={materials.r_glass} />
        <mesh geometry={nodes.rogue_12.geometry} material={materials.red} />
        <mesh geometry={nodes.rogue_13.geometry} material={materials.orange} />
      </group>
    </group>
  );
}
useGLTF.preload("/Car.gltf");
