import { useState } from "react";
import NoItem from "../components/app/utils/NoItem";
import SingleProperty from "../components/app/utils/SingleProperty";
import TopContainer from "../components/app/utils/TopContainer";
import AppContainer from "../components/app/wrappers/AppContainer";
import styled from "styled-components";

const Advertisement = () => {
  const [activeAllDrafts, setActiveAllDrafts] = useState("all");

  const [allEstateItem, setAllEstateItem] = useState([]);

  return (
    <AppContainer>
      {/* TOP CONTAINER */}
      <TopContainer
        title="Advertisement"
        fontSize={24}
        content="Add a advertisement to identify potential buyers."
        plusButtonTitle="Create advertisement"
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
                zTitle="No advertisement created yet"
                zContent="Create a advertisement to identify 
                matching properties."
                zTextButton="New advertisement"
                advertisement
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
            zTitle="No advertisement drafted yet"
            //TO FIND CORRECT TEXT
            zContent="Add a advertisement to identify potential 
              buyers for you."
            zTextButton="New advertisement"
            advertisement
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

export default Advertisement;
