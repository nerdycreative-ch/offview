import styled, { css } from "styled-components";
import test from "../../../public/assets/images/web/headerShape.svg";
import Navbar from "./Navbar";
import PageBanner from "./PageBanner";

const Header = ({ title, content, price, category, additionalData }) => {
  return (
    <HeaderStyled additionalData={additionalData}>
      <Navbar />
      <div className="pageBannerContainer">
        <PageBanner
          title={title}
          content={content}
          additionalData={additionalData}
          price={price}
          category={category}
        />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  ${(props) =>
    !props.additionalData &&
    css`
      background: url("../../../assets/images/web/headerShape.svg");
    `}

  width: 100%;

  .pageBannerContainer {
    padding: 40px 11.25% 0 11.25%;
  }
  @media (max-width: 1199.98px) {
    display: none;
  }
`;

export default Header;
