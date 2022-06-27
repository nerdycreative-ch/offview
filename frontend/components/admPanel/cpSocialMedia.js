import styled from "styled-components";
import { Form, Formik } from "formik";
import UserInput from "../app/utils/UserInput";
import Button from "../web/utils/Button";
import * as Yup from "yup";
import Table from "./Table";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const CPSocialMedia = () => {
  // const test = process.env.LOCALHOST;

  // console.log(test);

  const [inEdited, setIsEdited] = useState(false);

  const [socialMedia, setSocialMedia] = useState([
    // {
    //   id: 1,
    //   icon: "fa-brands fa-facebook",
    //   href: "https://www.facebook.com",
    // },
    // {
    //   id: 2,
    //   icon: "fa-brands fa-instagram",
    //   href: "https://www.instagram.com",
    // },
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

  const getSocialMediaItem = async () => {
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/socialmedia/dashboard/getall`
      ).then((response) => setSocialMedia(response.data.socialmedia));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSocialMediaItem();
  }, []);

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/socialmedia/dashboard/post`;

      const { data: res } = await axios.post(url, {
        icon: values.icon,
        url: values.url,
      });
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/socialmedia/dashboard/getall`
      ).then((response) => setSocialMedia(response.data.socialmedia));
      onSubmitProps.resetForm();
    } catch (error) {
      console.log(error);
    }

    onSubmitProps.resetForm();
  };

  const editItem = async (id) => {
    await axios
      .put(`${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/socialmedia/dashboard/patch/${id}`)
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
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/socialmedia/dashboard/delete/${id}`
      )
      .then((res) => {
        console.log("Item successfully deleted!");

        axios(
          `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/socialmedia/dashboard/getall`
        ).then((response) => setSocialMedia(response.data.socialmedia));
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Table
        socialMedia
        tableHead={["Icon", "Url"]}
        tableBody={socialMedia}
        editItem={editItem}
        deleteItem={deleteItem}
      />
      {socialMedia.map((item, index) => {
        return (
          <a key={index} href={item.href}>
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
