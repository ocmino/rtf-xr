/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/rymdskit.gltf
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

const Rymdskit = (props) => {
  const { nodes, materials } = useGLTF('/models/rymdskit.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Fabric.002']} />
      <mesh geometry={nodes.Plane_1.geometry} material={materials['Wood (Bare Brown )']} />
    </group>
  )
}

export default Rymdskit

useGLTF.preload('/models/rymdskit.gltf')
