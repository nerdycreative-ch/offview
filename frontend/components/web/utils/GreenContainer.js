import styled from "styled-components";

const GreenContainer = ({ children }) => {
  return <GreenContainerStyled>{children}</GreenContainerStyled>;
};

const GreenContainerStyled = styled.div`
  background: #124034;
  padding: 120px 18%;

  line-height: 24px;
  color: var(--whiteColor);

  @media (max-width: 769.98px) {
    padding: 50px 18%;
  }
`;

export default GreenContainer;
