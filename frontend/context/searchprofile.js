import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const SearchProfileContext = createContext();

export const Searchprofilecontext = ({ children }) => {
  const router = useRouter();

  const [searchRegion, setSearchRegion] = useState("");
  const [advertismentType, setAdvertismetType] = useState([
    {
      id: "investmentproperties",
      name: "Investment properties",
    },
    {
      id: "land",
      name: "Land",
    },
    {
      id: "newbuildingprojects",
      name: "New building projects",
    },
  ]);
  const [propertyType, setPropertyType] = useState([
    {
      id: "living",
      name: "Living",
    },
    {
      id: "commercial",
      name: "Commercial",
    },
    {
      id: "residentialandcommercial",
      name: "Residential and commercial",
    },
  ]);

  const submitDataToBackEnd = () => {
    
  };

  return (
    <SearchProfileContext.Provider
      value={{ advertismentType, propertyType, searchRegion, setSearchRegion }}
    >
      {children}
    </SearchProfileContext.Provider>
  );
};

export const useSearchProfileContext = () => {
  return useContext(SearchProfileContext);
};
