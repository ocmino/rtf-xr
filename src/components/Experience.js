import { OrbitControls } from "@react-three/drei";
import React from "react";
const Experience = () => {
  return (
    <>
      <OrbitControls
        maxDistance={1.5}
        minDistance={0.5}
      />
    </>
  );
};

export default Experience;
