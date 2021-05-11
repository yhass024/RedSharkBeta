import React, { useState, createContext } from "react";

export const ClassDetailsContext = createContext();

export const ClassDetailsProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [size, setSize] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  return (
    <ClassDetailsContext.Provider
      value={{
        cars,
        setCars,
        size,
        setSize,
        make,
        setMake,
        model,
        setModel,
      }}
    >
      {props.children}
    </ClassDetailsContext.Provider>
  );
};
