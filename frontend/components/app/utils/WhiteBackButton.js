import styled from "styled-components";

const WhiteBackButton = () => {
  return <WhiteBackButtonStyled>Back</WhiteBackButtonStyled>;
};

const WhiteBackButtonStyled = styled.div`
  background: #ffffff;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 38px;
  cursor: pointer;

  font-family: "Messina Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #0b0b0b;
  text-align: center;
`;

export default WhiteBackButton;
