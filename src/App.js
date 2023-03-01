import "./App.css";
import { Canvas } from "@react-three/fiber";

import React from "react";
import { XR, ARButton } from "@react-three/xr";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";

import { Environment } from "@react-three/drei";
import XRPool from "./Xrpool";

function App() {
  return (
    <div className="App">
      <CustomizationProvider>
        <ARButton />
        <Canvas>
          <Environment preset="warehouse" />
          <XR referenceSpace="local-floor">
            <Experience />
            <XRPool 
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[1, 1, 1]}
              />
          </XR>
        </Canvas>
        <Configurator />
      </CustomizationProvider>
    </div>
  );
}

export default App;
