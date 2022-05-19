import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthContainer from "../components/app/wrappers/AuthContainer";
import UserInput from "../components/app/utils/UserInput";
import RegisterTitle from "../components/app/utils/RegisterTitle";
import Button from "../components/app/utils/Button";
import AuthLeftSideContainer from "../components/app/wrappers/AuthLeftSideContainer";
import AuthRightSideContainer from "../components/app/wrappers/AuthRightSideContainer";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAuthContext } from "../context/auth";

const Register = () => {
  const Router = useRouter();

  const {
    RegisterInitialValues,
    RegisterValidationSchema,
    RegisterOnSubmit,
    registerValues,
    userData,
    setUserData,
  } = useAuthContext();

  const onSubmit = (values, onSubmitProps) => {
    setUserData({
      ...userData,
      email: values.email,
      password: values.password,
      ConfirmPassword: values.ConfirmPassword,
    });
    Router.push("/registersteps?page=selectprofile");
  };

  console.log(userData);

  return (
    <RegisterStyled>
      <div className="rightSideRegister">
        <AuthContainer>
          <div className="registerContainer" style={{ marginBottom: 40 }}>
            <RegisterTitle title="Create new account" fontSize={28} />
            <p className="subTitle">Manage your real estate here.</p>
          </div>

          <Formik
            initialValues={registerValues}
            validationSchema={RegisterValidationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <UserInput
                    labelName="Email Adress"
                    type="text"
                    placeholder="name@example.com"
                    name="email"
                  />
                  <UserInput
                    labelName="Password"
                    type="password"
                    icon
                    name="password"
                  />
                  <UserInput
                    labelName="Confirm Password"
                    type="password"
                    icon
                    name="ConfirmPassword"
                  />

                  {/* {errorResult && (
                    <p className="errorMessage">{errorMessage.name}</p>
                  )} */}

                  <div className="btnContainer">
                    {/* <Link href="/registersteps" passHref> */}
                    <Button title="Continue" type="submit" />

                    {/* </Link> */}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </AuthContainer>
      </div>
    </RegisterStyled>
  );
};

const RegisterStyled = styled.div`
  .leftSideRegister {
    flex: 1;
    background: #175041;
  }
  .rightSideRegister {
    flex: 1.6;
    display: flex;
    height: 100vh;
  }

  .btnContainer {
    margin-top: 40px;
  }

  @media (max-width: 991.98px) {
    .leftSideRegister {
      display: none;
    }
    .rightSideRegister {
      flex: 1.6;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default Register;
