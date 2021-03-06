import { useState, useEffect } from "react";
import BackButton from "../../utils/BackButton";
import Button from "../../../web/utils/Button";
import RegisterTitle from "../../utils/RegisterTitle";
import StepsNumber from "../../utils/StepsNumber";
import SubTitle from "../../utils/SubTitle";
import UserInput from "../../utils/UserInput";
import styled from "styled-components";
import AuthContainer from "../../wrappers/AuthContainer";
import { Formik, Form } from "formik";
import { useAuthContext } from "../../../../context/auth";
import { useRouter } from "next/router";
import { Persist } from 'formik-persist'


const UserDetails = ({ privateDetails, changeStep }) => {
  const Router = useRouter();

  const { globalValues, UserValidationSchema, userData, setUserData } =
    useAuthContext();

  const onSubmit = (values, onSubmitProps) => {
    console.log("VALUES", values);

    changeStep();

    setUserData({
      ...userData,
      title: values.title,
      firstname: values.firstname,
      lastname: values.lastname,
      phoneNumber: values.phoneNumber,
      street: values.street,
      no: values.streetaddress,
      zipcode: values.zipcode,
      country: values.country,
    });

    Router.push("/registersteps?page=atc");
  };

  const [heightOfScreen, setHeightOffScreen] = useState(0);

  useEffect(() => {
    setHeightOffScreen(screen.height);
  }, []);

  return (
    <UserDetailsStyled>
      <AuthContainer>
        <div className="userDetails">
          <div className="userDetailsContainer">
            <BackButton />
            <StepsNumber stepsLength={3} />
            <div style={{ marginBottom: 40 }}>
              <RegisterTitle
                title={privateDetails ? "Private Details" : "Owner Details"}
              />
              <SubTitle
                marginTop={4}
                marginBottom={heightOfScreen < 900 ? 14 : 40}
                fontSize={14}
                content="Please tell us some information absdout yourself, to accelerate the verification process."
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <Formik
                  initialValues={globalValues}
                  validationSchema={UserValidationSchema}
                  onSubmit={onSubmit}
                  enableReinitialize
                >
                  {(formik) => {
                    return (
                      <Form>
                        <UserInput labelName="Title" type="text" name="title" />

                        {/* <Field type="text" name="fullName" id="fullName" />
                <ErrorMessage name="fullName" component={TextError} /> */}

                        <div className="inLineItems">
                          <div className="singleItem">
                            <UserInput
                              labelName="First Name"
                              type="text"
                              name="firstname"
                            />
                          </div>
                          <div className="singleItem">
                            <UserInput
                              labelName="Last Name"
                              type="text"
                              name="lastname"
                            />
                          </div>
                        </div>

                        <UserInput
                          labelName="Phone Number"
                          type="text"
                          name="phoneNumber"
                        />

                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ width: "69%" }}>
                            <UserInput
                              labelName="Street Address"
                              type="text"
                              name="street"
                            />
                          </div>
                          <div style={{ width: "23%" }}>
                            <UserInput
                              labelName="No *"
                              type="number"
                              name="no"
                            />
                          </div>
                        </div>

                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ width: "29%" }}>
                            <UserInput
                              labelName="Zip Code"
                              type="text"
                              name="zipcode"
                            />
                          </div>
                          <div style={{ width: "69%" }}>
                            <UserInput
                              labelName="Country"
                              type="number"
                              name="country"
                            />
                          </div>
                        </div>
                        <div style={{ marginTop: 30 }}>
                          <Button
                            type="submit"
                            text="Continue"
                            green
                            width="100%"
                          />
                        </div>

                        <Persist name="user-details-form" />

                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </AuthContainer>
    </UserDetailsStyled>
  );
};

const UserDetailsStyled = styled.div`
  .userDetails {
    display: flex;
    justify-content: center;
  }

  .userDetailsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 40px 0;
  }

  @media (max-width: 991.98px) {
    .userDetailsContainer {
      display: flex;
      justify-content: center;
      padding: 40px 0;
      width: 100%;
    }
  }

  @media (max-width: 767.98px) {
    .inLineItems {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .singleItem {
      width: 48%;
    }
  }

  @media (max-width: 575.98px) {
    .userDetailsContainer {
      width: 100%;
    }
  }
`;

export default UserDetails;
