import styled from "styled-components";

const GreenContainer = ({ children, color }) => {
  return <GreenContainerStyled color={color}>{children}</GreenContainerStyled>;
};

const GreenContainerStyled = styled.div`
  /* background: #124034; */
  background: ${(props) => (props.color == "grey" ? "#f0f0f0" : "#124034")};

  padding: 120px 18%;

  line-height: 24px;
  /* color: var(--whiteColor); */
  color: ${(props) => (props.color == "grey" ? "#717170" : "#ffffff")};

  @media (max-width: 769.98px) {
    padding: 50px 18%;
  }
`;

export default GreenContainer;
