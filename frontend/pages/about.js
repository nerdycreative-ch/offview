import styled from "styled-components";
import Footer from "../components/web/utils/Footer";
import GreenContainer from "../components/web/utils/GreenContainer";
import Header from "../components/web/utils/Header";
import Head from "next/head";

const About = () => {
  return (
    <AboutStyled>
      <Head>
        <title>About - Offview</title>
        <meta
          name="description"
          content="Offview is a brokerage platform for real estate.The platform offer is aimed at prospective buyers and sellers of real estate."
        />
      </Head>

      {/* GREEN CONTAINER BANNER */}
      <Header
        title="About"
        content="Offview is a brokerage platform for real estate."
      />
      <GreenContainer>
        <div>
          <h1 className="aboutSubTitle">Our vision</h1>
          <p className="aboutContent">
            Offview is a brokerage platform for real estate. The sales do not
            take place publicly, but in a virtual back room, so to speak. Only
            prospective buyers with a market history and proven capital can view
            properties according to their classification. The system searches
            for potential offers according to criteria of the buyer such as
            property type, location, age and price. If the search, offer and
            interested party qualifications match, the seller and interested
            party are brought together.
          </p>
        </div>

        <div className="aboutContentContainer">
          <h1 className="aboutSubTitle">Who uses offview?</h1>
          <p className="aboutContent">
            The platform offer is aimed at prospective buyers and sellers of
            real estate. Due to the non-public design, the users mainly include
            property owners, investors and real estate agents.
          </p>
        </div>
      </GreenContainer>

      {/* <div className="aboutTeam">
        <div className="aboutTitleContainer">
          <h1 className="aboutTitle">Management Team</h1>
          <div className="verticalLine"></div>
        </div>

        <div className="workersContainer">
          <div className="singleWorker">
            <img src="../assets/images/web/person1.png" alt="person1" />
            <div className="personalInfoWorker">
              <p className="name">Albert Flores</p>
              <p className="position">CEO Co-founder</p>
            </div>
          </div>

          <div className="singleWorker">
            <img src="../assets/images/web/person2.png" alt="person1" />
            <div className="personalInfoWorker">
              <p className="name">Dianne Russell</p>
              <p className="position">CEO Co-founder</p>
            </div>
          </div>

          <div className="singleWorker">
            <img src="../assets/images/web/person3.png" alt="person1" />
            <div className="personalInfoWorker">
              <p className="name">Robert Fox</p>
              <p className="position">CFO</p>
            </div>
          </div>

          <div className="singleWorker">
            <img src="../assets/images/web/person4.png" alt="person1" />
            <div className="personalInfoWorker">
              <p className="name">Courtney Henry</p>
              <p className="position">Head of Sales</p>
            </div>
          </div>

          <div className="singleWorker">
            <img src="../assets/images/web/person5.png" alt="person1" />
            <div className="personalInfoWorker">
              <p className="name">Brooklyn Simmons</p>
              <p className="position">Tech Lead</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* FOOTER */}
      <Footer />
    </AboutStyled>
  );
};

const AboutStyled = styled.div`
  color: var(--whiteColor);

  .aboutContentContainer {
    margin-top: 80px;
  }
  .aboutSubTitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: inherit;
  }
  .aboutContent {
    line-height: 24px;
    margin-top: 24px;
  }
  .aboutTitleContainer {
    margin-top: 120px;
    margin-bottom: 108px;
  }
  .aboutTeam .aboutTitle {
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: #0e3027;
  }

  .workersContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 11.5%;
    margin-bottom: 120px;
  }
  .singleWorker {
    width: 356px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .singleWorker img {
    height: 85%;
    width: 90%;
    border-radius: 8px;
    background-size: cover;
  }
  .personalInfoWorker {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding: 24px 10%;
  }
  .personalInfoWorker .name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--greenToBlack);
  }
  .personalInfoWorker .position {
    font-size: 14px;
    line-height: 18px;
    color: var(--lightGreen);
  }

  @media (max-width: 991.98px) {
    .workersContainer {
      margin: 0 4%;
    }
    .singleWorker {
      width: 300px;
      margin-bottom: 12px;
    }
    .aboutTitleContainer {
      margin-bottom: 28px;
    }
    .singleWorker img {
      height: 100%;
      width: 100%;
    }
    .aboutSubTitle {
      font-size: 18px;
    }
    .aboutContent {
      font-size: 14px;
    }
    .aboutContentContainer {
      margin-top: 40px;
    }
  }
  @media (max-width: 680.98px) {
    .workersContainer {
      display: flex;
      justify-content: center;
    }
    .singleWorker {
      width: 80%;
      height: 480px;
    }
    .personalInfoWorker {
      padding: 20px 20%;
    }
    .singleWorker img {
      height: 85%;
      width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    .workersContainer {
      display: flex;
      justify-content: center;
    }
    .singleWorker {
      width: 80%;
      height: 500px;
    }
    .singleWorker img {
      height: 85%;
      width: 90%;
    }
    .personalInfoWorker {
      padding: 12px 15%;
    }
    .aboutTitleContainer {
      margin-top: 50px;
    }
    .aboutTeam .aboutTitle {
      font-size: 22px;
    }
  }
  @media (max-width: 400px) {
    .singleWorker {
      width: 80%;
      height: 420px;
    }
    .singleWorker img {
      height: 90%;
      width: 90%;
    }
    .personalInfoWorker {
      padding: 8px 10%;
    }
  }
`;

export default About;
