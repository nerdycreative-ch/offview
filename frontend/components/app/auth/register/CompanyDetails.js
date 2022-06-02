import { Form, Formik } from "formik";
import styled from "styled-components";
import BackButton from "../../utils/BackButton";
import StepsNumber from "../../utils/StepsNumber";
import SubTitle from "../../utils/SubTitle";
import UserInput from "../../utils/UserInput";
import Button from "../../utils/Button";
import RegisterTitle from "../../utils/RegisterTitle";
import AuthContainer from "../../wrappers/AuthContainer";
import { useAuthContext } from "../../../../context/auth";
import { useRouter } from "next/router";

const CompanyDetails = ({ whichType }) => {
  const Router = useRouter();

  const {
    CompanyBasedValidationSchema,
    CompanyValidationSchema,
    userData,
    setUserData,
    globalValues,
  } = useAuthContext();

  const onSubmit = (values, onSubmitProps) => {
    console.log("VALUES", values);

    setUserData({
      ...userData,
      title: values.title,
      ...(whichType && {
        firstname: values.firstname,
        lastname: values.lastname,
      }),
      companyName: values.companyName,
      legalForm: values.legalForm,
      UID: values.UID,
      Website: values.Website,
      Position: values.Position,
    });

    Router.push("/registersteps?page=atc");
  };

  return (
    <CompanyDetailsStyled>
      <AuthContainer>
        <div className="userDetails">
          <div className="userDetailsContainer">
            <BackButton />

            <StepsNumber stepsLength={3} />

            <div style={{ marginBottom: 40 }}>
              <RegisterTitle title="Company Details" />
              <SubTitle
                marginTop={4}
                // marginBottom={heightOfScreen < 900 ? 14 : 40}
                fontSize={14}
                content="Please tell us some information about your company to accelerate the verification process."
              />

              <Formik
                initialValues={globalValues}
                validationSchema={
                 CompanyBasedValidationSchema
                }
                onSubmit={onSubmit}
                enableReinitialize
              >
                {(formik) => {
                  return (
                    <Form>
                      <UserInput
                        labelName="Company Name *"
                        type="text"
                        name="companyName"
                        placeholder="ex. Real Estate"
                      />
                      <UserInput
                        labelName="Legal Form *"
                        type="text"
                        name="legalForm"
                        placeholder="GmbH"
                      />
                      <UserInput
                        labelName="UID *"
                        type="text"
                        name="UID"
                        placeholder="UID"
                      />
                      <UserInput
                        labelName="Website"
                        type="text"
                        name="Website"
                        placeholder="www.example.com"
                      />
                      <UserInput
                        labelName="Title *"
                        type="text"
                        name="title"
                        placeholder="Select Title"
                      />
                      <UserInput
                        labelName="Position *"
                        type="text"
                        name="Position"
                        placeholder="ex. Manager"
                      />

                      {whichType && (
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ width: "46%" }}>
                            <UserInput
                              labelName="First Name *"
                              type="text"
                              name="firstname"
                              placeholder="John"
                            />
                          </div>
                          <div style={{ width: "46%" }}>
                            <UserInput
                              labelName="Last Name *"
                              type="text"
                              name="lastname"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                      )}

                      <div style={{ marginTop: 30 }}>
                        <Button type="submit" title="Continue" />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </AuthContainer>
    </CompanyDetailsStyled>
  );
};

const CompanyDetailsStyled = styled.div`
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
`;

export default CompanyDetails;
