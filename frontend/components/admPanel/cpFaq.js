import { Form, Formik } from "formik";
import styled from "styled-components";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

const CPFAQ = () => {
  const [faq, setFaq] = useState([
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

  useEffect(() => {
    getFaq();
  }, []);

  const getFaq = async () => {
    try {
      await axios(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/faq/dashboard/get`).then(
        (response) => setFaq(response.data.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/faq/dashboard/post`;

      const { data: res } = await axios.post(url, {
        title: values.title,
        content: values.content,
      });
      await axios(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/faq/dashboard/get`).then(
        (response) => setFaq(response.data.data)
      );
      onSubmitProps.resetForm();
    } catch (error) {
      console.log(error);
    }

    onSubmitProps.resetForm();
  };

  const editItem = async (id) => {
    await axios
      .put(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/faq/dashboard/patch/${id}`)
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
      .delete(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/faq/dashboard/delete/${id}`)
      .then((res) => {
        console.log("Item successfully deleted!");

        axios(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/faq/dashboard/get`).then(
          (response) => setFaq(response.data.data)
        );
      })
      .catch((error) => {
        console.log(error);
      });
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

      <Table
        tableHead={["Title", "Conent"]}
        editItem={editItem}
        deleteItem={deleteItem}
        tableBody={faq}
      />
    </CpFaqStyled>
  );
};

const CpFaqStyled = styled.div`
  .btn {
    margin-top: 60px;
  }
`;

export default CPFAQ;
