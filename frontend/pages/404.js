import Link from "next/link";
import styled from "styled-components";
import Button from "../components/web/utils/Button";

const Error = () => {
  return (
    <ErrorStyled>
      <div className="errorContainer">
        <h1>ERROR</h1>
        <h1>404</h1>

        <div className="errorNumber"></div>
        <h3>
          Seems like you lost your way in the woods! Press the button below to
          get back home.
        </h3>
        <Link href="/">
          <Button text="Home" green width="80%" />
        </Link>
      </div>
    </ErrorStyled>
  );
};

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("../assets/images/web/errorImage.png") no-repeat;
  background-size: cover;

  .errorContainer {
    max-width: 500px;
    text-align: center;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #ffffff;
    letter-spacing: 10px;
  }
  .errorNumber {
    height: 5px;
    background: var(--greenToBlack);
    border-radius: 10px;
    width: 102px;
    margin: 0 auto;
    margin-top: 41px;
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: #ffffff;
    margin: 21px 0 31px 0;
  }
  @media (max-width: 767.98px) {
    h1 {
      font-size: 26px;
    }
    h3 {
      font-size: 18px;
    }
    .errorContainer {
      max-width: 80%;
      text-align: center;
    }
  }
`;

export default Error;
