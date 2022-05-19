import styled from "styled-components";
import test from "../../../public/assets/images/web/home2.svg";
import Button from "./Button";
import TagItem from "./TagItem";

const Card = ({ title, content, image, price, type }) => {
  return (
    <CardStyled>
      <div className="imageContainer">
        <img src={image} alt="home" />
        <div className="tagContainer">
          <TagItem tag="House" />
        </div>
      </div>
      <div className="houseData">
        <p className="homeName">{title}</p>
        <p className="location">{content}</p>
      </div>

      <div className="bottomOfCard">
        <div className="leftSide">
          <h1 className="price">{price} €</h1>
          <p className="type">{type}</p>
        </div>
        <Button text="Details" green />
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 344px;
  width: 261px;
  background-color: var(--whiteColor);
  border-radius: 12px;
  margin-top: 20px;

  .tagContainer {
    position: absolute;
    left: 16px;
    bottom: 16px;
  }

  .imageContainer {
    position: relative;
    height: 195px;
    width: 100%;
  }

  .imageContainer img {
    height: 100%;
    width: 100%;
    border-radius: 12px;
  }

  .houseData {
    padding: 24px 16px;
  }
  .homeName {
    line-height: 24px;
    color: var(--greenPeaBold);
  }
  .location {
    line-height: 18px;
    color: var(--Grey-500);
    font-size: 12px;
  }
  .bottomOfCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
  }

  .leftSide .price {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--greenToBlack);
  }
  .leftSide .type {
    font-size: 12px;
    line-height: 18px;
    color: var(--Grey-500);
  }
`;

export default Card;
