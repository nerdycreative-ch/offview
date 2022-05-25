import styled from "styled-components";

const Button = ({ title, disabled, onClick, type }) => {
  return (
    <ButtonStyle
      style={{
        backgroundColor: disabled && "#C0EDE1",
      }}
      disabled={disabled}
      onClick={onClick}
      type={type && "submit"}
    >
      {title}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  background: #175041;
  border-radius: 4px;
  color: var(--whiteColor);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  height: 42px;
  outline: none;
  border: none;
  width: 100%;
  display: block;
  cursor: pointer;
`;

export default Button;
