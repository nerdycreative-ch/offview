import styled from "styled-components";
import Footer from "../components/web/utils/Footer";
import AboveFooter from "../components/web/utils/AboveFooter";
import SponsoredAndUser from "../components/web/utils/SponsoredAndUser";
import Exclusive from "../components/web/utils/Exclusive";
import HowOffviewWorks from "../components/web/utils/HowOffviewWorks";
import HomeHeader from "../components/web/utils/HomeHeader";
import HomePageGreenSection from "../components/web/utils/HomePageGreenSection";
import Head from "next/head";

const Home = () => {
  return (
    <HomeStyled>
      <Head>
        <title>Home - Offview</title>
        <meta
          name="description"
          content="Offview is a platform for real estate.The system searches for potential offers according to criteria of the buyer such as property type,location,age and price."
        />
      </Head>

      {/* HEADER */}
      <HomeHeader />

      {/* GREEN CONTAINER */}

      <HomePageGreenSection />

      {/* HOW OFFVIEW WORKS */}
      <HowOffviewWorks />

      {/* EXCLUSIVE INVESTORS AND SELLERS */}
      <Exclusive />

      {/* SPONSORED AND CUSTOMERS  */}
      {/* <SponsoredAndUser /> */}
      {/*ABOVE FOOTER PART */}
      <AboveFooter />
      <Footer />
    </HomeStyled>
  );
};

const HomeStyled = styled.div``;

export default Home;
