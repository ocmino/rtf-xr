import "./App.css";
import { Canvas } from "@react-three/fiber";

import React from "react";
import { XR, ARButton, Controllers } from "@react-three/xr";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";
import XRModel from "./Xrmodel";


function App() {
  return (
    <div className="App">
      <CustomizationProvider>
        <ARButton/>
        <Canvas>
          <XR referenceSpace="local">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Controllers />
            <Experience />
            <XRModel
              position={[0, 0, 0]}
              scale={[0.1, 0.1, 0.1]}
              rotation={[0, 0, 0]}
            />
          </XR>
        </Canvas>
        <Configurator />
      </CustomizationProvider>
    </div>
  );
}

export default App;
