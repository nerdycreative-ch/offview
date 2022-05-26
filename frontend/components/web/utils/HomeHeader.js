import styled from "styled-components";
import HomeBanner from "./HomeBanner";
import Navbar from "./Navbar";
// import sad from "../../../assets/images/web/homebannerHeader.png";

const HomeHeader = () => {
  return (
    <HomeHeaderStyled>
      <Navbar />
      <HomeBanner />
    </HomeHeaderStyled>
  );
};

const HomeHeaderStyled = styled.div`
  /* padding: 40px 11.25%; */
  @media (max-width: 1199.98px) {
    /* display: none; */
  }
`;

export default HomeHeader;
