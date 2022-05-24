import styled from "styled-components";
import Button from "../utils/Button";
import TagItem from "./TagItem";

const PageBanner = ({ title, content, price, category, additionalData }) => {
  return (
    <PageBannerStyled>
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
          <Button text="Make an offer" green />
        </div>
      )}
    </PageBannerStyled>
  );
};

const PageBannerStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;

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
`;

export default PageBanner;
