import React, { useState, createContext } from "react";

export const CarContext = createContext();

export const CarProvider = (props) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");

  return (
    <CarContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        startTime,
        setStartTime,
        address,
        setAddress,
        address2,
        setAddress2,
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};
