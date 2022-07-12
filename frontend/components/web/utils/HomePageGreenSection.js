import styled from "styled-components";
import Image from "next/image";
import DashboardImage from "../../../public/assets/images/web/DashboardImageBanner.png";
import SelectProfileImageBanner1 from "../../../public/assets/images/web/SelectProfileImageBanner1.png";
import SelectProfileImageBanner2 from "../../../public/assets/images/web/SelectProfileImageBanner2.png";
import bottomDashboardImage from "../../../public/assets/images/web/SelectProfileImageBanner2.png";
import selectProfileScreen from "../../../public/assets/images/web/selectProfileScreen.png";
import bigDashboardImage from "../../../public/assets/images/web/dashboardMobile.png";

import { useState } from "react";

const HomePageGreenSection = () => {
  // const [listOfImages, setListOfImages] = useState([
  //   {
  //     id: 1,
  //     img: SelectProfileImageBanner1,
  //   },
  // ]);

  // const [activeImage, setActiveImage] = useState("dashboard");

  const [activeImage, setActiveImage] = useState("first");

  return (
    <HomePageGreenSectionStyled>
      <div className="topImagesContainer">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className={`${
              activeImage == "first" ? "active growImage" : "notactive"
            } dashboardImage`}
            onClick={() => setActiveImage("first")}
          >
            <Image
              className="likiImg"
              src={DashboardImage}
              alt="dashboard image"
            />
          </div>

          <div
            className={`${
              activeImage == "second" ? "active growImage" : "notactive "
            } dashboardImage`}
            onClick={() => setActiveImage("second")}
          >
            <Image
              className="likiImg"
              src={selectProfileScreen}
              alt="dashboard image"
            />
          </div>

          <div
            className={`${
              activeImage == "third" ? "active growImage" : "notactive"
            } dashboardImage`}
            onClick={() => setActiveImage("third")}
          >
            <Image
              className="likiImg"
              src={DashboardImage}
              alt="dashboard image"
            />
          </div>
        </div>

        {/* {activeImage == "dashboard" ? (
          <div className="dashboardImage">
            <Image src={DashboardImage} alt="dashboard image" />
          </div>
        ) : (
          <div className="dashboardImage">
            <Image src={selectProfileScreen} alt="dashboard image" />
          </div>
        )} */}
        {/* 
        <div className="littleImageBanner">
          <Image
            src={SelectProfileImageBanner1}
            alt="select profile image"
            onClick={() => setActiveImage("selectprofile")}
            className="littleImage"
          />
        </div>
        <div className="littleImageBanner">
          <Image
            src={bigDashboardImage}
            alt="select profile image"
            onClick={() => setActiveImage("dashboard")}
            width={166}
            height={461}
            className="littleImage"
          />
        </div> */}
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
    position: relative;
    bottom: 170px;
    padding: 0 11.25%;
    height: 100%;
    width: 100%;
    /* background-color: red; */
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
  .littleImageBanner {
    width: 166px;
    height: 100%;
  }
  .littleImage {
    cursor: pointer;
    width: 166px;
    height: 100%;
    border-radius: 10px;
  }

  .dashboardImage {
    /* width: 240px; */
    width: 720px;
  }

  .active {
    width: px;
  }
  .notactive {
    clip-path: polygon(50% 0, 90% 0, 90% 100%, 50% 100%);
    transition: all 1.3s ease;
    border-radius: 20px;
    cursor: pointer;
  }
  .growImage {
    transition: all 1.3s ease;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    border-radius: 20px;
  }
  .likiImg {
    display: block;
    width: 100%;
    height: auto;
  }

  .dashboardImage > span {
    height: 100% !important;
    display: flex !important;
    align-items: stretch !important;
  }

  @media (max-width: 1439px) {
    .dashboardImage {
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
