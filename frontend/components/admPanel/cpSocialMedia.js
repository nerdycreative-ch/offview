import styled from "styled-components";
import { Form, Formik } from "formik";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import Table from "./Table";
import { useState } from "react";
import Head from "next/head";

const CPSocialMedia = () => {
  // const test = process.env.LOCALHOST;

  // console.log(test);

  const [socialMedia, setSocialMedia] = useState([
    {
      id: 1,
      icon: "fa-brands fa-facebook",
      href: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: "fa-brands fa-instagram",
      href: "https://www.instagram.com",
    },
    // {
    //   id: 3,
    //   icon: "fa-brands fa-twitter",
    //   href: "https://www.twitter.com",
    // },
  ]);

  const globalValues = {
    icon: "",
    url: "",
  };

  const ValidationSchema = Yup.object({
    icon: Yup.string().required("Icon is required"),
    url: Yup.string().required("Url is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setSocialMedia([
      ...socialMedia,
      {
        id: Math.random(),
        icon: values.icon,
        href: values.url,
      },
    ]);
    onSubmitProps.resetForm();
  };

  return (
    <CPSocialMediaStyled>
      <h1 className="apTitle">SOCIAL MEDIA</h1>
      <Formik
        initialValues={globalValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <UserInput labelName="Icon" type="text" name="icon" />
              <UserInput labelName="Url" type="text" name="url" />
              <div className="btn">
                <Button type="submit" text="Add" green width="100%" />
              </div>
            </Form>
          );
        }}
      </Formik>
      <Table socialMedia tableHead={["Icon", "Url"]} tableBody={socialMedia} />
      {socialMedia.map((item, index) => {
        return (
          <a href={item.href}>
            <i className={`${item.icon}`} key={index}></i>
          </a>
        );
      })}
    </CPSocialMediaStyled>
  );
};

const CPSocialMediaStyled = styled.div`
  .btn {
    margin-top: 60px;
  }
`;

export default CPSocialMedia;
