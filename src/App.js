import "./App.css";
import { Canvas } from "@react-three/fiber";

import React from "react";
import { XR, ARButton, Controllers } from "@react-three/xr";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";
import XRModel from "./Xrmodel";
import { MeshReflectorMaterial } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <CustomizationProvider>
        <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }}/>
        <Canvas>
          <XR referenceSpace="local">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Controllers />
            <Experience />
            <XRModel />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
              <circleGeometry attach="geometry" args={[100, 100]} />
              <MeshReflectorMaterial attach="material" color="lightgrey" />
            </mesh>
          </XR>
        </Canvas>
        <Configurator />
      </CustomizationProvider>
    </div>
  );
}

export default App;
