import styled from "styled-components";
import { Form, Formik } from "formik";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import Table from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";

const CPImprint = () => {
  const [imPrint, setImPrint] = useState([
    // {
    //   id: 1,
    //   title: "fa-brands fa-facebook",
    //   content: "https://www.facebook.com",
    // },
    // {
    //   id: 2,
    //   title: "fa-brands fa-instagram",
    //   content: "https://www.instagram.com",
    // },
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

  const getImPrint = async () => {
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/getall`
      ).then((response) => setImPrint(response.data.imprinti));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImPrint();
    
  }, []);

  

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/post`;

      const { data: res } = await axios.post(url, {
        title: values.title,
        content: values.content,
      });
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/getall`
      ).then((response) => setImPrint(response.data.imprinti));
      onSubmitProps.resetForm();
    } catch (error) {
      console.log(error);
    }

    onSubmitProps.resetForm();
  };

  const editItem = async (id) => {
    await axios
      .put(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/patch/${id}`)
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
      .delete(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/delete/${id}`)
      .then((res) => {
        console.log("Item successfully deleted!");

        axios(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/getall`).then(
          (response) => setImPrint(response.data.imprinti)
        );
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Table
        tableHead={["Title", "Conent"]}
        tableBody={imPrint}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </CPImprintStyled>
  );
};

const CPImprintStyled = styled.div`
  .btn {
    margin-top: 60px;
  }
`;

export default CPImprint;
