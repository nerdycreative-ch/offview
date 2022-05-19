import styled from "styled-components";
import { useState, useEffect } from "react";
import AppContainer from "../wrappers/AppContainer";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import BigRadioButton from "../utils/BigRadioButton";
import Button from "../utils/Button";
import RegisterTitle from "../utils/RegisterTitle";
import ExitButton from "../utils/ExitButton";

const ASelectProfile = ({ changeStep }) => {
  const [heightOfScreen, setHeightOffScreen] = useState(0);
  const [widthOffScreen, setWidthOfScreen] = useState(0);

  useEffect(() => {
    setHeightOffScreen(screen.height);
    setWidthOfScreen(screen.width);
  }, []);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Investment properties",
    },
    {
      id: 2,
      name: "Land",
    },
    {
      id: 3,
      name: "New building projects",
    },
  ]);

  const [typeOfCat, setTypeOfCat] = useState([
    {
      id: 5,
      name: "Living",
    },
    {
      id: 6,
      name: "Commercial",
    },
    {
      id: 7,
      name: "Residential and commercial",
    },
  ]);

  const [activeLink, setActiveLink] = useState(0);
  const [PCactiveLink, setPcActiveLink] = useState(0);

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
          <StepsNumber stepsLength={3} />
          <div className="registerStepContainer">
            <div>
              <RegisterTitle title="Select Profile" />
              <SubTitle
                marginTop={24}
                marginBottom={heightOfScreen < 900 ? 14 : 40}
                content="Please choose the type of property your are looking for."
              />
              <div style={{marginTop: 40}}>
                <p className="smallText">What would you like to advertise?</p>
                <div className="radioButtonGroup">
                  {categories.map((item, index) => {
                    return (
                      <BigRadioButton
                        onClick={() => setActiveLink(item.id)}
                        key={index}
                        width={45}
                        type={item.name}
                        height={116}
                        activeLink={activeLink}
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
                  {typeOfCat.map((item, index) => {
                    return (
                      <BigRadioButton
                        onClick={() => setPcActiveLink(item.id)}
                        key={index}
                        width={45}
                        height={116}
                        type={item.name}
                        PCactiveLink={PCactiveLink}
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
              disabled={activeLink && PCactiveLink ? false : true}
              onClick={changeStep}
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
