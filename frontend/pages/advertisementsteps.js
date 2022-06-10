import styled from "styled-components";
import { useState, useEffect } from "react";
import SelectProfile from "../components/app/searchProfile/selectProfile";
import SearchRegion from "../components/app/searchProfile/serachRegion";
import Price from "../components/app/searchProfile/price";
import { useDashboardContext } from "../context/dashboard";
import ASelectProfile from "../components/app/advertisements/ASelectProfile";
import FirstArea from "../components/app/advertisements/FirstArea";
import AIPliving from "../components/app/advertisements/AIPliving";
import ThirdArea from "../components/app/advertisements/ThirdArea";
import { useRouter } from "next/router";

const AdvertisementSteps = () => {
  const router = useRouter();
  const { page } = router.query;

  const [formStep, setFormStep] = useState(1);

  const { stepsActiveLink, setStepsActiveLink, changeStep } =
    useDashboardContext();

  return (
    <SearchStepsStyled>
      {/* <div className={styles.leftSideRegister}>
        <LeftSideRegister />
      </div> */}
      <div className="rightSideRegister">
        {page == "selectprofile" && (
          <ASelectProfile
            changeStep={() =>
              setStepsActiveLink((prev) => page == "selectprofile" && prev + 1)
            }
          />
        )}

        {page == "firstarea" && (
          <FirstArea
            changeStep={() =>
              setStepsActiveLink((prev) => page == "firstarea" && prev + 1)
            }
          />
        )}

        {page == "aipliving" && (
          <AIPliving
            changeStep={() =>
              setStepsActiveLink((prev) => page == "aipliving" && prev + 1)
            }
          />
        )}

        {page == "thirdarea" && (
          <ThirdArea
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )}

        {/* {stepsActiveLink == 1 && (
          <ASelectProfile
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )} */}
        {/* 
        {stepsActiveLink == 2 && (
          <FirstArea
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )} */}
        {/* {stepsActiveLink == 3 && (
          <ThirdArea
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )} */}
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

export default AdvertisementSteps;
