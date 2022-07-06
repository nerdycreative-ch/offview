import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useAuthContext } from "./auth";

const SearchProfileContext = createContext();

export const Searchprofilecontext = ({ children }) => {
  const router = useRouter();

  const { token } = useAuthContext();

  console.log("TOKEN NGA ASKUSHI ", token);

  const [finalSubmit, setFinalSubmit] = useState();
  const [advertisementActiveLink, setAdvertisementActiveLink] = useState(0);
  const [propertyActiveLink, setPropertyActiveLink] = useState(0);

  const [filtredSearch, setFiltredSearch] = useState([]);

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

  useEffect(() => {
    const getFiltredProfiles = async () => {
      try {
        await axios(`${process.env.NEXT_PUBLIC_URL}searchprofiles/getall`).then(
          // (response) => setFiltredSearch(response.data.data)
          (response) => console.log("response" + response.data)
        );
      } catch (error) {
        console.log(error);
      }
    };

    getFiltredProfiles();
  }, []);

  const submitDataToBackEnd = () => {
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
            Authorization: token,
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
