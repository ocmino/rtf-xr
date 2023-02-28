/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/xrmodel.gltf
*/

import React  from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "./context/Customization";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const XRModel = (props) => {
  const { nodes } = useGLTF("/models/xrmodel.gltf");
  const { shape, color } = useCustomization();

  const GlassTexture_1 = useTexture({
    map: '/textures/Glass_1/Glass_Window_001_basecolor.jpg',
    normalMap: '/textures/Glass_1/Glass_Window_001_normal.jpg',
    roughnessMap: '/textures/Glass_1/Glass_Window_001_roughness.jpg',
    aoMap: '/textures/Glass_1/Glass_Window_001_ambientOcclusion.jpg',
  })

  GlassTexture_1.map.repeat.set(4, 4)
  GlassTexture_1.map.wrapS = GlassTexture_1.map.wrapT = THREE.RepeatWrapping
  GlassTexture_1.normalMap.repeat.set(4, 4)
  GlassTexture_1.normalMap.wrapS = GlassTexture_1.normalMap.wrapT = THREE.RepeatWrapping
  GlassTexture_1.roughnessMap.repeat.set(4, 4)
  GlassTexture_1.roughnessMap.wrapS = GlassTexture_1.roughnessMap.wrapT = THREE.RepeatWrapping
  GlassTexture_1.aoMap.repeat.set(4, 4)
  GlassTexture_1.aoMap.wrapS = GlassTexture_1.aoMap.wrapT = THREE.RepeatWrapping
  GlassTexture_1.side = THREE.DoubleSide

  const GlassTexture_2 = useTexture({
    map: '/textures/Glass_2/Blue_Ice_001_COLOR.jpg',
    normalMap: '/textures/Glass_2/Blue_Ice_001_NORM.jpg',
    roughnessMap: '/textures/Glass_2/Blue_Ice_001_ROUGH.jpg',
    aoMap: '/textures/Glass_2/Blue_Ice_001_OCC.jpg',
  })

  GlassTexture_2.map.repeat.set(4, 4)
  GlassTexture_2.map.wrapS = GlassTexture_2.map.wrapT = THREE.RepeatWrapping
  GlassTexture_2.normalMap.repeat.set(4, 4)
  GlassTexture_2.normalMap.wrapS = GlassTexture_2.normalMap.wrapT = THREE.RepeatWrapping
  GlassTexture_2.roughnessMap.repeat.set(4, 4)
  GlassTexture_2.roughnessMap.wrapS = GlassTexture_2.roughnessMap.wrapT = THREE.RepeatWrapping
  GlassTexture_2.aoMap.repeat.set(4, 4)
  GlassTexture_2.aoMap.wrapS = GlassTexture_2.aoMap.wrapT = THREE.RepeatWrapping
  GlassTexture_2.side = THREE.DoubleSide

  return (
    <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
      <mesh geometry={nodes.Cube.geometry} visible={shape === "Box"}>
        <meshStandardMaterial {...color === "Red" ? GlassTexture_1 : GlassTexture_2} />
      </mesh>
      <mesh geometry={nodes.Sphere.geometry} visible={shape === "Sphere"}>
        <meshStandardMaterial {...color === "Blue" ? GlassTexture_2 : GlassTexture_1} />
      </mesh>
    </group>
  );
};

export default XRModel;

useGLTF.preload("/models/xrmodel.gltf");
