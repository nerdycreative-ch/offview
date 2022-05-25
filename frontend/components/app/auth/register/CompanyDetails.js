import { Form, Formik } from "formik";
import styled from "styled-components";
import BackButton from "../../utils/BackButton";
import StepsNumber from "../../utils/StepsNumber";
import SubTitle from "../../utils/SubTitle";
import UserInput from "../../utils/UserInput";
import Button from "../../utils/Button";
import RegisterTitle from "../../utils/RegisterTitle";
import AuthContainer from "../../wrappers/AuthContainer";

const CompanyDetails = ({ whichType }) => {
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
                
              >
                {(formik) => {
                  return (
                    <Form>
                      <UserInput
                        labelName="Company Name *"
                        type="text"
                        name="companyname"
                        placeholder="ex. Real Estate"
                      />
                      <UserInput
                        labelName="Legal Form *"
                        type="text"
                        name="legalform"
                        placeholder="GmbH"
                      />
                      <UserInput
                        labelName="UID *"
                        type="text"
                        name="uid"
                        placeholder="UID"
                      />
                      <UserInput
                        labelName="Website"
                        type="text"
                        name="website"
                        placeholder="www.example.com"
                      />
                      <UserInput
                        labelName="Title *"
                        type="text"
                        name="Select Title"
                        placeholder="Select Title"
                      />
                      <UserInput
                        labelName="Position *"
                        type="text"
                        name="position"
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
