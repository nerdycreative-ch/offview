import { useState } from "react";
import styled from "styled-components";
import Button from "../components/web/utils/Button";
import CardsList from "../components/web/utils/CardsList";
import GreenContainer from "../components/web/utils/GreenContainer";
import Header from "../components/web/utils/Header";
import SelectInput from "../components/web/utils/SelectInput";
import Footer from "../components/web/utils/Footer";

const Properties = () => {
  const [locations, setLocations] = useState([
    {
      id: 1,
      propertyName: "Zürich, Switzerland",
    },
    {
      id: 2,
      propertyName: "London, United Kingdom",
    },
    {
      id: 3,
      propertyName: "Berlin, Germany",
    },
  ]);

  const [prices, setPrices] = useState([
    {
      id: 1,
      propertyName: "500-1,000,000",
    },
    {
      id: 2,
      propertyName: "1,000,000-5,000,000",
    },
  ]);

  const [types, setTypes] = useState([
    {
      id: 1,
      propertyName: "All",
    },
    {
      id: 2,
      propertyName: "Single",
    },
    {
      id: 3,
      propertyName: "Double",
    },
  ]);

  return (
    <PropertiesStyled>
      <Header title="Properties" content="Explore right property for you." />
      <GreenContainer>
        <div className="inputs">
          <div className="singleInput">
            <SelectInput selectList={locations} inputName="Location" />
          </div>
          <div className="singleInput">
            <SelectInput selectList={prices} inputName="Price" />
          </div>
          <div className="singleInput">
            <SelectInput selectList={types} inputName="Type" />
          </div>

          <div className="singleInput moreFilters">
            <span>More filters</span>
            <img src="../assets/images/web/dropdownArrowWhite.svg" alt="" />
          </div>

          {/* search btn */}
          <button className="searchBtn">Search</button>
        </div>
      </GreenContainer>

      {/* <div className="cardsContainer">
        <div className="cardsInfo">
          <p className="title">Explore property</p>
          <p className="listedNumbers">48 property listed</p>
        </div> */}
      <CardsList />
      {/* </div> */}

      <Footer />
    </PropertiesStyled>
  );
};

const PropertiesStyled = styled.div`
  .inputs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .searchBtn {
    background: var(--greenToBlack);
    border-radius: 4px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--whiteColor);
    outline: none;
    border: none;
    padding: 15px 60px;
    align-self: flex-end;
    cursor: pointer;
  }
  .cardsContainer {
    padding: 80px 11.25%;
  }
  .cardsInfo {
    margin-bottom: 22px;
  }
  .cardsInfo .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: var(--greenPeaBold);
  }
  .cardsInfo .listedNumbers {
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
  }
  .moreFilters {
    display: flex;
    align-items: center;
    margin-top: 24px;
  }
  .moreFilters span {
    font-size: 14px;
    line-height: 18px;
    color: var(--whiteColor);
  }
  .moreFilters img {
    margin-left: 13.44px;
  }
  @media (max-width: 1399.98px) { 
    .inputs {
      justify-content: center;

  }
   }

  @media (max-width: 1199.98px) {
    .inputs {
      display: grid;
      grid-template-columns: repeat(auto-fill, 250px);
    }
  }

  @media (max-width: 991.98px) {
    .singleInput {
      width: 100%;
      margin-top: 14px;
    }
    .searchBtn {
      width: 100%;
      margin-top: 24px;
    }
    .inputs {
      display: flex;
    }
  }
  @media (max-width: 575.98px) {
    .singleInput {
      width: 100%;
      margin-top: 14px;
    }
  }
`;

export default Properties;
