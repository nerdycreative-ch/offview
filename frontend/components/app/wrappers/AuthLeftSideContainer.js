import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";

const AuthLeftSideContainer = ({ login }) => {
  return (
    <AuthLeftSideContainerStyled>
      <div className="top">
        <img
          src="/assets/images/register/logo.svg"
          alt="logo"
          className="logo"
        />
        <h1 className="title">Welcome to offview</h1>
        <p className="content">
          The digital off-market platform for real estate. Become a member to
          gain access to an exclusive network of off-market real estate and
          international investors.
        </p>
      </div>
      <div className="bottom">
        <p className={`text $whiteColor`}>
          {login ? "Don't have an account yet?" : "Already have an account?"}
        </p>
        <button
          className="btn"
          onClick={() => Router.push(login ? "/register" : "/login")}
        >
          {login ? "Create an account" : "Login"}
        </button>
        <div className="termsAndService">
          <ul className="links">
            <li className="singleLink">
              <a className="text" href="#">
                Terms of Service
              </a>
            </li>
            <li className="singleLink">
              <Link href="/privacypolicy">
                <a className="text">Data Privacy</a>
              </Link>
            </li>
          </ul>
          <p className={`text allRighstReserved`}>
            © {new Date().getFullYear()}, offview AG. All right reserved.
          </p>
        </div>
      </div>

      <div className="bottomImageContainer">
        <img
          className="bottomImage"
          src="/assets/images/register/illustration.svg"
          alt="bottomImage"
        />
      </div>
    </AuthLeftSideContainerStyled>
  );
};

const AuthLeftSideContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  padding: 130px 18.5%;
  color: var(--whiteColor);
  position: relative;
  background: var(--greenToBlack);

  .logo {
    width: 50px;
    height: 50px;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin: 50px 0 12px 0;
  }
  .content {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--lightGrey-0);
  }
  .bottom {
    z-index: 1001;
  }
  .btn {
    background-color: var(--whiteColor);
    border-radius: 4px;
    padding: 12px 24px;
    color: #0b0b0b;
    outline: none;
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 12px;
    cursor: pointer;
  }
  .text {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--lightGrey-2);
  }
  .whiteColor {
    color: var(--whiteColor);
  }

  .links {
    display: flex;
  }
  .singleLink {
    margin-right: 12px;
  }
  .termsAndService {
    margin-top: 56px;
  }
  .allRighstReserved {
    margin-top: 8px;
  }
  .bottomImageContainer {
    position: absolute;
    bottom: 40px;
    left: 20px;
    z-index: 0;
  }
  .bottomImage {
    width: 100%;
    height: 305px;
    z-index: 0;
  }
`;

export default AuthLeftSideContainer;
