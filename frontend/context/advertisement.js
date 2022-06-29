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

  const [listOfAdvertisement, setListOfAdvertisement] = useState([]);

  const getAdvertisement = async () => {
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_URL}advertisements/dashboard/getAll`
      ).then((response) => setListOfAdvertisement(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  //GET ADVERTISEMENT
  useEffect(() => {
    getAdvertisement();
  }, []);

  // const {
  //   AdvadvertisementActiveLink,
  //   AdvsetAdvertisementActiveLink,
  //   AdvpropertyActiveLink,
  //   AdvsetPropertyActiveLink,
  // } = useAdvertisementContext();

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
    advertisementType: "",
    propertyType: "",
    title: "a",
    street: "a",
    No: 4,
    postCode: "a",
    town: "a",
    salesPrice: 100,
    netRentalIncomePYear: 200,
    plotArea: 200,
    destinationZoneType: "a",
    yearConstruction: "",
    floors: 100,
    cubature: 100,
    resedentialUnits: 400,
    livingSpace: 200,
    numberOfGarage: 2,
    numerOfUndergroundParking: 2,
    numberOfOutDoorParkingSpace: 2,
    commercialUnits: 200,
    commercialSpace: 200,
    proportionCommercial: "a",
    proportionResidential: "a",

    //checkboxs
    passengerLift: false,
    builidingLease: false,
    electricCarChargingStation: false,
    minegieStandard: false,
    glassFibreConnection: false,
    goodsLift: false,
    fibreCarChargingStation: false,
    // fibreOpticConnection: "",

    //land
    buildingLandDeveloped: false,
    water: false,
    // fibreOpticConnection: "",
    electricSupply: false,

    //third area
    totalActualRental: 0,
    returnOnInvestment: 0,

    // thirdarea
    image: [],
    file: [],
  };

  const AdvertisementBasedValidation = Yup.object().shape({
    salesPrice: Yup.number().required("Sales Price is required"),
    netRentalIncomePYear: Yup.number().required("Rental Income is required"),
    plotArea: Yup.number().required("Sales Price is required"),
    destinationZoneType: Yup.string(),
    yearConstruction: Yup.string().required("Year Construction  is required"),
    cubature: Yup.number().required("Cubature is required"),
    numberOfGarage: Yup.number().required("Number of Garage is required"),
    numerOfUndergroundParking: Yup.number().required(
      "Nr of Under Parking Space is required"
    ),
    numberOfOutDoorParkingSpace: Yup.number().required(
      "Nr of Outdoor Parking Space is required"
    ),
    floors: Yup.number().required("Floors is required"),

    // checkbox
    passengerLift: Yup.boolean(),
    builidingLease: Yup.boolean(),
    electricCarChargingStation: Yup.boolean(),
  });

  const AdvertisementFirstArea = Yup.object({
    title: Yup.string().required("Title is required"),
    street: Yup.string().required("Street is required"),
    No: Yup.number().required("No is required"),
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
      resedentialUnits: Yup.number().required("Resedential Units is required"),
      commercialUnits: Yup.number().required("Commercial Units is required"),
      commercialSpace: Yup.number().required("Commercial Space is required"),

      minegieStandard: Yup.boolean(),
      goodsLift: Yup.boolean(),
      fibreCarChargingStation: Yup.boolean(),
    });

  const AdvertisementLandValidation = AdvertisementBasedValidation.shape({
    salesPrice: Yup.string().required("Sales Price is required"),
    plotArea: Yup.number().required("Plot Area is required"),
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
    totalActualRental: Yup.number().required("Total Actual Rental is required"),
    returnOnInvestment: Yup.number().required("Return Investment is required"),
    // image: Yup.string(),
    // file: Yup.string(),
    // image: Yup.object().shape({
    //   recaptcha: Yup.array(),
    // }),
    // file: Yup.object().shape({
    //   recaptcha: Yup.array(),
    // }),
    image: Yup.mixed().required(),
    file: Yup.mixed().required(),
    // image: Yup.mixed().nullable().required("This picture is required"),
    // file: Yup.mixed().nullable().required("This picture is required"),
  });

  const submitAdvDataToBackend = async () => {
    const dataWithOutImage = {
      advertisementType: AdvadvertisementActiveLink,
      propertyType: AdvpropertyActiveLink,
      title: finalAdvertisement.title,
      street: finalAdvertisement.street,
      postcode: finalAdvertisement.postCode,
      town: finalAdvertisement.town,
      salesPrice: finalAdvertisement.salesPrice,
      netRentalIncomePerYear: finalAdvertisement.netRentalIncomePYear,
      plotArea: finalAdvertisement.plotArea,
      destinationZoneType: finalAdvertisement.destinationZoneType,
      yearOfConstruction: finalAdvertisement.yearConstruction,
      floors: finalAdvertisement.floors,
      cubature: finalAdvertisement.cubature,
      residentialUnits: finalAdvertisement.resedentialUnits,
      livingSpace: finalAdvertisement.livingSpace,
      numberOfGarage: finalAdvertisement.numberOfGarage,
      numberOfUndergroundParkingSpace:
        finalAdvertisement.numerOfUndergroundParking,
      numberOfOutdoorParkingSpace:
        finalAdvertisement.numberOfOutDoorParkingSpace,
      commercialUnits: finalAdvertisement.commercialUnits,
      commercialSpace: finalAdvertisement.commercialSpace,
      proportionCommercial: finalAdvertisement.proportionCommercial,
      proportionResidential: finalAdvertisement.proportionResidential,
      No: finalAdvertisement.No,
      //checkboxs
      passengerLift: finalAdvertisement.passengerLift,
      builidingLease: finalAdvertisement.builidingLease,
      electricCarChargingStation: finalAdvertisement.electricCarChargingStation,
      minegieStandard: finalAdvertisement.minegieStandard,
      glassFibreConnection: finalAdvertisement.glassFibreConnection,
      goodsLift: finalAdvertisement.goodsLift,
      fibreCarChargingStation: finalAdvertisement.fibreCarChargingStation,
      fibreOpticConnection: finalAdvertisement.fibreOpticConnection,
      //land
      buildingLandDeveloped: finalAdvertisement.buildingLandDeveloped,
      water: finalAdvertisement.water,
      fibreOpticConnection: finalAdvertisement.fibreOpticConnection,
      electricSupply: finalAdvertisement.electricSupply,
      //third area
      totalActualRentalIncome: finalAdvertisement.totalActualRental,
      returnOnInvestment: finalAdvertisement.returnOnInvestment,
      // thirdarea
    };

    const formData = new FormData();

    formData.append("data", JSON.stringify(dataWithOutImage));

    for (let index = 0; index < finalAdvertisement.image.length; index++) {
      formData.append("image", finalAdvertisement.image[index]);
    }

    for (let index = 0; index < finalAdvertisement.file.length; index++) {
      formData.append("file", finalAdvertisement.file[index]);
    }

    await axios.post(
      "http://localhost:3000/advertisements/dashboard/createAdvertisement",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

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
        submitAdvDataToBackend,
        listOfAdvertisement,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};

export const useAdvertisementContext = () => {
  return useContext(AdvertisementContext);
};
