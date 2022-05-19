import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";

const MakeAnOfferModal = () => {
  return (
    <Modal>
      <MakeAnOfferModalStyled>
        <div className="topPart">
          <h1 className="title">Make an offer</h1>
          <p className="content">
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
        </div>
        <div className="centerPart">
          <div className="priceContainer">
            <p className="price">Current price</p>
            <div className="rightSideContainer">
              <p className="priceNumber">820.000 &euro;</p>
            </div>
          </div>
          <div className="offerPrice">
            <p className="price">Offer price</p>
            <div className="rightSideContainer">
              <input
                type="number"
                className="txBoxPriceOffer"
                placeholder="Enter your offer"
              />
              <select>
                <option value="euro">&euro;</option>
                <option value="dollar">&#36;</option>
                <option value="franc">&#8355;</option>
                <option value="pound">&#163;</option>
              </select>
            </div>
          </div>

          <div className="bottomPart">
            <div className="rightMarginBtn">
              <Button text="Cancel" grey />
            </div>

            <Button text="Send offer" green />
          </div>
        </div>
      </MakeAnOfferModalStyled>
    </Modal>
  );
};

const MakeAnOfferModalStyled = styled.div`
  width: 500px;
  padding: 40px;

  .topPart .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--black-0);
  }
  .topPart .content {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
    margin-top: 4px;
  }
  .centerPart {
    margin: 40px 0;
  }
  .priceContainer {
    display: flex;
  }
  .price {
    flex: 1;
  }
  .rightSideContainer {
    flex: 2.3;
  }
  .offerPrice {
    display: flex;
    align-items: center;
    margin: 24px 0;
  }
  .txBoxPriceOffer {
    background: var(--whiteColor);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #afafae;
    outline: none;
  }
  select {
    width: 70px;
    padding: 16px 12px;
    outline: none;
    margin-left: 12px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
  }
  .bottomPart {
    display: flex;
    justify-content: flex-end;
  }
  .rightMarginBtn {
    margin-right: 16px;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 767.98px) {
    width: 380px;
    padding: 20px;

    /* .offerPrice {
      flex-wrap: wrap;
    } */
    .offerPrice {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: flex-start;
    }
    .price {
      flex: 1;
    }
    .offerPrice .rightSideContainer {
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    select {
      flex: 1;
    }
    .bottomPart {
      justify-content: center;
    }
  }
  @media (max-width: 575.98px) {
    width: 340px;
    padding: 10px;
  }
  .price {
    flex: 1;
  }
  .offerPrice .rightSideContainer {
    flex: 1;
    display: flex;

    margin-top: 10px;
  }
  @media (max-width: 420px) {
    width: 260px;
    padding: 10px;

    .priceContainer .price {
      flex: 1;
    }
    .offerPrice .rightSideContainer {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    .txBoxPriceOffer {
      width: 100%;
    }
    select {
      margin-left: 0px;
      margin-top: 12px;
      width: 100%;
    }
  }
`;

export default MakeAnOfferModal;
