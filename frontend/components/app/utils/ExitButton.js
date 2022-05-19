import styled from "styled-components";

const ExitButton = ({ content }) => {
  return (
    <ExitButtonStyled>
      <img
        src="../../../assets/images/app/dashboard/ExitGreyButton.svg"
        alt="exit image"
      />
      <p className="exitContent">{content}</p>
    </ExitButtonStyled>
  );
};

const ExitButtonStyled = styled.div`
  display: flex;

  .exitContent {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #4f4f4e;
    margin-left: 13px;
  }
`;

export default ExitButton;
