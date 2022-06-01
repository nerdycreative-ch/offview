import styled, { css } from "styled-components";
import test from "../../../public/assets/images/web/headerShape.svg";
import Navbar from "./Navbar";
import PageBanner from "./PageBanner";

const Header = ({
  title,
  content,
  price,
  category,
  additionalData,
  propertyDetail,
}) => {
  return (
    <HeaderStyled
      additionalData={additionalData}
      propertyDetail={propertyDetail}
    >
      <Navbar propertyDetail />
      <div className="pageBannerContainer">
        <PageBanner
          title={title}
          content={content}
          additionalData={additionalData}
          price={price}
          category={category}
          propertyDetail={propertyDetail}
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

  .pageBannerContainer {
    padding: 40px 5% 0 5%;
    

    ${(props) =>
      props.propertyDetail &&
      css`
        padding: 0 4% 0 4%;
      `}
  }
`;

export default Header;
