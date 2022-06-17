import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useAdvertisementContext } from "../../../context/advertisement";
import Button from "../utils/Button";
import CheckBox from "../utils/CheckBox";
import ExitButton from "../utils/ExitButton";
import RegisterTitle from "../utils/RegisterTitle";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import UserInput from "../utils/UserInput";
import WhiteBackButton from "../utils/WhiteBackButton";
import AppContainer from "../wrappers/AppContainer";

const AIPliving = ({ changeStep }) => {
  const router = useRouter();

  const {
    AdvertisementLivingValidation,
    AdvertisementCommercialValidation,
    AdvertisementResedentialCommercialValidation,
    AdvertisementLandValidation,
    AdvadvertisementActiveLink,
    AdvpropertyActiveLink,
    AdvertisementBasedValidation,
    globalValuesAdv,
  } = useAdvertisementContext();

  const onSubmit = (values, onSubmitProps) => {
    console.log("TESTA AA");
    changeStep();
    router.push("/advertisementsteps?page=thirdarea");
  };

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

        <Formik
          initialValues={globalValuesAdv}
          validationSchema={
            AdvpropertyActiveLink == "living"
              ? AdvertisementLivingValidation
              : AdvpropertyActiveLink == "commercial"
              ? AdvertisementCommercialValidation
              : AdvpropertyActiveLink == "residentialandcommercial"
              ? AdvertisementResedentialCommercialValidation
              : ""
            // AdvertisementLivingValidation
          }
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form>
                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Sales Price *"
                      placeholder="€"
                      name="salesPrice"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Net Rental Income per Year *"
                      placeholder="%"
                      name="netRentalIncomePYear"
                    />
                  </div>
                </div>

                {AdvpropertyActiveLink == "residentialandcommercial" && (
                  <div className="inLineItems">
                    <div className="singleItem">
                      <UserInput
                        labelName="Proportion Commercial"
                        placeholder="%"
                        name="proportionCommercial"
                      />
                    </div>
                    <div className="singleItem">
                      <UserInput
                        labelName="Proportion Residential"
                        placeholder="%"
                        name="proportionResidential"
                      />
                    </div>
                  </div>
                )}

                {/* {
                   
                    AdvpropertyActiveLink == "living"
                    ? <h1>living</h1>
                    : AdvpropertyActiveLink == "commercial"
                    ? <h2>commercial</h2>
                    : <h1>Residential</h1>
                
                } */}

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Plot Area *"
                      placeholder="m2"
                      name="plotArea"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Destination Zone Type"
                      placeholder="Select zone type"
                      name="destinationZoneType"
                    />
                  </div>
                </div>

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Year of Construction *"
                      placeholder="0000"
                      name="yearConstruction"
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
                    {AdvpropertyActiveLink == "living" ||
                    AdvpropertyActiveLink == "residentialandcommercial" ? (
                      <UserInput
                        labelName="Residential Units *"
                        placeholder="0"
                        name="resedentialUnits"
                      />
                    ) : (
                      <>
                        <UserInput
                          labelName="Commercial Units *"
                          placeholder="0"
                          name="commercialUnits"
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="singleItem">
                  {AdvpropertyActiveLink == "living" ||
                  AdvpropertyActiveLink == "residentialandcommercial" ? (
                     ""
                  ) : (
                    <>
                      <UserInput
                        labelName="Commercial Space"
                        placeholder="m2"
                        name="commercialSpace"
                      />
                    </>
                  )}
                </div>

                <div className="singleItem">
                  {(AdvpropertyActiveLink == "living" ||
                    AdvpropertyActiveLink == "residentialandcommercial") && (
                    <UserInput
                      labelName="Living Space"
                      placeholder="m2"
                      name="livingSpace"
                    />
                  )}
                </div>

                {AdvpropertyActiveLink == "residentialandcommercial" && (
                  <div className="inLineItems">
                    <div className="singleItem">
                      <UserInput
                        labelName="Commercial Units *"
                        placeholder="0"
                        name="commercialUnits"
                      />
                    </div>
                    <div className="singleItem">
                      <UserInput
                        labelName="Commercial Space"
                        placeholder="0"
                        name="commercialSpace"
                      />
                    </div>
                  </div>
                )}

                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Number of Garage *"
                      placeholder="0"
                      name="numberOfGarage"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Number of Underground Parking Space *"
                      placeholder="0"
                      name="numerOfUndergroundParking"
                    />
                  </div>
                </div>

                <div className="singleItem">
                  <UserInput
                    labelName="Number of Outdoor Parking Space *"
                    placeholder="0"
                    name="numberOfOutDoorParkingSpace"
                  />
                </div>

                <div className="checkBoxConainer">
                  {/* <CheckBox
                    name="minergieStandard"
                    content="Minergie Standard"
                  /> */}
                  <CheckBox name="passengerLift" content="Passenger Lift" />

                  {AdvpropertyActiveLink == "living" && (
                    <CheckBox
                      name="glassFibreConnection"
                      content="Glass Fibre Connection"
                    />
                  )}

                  {(AdvpropertyActiveLink == "living" ||
                    AdvpropertyActiveLink == "residentialandcommercial") && (
                    <CheckBox
                      name="minegieStandard"
                      content="Minergie Standard"
                    />
                  )}

                  {(AdvpropertyActiveLink == "commercial" ||
                    AdvpropertyActiveLink == "residentialandcommercial") && (
                    <>
                      <CheckBox name="goodsLift" content="Goods Lift" />
                      <CheckBox
                        name="fibreOpticConnection"
                        content="Fibre Optic Connection"
                      />
                    </>
                  )}

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
                    <Button title="Continue" type="submit" />
                  </div>
                </div>
              </Form>
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
