import { Form, Formik } from "formik";
import styled from "styled-components";
import Button from "../utils/Button";
import CheckBox from "../utils/CheckBox";
import ExitButton from "../utils/ExitButton";
import RegisterTitle from "../utils/RegisterTitle";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import UserInput from "../utils/UserInput";
import WhiteBackButton from "../utils/WhiteBackButton";
import AppContainer from "../wrappers/AppContainer";

const LandPage = () => {
  return (
    <AppContainer>
      <LandPageStyled>
        <ExitButton content="Exit Advertisement" />
        <StepsNumber stepsLength={4} />
        <RegisterTitle title="Second area" fontSize={20} />
        <SubTitle
          marginTop={4}
          // marginBottom={heig < 900 ? 14 : 40}
          content="We use this data to calculate matches with purchase profiles of potential buyers."
        />

        <Formik>
          {(formik) => {
            return (
              <Form>
                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Sales Price *"
                      type="text"
                      placeholder="€"
                      name="salesPrice"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Plot Area"
                      type="text"
                      placeholder="m2"
                      name="plotArea"
                    />
                  </div>
                </div>

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Destination Zone Type"
                      type="text"
                      placeholder="Select zone type"
                      name="destinationZoneType"
                    />
                  </div>
                </div>

                <div className="checkBoxConainer">
                  <CheckBox
                    name="buildingLandDeveloped"
                    content="Building Land Developed"
                  />
                  <CheckBox
                    name="water"
                    content="Water/Sweage Connection is required"
                  />
                  <CheckBox
                    name="fibreOpticConnection"
                    content="Fibre Optic Connection is required"
                  />
                  <CheckBox
                    name="electricSupply"
                    content="Electric Supply is required"
                  />
                </div>

                {/* BUTTON CONTAINER */}
                <div className="buttonContainer">
                  <WhiteBackButton />
                  <div style={{ width: 110, marginLeft: 16 }}>
                    <Button title="Continue" type="submit" />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </LandPageStyled>
    </AppContainer>
  );
};

const LandPageStyled = styled.div`
  padding: 0 10%;
  .inLineItems {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .singleItem {
    width: 48%;
  }

  .checkBoxConainer {
    margin: 22px 0;
  }

  .buttonContainer {
    display: flex;
    padding-bottom: 32px;
    margin-top: 50px;
  }

  @media (max-width: 767.98px) {
    padding: 0%;

    .inLineItems {
      flex-wrap: wrap;
    }
    .singleItem {
      width: 100%;
    }
  }
`;

export default LandPage;
