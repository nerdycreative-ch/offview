import styled from "styled-components";

const SubTitle = ({ content, fontSize = 14, marginTop, marginBottom }) => {
  return (
    <UserInputStyle
      fontSize={fontSize}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {content}
    </UserInputStyle>
  );
};

const UserInputStyle = styled.label`
  font-weight: 400;
  line-height: 18px;
  color: var(--Grey-500);
  font-size: ${(props) => props.fontSize || 28}px;
`;

export default SubTitle;
