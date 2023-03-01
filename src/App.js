import "./App.css";
import { Canvas } from "@react-three/fiber";

import React from "react";
import { XR, ARButton, Controllers } from "@react-three/xr";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";
import Rymdskit from "./Rymdskit";


function App() {
  return (
    <div className="App">
      <CustomizationProvider>
        <ARButton/>
        <Canvas>
        <ambientLight />
          <XR referenceSpace="local">
            <pointLight position={[10, 10, 10]} />
            <Controllers />
            <Experience 
            scale={[0.1, 0.1, 0.1]}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            />
           <Rymdskit />
          </XR>
        </Canvas>
        <Configurator />
      </CustomizationProvider>
    </div>
  );
}

export default App;
