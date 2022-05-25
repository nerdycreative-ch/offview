import styled from "styled-components";
import GreenContainer from "../components/web/utils/GreenContainer";
import Footer from "../components/web/utils/Footer";
import Button from "../components/web/utils/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../components/web/utils/TextError";
import Header from "../components/web/utils/Header";
import Head from "next/head";

const Contact = () => {
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.resetForm();
  };

  return (
    <ContactStyled>
      <Head>
        <title>Contact - Offview</title>
        <meta
          name="description"
          content="If you have any questions we're here to help.Call us +41 (0) 123 4567 89 or offview@gmail.com.Adress : Rüeggisingerstrasse 19 CH-6020 Emmenbrücke"
        />
      </Head>

      <Header title="Contact" content="Needs help?" />
      <GreenContainer>
        <h1 className="contactInformation">Contact information</h1>

        <div className="mainContent">
          <div className="leftSide">
            <p className="companyName">offview AG </p>
            <p className="place">Rüeggisingerstrasse 19 </p>
            <p className="street">CH-6020 Emmenbrücke</p>
            <p className="phone">+41 (0) 123 4567 89</p>
          </div>
          <div className="btnContainer">
            <Button text="Leave a message" />
          </div>
        </div>
      </GreenContainer>

      {/* CONTACT */}

      <div className="formData">
        <h1 className="letsTalkTitle">Let’s talk</h1>
        <p>Fill out the form and we will get back to you promptly.</p>
        <div className="verticalLine"></div>
      </div>

      {/* CONTACT FORM */}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
      >
        {(formik) => {
          return (
            <Form className="formContainer">
              <div className="formGroup">
                <label htmlFor="fullName">Full Name *</label>

                <Field type="text" name="fullName" id="name" />
                <ErrorMessage name="fullName" component={TextError} />
              </div>

              <div className="formGroup">
                <label htmlFor="email">Email Address *</label>

                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component={TextError} />
              </div>

              <div className="formGroup">
                <label htmlFor="message">Message</label>

                <Field as="textarea" rows={5} name="message" id="message" />
                <ErrorMessage name="message" component={TextError} />
              </div>

              <div className="btnContainer">
                <Button type="submit" text="Send Message" green />
              </div>
            </Form>
          );
        }}
      </Formik>

      <Footer />
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  .contactInformation {
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
  }

  .companyName {
    font-weight: 600;
    margin-bottom: 4px;
  }
  .place,
  .street,
  .phone {
    font-weight: 300;
    color: #ffffff;
  }
  .mainContent {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }

  .btnContainer {
    align-self: flex-end;
  }

  .formData {
    margin: 120px 0;
    margin-bottom: 80px;
  }
  .letsTalkTitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;

    text-align: center;
  }
  .formData p {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: var(--Grey-500);
    margin-top: 8px;
  }
  .verticalLine {
    width: 1px;
    height: 50px;
    background: #e1e1e1;
    margin: 24px auto;
  }

  .formContainer {
    margin: 0 27%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
  }
  .formGroup {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
  .formGroup label {
    font-size: 14px;
    line-height: 18px;
    color: var(--black-0);
  }
  .formGroup input {
    margin-top: 6px;

    background: var(--whiteColor);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 16px 12px;
    color: #afafae;
    outline: none;
  }
  .formGroup textarea {
    background: var(--whiteColor);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 16px 12px;
    resize: none;
    margin-top: 6px;
    color: #afafae;
    outline: none;
  }
  .btnContainer {
    align-self: flex-start;
    margin-top: 40px;
  }
  @media (max-width: 991.98px) {
    .formContainer {
      margin: 0 15%;
      margin-bottom: 40px;
    }
    .formData {
      margin: 30px 0;
    }
  }
  @media (max-width: 767.98px) {
    .mainContent {
      display: flex;
      flex-direction: column;
    }

    .contactInformation {
      font-size: 22px;
    }
    .leftSide p {
      font-size: 14px;
    }
    .formContainer {
      margin: 0 8%;
      margin-bottom: 40px;
    }
  }
`;

export default Contact;
