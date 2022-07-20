import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const AuthContext = createContext();

export const AuthWrappercontext = ({ children }) => {
  const [token, setToken] = useState("");

  //UN COMMENT GJITHQYSH

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  // }, [token]);

  // console.log("ZOTRI TOKEN", token);

  // SELECT PROFILE
  const [singleCategory, setSingleCategory] = useState("");
  const [singleTypeCategory, setSingleTypeCategory] = useState("");

  const [currentUserData, setCurrentUserData] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios(
          `${process.env.NEXT_PUBLIC_URL}profiles/dashboard/myprofile`,
          {
            headers: {
              // Authorization: JSON.parse(
              //   localStorage.getItem("token")
              // )
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhbWFkYV9sb3JpQGhvdG1haWwuY29tIiwiaWQiOiI2MmNkY2E2MWFhZWFmYjM2ZjE1YmRiODUiLCJpYXQiOjE2NTgxNDQwMzksImV4cCI6MTY1ODQwMzIzOX0.3NLtvYFEdjE79JVWo8Lz3vQYHkLalpKHMiek6Zp8GX8",
            },
          }
        ).then((response) => setCurrentUserData(response.data.data));
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       await axios(
  //         `${process.env.NEXT_PUBLIC_URL}profiles/dashboard/myprofile`,
  //         {
  //           headers: {
  //             Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhbWFkYV9sb3JpQGhvdG1haWwuY29tIiwiaWQiOiI2MmNkY2E2MWFhZWFmYjM2ZjE1YmRiODUiLCJpYXQiOjE2NTgxNDQwMzksImV4cCI6MTY1ODQwMzIzOX0.3NLtvYFEdjE79JVWo8Lz3vQYHkLalpKHMiek6Zp8GX8",
  //           },
  //         }
  //       ).then((response) => setCurrentUserData(response.data.data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getUser();
  // }, [currentUserData]);

  useEffect(() => {
    console.log("TOKEN MAFIA", token);
  }, [token]);

  const globalValues = {
    // email: "",
    // password: "",
    title: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
    street: "",
    no: "",
    zipcode: "",
    country: "",
    companyName: "",
    legalForm: "",
    UID: "",
    Website: "",
    position: "",
    city: "",
    postalcode: "",
  };

  const registerValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  useEffect(() => {
    setSingleCategory(JSON.parse(localStorage.getItem("IS")));
    setSingleTypeCategory(JSON.parse(localStorage.getItem("OS")));
  }, []);

  const RegisterValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    ConfirmPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("Confirm Password is required"),
  });

  const UserValidationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    street: Yup.string().required("Street Address is required"),
    no: Yup.string().required("No is required"),
    zipcode: Yup.string().required("Zip Code is required"),
    country: Yup.string().required("Country is required"),
  });

  const CompanyBasedValidationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company Name is required"),
    legalForm: Yup.string().required("Legal Form is required"),
    UID: Yup.string().required("UID is required"),
    Website: Yup.string().required("Website is required"),
    title: Yup.string().required("Title is required"),
    country: Yup.string().required("Country is required"),
    street: Yup.string().required("Street is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    position: Yup.string().required("Position  is required"),
    no: Yup.number().required("No  is required"),
    city: Yup.string(),
  });

  const CompanyValidationSchema = CompanyBasedValidationSchema.shape({
    // firstname: Yup.string().required("First Name is required"),
    // lastname: Yup.string().required("Last Name is required"),
  });

  const RegisterOnSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.resetForm();
  };

  const submitDataToBackend = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}users/signup`,
        {
          companyName: userData.companyName,
          legalForm: userData.legalForm,
          UID: userData.UID,
          title: userData.title,
          firstName: userData.firstname,
          lastName: userData.lastname,
          phoneNumber: userData.phoneNumber,
          street: userData.street,
          country: userData.country,
          email: userData.email,
          password: userData.password,
          mainrole: userData.singleCategory,
          role: userData.singleTypeCategory,
          website: userData.website,
          city: userData.city,
          No: userData.no,
          position: userData.position,
          postalCode: "1234",
          gender: "male",
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
    localStorage.removeItem("signup-form");
    localStorage.removeItem("company-details-form");
    localStorage.removeItem("user-details-form");
    localStorage.removeItem("IS");
    localStorage.removeItem("PC");
  };

  return (
    <AuthContext.Provider
      value={{
        globalValues,
        registerValues,
        RegisterValidationSchema,
        UserValidationSchema,
        RegisterOnSubmit,
        currentUserData,
        setCurrentUserData,
        submitDataToBackend,
        singleCategory,
        setSingleCategory,
        singleTypeCategory,
        setSingleTypeCategory,
        CompanyBasedValidationSchema,
        CompanyValidationSchema,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
