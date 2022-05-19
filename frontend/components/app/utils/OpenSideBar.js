import styled from "styled-components";
import Link from "next/link";

const OpenSideBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <OpenSideBarStyled>
      <div className="oLinksAndIcon">
        <div className="oSidebarTop">
          <img
            src="../../../../assets/images/app/dashboard/logo.svg"
            alt="logo"
          />
          <img
            src="../../../../assets/images/app/dashboard/sidebarArrow.svg"
            alt="logo"
          />
        </div>
        <div className="links">
          <Link href="/dashboard">
            <div className="singleLink">
              <img
                src="../../../../assets/images/app/dashboard/icon.svg"
                alt="logo"
              />
              <h1 className="titleOfLink">Dashboard</h1>
            </div>
          </Link>
          <Link href="/search">
            <div className="singleLink">
              <img
                src="../../../../assets/images/app/dashboard/search.svg"
                alt="logo"
              />
              <h1 className="titleOfLink">Search profiles</h1>
            </div>
          </Link>
          <Link href="/offers">
            <div className="singleLink">
              <img
                src="../../../../assets/images/app/dashboard/home.svg"
                alt="logo"
              />
              <h1 className="titleOfLink">Real estate offers</h1>
            </div>
          </Link>
          <div className="singleLink">
            <img
              src="../../../../assets/images/app/dashboard/deals.svg"
              alt="logo"
            />
            <h1 className="titleOfLink">Deals</h1>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsSideBarOpen(false)}
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
      ></div>

      <div className="oBottom">
        <div className="oLeftSide">
          <div className="profileImage">
            <h1 className="imageTitle">F</h1>
          </div>
          <div className="personalInfo">
            <h1 className="firstName">First Name</h1>
            <p className="position">Position</p>
          </div>
        </div>
        <img
          src="../../../../assets/images/app/dashboard/alert.svg"
          alt="logo"
        />
      </div>
    </OpenSideBarStyled>
  );
};

const OpenSideBarStyled = styled.div`
  width: 250px;
  height: 100vh;  
  background-color: var(--greenToBlack);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .oLinksAndIcon {
    display: flex;
    flex-direction: column;
  }
  .oSidebarTop {
    display: flex;
    justify-content: space-between;
  }
  .links {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
  }
  .singleLink {
    display: flex;
    margin-bottom: 24px;
    cursor: pointer;
  }
  .titleOfLink {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--whiteColor);
    margin-left: 26px;
  }

  .oBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .oLeftSide {
    display: flex;
    align-items: center;
  }
  .profileImage {
    background: #124034;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageTitle {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }

  .personalInfo {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
  .firstName {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--whiteColor);
  }
  .position {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: var(--lightGrey-0);
  }

  @media (max-width: 991.98px) {
    display: none;
    width: 0;
  }
`;

export default OpenSideBar;
