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

  const [modalSearchProfile, setModalSearchProfile] = useState(false);

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

  const submitDataToBackEnd = async () => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}searchprofiles/create`,
        {
          advertisementType: finalSubmit.advertisementType,
          propertyTypeName: finalSubmit.propertyType,
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

    localStorage.removeItem("advertisementActiveLink");
    localStorage.removeItem("propertyActiveLink");
    localStorage.removeItem("search-region-form");
    localStorage.removeItem("minVal");
    localStorage.removeItem("maxVal");
  };

  useEffect(() => {
    const getFiltredProfiles = async () => {
      try {
        await axios(`${process.env.NEXT_PUBLIC_URL}searchprofiles/getall`, {
          headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhbWFkYV9sb3JpQGhvdG1haWwuY29tIiwiaWQiOiI2MmNkY2E2MWFhZWFmYjM2ZjE1YmRiODUiLCJpYXQiOjE2NTgxNDQwMzksImV4cCI6MTY1ODQwMzIzOX0.3NLtvYFEdjE79JVWo8Lz3vQYHkLalpKHMiek6Zp8GX8",
            // Authorization: token,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then(
          // (response) => setFiltredSearch(response.data.data)
          (response) => setFiltredSearch(response.data.data)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getFiltredProfiles();
  }, [filtredSearch.length, token]);

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
        filtredSearch,
        modalSearchProfile,
        setModalSearchProfile,
      }}
    >
      {children}
    </SearchProfileContext.Provider>
  );
};

export const useSearchProfileContext = () => {
  return useContext(SearchProfileContext);
};
