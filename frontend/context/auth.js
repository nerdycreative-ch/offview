import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const AuthContext = createContext();

export const AuthWrappercontext = ({ children }) => {
  const [registerSteps, setRegisterSteps] = useState(1);

  const [userData, setUserData] = useState({});

  const globalValues = {
    email: "",
    password: "",
    title: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    streetaddress: "",
    no: "",
    zipcode: "",
    country: "",
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
      .min(6, "Password must be at least 6 characters"),
    ConfirmPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
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
  });

  const RegisterOnSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.resetForm();
  };

  const submitDataToBackend = () => {
    axios.post("url", {}).then((res) => {
      console.log(res);
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
        submitDataToBackend
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
