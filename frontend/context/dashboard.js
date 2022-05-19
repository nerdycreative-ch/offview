import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const DashboardContext = createContext();

export const Dashboardcontext = ({ children }) => {
  const router = useRouter();

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const [stepsActiveLink, setStepsActiveLink] = useState(1);

  const changeStep = () => {
    setStepsActiveLink(router.query.id + 1);
  };

  return (
    <DashboardContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        stepsActiveLink,
        setStepsActiveLink,
        changeStep,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
