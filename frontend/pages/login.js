import { useState } from "react";
import styled from "styled-components";
import RegisterTitle from "../components/app/utils/RegisterTitle";
import UserInput from "../components/app/utils/UserInput";
import AuthContainer from "../components/app/wrappers/AuthContainer";
import AuthLeftSideContainer from "../components/app/wrappers/AuthLeftSideContainer";
import Link from "next/link";
import Router from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../components/web/utils/TextError";
import Button from "../components/app/utils/Button";
import axios from "axios";
import { useAuthContext } from "../context/auth";

const Login = () => {
  const [erorr, setError] = useState("");

  const { setToken } = useAuthContext();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}users/login`;

      const { data: res } = await axios.post(url, {
        email: values.email,
        password: values.password,
      });

      // setToken(localStorage.setItem("token", res.token));
      // setToken("asdasd" + res.token);

      localStorage.setItem("token", res.token);

      setToken(res.token);
      onSubmitProps.resetForm();
      Router.push("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <LoginStyled>
      <AuthContainer login>
        <div className="loginCont">
          <RegisterTitle title="Login" fontSize={28} />
          <p className="subTitle">Manage your real estate here.</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form>
                <UserInput
                  labelName="Email Adress"
                  type="text"
                  marginTop={0}
                  placeholder="name@example.com"
                  name="email"
                />

                <UserInput
                  labelName="Password"
                  type="password"
                  icon
                  name="password"
                  showPasswordProp={true}
                />

                {erorr && <p className="errorMessage">{erorr}</p>}

                <div className={`btnmTop`}>
                  <Button type="submit" title="Login" green />
                </div>
              </Form>
            );
          }}
        </Formik>
        <a className={`subTitle forgotPassword`}>Forgot Password?</a>
        <p className="doesNotHavAccount">
          Dont have an account yet?
          <Link href="/register">
            <a className="signUpText">Create an account</a>
          </Link>
        </p>
      </AuthContainer>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  height: 100vh;

  .loginCont {
    margin-bottom: 40px;
  }
  .subTitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
  }
  .btnmTop {
    margin-top: 40px;
  }
  .forgotPassword {
    text-align: center;
    margin-top: 48px;
  }

  .doesNotHavAccount {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
    text-align: center;
    margin-top: 15px;
  }

  .doesNotHavAccount .signUpText {
    color: var(--greenToBlack);
    margin-left: 2px;
    cursor: pointer;
  }

  @media (min-width: 991.98px) {
    .doesNotHavAccount {
      display: none;
    }
  }

  @media (max-width: 991.98px) {
    .leftSideRegister {
      display: none;
    }
  }

  @media (max-width: 575.98px) {
    .leftSideRegister {
      display: none;
    }
  }
`;

export default Login;
