import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import test from "../../../public/assets/images/web/homesImage.png";

const Exclusive = () => {
  return (
    <ExclusiveStyled>
      <div className="exclusiveLeftSide">
        <h1 className="title">
          Get exclusive access to investors and sellers around the globe.
        </h1>
        <Link href="/register">
          <div className="btnContainer">
            <Button text="Become a member" green />
          </div>
        </Link>
      </div>
      <div className="exclusiveRightSide">
        {/* <img src="../../../assets/images/web/homesImage.png" alt="" /> */}

        <Image src={test} alt="home exclusive" className="mainImageExlusive" />
      </div>
    </ExclusiveStyled>
  );
};

const ExclusiveStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 13.47%;

  background: var(--whiteColor);
  position: relative;

  .exclusiveLeftSide {
    width: 50%;
    z-index: 1000;
  }
  .exclusiveLeftSide .title {
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #0e3027;
  }
  .exclusiveLeftSide .btnContainer {
    margin-top: 40px;
  }
  .exclusiveRightSide {
    width: 55%;
    padding-right: 13.47%;
    position: relative;

    position: absolute;
    right: 0;
    margin-top: 30px;
  }
  .mainImageExlusive {
    width: 100%;
    height: 264px;
  }

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    .exclusiveLeftSide {
      width: 100%;
    }
    .exclusiveRightSide {
      width: 100%;
      padding-right: 0%;
      position: relative;
    }
    .exclusiveRightSide img {
      width: 100%;
      height: 123.74px;
      margin-top: 52px;
    }
    /* .exclusiveRightSide {
      display: none;
    } */
  }
  @media (max-width: 575.98px) {
    padding: 40px 10%;

    .title,
    .btnContainer {
      text-align: center;
    }
  }
`;

export default Exclusive;
