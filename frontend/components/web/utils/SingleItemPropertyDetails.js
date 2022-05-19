import styled from "styled-components";
import img from "../../../public/assets/images/web/greyBackground.png";

const SingleItemPropertyDetails = () => {
  return (
    <SingleItemPropertyDetailsStyled>
      <div className="itemLeftSide">
        <img src="../../../assets/images/web/greyBackground.png" alt="" />
      </div>
      <div className="itemRightSide">
        <p className="title">Title</p>
        <p className="description">Description</p>
      </div>
    </SingleItemPropertyDetailsStyled>
  );
};

const SingleItemPropertyDetailsStyled = styled.div`
  display: flex;
  margin: 24px 0;

  .itemRightSide {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .itemRightSide .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--lightGreen);
  }
  .itemRightSide .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--lightGreen);
  }
`;

export default SingleItemPropertyDetails;
