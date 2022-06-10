import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  console.log(socialMedia);

  const getSocialMediaItem = async () => {
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_URL}socialmedia/dashboard/getall`
      ).then((response) => setSocialMedia(response.data.socialmedia));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSocialMediaItem();
  }, []);

  return (
    <FooterStyled>
      <div className="bothSide">
        <div className="leftSide">
          <div className="imgContainer">
            <Link href="/">
              {/* <img src="../../../assets/images/web/GreyLogo.svg" alt="logo" /> */}
              <img src="../../../assets/images/web/whiteLogo.svg" alt="logo" />
            </Link>
          </div>
          <p className="information">
            offview is a brokerage platform for real estate.
          </p>
        </div>

        {/* SITEMAP */}
        <div className="rightSide">
          <div className="footerColumn">
            <div className="linksList">
              <p className="title">Sitemap</p>

              <Link href="/about">
                <a className="link">About</a>
              </Link>
              <Link href="/faq">
                <a className="link">Faq / Price</a>
              </Link>
              <Link href="/contact">
                <a className="link">Contact</a>
              </Link>
            </div>
          </div>
          {/* LEGAL */}
          <div className="footerColumn">
            <div className="linksList">
              <p className="title">Legal</p>
              <Link href="/imprint">
                <a className="link">Imprint</a>
              </Link>
              <Link href="/privacypolicy">
                <a className="link">Privacy Policy</a>
              </Link>

              <p className="link">Terms Conditions</p>
            </div>
          </div>
          {/* PLATFORM */}
          <div className="footerColumn">
            <div className="linksList">
              <p className="title">Platform</p>
              <Link href="/login">
                <a className="link">Login</a>
              </Link>
              <Link href="/register">
                <a className="link">Register</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ALL RIGHTS RESERVED / SOCIAL MEDIA */}
      <div className="bottomPart">
        <p className="allRightsReserved">
          &copy; {new Date().getFullYear()}, offview AG. All rights reserved.
        </p>
        <div className="socialMedia">
          <div>Get in touch : </div>

          {/* <a href="https://www.facebook.com">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com">
            <i class="fa-brands fa-youtube"></i>
          </a> */}

          {socialMedia.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                <i className={item.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  background-color: #124034;
  padding: 96px 11%;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* color: #717170; */
  color: var(--lightGrey-2);
  .bothSide {
    display: flex;
    justify-content: space-between;
  }
  .leftSide {
    flex: 1;
  }
  .rightSide {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
  }

  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 12px;
  }
  .linksList {
    display: flex;
    flex-direction: column;
  }
  .link {
    margin-top: 12px;
  }

  .information {
    margin-top: 7px;
    width: 220px;
  }

  .bottomPart {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }

  .socialMedia {
    display: flex;
    align-items: center;
  }
  .socialMedia i {
    margin-left: 16px;
    font-size: 22px;
  }
  .imgContainer img {
    cursor: pointer;
  }

  @media (max-width: 1199.98px) {
    padding: 96px 3%;
  }
  @media (max-width: 991.98px) {
    .bothSide {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    .leftSide {
      width: 100%;
    }
    .rightSide {
      flex: 2;
    }
    .information {
      margin-top: 20px;
    }
  }

  @media (max-width: 767.98px) {
    padding: 40px 10%;
    .bothSide {
      display: flex;
      flex-direction: column;
    }
    .leftSide {
      display: flex;
      align-items: center;
    }

    .information {
      margin-top: 5px;
      margin-left: 8px;
      width: 320px;
    }

    .rightSide {
      width: 100%;
      display: flex;
      margin-top: 40px;
    }
    .bottomPart {
      display: flex;
      flex-direction: column;
    }

    .footerColumn {
      margin: 20px 0;
    }

    .socialMedia {
      order: -1;
    }
    .allRightsReserved {
      margin-top: 24px;
    }
  }
  @media (max-width: 420.98px) {
    padding: 20px 10%;

    .leftSide img {
      margin-top: 6px;
    }
    .information {
      margin-top: 5px;
      margin-left: 8px;
      width: 240px;
    }
    .leftSide {
      display: flex;
      justify-content: flex-start;
    }
    .rightSide {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;

export default Footer;
