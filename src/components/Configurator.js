import { useCustomization } from "../context/Customization";
import { useState } from "react";

const Configurator = () => {
  const { shape, setShape, color, setColor } = useCustomization();

  const [shapeOpen, setShapeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div
          className="configurator__section__title"
          onClick={() => setShapeOpen(!shapeOpen)}
        >
          Shape
        </div>
        {shapeOpen && (
          <div className="configurator__section__values">
            <div
              className={`item ${shape === "Box" ? "item--active" : ""}`}
              onClick={() => setShape("Box")}
            >
              <div className="item__label">Box</div>
            </div>
            <div
              className={`item ${shape === "Sphere" ? "item--active" : ""}`}
              onClick={() => setShape("Sphere")}
            >
              <div className="item__label">Sphere</div>
            </div>
          </div>
        )}
      </div>

      <div className="configurator__section">
        <div
          className="configurator__section__title"
          onClick={() => setColorOpen(!colorOpen)}
        >
          Color
        </div>
        {colorOpen && (
          <div className="configurator__section__values">
            <div
              className={`item ${color === "Blue" ? "item--active" : ""}`}
              onClick={() => setColor("Blue")}
            >
              <div className="item__label">Blue</div>
            </div>
            <div
              className={`item ${color === "Red" ? "item--active" : ""}`}
              onClick={() => setColor("Red")}
            >
              <div className="item__label">Red</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Configurator;
