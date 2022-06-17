import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const AdvertisementContext = createContext();

export const Advertisementcontext = ({ children }) => {
  const router = useRouter();

  const [finalAdvertisement, setFinalAdvertisement] = useState("");
  const [AdvadvertisementActiveLink, AdvsetAdvertisementActiveLink] =
    useState(0);
  const [AdvpropertyActiveLink, AdvsetPropertyActiveLink] = useState(0);

  const [advertismentTypeAdv, setAdvertismetTypeAdv] = useState([
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
  const [propertyTypeAdv, setPropertyTypeAdv] = useState([
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

  console.log("A PO A ", finalAdvertisement);

  const globalValuesAdv = {
    title: "a",
    street: "a",
    no: "a",
    postCode: "a",
    town: "a",
    salesPrice: "a",
    netRentalIncomePYear: "a",
    plotArea: "a",
    destinationZoneType: "a",
    yearConstruction: "",
    floors: "a",
    cubature: "a",
    resedentialUnits: "a",
    livingSpace: "a",
    numberOfGarage: "a",
    numerOfUndergroundParking: "a",
    numberOfOutDoorParkingSpace: "a",
    commercialUnits: "a",
    commercialSpace: "a",
    proportionCommercial: "a",
    proportionResidential: "a",

    //checkboxs
    passengerLift: "",
    builidingLease: "",
    electricCarChargingStation: "",
    minegieStandard: "",
    glassFibreConnection: "",
    goodsLift: "",
    fibreCarChargingStation: "",
    fibreOpticConnection: "",

    //land
    buildingLandDeveloped: "",
    water: "",
    fibreOpticConnection: "",
    electricSupply: "",

    //third area
    totalActualRental: "",
    returnOnInvestment: "",
  };

  const AdvertisementBasedValidation = Yup.object().shape({
    salesPrice: Yup.string().required("Sales Price is required"),
    netRentalIncomePYear: Yup.string().required("Rental Income is required"),
    plotArea: Yup.string().required("Sales Price is required"),
    destinationZoneType: Yup.string(),
    yearConstruction: Yup.string().required("Year Construction  is required"),
    cubature: Yup.string().required("Cubature is required"),
    numberOfGarage: Yup.string().required("Number of Garage is required"),
    numerOfUndergroundParking: Yup.string().required(
      "Nr of Under Parking Space is required"
    ),
    numberOfOutDoorParkingSpace: Yup.string().required(
      "Nr of Outdoor Parking Space is required"
    ),

    // checkbox
    passengerLift: Yup.boolean(),
    builidingLease: Yup.boolean(),
    electricCarChargingStation: Yup.boolean(),
  });

  const AdvertisementFirstArea = Yup.object({
    title: Yup.string().required("Title is required"),
    street: Yup.string().required("Street is required"),
    no: Yup.string().required("No is required"),
    postCode: Yup.string().required("Post Code is required"),
    town: Yup.string().required("Town is required"),
  });

  const AdvertisementLivingValidation = AdvertisementBasedValidation.shape({
    // ...AdvertisementBasedValidation,
    resedentialUnits: Yup.string().required("Residential Units is required"),
    livingSpace: Yup.string().required("Living Space is required"),

    //checkbox
    minergieStandard: Yup.boolean(),
    // passengerLift: Yup.boolean(),
    glassFibreConnection: Yup.boolean(),
  });

  const AdvertisementCommercialValidation = AdvertisementBasedValidation.shape({
    // ...AdvertisementBasedValidation,
    commercialUnits: Yup.string().required("Commercial Units is required"),
    commercialSpace: Yup.string().required("Commercial Space is required"),

    //checkbox
    goodsLift: Yup.boolean(),
    fibreCarChargingStation: Yup.boolean(),
  });

  const AdvertisementResedentialCommercialValidation =
    AdvertisementBasedValidation.shape({
      // ...AdvertisementBasedValidation,
      proportionCommercial: Yup.string().required(
        "Proportion Commercial is required"
      ),
      proportionResidential: Yup.string().required(
        "Proportion Resedential required"
      ),
      resedentialUnits: Yup.string().required("Resedential Units is required"),
      commercialUnits: Yup.string().required("Commercial Units is required"),
      commercialSpace: Yup.string().required("Commercial Space is required"),

      minegieStandard: Yup.boolean(),
      goodsLift: Yup.boolean(),
      fibreCarChargingStation: Yup.boolean(),
    });

  const AdvertisementLandValidation = AdvertisementBasedValidation.shape({
    salesPrice: Yup.string().required("Sales Price is required"),
    plotArea: Yup.string().required("Plot Area is required"),
    destinationZoneType: Yup.string().required("Destination Zone is required"),

    buildingLandDeveloped: Yup.string().required(
      "Building Land Developed is required"
    ),
    water: Yup.string().required("Water/Sweage Connection is required"),
    fibreOpticConnection: Yup.string().required(
      "Fibre Optic Connection is required"
    ),
    electricSupply: Yup.string().required("Electric Supply is required"),
  });

  const AdvertisementThirdArea = Yup.object({
    totalActualRental: Yup.string().required("Total Actual Rental is required"),
    returnOnInvestment: Yup.string().required("Return Investment is required"),
  });

  return (
    <AdvertisementContext.Provider
      value={{
        globalValuesAdv,
        AdvertisementBasedValidation,
        AdvertisementLivingValidation,
        AdvertisementCommercialValidation,
        AdvertisementResedentialCommercialValidation,
        AdvertisementFirstArea,
        AdvertisementLandValidation,
        AdvertisementThirdArea,

        AdvadvertisementActiveLink,
        AdvsetAdvertisementActiveLink,
        AdvpropertyActiveLink,
        AdvsetPropertyActiveLink,
        finalAdvertisement,
        setFinalAdvertisement,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};

export const useAdvertisementContext = () => {
  return useContext(AdvertisementContext);
};
