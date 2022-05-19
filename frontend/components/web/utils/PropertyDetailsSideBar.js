import styled from "styled-components";
import Button from "./Button";
import SingleItemPropertyDetails from "./SingleItemPropertyDetails";
import img from "../../../public/assets/images/web/documentImage.png";
import { useWebContext } from "../../../context/webContext";

const PropertyDetailsSideBar = () => {
  const { modalIsOpen, setIsOpen } = useWebContext();

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

  @media (max-width: 767.98px) {
    .price {
      font-size: 20px;
      line-height: 42px;
      color: var(--greenPeaBold);
    }
  }
`;

export default PropertyDetailsSideBar;
