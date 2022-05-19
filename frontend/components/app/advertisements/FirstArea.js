import styled from "styled-components";
import Button from "../utils/Button";
import RegisterTitle from "../utils/RegisterTitle";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import AppContainer from "../wrappers/AppContainer";
import Link from "next/link";
import WhiteBackButton from "../utils/WhiteBackButton";
import ExitButton from "../utils/ExitButton";
import UserInput from "../utils/UserInput";
import MapView from "../utils/MapView";

const FirstArea = ({ changeStep }) => {
  return (
    <AppContainer>
      <FirstAreaStyled>
        <div>
          <ExitButton content="Exit Search profile" />
          <StepsNumber stepsLength={3} />
          <RegisterTitle title="First area" fontSize={20} />
          <SubTitle
            marginTop={4}
            // marginBottom={heig < 900 ? 14 : 40}
            content="We use this data to calculate matches with purchase profiles of potential buyers."
          />

          <UserInput labelName="Title" placeholder="ex. House" />

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "48%" }}>
              <UserInput labelName="Street" type="text" placeholder="Address" />
            </div>
            <div style={{ width: "48%" }}>
              <UserInput labelName="No *" type="text" placeholder="00" />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "25%" }}>
              <UserInput labelName="Postcode *" type="text" placeholder="012345" />
            </div>
            <div style={{ width: "71%" }}>
              <UserInput labelName="Town *" type="text" placeholder="Select town" />
            </div>
          </div>

          <div style={{marginTop: 40}}>
            <MapView />
          </div>

          {/* BUTTON CONTAINER */}
          <div className="buttonContainer">
            <WhiteBackButton />
            <div style={{ width: 110, marginLeft: 16 }}>
              <Link href="/searchsteps" passHref>
                <Button title="Continue" onClick={changeStep} />
              </Link>
            </div>
          </div>
        </div>
      </FirstAreaStyled>
    </AppContainer>
  );
};

const FirstAreaStyled = styled.div`
  padding: 0 15%;

  .searchInputZone {
    margin: 40px 0;
  }

  .region {
    font-family: "Messina Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #0b0b0b;
    margin-left: 10px;
    margin-bottom: 6px;
  }
  .regionInput {
    background-image: url("../../../assets/images/app/dashboard/blackSearchIcon.svg");
    background-repeat: no-repeat;
    background-position: left 14.25px center;
    width: 100%;
    padding: 14.25px 18.25px;
    padding-left: 38px;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
  }
  .mapContainer {
    background: #f5f5f5;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 416px;
    margin-bottom: 40px;
  }
  .mapView {
    font-family: "Messina Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #878786;
  }
  .buttonContainer {
    display: flex;
    padding-bottom: 32px;
  }
  @media (max-width: 991.98px) {
    padding: 0 10%;
  }
  @media (max-width: 767.98px) {
    padding: 0 5%;
  }
`;

export default FirstArea;
