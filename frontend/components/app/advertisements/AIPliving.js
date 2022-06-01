import { Formik } from "formik";
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

const AIPliving = () => {
  return (
    <AppContainer>
      <AIPlivingStyled>
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
              <>
                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Sales Price *"
                      placeholder="€"
                      name="price"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Net Rental Income per Year *"
                      placeholder="%"
                      name="nripy"
                    />
                  </div>
                </div>

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Plot Area *"
                      placeholder="m2"
                      name="plotarea"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Destination Zone Type"
                      placeholder="Select zone type"
                      name="destinationzone"
                    />
                  </div>
                </div>

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Year of Construction *"
                      placeholder="0000"
                      name="yearconstruction"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Floors *"
                      placeholder="0"
                      name="floors"
                    />
                  </div>
                </div>

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Cubature *"
                      placeholder="m3"
                      name="cubature"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Residential Units *"
                      placeholder="0"
                      name="residentialunits"
                    />
                  </div>
                </div>

                <div className="singleItem">
                  <UserInput
                    labelName="Living Space"
                    placeholder="m2"
                    name="livingspace"
                  />
                </div>

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Number of Garage *"
                      placeholder="0"
                      name="numberofgarage"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Number of Underground Parking Space *"
                      placeholder="0"
                      name="parkingspace"
                    />
                  </div>
                </div>

                <div className="singleItem">
                  <UserInput
                    labelName="Number of Outdoor Parking Space *"
                    placeholder="0"
                    name="outdoorparkingspace"
                  />
                </div>

                <div className="checkBoxConainer">
                  <CheckBox
                    name="minergieStandard"
                    content="Minergie Standard"
                  />
                  <CheckBox name="passengerLift" content="Passenger Lift" />
                  <CheckBox
                    name="glassFibreConnection"
                    content="Glass Fibre Connection"
                  />
                  <CheckBox
                    name="electricCarChargingStation"
                    content="Electric Car Charging Station"
                  />
                  <CheckBox name="buildingLease" content="Building Lease" />
                </div>

                {/* BUTTON CONTAINER */}
                <div className="buttonContainer">
                  <WhiteBackButton />
                  <div style={{ width: 110, marginLeft: 16 }}>
                    <Button title="Continue" />
                  </div>
                </div>
              </>
            );
          }}
        </Formik>
      </AIPlivingStyled>
    </AppContainer>
  );
};

const AIPlivingStyled = styled.div`
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

export default AIPliving;
