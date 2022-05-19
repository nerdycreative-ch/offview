import { useState } from "react";
import styled from "styled-components";
// import plusButton from "../../../assets/images/web/GreyPlusButton.svg";

const Question = ({ id, title, content }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <QuestionStyled onClick={() => setShowInfo(!showInfo)}>
      <div className="buttonContainer" id="buttonContainer">
        {showInfo ? (
          <img
            src="../../../assets/images/web/GreyMinusButton.svg"
            alt="minus button"
          />
        ) : (
          <img
            src="../../../assets/images/web/GreyPlusButton.svg"
            alt="plus button"
            className="plusBtn"
          />
        )}
      </div>
      <div className="questionContent">
        <p className="title">{title}</p>
        {showInfo && <p className="content">{content}</p>}
      </div>
    </QuestionStyled>
  );
};

const QuestionStyled = styled.div`
  display: flex;
  margin-top: 48px;
  cursor: pointer;

  .plusBtn {
    margin-top: 7px;
  }

  .buttonContainer {
    height: 20px;
  }
  .questionContent {
    margin-left: 45px;
    border-bottom: 1px solid #e1e1e1;
    width: 100%;
    padding-bottom: 48px;
  }
  .title {
    color: var(--greenPeaBold);
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }

  .content {
    color: #717170;
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
    transition: max-height 0.2s ease-out;
  }

  @media (max-width: 767.98px) {
    margin-top: 24px;

    .title {
      font-size: 14px;
    }
    .content {
      font-size: 12px;
    }
    .questionContent {
      padding-bottom: 16px;
    }
  }
`;

export default Question;
