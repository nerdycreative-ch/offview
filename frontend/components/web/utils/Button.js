import Link from "next/link";
import styled, { css } from "styled-components";

const Button = ({ text, green, width, type, onClick, grey }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      green={green}
      width={width}
      type={type}
      grey={grey}
    >
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  font-family: "Inter";
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  outline: none;

  border: ${(props) => (props.grey ? "1px solid #E1E1E1 " : "none")};

  background-color: ${(props) => (props.green ? "#175041" : "#FFFFFF")};
  color: ${(props) => (props.green ? "#FFFFFF" : "#175041")};
  width: ${(props) => (props.width ? props.width : "")};
`;

export default Button;
