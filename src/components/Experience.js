import { OrbitControls } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import React from "react";
import XRModel from "../Xrmodel";


const Experience = () => {
  return (
    <>
      <OrbitControls
        maxDistance={8}
        minDistance={1}
        maxPolarAngle={Math.PI / 2.5}
        maxAzimuthAngle={Math.PI / 4}
      />
      <Interactive onSelect={() => console.log("select")}>
      <XRModel />
      </Interactive>
    </>
  );
};

export default Experience;
