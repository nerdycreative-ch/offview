import styled from "styled-components";

const Alert = ({ text }) => {
  return (
    <AlertStyled>
      <img
        src="../../../../assets/images/app/dashboard/alertIcon.svg"
        alt="alertIcon"
      />
      <h1 className="textAlert">{text}</h1>
    </AlertStyled>
  );
};

const AlertStyled = styled.div`
  display: flex;
  background-color: var(--whiteColor);
  padding: 12px 32px;
  border-radius: 4px;
  border: 1px solid var(--lightGrey-2);

  .textAlert {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--lightRed);
    margin-left: 13.5px;
  }
`;

export default Alert;
