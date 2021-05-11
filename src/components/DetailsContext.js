import React, { useState, createContext } from "react";

export const DetailsContext = createContext();

export const DetailsProvider = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  return (
    <DetailsContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
      }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};
