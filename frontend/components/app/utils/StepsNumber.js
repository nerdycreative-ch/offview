import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDashboardContext } from "../../../context/dashboard";

const StepsNumber = ({ stepsLength }) => {
  const { stepsActiveLink } = useDashboardContext();

  const [temp, setTemp] = useState(stepsActiveLink);

  const [numberOfSteps, setNumberOfSteps] = useState([
    ...Array(stepsLength)
      .fill(0)
      .map((_, i) => i + 1),
  ]);

  return (
    <StepsNumberStyled>
      {numberOfSteps.map((item, index) => {
        return (
          <>
            {index == 0 ? (
              ""
            ) : (
              <div className="greenLineContainer">
                <div
                  style={{
                    backgroundColor: index < temp ? "#175041" : "#CDCDCD",
                  }}
                  className="greenLine"
                ></div>
              </div>
            )}
            {
              <div
                key={index}
                style={{
                  backgroundColor: index < temp ? "#175041" : "#CDCDCD",
                }}
                className="numberContainer"
              >
                {index + 1 < stepsActiveLink ? (
                  <img
                    src="../../../../assets/images/app/dashboard/nikeIconForSteps.svg"
                    alt="icon"
                  />
                ) : (
                  <p>{item}</p>
                )}
              </div>
            }

            {index == stepsLength - 1 ? (
              ""
            ) : (
              <div className="greenLineContainer">
                <div
                  style={{
                    backgroundColor: index < temp ? "#175041" : "#CDCDCD",
                  }}
                  className="greenLine"
                ></div>
              </div>
            )}
          </>
        );
      })}
    </StepsNumberStyled>
  );
};

const StepsNumberStyled = styled.div`
  display: flex;
  margin: 22px 0;
  .numberContainer {
    background-color: var(--greenToBlack);
    border-radius: 24px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--whiteColor);
  }
  .greenLineContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .greenLine {
    height: 2px;
    width: 20px;
    background-color: red;
  }
`;

export default StepsNumber;
