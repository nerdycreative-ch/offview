import styled from "styled-components";
import SubTitle from "./SubTitle";



const NoItem = ({ zTitle, zContent, zTextButton, advertisement }) => {
  return (
    <NoItemStyled>
      <div className="zeroElement">
        <img
          src={advertisement ? "../../../../assets/images/app/dashboard/advertisementIcon.svg" : "../../../../assets/images/app/dashboard/blackHomeIcon.svg" }
          alt="home icon"
        />
        <p className="zTitle">{zTitle}</p>
        <SubTitle content={zContent} />
        <div className="addNewRealEstate">
          <img
            src="../../../../assets/images/app/dashboard/greenPlusIcon.svg"
            alt="plus icon"
          />
          <p className="greenText">{zTextButton}</p>
        </div>
      </div>
    </NoItemStyled>
  );
};

const NoItemStyled = styled.div`
  display: flex;
  justify-content: center;
  .zeroElement {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 280px;
    text-align: center;
  }
  .zTitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--Grey-600);
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .addNewRealEstate {
    display: flex;
    align-items: center;
    margin-top: 22px;
    padding: 3px;
  }
  .greenText {
    margin-left: 12.4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--greenToBlack);
  }
`;

export default NoItem;
