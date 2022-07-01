import styled, { css } from "styled-components";
import Button from "../utils/Button";
import TagItem from "./TagItem";

// background: url("../../../assets/images/web/shapeHomePageBanner.png");

const PageBanner = ({
  title,
  content,
  price,
  category,
  additionalData,
  propertyDetail,
  aboutBanner,
}) => {
  return (
    <PageBannerStyled propertyDetail={propertyDetail} aboutBanner={aboutBanner}>
      <div>
        {additionalData && (
          <div className="tagContainer">
            <TagItem tag={category} />
          </div>
        )}

        <div className="pageInfo">
          <h1 className="pageName">{title}</h1>
          <p className="text">{content}</p>
        </div>
      </div>
      {additionalData && (
        <div className="rightSide">
          <h1 className="price">{price} €</h1>
          <div>
            <Button text="Make an offer" green />
          </div>
        </div>
      )}
    </PageBannerStyled>
  );
};

const PageBannerStyled = styled.section`
  ${(props) =>
    !props.aboutBanner &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    `}

  margin-top: 160px;
  padding: 0 10%;
  width: 100%;
  /* background-color: blue; */

  .tagContainer {
    margin-left: 34px;
    position: relative;
    top: 20px;
  }

  .pageInfo {
    border-left: 1px solid #e1e1e1;
    padding-left: 40px;
    padding-bottom: 80px;
    position: relative;
    bottom: -40px;

    ${(props) =>
      props.aboutBanner &&
      css`
        bottom: 0px;
        padding-bottom: 0px;
      `}

    ${(props) =>
      props.aboutBanner &&
      css`
        background: url("../../../assets/images/web/shapeHomePageBanner.png")
          no-repeat;
        background-size: 100% 100%;
        background-size: initial;
        background-position: top center;
        height: 450px;
        width: 100%;
      `}/* background: url("../../../assets/images/web/shapeHomePageBanner.png")
      no-repeat; */
  

    /* width: 100%;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
    background-color: red; */
  }
  .pageName {
    font-weight: bold;
    font-size: 48px;
    line-height: 62px;
    color: var(--greenPeaBold);
  }
  .pageInfo .text {
    font-size: 16px;
    line-height: 24px;
    color: var(--Grey-500);
    margin-top: 16px;
  }
  .rightSide {
    justify-self: flex-end;
  }
  .rightSide .price {
    font-size: 20px;
    line-height: 30px;
    color: var(--greenPeaBold);
    margin-bottom: 16px;
    text-align: end;
  }

  @media (max-width: 575.98px) {
    margin-top: 70px;
    margin-bottom: 20px;

    ${(props) =>
      props.propertyDetail &&
      css`
        padding: 0 4% 0 4%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .rightSide {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
        }
        .tagContainer {
          top: 40px;
        }
      `}

    .pageName {
      font-size: 30px;
    }

    .pageInfo,
    .rightSide {
      padding-left: 18px;
    }
    .rightSide .price {
      text-align: left;
      display: flex;
      align-self: center;
      justify-self: center;
      margin-bottom: 0;
    }
  }
`;

export default PageBanner;
