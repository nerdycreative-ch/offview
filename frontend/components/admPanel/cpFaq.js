import { Form, Formik } from "formik";
import styled from "styled-components";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import { useState } from "react";
import Table from "./Table";

const CPFAQ = () => {

  const [faq, setFaq] = useState([
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
    setFaq([
      ...faq,
      {
        id: Math.random(),
        title: values.title,
        content: values.content,
      },
    ]);
    onSubmitProps.resetForm();
  };
  return (
    <CpFaqStyled>
      <h1 className="apTitle">FAQ</h1>

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

      <Table tableHead={["Title", "Conent"]} tableBody={faq} />

    </CpFaqStyled>
  );
};

const CpFaqStyled = styled.div`
  .btn {
    margin-top: 60px;
  }
`;

export default CPFAQ;
