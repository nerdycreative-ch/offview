import Link from "next/link";
import styled from "styled-components";
import Button from "./Button";
// import img from "../../../public/assets/images/web/greyLeftArrow.png"
// bluryListOfImages.png

const Explore = () => {
  return (
    <ExploreStyled>
      <div className="topContainer">
        <div className="leftSide">
          <h1>Explore right property for you.</h1>
          <p>Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        {/* <div className="rightSide">
          <p>More property</p>
          <div className="arrowContainer">
            <img src="../../../assets/images/web/greyLeftArrow.png" alt="" />
            <div className="borderContainer"></div>
            <img src="../../../assets/images/web/GreyRightArrow.png" alt="" />
          </div>
        </div> */}
      </div>
      <div className="bottomContainer">
        <img
          src="../../../assets/images/web/bluryListOfImages.png"
          className="blurImage"
        />
        <div className="propertyInformation">
          <h1>Property locked</h1>
          <p>To view properties you need to login.</p>
          <Link href="/login">
            <Button text="Login to your account" green />
          </Link>
        </div>
      </div>
    </ExploreStyled>
  );
};

const ExploreStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;

  .topContainer {
    display: flex;
    justify-content: space-between;
    padding: 0 11.25%;
    margin-bottom: 27px;
  }
  .leftSide {
  }
  .leftSide h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: var(--greenPeaBold);
  }
  .leftSide p {
    font-size: 14px;
    line-height: 18px;
    color: #878786;
    margin-top: 8px;
    max-width: 261px;
  }
  .rightSide {
    display: flex;
    align-items: flex-end;
  }
  .arrowContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
    margin-left: 42px;
  }
  .borderContainer {
    height: 1px;
    width: 50px;
    background-color: grey;
    margin: 0 18px;
  }
  .rightSide > p {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #175041;
  }

  .bottomContainer {
    position: relative;
    width: 100%;
  }
  .blurImage {
    width: 100%;
    height: 456px;
  }
  .propertyInformation {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .propertyInformation p {
    margin: 8px 0 32px 0;
  }

  @media (max-width: 991.98px) {
    .topContainer {
      display: flex;
      flex-direction: column;
    }
    .rightSide {
      margin-top: 41px;
      margin-bottom: 25px;
      justify-content: space-between;
    }
    .propertyInformation {
      width: 100%;
    }
  }
`;

export default Explore;
