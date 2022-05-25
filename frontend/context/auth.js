import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const AuthContext = createContext();

export const AuthWrappercontext = ({ children }) => {
  // SELECT PROFILE
  const [singleCategory, setSingleCategory] = useState("");
  const [singleTypeCategory, setSingleTypeCategory] = useState("");

  const [registerSteps, setRegisterSteps] = useState(1);

  const [userData, setUserData] = useState({});

  const globalValues = {
    // email: "",
    // password: "",
    title: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    streetaddress: "",
    no: "",
    zipcode: "",
    country: "",
    companyname: "",
    legalForm: "",
    uid: "",
    website: "",
    position: "",
    postalcode: "",
  };

  const registerValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

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
    phonenumber: Yup.string().required("Phone Number is required"),
    streetaddress: Yup.string().required("Street Address is required"),
    no: Yup.string().required("No is required"),
    zipcode: Yup.string().required("Zip Code is required"),
    country: Yup.string().required("Country is required"),
    companyname: Yup.string().required("Company Name is required"),
    legalForm: Yup.string().required("Legal Form is required"),
    uid: Yup.string().required("UID is required"),
    website: Yup.string().required("Website is required"),
    position: Yup.string().required("Position is required"),
    postalcode: Yup.string().required("Postal Code is required"),
  });

  const RegisterOnSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.resetForm();
  };

  const submitDataToBackend = () => {
    axios
      .post(
        "http://localhost:3000/users/signup",
        {
          companyName: userData.companyname,
          legalForm: userData.legalForm,
          UID: userData.uid,
          title: userData.title,
          firstName: userData.firstname,
          lastName: userData.lastname,
          phoneNumber: userData.phonenumber,
          street: userData.streetaddress,
          postalCode: userData.postalcode,
          country: userData.country,
          email: userData.email,
          password: userData.password,
          mainrole: userData.singleCategory,
          role: userData.singleTypeCategory,
          website: userData.website,
          postalcode: userData.postalcode,
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

  console.log(userData);

  return (
    <AuthContext.Provider
      value={{
        globalValues,
        registerValues,
        RegisterValidationSchema,
        UserValidationSchema,
        RegisterOnSubmit,
        userData,
        setUserData,
        submitDataToBackend,
        singleCategory,
        setSingleCategory,
        singleTypeCategory,
        setSingleTypeCategory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
