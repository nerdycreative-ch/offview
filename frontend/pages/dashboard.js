import { useState } from "react";
import AppContainer from "../components/app/wrappers/AppContainer";
import TopContainer from "../components/app/utils/TopContainer";
import SubTitle from "../components/app/utils/SubTitle";
import SingleProperty from "../components/app/utils/SingleProperty";
import Alert from "../components/app/utils/Alert";
import DSingleSection from "../components/app/utils/DSingleSection";
import DashboardLabel from "../components/app/utils/DashboardLabel";
import styled from "styled-components";

const Dashboard = () => {
  const [serachResult, setSearchResults] = useState([
    {
      id: 1,
      title: "Residential & Commercial (Mainly Commercial)",
      place: "Munich, Bavaria, Germany",
    },
    {
      id: 2,
      title: "Residential & Commercial (Mainly Commercial)",
      place: "Munich, Bavaria, Germany",
    },
  ]);

  const [estateItem, setEstateItem] = useState([
    {
      id: 1,
      image: "../../../../assets/images/app/dashboard/villaSantorini.svg",
      title: "Pinnacle Office",
      place: "81 Louis-Pasteur Private, Ottawa, Canada",
    },
    {
      id: 2,
      image: "../../../../assets/images/app/dashboard/villaSantorini.svg",
      title: "Villa Santorini",
      place: "19 Santorini, Thira, Greece",
    },
  ]);

  return (
    <AppContainer>
      <DashboardStlyed>
        <TopContainer
          title="Dashboard"
          fontSize={24}
          content="Get an overview on what is happening right now."
          plusButtonTitle="Create"
          href=""
        />

        {/* CONTENT */}

        <div
          className="labelInRow"
          style={
            (serachResult.length < 3 || estateItem < 3) && {
              paddingBottom: 0,
            }
          }
        >
          {/* SEARCH PROFILES */}
          <div className="labelWidth">
            <DSingleSection>
              <DashboardLabel
                labelName="Search profiles"
                labelImage="../../../../assets/images/app/dashboard/blackSearchIcon.svg"
                navigateTo="/search"
              />

              {serachResult.length == 0 ? (
                <div className="noItemsInArray">
                  <SubTitle content="You have no purchase profiles created yet." />
                </div>
              ) : (
                <div style={{ marginTop: 21 }}>
                  {serachResult.map((item, index) => {
                    return <SingleProperty key={index} {...item} />;
                  })}
                </div>
              )}
            </DSingleSection>
          </div>
          {/* REAL ESTATE OFFERS */}
          <div className="labelWidth">
            <DSingleSection>
              <DashboardLabel
                labelName="Real estate offers"
                labelImage="../../../../assets/images/app/dashboard/blackHomeIcon.svg"
                navigateTo="/offers"
              />

              {estateItem.length == 0 ? (
                <div className="noItemsInArray">
                  <SubTitle content="You have not added any properties yet."></SubTitle>
                </div>
              ) : (
                <div style={{ marginTop: 21 }}>
                  {estateItem.map((item, index) => {
                    return <SingleProperty key={index} realEstate {...item} />;
                  })}
                </div>
              )}
            </DSingleSection>
          </div>
        </div>
        {/* DEALS */}
        <div className="labelInRow">
          <div className="labelWidth">
            <DSingleSection>
              <DashboardLabel
                labelName="Deals"
                labelImage="../../../../assets/images/app/dashboard/blackDealsIcon.svg"
              />

              <div className="noItemsInArray">
                <SubTitle content="You have no matches yet."></SubTitle>
              </div>
            </DSingleSection>
          </div>
          {/* PROFILE */}
          <div className="labelWidth">
            <DashboardLabel
              labelName="Profile"
              labelImage="../../../../assets/images/app/dashboard/blackProfileIcon.svg"
            />
            <div className="profileSection">
              <div className="topProfileSection">
                <SubTitle content="Not verified Member" />
                <h1 className="verifyAccountText">Verify your account</h1>
              </div>
              {/*ALERT */}
              <Alert text="Almost done. Finish the very last steps of the registration process!" />
              {/* HELP & SUPPORT */}
              <div className="helpAndSupportText">
                <SubTitle content="Help & Support" />
                <img
                  src="../../../../assets/images/app/dashboard/greyLeftArrow.svg"
                  alt="help and support"
                  className="greyRightArrow"
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardStlyed>
    </AppContainer>
  );
};

const DashboardStlyed = styled.div`
  .labelInRow {
    display: flex;
    justify-content: space-between;
  }
  .labelWidth {
    width: 46%;    
  }

  .noItemsInArray {
    display: flex;
    justify-content: center;
    height: 220px;
    align-items: center;
  }

  .topProfileSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 44px;
  }
  .verifyAccountText {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--greenToBlack);
  }
  .helpAndSupportText {
    display: flex;
    margin-top: 37px;
    justify-content: flex-end;
    padding-bottom: 24px;
  }
  .greyRightArrow {
    margin-left: 14.41px;
  }

  @media (max-width: 991.98px) {
    .labelInRow {
      display: flex;
      flex-direction: column;
    }
    .labelWidth {
      width: 100%;
      margin-top: 30px;
    }
    .noItemsInArray {
      height: 130px;
      margin-top: 30px;
    }
  }
`;

export default Dashboard;
