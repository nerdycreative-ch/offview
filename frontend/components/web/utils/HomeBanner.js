import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <div className="banner">
        <div className="leftSideContent">
          <h1 className="title">
            A point of view, Invest & Sell your property.
          </h1>
          <p className="content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="bottomPart">
            <Link href="/register">
              <div>
                <Button text="Become a member" green />
              </div>
            </Link>
            <div className="rightSideBottomPart">
              <p className="needHelp">Need help?</p>
              <Link href="/contact">
                <p className="contactUs">Contact us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="imageContainer">
          <img src="../../../assets/images/web/homebannerHeader.png" alt="" />
      </div> */}
    </HomeBannerStyled>
  );
};

const HomeBannerStyled = styled.div`
  display: flex;
  padding-left: 210px;
  position: relative;

  .banner {
    padding: 200px 0;
    width: 100%;
    background: url("../../../assets/images/web/shapeHomePageBanner.png");
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: contain;

    padding-bottom: 400px;
  }
  .leftSideContent {
    border-left: 1px solid #e1e1e1;
    padding-left: 40px;
  }

  .banner .title {
    font-weight: 900;
    font-size: 48px;
    line-height: 62px;
    color: var(--greenPeaBold);
  }
  .banner .content {
    line-height: 24px;
    color: var(--Grey-500);
    margin-top: 24px;
  }
  .leftSideContent {
    width: 43%;
  }
  .bottomPart {
    margin-top: 48px;
    display: flex;
  }
  .rightSideBottomPart {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .needHelp {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
  }
  .contactUs {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #175041;
    cursor: pointer;
  }
  @media (max-width: 991.98px) {
    padding: 0 20px;

    .leftSideContent {
      width: 100%;
      max-width: 420px;
    }
    .leftSideContent .title {
      font-size: 22px;
      line-height: 34px;
    }
    .banner {
      background-position: left;
      padding: 40px 0;
      padding-bottom: 200px;
    }
  }
  .leftSideContent {
    border-left: 1px solid #e1e1e1;
    padding-left: 20px;
  }

`;

export default HomeBanner;
