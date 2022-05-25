import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import searchProfileScreen from "../../../public/assets/images/web/searchProfileScreen.png";
import selectProfileScreen from "../../../public/assets/images/web/selectProfileScreen.png";

const HowOffviewWorks = () => {
  const [isActive, setIsActive] = useState(1);

  const slider = [
    {
      id: 1,
      title: "Become a member",
      image: selectProfileScreen,
      data: [
        {
          id: 1,
          title: "Secure",
          content:
            "Each member and real estate property is prescreened in our 3-tier verification system.",
        },
        {
          id: 2,
          title: "Professional",
          content:
            "We verify identity, track record and liquidity. Discretion and confidentiality guaranteed.",
        },
      ],
    },
    {
      id: 2,
      title: "Search Profile",
      image: searchProfileScreen,

      data: [
        {
          id: 1,
          title: "2Secure",
          content:
            "2Each member and real estate property is prescreened in our 3-tier verification system.",
        },
        {
          id: 2,
          title: "2Professional",
          content:
            "2We verify identity, track record and liquidity. Discretion and confidentiality guaranteed.",
        },
      ],
    },
    {
      id: 3,
      title: "Close Deals",
      image: selectProfileScreen,
      data: [
        {
          id: 1,
          title: "3Secure",
          content:
            "3Each member and real estate property is prescreened in our 3-tier verification system.",
        },
        {
          id: 2,
          title: "3Professional",
          content:
            "3We verify identity, track record and liquidity. Discretion and confidentiality guaranteed.",
        },
      ],
    },
  ];

  const filter = slider.find((item) => item.id == isActive);

  return (
    <HowOffviewWorksStyled filter={filter} isActive={isActive}>
      <div className="topContainer">
        <h1 className="title">How offview works.</h1>
        <p className="content">
          Streamlined, fully digitized deals. We take off-market online.
        </p>
      </div>
      <div className="bottomContainer">
        <div className="leftSide">
          {slider.map((slider, index) => {
            return (
              <div key={index} className="step">
                <h1
                  onClick={() => setIsActive(slider.id)}
                  className="title"
                  // style={slider.id == isActive && {backgroundColor: "red"}}
                  style={{
                    borderLeft: isActive == slider.id && "1px solid #175041",
                  }}
                >
                  {index + 1}. {slider.title}
                </h1>

                {slider.id == isActive &&
                  slider.data.map((content, index) => {
                    return (
                      <div key={index} className="content">
                        <div className="singleItem">
                          <h1 className="mainTitle">{content.title}</h1>
                          <p className="mainContent">{content.content}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
        <div className="rightSide">
          <div className="howOffViewWorksImage">
            <Image
              src={filter.image}
              alt="dashboard img"
              width={640}
              height={400}
            />
          </div>
        </div>
      </div>
    </HowOffviewWorksStyled>
  );
};

const HowOffviewWorksStyled = styled.div`
  padding: 128px 11.25%;
  margin-top: 300px;

  .topContainer .title {
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: var(--greenPeaBold);
  }
  .topContainer .content {
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
    margin-top: 8px;
  }
  .bottomContainer {
    margin-top: 128px;
    display: flex;
    align-items: center;
  }
  .bottomContainer .leftSide {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid #e1e1e1;
    padding-left: 40px;
    margin-bottom: 30px;
  }
  .step .content {
    margin: 24px 0;
  }
  .content .singleItem {
    margin-bottom: 24px;
    padding-left: 16px;
  }
  .testPadding {
    width: 1px;
    height: 40px;
    background-color: red;
  }
  .step .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--greenPeaBold);
    margin-top: 24px;
    cursor: pointer;
    margin-left: -41px;
    padding-left: 45px;
  }

  .singleItem .mainTitle {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-600);
  }
  .singleItem .mainContent {
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
  }
  .bottomContainer .rightSide {
    flex: 1.6;
    display: flex;
  }
  .howOffViewWorksImage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  @media (max-width: 1199.98px) {
    /* display: none; */

    padding: 40px 5%;

    .bottomContainer {
      display: flex;
      flex-direction: column;
      margin-top: 64px;
    }
    .bottomContainer .rightSide {
      flex: 1;
      height: 242px;
    }
    .rightSide img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 991.98px) {
    margin-top: 100px;
  }
`;

export default HowOffviewWorks;
