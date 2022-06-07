import styled from "styled-components";
import { Form, Formik } from "formik";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import Table from "./Table";
import { useState } from "react";

const CPInformation = () => {
  const [information, setInformation] = useState([
    {
      id: 1,
      data: "offview AG Rüeggisingerstrasse 19 CH-6020 Emmenbrücke VAT-ID: CH123456789",
      phone: "+41 (0) 123 4567 89",
      email: "contact@offview.ch",
    },
  ]);

  const globalValues = {
    data: "",
    phone: "",
    email: "",
  };

  const ValidationSchema = Yup.object({
    data: Yup.string().required("Data is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setInformation([
      ...information,
      {
        id: Math.random(),
        data: values.data,
        phone: values.phone,
        email: values.email,
      },
    ]);
    onSubmitProps.resetForm();
  };

  return (
    <CPInformationStyled>
      <h1 className="apTitle">INFORMATION</h1>
      {information.length == 0 && (
        <Formik
          initialValues={globalValues}
          validationSchema={ValidationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form>
                <UserInput labelName="Data" type="text" name="data" />
                <UserInput labelName="Phone" type="text" name="phone" />
                <UserInput labelName="Email" type="text" name="email" />

                <div className="btn">
                  <Button type="submit" text="Add" green width="100%" />
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
      <Table
        informations
        tableHead={["Data", "Phone", "Email"]}
        tableBody={information}
      />
    </CPInformationStyled>
  );
};

const CPInformationStyled = styled.div`
  .btn {
    margin-top: 60px;
  }
`;

export default CPInformation;
