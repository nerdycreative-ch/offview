import styled from "styled-components";
import Footer from "../components/web/utils/Footer";
import AboveFooter from "../components/web/utils/AboveFooter";
import SponsoredAndUser from "../components/web/utils/SponsoredAndUser";
import Exclusive from "../components/web/utils/Exclusive";
import HowOffviewWorks from "../components/web/utils/HowOffviewWorks";
import HomeHeader from "../components/web/utils/HomeHeader";

const Home = () => {
  return (
    <HomeStyled>
      {/* HEADER */}
      <HomeHeader />

      {/* HOW OFFVIEW WORKS */}
      <HowOffviewWorks />

      {/* EXCLUSIVE INVESTORS AND SELLERS */}
      <Exclusive />

      {/* SPONSORED AND CUSTOMERS  */}
      <SponsoredAndUser />
      {/*ABOVE FOOTER PART */}
      <AboveFooter />
      <Footer />
    </HomeStyled>
  );
};

const HomeStyled = styled.div``;

export default Home;
