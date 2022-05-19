import styled from "styled-components";
// import imageText from "../../../public/assets/images/register/Eye.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../../web/utils/TextError";

const UserInput = ({
  labelName,
  type,
  icon,
  marginTop = 14,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <UserInputStyle style={{ marginTop }}>
      <label htmlFor={labelName} className="label">
        {labelName}
      </label>
      <Field
        id={labelName}
        type={type}
        className="textInput"
        placeholder={
          type == "password" ? "· · · · · · · · · · · · ·" : placeholder
        }
        style={
          icon && {
            backgroundImage: `url("../../../../assets/images/register/Eye.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
          }
        }
        name={name}
      />
      <ErrorMessage name={name} component={TextError} />
    </UserInputStyle>
  );
};

const UserInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .label {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--black-0);
  }
  .textInput {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #afafae;
    padding: 0 12px;
    margin: 6px 0;
    outline: none;
  }
`;

export default UserInput;
