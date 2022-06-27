import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const SearchProfileContext = createContext();

export const Searchprofilecontext = ({ children }) => {
  const router = useRouter();

  const [finalSubmit, setFinalSubmit] = useState();
  const [advertisementActiveLink, setAdvertisementActiveLink] = useState(0);
  const [propertyActiveLink, setPropertyActiveLink] = useState(0);

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

  console.log("FINAL SUBMIT", finalSubmit);

  const submitDataToBackEnd =  () => {
     axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}searchprofiles/create`,
        {
          advertisementType: finalSubmit.advertisementType,
          propertyType: finalSubmit.propertyType,
          region: finalSubmit.region,
          minPrice: finalSubmit.minPrice,
          maxPrice: finalSubmit.maxPrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        } 
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SearchProfileContext.Provider
      value={{
        advertismentType,
        propertyType,
        searchRegion,
        setSearchRegion,
        advertisementActiveLink,
        setAdvertisementActiveLink,
        propertyActiveLink,
        setPropertyActiveLink,
        finalSubmit,
        setFinalSubmit,
        submitDataToBackEnd,
      }}
    >
      {children}
    </SearchProfileContext.Provider>
  );
};

export const useSearchProfileContext = () => {
  return useContext(SearchProfileContext);
};
