import styled from "styled-components";

const SelectInput = ({ selectList, inputName }) => {
  return (
    <SelectInputStyled>
      <label className="selectListName">{inputName}</label>
      <select className="selectInput">
        {selectList.map((selectItem, index) => {
          return (
            <option key={index} value={selectItem.propertyName}>
              {selectItem.propertyName}
            </option>
          );
        })}
      </select>
    </SelectInputStyled>
  );
};

const SelectInputStyled = styled.div`
  display: flex;
  flex-direction: column;

  .selectListName {
    font-size: 14px;
    line-height: 18px;
    color: var(--whiteColor);
    margin-bottom: 6px;
  }
  .selectInput {
    background: var(--whiteColor);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 16px 12px;
    padding-right: 42px;
    outline: none;
  }

   @media (max-width: 991.98px) {
    width: 100%;

    .selectInput {
      padding-right: 0;
      width: 100%;
    }
  }
`;

export default SelectInput;
