import styled from "styled-components";
import { Form, Formik } from "formik";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import Table from "./Table";
import { useState } from "react";
import Head from "next/head";

const CPImprint = () => {
  const [imPrint, setImPrint] = useState([
    {
      id: 1,
      title: "fa-brands fa-facebook",
      content: "https://www.facebook.com",
    },
    {
      id: 2,
      title: "fa-brands fa-instagram",
      content: "https://www.instagram.com",
    },
    // {
    //   id: 3,
    //   icon: "fa-brands fa-twitter",
    //   href: "https://www.twitter.com",
    // },
  ]);

  const globalValues = {
    title: "",
    content: "",
  };

  const ValidationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setImPrint([
      ...imPrint,
      {
        id: Math.random(),
        title: values.title,
        content: values.content,
      },
    ]);
    onSubmitProps.resetForm();
  };

  return (
    <CPImprintStyled>
      <h1 className="apTitle">IM PRINT</h1>
      <Formik
        initialValues={globalValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <UserInput labelName="Title" type="text" name="title" />
              <UserInput labelName="Content" type="text" name="content" />
              <div className="btn">
                <Button type="submit" text="Add" green width="100%" />
              </div>
            </Form>
          );
        }}
      </Formik>
      <Table tableHead={["Title", "Conent"]} tableBody={imPrint} />
    </CPImprintStyled>
  );
};

const CPImprintStyled = styled.div`
  .btn {
    margin-top: 60px;
  }
`;

export default CPImprint;
