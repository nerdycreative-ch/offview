import styled from "styled-components";

const SingleProperty = ({ title, place, image, realEstate, searchItem }) => {
  return (
    <SinglePropertyStyled>
      <div className="singleSearchItem">
        <div style={{ display: "flex", alignItems: "center" }}>
          {realEstate ? (
            <img src={image} className="imageRealEstateOffers" />
          ) : (
            <div className="searchIconContainer">
              <img
                src="../../../../assets/images/app/dashboard/greySearchIcon.svg"
                alt="search icon"
              />
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="test"
        >
          <div className="searchItemContent">
            <p className="typeOf">{title}</p>
            <p className="sPlace">{place}</p>
          </div>
          {searchItem && (
            <div className="rightSideItemContainer">
              <p className="viewDetails">View details</p>
              <p className="sMatches">0 Matches</p>
            </div>
          )}
          {realEstate && <p className="viewDetails">View details</p>}
        </div>

        {/* <div style={{ height: 1, backgroundColor: "red", width: "100%" }}></div> */}
      </div>
    </SinglePropertyStyled>
  );
};

const SinglePropertyStyled = styled.div`
  .singleSearchItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 29px;
  }
  .searchIconContainer {
    height: 50px;
    width: 50px;
    border-radius: 4px;
    background-color: var(--lightGrey-2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .searchItemContent {
    margin-left: 16px;
  }
  .typeOf {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-600);
  }
  .sPlace {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--Grey-500);
    margin-top: 4px;
  }
  .viewDetails {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--greenToBlack);
  }
  .imageRealEstateOffers {
    height: 50px;
    width: 50px;
    border-radius: 4px;
  }
  .rightSideItemContainer {
    display: flex;
    flex-direction: column;
  }

  .sMatches {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #878786;
  }
`;

export default SingleProperty;
