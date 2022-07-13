import styled from "styled-components";
// import imageText from "../../../public/assets/images/register/Eye.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../../web/utils/TextError";
import { useEffect, useState } from "react";

const UserInput = ({
  labelName,
  type,
  icon,
  marginTop = 14,
  placeholder,
  name,
  showPasswordProp,
}) => {
  const [showPassword, setShowPassword] = useState(false);



  return (
    <UserInputStyle style={{ marginTop }} >
      <label htmlFor={labelName} className="label">
        {labelName}
      </label>
      <div className="textWrapper">
        <Field
          id={labelName}
         
          type={(showPasswordProp && !showPassword) ? "password" : "text"}
          
          // type={type == "password" ? "password" : type}
          className="textInput"
          placeholder={
            type == "password" ? "· · · · · · · · · · · · ·" : placeholder
          }
          name={name}
        />
        {type == "password" && (
          <img
            src="../../../../assets/images/register/Eye.svg"
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
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
  .textWrapper {
    display: flex;
    position: relative;
  }
  .eye {
    position: absolute;
    top: 22px;
    right: 10px;
    cursor: pointer;
  }
`;

export default UserInput;
