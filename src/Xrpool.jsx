/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/xrpool.gltf
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const XRPool = (props) => {
  const { nodes, materials } = useGLTF('/models/xrpool.gltf')

  //create a material that is see through yet occludes

  const occulsionMap = new THREE.MeshBasicMaterial({
    opacity: 0,
    transparent: false,
    depthWrite: false,
    depthTest: false,
    blending: THREE.NoBlending,
    alphaTest: 0.1,
  })




  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pool_body.geometry} material={materials['pool tiles']} position={[0, -0.29, 0]} />
      <mesh geometry={nodes.pool_edge_tile.geometry} material={materials['pool edge tiles']} position={[0, -0.29, 0]} />
      <mesh geometry={nodes.Steel_Stairs.geometry} material={materials['Stainless steel']} position={[-0.28, 0.02, 0.57]} />
      <mesh geometry={nodes.surrounding.geometry} material={occulsionMap} position={[0, -0.29, 0]} />
    
    </group>
  ) 
}

export default XRPool

useGLTF.preload('/models/xrpool.gltf')
