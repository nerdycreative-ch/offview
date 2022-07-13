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
  padding: 0 210px;
  position: relative;

  margin-top: 105px;

  .banner {
    padding: 100px 0;
    margin-top: 50px;
    width: 100%;
    background: url("../../../assets/images/web/shapeHomePageBanner.png");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    padding-bottom: 400px;
    animation: animatedBackground 2.5s linear alternate;
  }

  @keyframes animatedBackground {
    from {
      /* background-position: 0px -900px; */
      background-position: center bottom -500px;
    }
    to {
      padding: 100px 0;
      margin-top: 50px;
      width: 100%;
      background: url("../../../assets/images/web/shapeHomePageBanner.png");
      background-repeat: no-repeat;
      background-position: center top;
      background-size: contain;
      padding-bottom: 400px;
    }
  }

  .leftSideContent {
    border-left: 1px solid #e1e1e1;
    padding-left: 40px;
  }

  .banner .title {
    /* font-weight: 900; */
    /* font-weight: light; */
    font-weight: 900;
    font-size: 48px;
    line-height: 62px;
  }
  .banner .content {
    line-height: 24px;
    color: var(--Grey-500);
    margin-top: 24px;
    font-weight: var(--bookFont);
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
    font-weight: var(--regularFont);
    font-size: 14px;
    line-height: 18px;
    color: #175041;
    cursor: pointer;
  }

  /* @media (max-width: 2000.98px) {
    padding-left: 140px;
    .banner {
      padding: 100px 0;
      margin-top: 50px;
      width: 90%;
      background: url("../../../assets/images/web/shapeHomePageBanner.png");
      background-repeat: no-repeat;
      background-position:  center;

      padding-bottom: 400px;
    }
  } */

  @media (max-width: 1399.98px) {
    padding-left: 140px;
    .banner {
      padding: 100px 0;
      margin-top: 50px;
      width: 100%;
      background: url("../../../assets/images/web/shapeHomePageBanner.png");
      background-repeat: no-repeat;
      background-position: center top;
      background-size: contain;

      padding-bottom: 240px;
    }
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
      background-position: top center;
      padding: 40px 0;
      padding-bottom: 240px;
      width: 100%;
      background-size: contain;
    }
  }
  .leftSideContent {
    border-left: 1px solid #e1e1e1;
    padding-left: 20px;
  }
  @media (max-width: 575.98px) {
    .banner {
      background-position: top left;
      padding: 40px 0;
      padding-bottom: 100px;
      width: 100%;
      background-size: contain;
    }
  }
`;

export default HomeBanner;
