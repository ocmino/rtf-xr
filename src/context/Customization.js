import { createContext } from "react";
import { useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [shape, setShape] = useState("Box");
  const [color, setColor] = useState("Blue");

  return (
    <CustomizationContext.Provider
      value={{
        shape,
        setShape,
        color,
        setColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
