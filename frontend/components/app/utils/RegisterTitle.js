import styled from "styled-components";

const RegisterTitle = ({ title, fontSize }) => {
  return <RegisterTitleStyle fontSize={fontSize}>{title}</RegisterTitleStyle>;
};

const RegisterTitleStyle = styled.h1`
  font-weight: 700;
  font-size: ${props => props.fontSize || 28}px;
  line-height: 42px;
  color: var(--black-0);
`;

export default RegisterTitle;
