import styled from "styled-components";
import Image from "next/image";
import DashboardImage from "../../../public/assets/images/web/DashboardImageBanner.png";
import SelectProfileImageBanner1 from "../../../public/assets/images/web/SelectProfileImageBanner1.png";
import SelectProfileImageBanner2 from "../../../public/assets/images/web/SelectProfileImageBanner2.png";
import bottomDashboardImage from "../../../public/assets/images/web/SelectProfileImageBanner2.png";

const HomePageGreenSection = () => {
  return (
    <HomePageGreenSectionStyled>
      <div className="topImagesContainer">
        {/* <img
          src="../../../assets/images/web/DashboardImageBanner.png"
          alt=""
          className="dashboardImage"
        /> */}
        <div className="dashboardImage">
          <Image src={DashboardImage} alt="dashboard image" />
        </div>
        <div className="littleImageBanner">
          <Image src={SelectProfileImageBanner1} alt="select profile image" />
        </div>
        <div className="littleImageBanner">
          <Image src={SelectProfileImageBanner2} alt="select profile image" />
        </div>
        {/* <img
          src="../../../assets/images/web/SelectProfileImageBanner1.png"
          alt=""
          className="littleImageBanner"
        />
        <img
          src="../../../assets/images/web/SelectProfileImageBanner2.png"
          alt=""
          className="littleImageBanner"
        /> */}
      </div>

      <div className="bannerDataSection">
        <h1>Whether you’re a investor or seller, we help you move forward.</h1>
        <div className="verticalLine"></div>
      </div>

      <div className="bottomImagesContainer">
        <div className="leftSide bothSide">
          <h1 className="type">Investors</h1>
          <h1 className="title">
            Access real estate properties with ease and get the best match.
          </h1>
          <p className="content">
            Whether your are a new or experienced buyer, offview opens up new
            real estate possibilities. Define your search, expand your network
            and get worthwhile matches. Our experienced team supports you
            throughout the process, all online.
          </p>
          <div className="typeWithArrow">
            <h1 className="typeOfActor">Investor</h1>
            <img src="../../../assets/images/web/greenRightArrow.svg" alt="" />
          </div>

          {/* <img
            src="../../../assets/images/web/bottomDashboardImage.png"
            alt=""
            className="bottomImageBanner"
          /> */}
          <div className="bottomImageBanner">
            <Image src={DashboardImage} alt="dashboard image" />
          </div>
        </div>
        <div className="rightSide bothSide">
          <h1 className="type">Sellers</h1>
          <h1 className="title">
            Connect with verified investors and close deals.
          </h1>
          <p className="content">
            offview helps you reach beyond your network. List your property and
            close deals with off-market benefits - discreet, secure and at
            market value. You only pay a one-time fee €239,- per property with
            no shared commission.
          </p>
          <div className="typeWithArrow">
            <h1 className="typeOfActor">Seller</h1>
            <img src="../../../assets/images/web/greenRightArrow.svg" alt="" />
          </div>
          <div className="bottomImageBanner">
            <Image src={DashboardImage} alt="dashboard image" />
          </div>
          {/* <img
            src="../../../assets/images/web/bottomDashboardImage.png"
            alt=""
            className="bottomImageBanner"
          />{" "} */}
        </div>
      </div>
    </HomePageGreenSectionStyled>
  );
};

const HomePageGreenSectionStyled = styled.div`
  background-color: #124034;
  position: relative;
  width: 100%;

  .topImagesContainer {
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 170px;
    padding: 0 11.25%;
  }

  .bannerDataSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bannerDataSection h1 {
    color: var(--whiteColor);
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    max-width: 480px;
  }
  .bottomImagesContainer {
    display: flex;
    padding: 0 11.25%;
  }
  .bothSide {
    background: var(--whiteColor);
    padding: 64px 48px;
    padding-bottom: 0px;
    border-radius: 12px;
    position: relative;
    /* top: 300px; */
    bottom: -300px;
    margin-top: -270px;
  }
  .leftSide {
    flex: 1;
    margin-right: 24px;
  }
  .rightSide {
    flex: 1;
  }
  .bothSide .type {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--greenToBlack);
  }
  .bothSide .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #0e3027;
    margin-top: 24px;
    margin-bottom: 12px;
  }
  .bothSide .content {
    font-size: 14px;
    line-height: 18px;
    color: #717170;
    margin-bottom: 44px;
  }
  .bothSide .typeWithArrow {
    display: flex;
    align-items: center;
  }
  .typeWithArrow .typeOfActor {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--greenToBlack);
  }
  .typeWithArrow img {
    margin-left: 12px;
  }
  .bottomImageBanner {
    margin-top: 41px;
  }

  @media (max-width: 1439px) {
    .littleImageBanner {
      display: none;
    }

    /* .bottomImagesContainer {
      display: flex;
      flex-direction: column;
    } */

    .leftSide {
      flex: 1;
    }
    .rightSide {
      flex: 1;
    }

    .bottomImageBanner {
      width: 100%;
    }
  }
  @media (max-width: 991.98px) {
    .dashboardImage {
      width: 100%;
    }
    .topImagesContainer,
    .bottomImagesContainer {
      padding: 0 5%;
    }
    .bottomImagesContainer {
      display: flex;
      flex-direction: column;
    }
    .bothSide {
      width: 100%;
      bottom: 0px;
      margin-top: 0px;
    }
    .leftSide {
      margin-top: 20px;
    }
    .rightSide {
      top: 100px;
    }
    .bannerDataSection {
      margin-top: -70px;
    }
    .bannerDataSection h1 {
      font-size: 22px;
    }
    .bothSide {
      padding: 30px 22px;
      padding-bottom: 0px;
    }
  }
  @media (max-width: 991.98px) {
    margin-top: 50px;
  }

  @media (max-width: 767.98px) {
    .bannerDataSection h1 {
      font-size: 16px;
      padding: 0 40px;
    }
  }
  @media (max-width: 600px) {
    .dashboardImage {
      margin-top: 40px;
    }
  }
  @media (max-width: 450px) {
    .dashboardImage {
      margin-top: 80px;
    }
  }
`;

export default HomePageGreenSection;
