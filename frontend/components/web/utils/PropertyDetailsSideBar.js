import styled from "styled-components";
import Button from "./Button";
import SingleItemPropertyDetails from "./SingleItemPropertyDetails";
import img from "../../../public/assets/images/web/documentImage.png";
import { useWebContext } from "../../../context/webContext";
import { useRef, useState, useEffect } from "react";

const PropertyDetailsSideBar = () => {
  const { modalIsOpen, setIsOpen } = useWebContext();

  const [showDropdownMenu, setShowDropDownMenu] = useState("");

  const catMenu = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  });

  const closeOpenMenus = (e) => {
    if (
      catMenu.current &&
      showDropdownMenu &&
      !catMenu.current.contains(e.target)
    ) {
      setShowDropDownMenu(false);
    }
  };

  return (
    <PropertyDetailsSideBarStyled>
      <h1 className="price">820.000 €</h1>
      <div className="greenBtnContainer">
        <Button
          text="Make an offer"
          green
          width="100%"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {/* SELECT LIST */}

      <div className="documentDropDownContainer">
        <div
          className="mainLabel"
          onClick={() => setShowDropDownMenu(!showDropdownMenu)}
        >
          <h1>View Documents</h1>
          <img src="../../../assets/images/web/bottomGreyArrow.svg" alt="" />
        </div>
        {showDropdownMenu && (
          <div className="documentGroup customScroll" ref={catMenu}>
            <div className="singleDocument">
              <div className="singleDocumentLeftSide">
                <img
                  src="../../../assets/images/web/documentImage.png"
                  alt=""
                />
                <h1>Document 1</h1>
              </div>
              <img src="../../../assets/images/web/downloadImage.png" alt="" />
            </div>
            <div className="singleDocument ">
              <div className="singleDocumentLeftSide">
                <img
                  src="../../../assets/images/web/documentImage.png"
                  alt=""
                />
                <h1>Document 2</h1>
              </div>
              <img src="../../../assets/images/web/downloadImage.png" alt="" />
            </div>
            <div className="singleDocument">
              <div className="singleDocumentLeftSide">
                <img
                  src="../../../assets/images/web/documentImage.png"
                  alt=""
                />
                <h1>Document 3</h1>
              </div>
              <img src="../../../assets/images/web/downloadImage.png" alt="" />
            </div>
            <div className="singleDocument">
              <div className="singleDocumentLeftSide">
                <img
                  src="../../../assets/images/web/documentImage.png"
                  alt=""
                />
                <h1>Document 4</h1>
              </div>
              <img src="../../../assets/images/web/downloadImage.png" alt="" />
            </div>
            <div className="singleDocument">
              <div className="singleDocumentLeftSide">
                <img
                  src="../../../assets/images/web/documentImage.png"
                  alt=""
                />
                <h1>Document 5</h1>
              </div>
              <img src="../../../assets/images/web/downloadImage.png" alt="" />
            </div>
            <div className="singleDocument">
              <div className="singleDocumentLeftSide">
                <img
                  src="../../../assets/images/web/documentImage.png"
                  alt=""
                />
                <h1>Document 6</h1>
              </div>
              <img src="../../../assets/images/web/downloadImage.png" alt="" />
            </div>
          </div>
        )}
      </div>

      {/* <select className="viewDocuments"></select> */}

      {/* ITEMS */}
      <div className="groupOfItems">
        <SingleItemPropertyDetails />
        <SingleItemPropertyDetails />
        <SingleItemPropertyDetails />
        <SingleItemPropertyDetails />
        <SingleItemPropertyDetails />
        <SingleItemPropertyDetails />
      </div>
    </PropertyDetailsSideBarStyled>
  );
};

const PropertyDetailsSideBarStyled = styled.div`
  .groupOfItems {
    margin: 48px 0;
  }
  .greenBtnContainer {
    margin: 24px 0 16px 0;
  }
  .viewDocuments {
  }
  .price {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: var(--greenPeaBold);
  }
  .documentDropDownContainer {
    position: relative;
  }
  .mainLabel {
    background: var(--lightGrey-2);
    border: 1px solid var(--lightGrey-3);
    border-radius: 4px;
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .mainLabel h1 {
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--black-0);
    margin-right: 14px;
  }
  .documentGroup {
    background: var(--whiteColor);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    margin-top: 2px;
    padding: 13.5px 15px;
    height: 174px;
    overflow-y: scroll;
  }

  .singleDocument {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .singleDocument:not(:first-child) {
    margin-top: 16px;
  }
  .singleDocumentLeftSide {
    display: flex;
  }
  .singleDocument h1 {
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-600);
    margin-left: 13px;
  }

  @media (max-width: 767.98px) {
    .price {
      font-size: 20px;
      line-height: 42px;
      color: var(--greenPeaBold);
    }
  }
`;

export default PropertyDetailsSideBar;
