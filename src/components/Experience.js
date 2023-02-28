import { OrbitControls } from "@react-three/drei";
import React from "react";
const Experience = () => {
  return (
    <>
      <OrbitControls
        maxDistance={8}
        minDistance={1}
        maxPolarAngle={Math.PI / 2.5}
        maxAzimuthAngle={Math.PI / 4}
      />
    </>
  );
};

export default Experience;
