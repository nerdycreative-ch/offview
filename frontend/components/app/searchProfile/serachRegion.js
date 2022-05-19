import styled from "styled-components";
import Button from "../utils/Button";
import RegisterTitle from "../utils/RegisterTitle";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import AppContainer from "../wrappers/AppContainer";
import Link from "next/link";
import WhiteBackButton from "../utils/WhiteBackButton";
import ExitButton from "../utils/ExitButton";
import MapView from "../utils/MapView";

const SearchRegion = ({ changeStep }) => {
  return (
    <AppContainer>
      <SearchRegionStyled>
        <div>
          <ExitButton content="Exit Search profile" />
          <StepsNumber stepsLength={3} />
          <RegisterTitle title="Search region" fontSize={20} />
          <SubTitle
            marginTop={4}
            // marginBottom={heig < 900 ? 14 : 40}
            content="Please create one or more search areas for your investment profile."
          />

          <div className="searchInputZone">
            <p className="region">Region</p>

            <input
              type="text"
              // value={value}
              // onChange={onChange}
              className="regionInput"
              placeholder="Location of your search region ..."
            />
          </div>

          <MapView />

          <div className="buttonContainer">
            <WhiteBackButton />
            <div style={{ width: 110, marginLeft: 16 }}>
              <Link href="/searchsteps" passHref>
                <Button title="Continue" onClick={changeStep} />
              </Link>
            </div>
          </div>
        </div>
      </SearchRegionStyled>
    </AppContainer>
  );
};

const SearchRegionStyled = styled.div`
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

export default SearchRegion;
