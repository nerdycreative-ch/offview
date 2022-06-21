import styled from "styled-components";
import ModalComp from "../../web/utils/Modal";
import Button from "../../web/utils/Button";

const AdvertisementSubModal = () => {
  return (
    <ModalComp>
      <AdvertisementSubModalStyled>
        <img src="../../../../assets/images/register/GreenTick.svg" alt="" />
        <h1 className="advSubmmited">Advertisement submited</h1>
        <p className="subTitle">
          Thank you very much for your advertisement. The object is being
          checked etc
        </p>
        <div className="btnContainer">
          <Button text="Continue"  green />
        </div>
      </AdvertisementSubModalStyled>
    </ModalComp>
  );
};

const AdvertisementSubModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;

  .advSubmmited {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--black-0);
    margin: 25px 0 4px 0;
  }
  .subTitle {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: var(--Grey-500);
  }
  .btnContainer {
    margin-top: 20px;
  }
`;

export default AdvertisementSubModal;
