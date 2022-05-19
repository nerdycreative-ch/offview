import React from "react";
import RegisterTitle from "../utils/RegisterTitle";
import SubTitle from "../utils/SubTitle";
import PlusButton from "../utils/PlusButton";
import styled from "styled-components";

const TopContainer = ({
  title,
  fontSize,
  content,
  plusButtonTitle,
  href,
}) => {
  return (
    <TopContainerStyled>
      <div className="topInformation">
        <RegisterTitle title={title} fontSize={fontSize} />
        <SubTitle content={content} />
      </div>
      <PlusButton title={plusButtonTitle} href={href} />
    </TopContainerStyled>
  );
};

const TopContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 35px;

    .topInformation {
      margin-bottom: 16px;
    }
  }
`;

export default TopContainer;
