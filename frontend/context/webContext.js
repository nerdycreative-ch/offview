import React, { createContext, useContext, useState, useEffect } from "react";

const WebContext = createContext();

export const Webcontext = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <WebContext.Provider
      value={{
        modalIsOpen,
        setIsOpen,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  return useContext(WebContext);
};
