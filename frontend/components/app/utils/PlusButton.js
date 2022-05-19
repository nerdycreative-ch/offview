import styled from "styled-components";
import Link from "next/link";

const PlusButton = ({ title, href }) => {
  return (
    <PlusButtonStyle>
      <Link href={href} passHref>
        <div>
          <img
            src="../../../assets/images/app/dashboard/plusButton.svg"
            alt="plusButton"
            className="plusImage"
          />
          <span className="pBtnTitle">{title}</span>
        </div>
      </Link>
    </PlusButtonStyle>
  );
};

const PlusButtonStyle = styled.div`
  background-color: var(--greenToBlack);
  padding: 12px;
  display: flex;
  border-radius: 4px;
  cursor: pointer;

  .plusImage {
    padding-left: 5px;
  }
  .pBtnTitle {
    margin-left: 14.68px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--whiteColor);
    /* FONT FAMILY INTER IS MISSING */
  }
`;

export default PlusButton;
