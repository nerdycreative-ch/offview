import styled from "styled-components";
import { Form, Formik } from "formik";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import Table from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";

const CPInformation = () => {
  const [information, setInformation] = useState([
    // {
    //   id: 1,
    //   data: "offview AG Rüeggisingerstrasse 19 CH-6020 Emmenbrücke VAT-ID: CH123456789",
    //   phone: "+41 (0) 123 4567 89",
    //   email: "contact@offview.ch",
    // },
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

  const getInformation = async () => {
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/information/get`
      ).then((response) => setInformation(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/information/post`;

      const { data: res } = await axios.post(url, {
        data: values.data,
        phoneNumber: values.phone,
        email: values.email,
      });
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/information/get`
      ).then((response) => setInformation(response.data.data));
      onSubmitProps.resetForm();
    } catch (error) {
      console.log(error);
    }
    onSubmitProps.resetForm();
  };

  const editItem = async (id) => {
    await axios
      .put(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/information/patch/${id}`
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteItem = async (id) => {
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/information/delete/${id}`
      )
      .then((res) => {
        console.log("Item successfully deletedasdas!");

        axios(
          `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/information/get`
        ).then((response) => setInformation(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
        editItem={editItem}
        deleteItem={deleteItem}
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
