import styled from "styled-components";

const TextError = (props) => {
  return <TextErrorStyled>{props.children}</TextErrorStyled>;
};

const TextErrorStyled = styled.div`
  color: #eb5353;
  margin-top: 3px;
`;

export default TextError;
