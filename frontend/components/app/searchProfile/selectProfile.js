import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import AppContainer from "../wrappers/AppContainer";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import BigRadioButton from "../utils/BigRadioButton";
import Button from "../utils/Button";
import RegisterTitle from "../utils/RegisterTitle";
import { useSearchProfileContext } from "../../../context/searchprofile";
import { useRouter } from "next/router";
import { zoomIn } from "react-animations";

const bounceAnimation = keyframes`${zoomIn}`;

const BouncyDiv = styled.div`
  animation: 0.7s ${bounceAnimation};
`;

const SelectProfile = ({ changeStep }) => {
  const Router = useRouter();

  const { advertismentType, propertyType, setFinalSubmit, finalSubmit } =
    useSearchProfileContext();

  const [heightOfScreen, setHeightOffScreen] = useState(0);
  const [widthOffScreen, setWidthOfScreen] = useState(0);

  useEffect(() => {
    setHeightOffScreen(screen.height);
    setWidthOfScreen(screen.width);
  }, []);

  const {
    advertisementActiveLink,
    setAdvertisementActiveLink,
    propertyActiveLink,
    setPropertyActiveLink,
  } = useSearchProfileContext();

  const onClick = () => {
    localStorage.setItem(
      "advertisementActiveLink",
      JSON.stringify(advertisementActiveLink)
    );
    localStorage.setItem(
      "propertyActiveLink",
      JSON.stringify(propertyActiveLink.toLowerCase().trim())
    );

    setFinalSubmit({
      ...finalSubmit,
      advertisementType: advertisementActiveLink,
      propertyType: propertyActiveLink,
    });

    changeStep();

    Router.push("/searchsteps?page=searchregion");
  };

  useEffect(() => {
    let momentaryAdvertisemetLink = JSON.parse(
      localStorage.getItem("advertisementActiveLink")
    );
    let momentaryActiveLink = JSON.parse(
      localStorage.getItem("propertyActiveLink")
    );
    let momentaryElement;

    if (momentaryAdvertisemetLink) {
      document.querySelectorAll(".radioButtonGroup h1").forEach((element) => {
        momentaryElement = element.innerHTML.replace(" ", "").toLowerCase();
        if (
          momentaryElement == momentaryAdvertisemetLink ||
          momentaryElement == momentaryActiveLink
        ) {
          element.click();
        }
      });
    }
  }, []);

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
          {/* <ExitButton content="Exit Search profile" /> */}
          <StepsNumber stepsLength={3} />
          <div className="registerStepContainer">
            <div style={{ marginTop: 40 }}>
              <RegisterTitle title="Select Profile" />
              <SubTitle
                marginTop={4}
                marginBottom={heightOfScreen < 900 ? 14 : 40}
                content="Please choose the type of property your are looking for."
              />
              <div>
                <p className="smallText">Are you an Investor or a Seller?</p>
                <div className="radioButtonGroup">
                  {advertismentType.map((item, index) => {
                    return (
                      <BigRadioButton
                        onClick={() => setAdvertisementActiveLink(item.id)}
                        key={index}
                        width={45}
                        type={item.name}
                        height={136}
                        activeLink={advertisementActiveLink}
                        id={item.id}
                        nameOfCat="IS"
                      />
                    );
                  })}
                </div>
              </div>

              {advertisementActiveLink != "" && (
                <BouncyDiv>
                  <div
                    style={{
                      marginTop: `${heightOfScreen < 900 ? "14px" : "55px"}`,
                    }}
                    className="radioButtonForm"
                  >
                    <p className={`smallText`}>
                      How are you going to use offview?
                    </p>
                    <div className="radioButtonGroup">
                      {propertyType.map((item, index) => {
                        return (
                          <BigRadioButton
                            onClick={() => setPropertyActiveLink(item.name)}
                            key={index}
                            width={45}
                            height={136}
                            type={item.name}
                            PCactiveLink={propertyActiveLink}
                            id={item.name}
                            nameOfCat="PC"
                            paddingVertical={20}
                            paddingHorizontal={42}
                          />
                        );
                      })}
                    </div>
                  </div>
                </BouncyDiv>
              )}
            </div>
          </div>{" "}
          <div style={{ marginTop: 30, paddingBottom: 30 }}>
            <Button
              title="Continue"
              disabled={
                advertisementActiveLink && propertyActiveLink ? false : true
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

export default SelectProfile;
