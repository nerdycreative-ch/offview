import styled from "styled-components";

const BackButton = () => {
  return (
    <BackButtonStyle>
      <img src="/assets/images/register/Union.svg" alt="backButton" />
      <h1 className="backText">Back</h1>
    </BackButtonStyle>
  );
};

const BackButtonStyle = styled.div`
  display: flex;
  align-items: center;

  .backText {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
    margin-left: 10.17px;
  }
`;

export default BackButton;
