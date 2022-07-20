import styled from "styled-components";

const PersonalDataItem = ({ type, result,textTransformNone }) => {
  return (
    <PersonalDataItemStyled textTransformNone={textTransformNone}>
      <p className="type">{type}</p>
      <p className="result">{result}</p>
    </PersonalDataItemStyled>
  );
};

const PersonalDataItemStyled = styled.div`
  margin-top: 24px;

  .type {
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: var(--Grey-500);
  }
  .result {
    font-size: 14px;
    line-height: 18px;
    color: var(--black-0);
    margin-top: 8px;
    text-transform: ${props => props.textTransformNone == true ? "none" : "capitalize"};
  }

  @media (max-width: 767.98px) {
    .type {
      font-size: 12px;
    }
    .result {
      font-size: 12px;
    }
  }
`;

export default PersonalDataItem;
