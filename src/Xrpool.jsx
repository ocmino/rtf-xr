/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/xrpool.gltf
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

const XRPool = (props) => {
  const { nodes, materials } = useGLTF("/models/xrpool.gltf");

  

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.pool_body.geometry}
        material={materials["pool tiles"]}
        position={[0, -0.29, 0]}
      />
      <mesh
        geometry={nodes.pool_edge_tile.geometry}
        material={materials["pool edge tiles"]}
        position={[0, -0.29, 0]}
      />
    </group>
  );
};

export default XRPool;

useGLTF.preload("/models/xrpool.gltf");
