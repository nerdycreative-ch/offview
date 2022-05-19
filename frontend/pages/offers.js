import { useState } from "react";
import NoItem from "../components/app/utils/NoItem";
import SingleProperty from "../components/app/utils/SingleProperty";
import TopContainer from "../components/app/utils/TopContainer";
import AppContainer from "../components/app/wrappers/AppContainer";
import styled from "styled-components";

const Offers = () => {
  const [activeAllDrafts, setActiveAllDrafts] = useState("all");

  const [allEstateItem, setAllEstateItem] = useState([
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
      {/* TOP CONTAINER */}
      <TopContainer
        title="Real estate offers"
        fontSize={24}
        content="Add a real estate to identify potential buyers."
        plusButtonTitle="Create real estate"
        href=""
      />
      {/* ALL DRAFT */}
      <OffersStyled>
        <div className="allDraftTitleContainer">
          <span
            className={`allDraftTitle ${
              activeAllDrafts == "all" && "activeColor"
            }`}
            onClick={() => setActiveAllDrafts("all")}
          >
            All
          </span>
          <span
            className={`allDraftTitle ${
              activeAllDrafts == "drafts" && "activeColor"
            }`}
            onClick={() => setActiveAllDrafts("drafts")}
          >
            Drafts
          </span>
        </div>
        <div className="allDraftBorder"></div>

        {/* CONTENT */}
      </OffersStyled>{" "}
      {/* ALL */}
      {activeAllDrafts == "all" && (
        <div>
          {allEstateItem.length == 0 ? (
            <div
              style={{
                height: "65vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NoItem
                zTitle="No real estate created yet"
                zContent="Add a real estate to identify potential 
  buyers for you."
                zTextButton="New real estate"
              />
            </div>
          ) : (
            <div style={{ marginTop: 20 }}>
              {allEstateItem.map((estate, index) => {
                return <SingleProperty key={index} realEstate {...estate} />;
              })}
            </div>
          )}
        </div>
      )}
      {/* DRAFTS */}
      {activeAllDrafts == "drafts" && (
        <div
          style={{ height: "65vh", display: "flex", justifyContent: "center" }}
        >
          <NoItem
            zTitle="No real estate drafted yet"
            zContent="Add a real estate to identify potential 
              buyers for you."
            zTextButton="New real estate"
          />
        </div>
      )}
    </AppContainer>
  );
};

const OffersStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .allDraftTitleContainer {
    display: flex;
  }
  .allDraftTitle {
    margin-right: 20px;
    cursor: pointer;
  }
  .allDraftBorder {
    height: 1px;
    background-color: #e1e1e1;
    width: 100%;
    margin-top: 12px;
    position: absolute;
    left: 0;
    top: 20px;
  }
  .activeColor {
    color: var(--greenToBlack);
    border-bottom: 1px solid var(--greenToBlack);
    padding-bottom: 12.7px;
    z-index: 1000;
  }
`;

export default Offers;
