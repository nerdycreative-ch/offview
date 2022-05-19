import { useState } from "react";
import AppContainer from "../components/app/wrappers/AppContainer";
import TopContainer from "../components/app/utils/TopContainer";
import NoItem from "../components/app/utils/NoItem";
import SignleProperty from "../components/app/utils/SingleProperty";
import styled from "styled-components";

const Search = () => {
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
      <SearchStyled>
        {/* TOP CONTAINER */}
        <TopContainer
          title="Search profile"
          fontSize={24}
          content="Add a search profile to identify potential buyers."
          plusButtonTitle="Create search profile"
          href="searchsteps"
        />
        {/* ALL DRAFT */}
        <div className="allDraft">
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
        </div>{" "}
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
                  zTitle="No purchase profiles created yet"
                  zContent="Create a purchase profile to identify 
                  matching properties."
                  zTextButton="New purchase profile"
                />
              </div>
            ) : (
              <div style={{ marginTop: 20 }}>
                {allEstateItem.map((estate, index) => {
                  return <SignleProperty key={index} searchItem {...estate} />;
                })}
              </div>
            )}
          </div>
        )}
        {/* DRAFTS */}
        {activeAllDrafts == "drafts" && (
          <div
            style={{
              height: "65vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NoItem
              zTitle="No purchase profiles drafted yet"
              zContent="Create a purchase profile to identify 
              matching properties."
              zTextButton="New purchase profile"
            />
          </div>
        )}
      </SearchStyled>
    </AppContainer>
  );
};

const SearchStyled = styled.div`
  .allDraft {
    display: flex;
    flex-direction: column;
    position: relative;
  }
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

export default Search;
