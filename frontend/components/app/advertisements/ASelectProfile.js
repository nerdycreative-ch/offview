import styled from "styled-components";
import { useState, useEffect } from "react";
import AppContainer from "../wrappers/AppContainer";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import BigRadioButton from "../utils/BigRadioButton";
import Button from "../utils/Button";
import RegisterTitle from "../utils/RegisterTitle";
import ExitButton from "../utils/ExitButton";
import { useRouter } from "next/router";
import { useAdvertisementContext } from "../../../context/advertisement";

const ASelectProfile = ({ changeStep }) => {
  const Router = useRouter();

  const {
    AdvadvertisementActiveLink,
    AdvsetAdvertisementActiveLink,
    AdvpropertyActiveLink,
    AdvsetPropertyActiveLink,
    finalAdvertisement,
    setFinalAdvertisement,
  } = useAdvertisementContext();

  const [heightOfScreen, setHeightOffScreen] = useState(0);
  const [widthOffScreen, setWidthOfScreen] = useState(0);

  useEffect(() => {
    setHeightOffScreen(screen.height);
    setWidthOfScreen(screen.width);
  }, []);

  const onClick = () => {
    setFinalAdvertisement({
      ...finalAdvertisement,
      advertisementType: AdvadvertisementActiveLink,
      propertyType: AdvpropertyActiveLink,
    });
    changeStep();

    Router.push("/advertisementsteps?page=firstarea");
  };

  const [advertismentType, setAdvertismetType] = useState([
    {
      id: "investmentproperties",
      name: "Investment properties",
    },
    {
      id: "land",
      name: "Land",
    },
    {
      id: "newbuildingprojects",
      name: "New building projects",
    },
  ]);
  const [propertyType, setPropertyType] = useState([
    {
      id: "living",
      name: "Living",
    },
    {
      id: "commercial",
      name: "Commercial",
    },
    {
      id: "residentialandcommercial",
      name: "Residential and commercial",
    },
  ]);

  // const [activeLink, setActiveLink] = useState(0);
  // const [PCactiveLink, setPcActiveLink] = useState(0);

  return (
    <SelectProfileStyled>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: `${heightOfScreen < 900 ? "10px 0" : "0px 0"}`,
        }}
      >
        <AppContainer>
          <ExitButton content="Exit Advertisement" />
          <StepsNumber stepsLength={4} />
          <div className="registerStepContainer">
            <div>
              <RegisterTitle title="Select Profile" />
              <SubTitle
                marginTop={24}
                marginBottom={heightOfScreen < 900 ? 14 : 40}
                content="Please choose the type of property your are looking for."
              />
              <div style={{ marginTop: 40 }}>
                <p className="smallText">What would you like to advertise?</p>
                <div className="radioButtonGroup">
                  {advertismentType.map((item, index) => {
                    return (
                      <BigRadioButton
                        onClick={() => AdvsetAdvertisementActiveLink(item.id)}
                        key={index}
                        width={45}
                        type={item.name}
                        height={136}
                        activeLink={AdvadvertisementActiveLink}
                        id={item.id}
                        nameOfCat="IS"
                      />
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  marginTop: `${heightOfScreen < 900 ? "14px" : "55px"}`,
                }}
                className="radioButtonForm"
              >
                <p className={`smallText`}>How are you going to use offview?</p>
                <div className="radioButtonGroup">
                  {propertyType.map((item, index) => {
                    return (
                      <BigRadioButton
                        onClick={() => AdvsetPropertyActiveLink(item.id)}
                        key={index}
                        width={45}
                        height={136}
                        type={item.name}
                        PCactiveLink={AdvpropertyActiveLink}
                        id={item.id}
                        nameOfCat="PC"
                        paddingVertical={20}
                        paddingHorizontal={42}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>{" "}
          <div style={{ marginTop: 30, paddingBottom: 30 }}>
            <Button
              title="Continue"
              disabled={
                AdvadvertisementActiveLink && AdvpropertyActiveLink
                  ? false
                  : true
              }
              onClick={onClick}
            />
          </div>
        </AppContainer>
      </div>
    </SelectProfileStyled>
  );
};

const SelectProfileStyled = styled.div`
  padding: 0 20%;
  padding-bottom: 30px;

  .registerStepContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .radioButtonGroup {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .radioButtonForm {
    margin-top: 55px;
  }

  @media (max-width: 991.98px) {
    padding: 0 5%;
    padding-bottom: 30px;
  }
  @media (max-width: 575.98px) {
    padding: 0 2%;
    padding-bottom: 30px;
  }
`;

export default ASelectProfile;
