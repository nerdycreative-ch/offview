import styled from "styled-components";
import Button from "../../web/utils/Button";
import Link from "next/link";

const AboveFooter = () => {
  return (
    <AboveFooterStyled>
      <div className="mainContainer">
        <div className="leftSideAbovePart">
          <h1>Questions on your mind?</h1>
          <p>
            If you have any questions or remarks feel free to write us a message
            or have a look at our FAQ!
          </p>
        </div>
        <div className="rightSideAbovePart">
          <Link href="/faq">
            <p>FAQ</p>
          </Link>
          <Link href="/contact">
            <div className="greenContactUs">
              <Button text="Contact Us" green />
            </div>
          </Link>
        </div>
      </div>
      <div className="borderBottomLine"></div>
    </AboveFooterStyled>
  );
};

const AboveFooterStyled = styled.div`
  padding: 96px 11.25%;
  background: var(--lightGrey-2);

  .mainContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leftSideAbovePart {
    width: 450px;
  }
  .leftSideAbovePart h1 {
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: var(--greenPeaBold);
  }
  .leftSideAbovePart p {
    font-size: 14px;
    line-height: 18px;
    color: var(--lightGreen);
    margin-top: 16px;
  }
  .rightSideAbovePart {
    display: flex;
    align-items: center;
  }
  .rightSideAbovePart p {
    margin-right: 48px;
    font-size: 14px;
    line-height: 18px;
    color: #175041;
    cursor: pointer;
  }
  .borderBottomLine {
    background: #e1e1e1;
    width: 100%;
    height: 1px;
    margin-top: 96px;
  }

  @media (max-width: 991.98px) {
    padding: 40px 11.25%;

    .mainContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .rightSideAbovePart {
      margin-top: 48px;
    }
    .borderBottomLine {
      background: #e1e1e1;
      width: 100%;
      height: 1px;
      margin-top: 48px;
    }
  }
  @media (max-width: 575.98px) {
    .leftSideAbovePart {
      width: 300px;
    }
    .greenContactUs {
      order: -1;
      margin-right: 32px;
    }
  }
  @media (max-width: 376.98px) {
    .leftSideAbovePart {
      width: 240px;
    }
  }
`;

export default AboveFooter;
