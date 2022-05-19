import styled from "styled-components";
import { useState, useEffect } from "react";
import SelectProfile from "../components/app/searchProfile/selectProfile";
import SearchRegion from "../components/app/searchProfile/serachRegion";
import Price from "../components/app/searchProfile/price";
import { useDashboardContext } from "../context/dashboard";

const SearchSteps = () => {
  const [formStep, setFormStep] = useState(1);

  const { stepsActiveLink, setStepsActiveLink, changeStep } =
    useDashboardContext();

  return (
    <SearchStepsStyled>
      {/* <div className={styles.leftSideRegister}>
        <LeftSideRegister />
      </div> */}
      <div className="rightSideRegister">
        {stepsActiveLink == 1 && (
          <SelectProfile
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )}
        {stepsActiveLink == 2 && (
          <SearchRegion
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )}
        {stepsActiveLink == 3 && (
          <Price changeStep={() => setStepsActiveLink((prev) => prev + 1)} />
        )}
      </div>
    </SearchStepsStyled>
  );
};

const SearchStepsStyled = styled.div`
  display: flex;
  justify-content: center;

  .leftSideRegister {
    background: #175041;
    width: 38.2%;
  }
  .rightSideRegister {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btnContainer {
    margin-top: 40px;
    width: 100%;
  }
  .registerContainer {
    margin-bottom: 60px;
  }

  @media (max-width: 991.98px) {
    .leftSideRegister {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export default SearchSteps;
