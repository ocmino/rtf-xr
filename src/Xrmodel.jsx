/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/xrmodel.gltf
*/

import React  from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "./context/Customization";
import * as THREE from "three";

const XRModel = (props) => {
  const { nodes } = useGLTF("/models/xrmodel.gltf");
  const { shape, color } = useCustomization();

  const Blue = new THREE.Color(0x0000ff);
  const Red = new THREE.Color(0xff0000);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} visible={shape === "Box"}>
        <meshStandardMaterial color={color === "Blue" ? Blue : Red} />
      </mesh>
      <mesh geometry={nodes.Sphere.geometry} visible={shape === "Sphere"}>
        <meshStandardMaterial color={color === "Red" ? Red : Blue} />
      </mesh>
    </group>
  );
};

export default XRModel;

useGLTF.preload("/models/xrmodel.gltf");