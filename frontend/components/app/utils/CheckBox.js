import styled from "styled-components";

const CheckBox = ({ name, content }) => {
  return (
    <CheckBoxStyled>
      <input type="checkbox" name={name} id={name} className="chkInput" />
      <label htmlFor={name}>{content}</label>
    </CheckBoxStyled>
  );
};

const CheckBoxStyled = styled.div`
  display: flex;
  align-items: center;

  .chkInput {
    border: 1px solid #afafae;
    border-radius: 4px;
    background-color: red;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #0b0b0b;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + *::before {
    content: "";
    display: inline-block;
    vertical-align: bottom;
    width: 1rem;
    height: 1rem;
    border-radius:30%;
    border: 1px solid #afafae;
    background: transparent;
    margin-right: 10px;
    margin-top: 12px;
  }
  input[type="checkbox"]:checked + *::before {
    content: "✓";
    text-align: center;
    background: transparent;
    border: 1px solid #afafae;
  }
`;

export default CheckBox;
