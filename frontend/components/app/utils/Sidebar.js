import styled from "styled-components";
import Link from "next/link";
import { useDashboardContext } from "../../../context/dashboard";

const Sidebar = () => {
  const { setIsSideBarOpen } = useDashboardContext();
  return (
    <SidebarStyle>
      {/* ICON */}
      <div className="iconAndLinks">
        <div>
          <img
            src="../../../../assets/images/app/dashboard/logo.svg"
            alt="logo"
          />
        </div>
        {/* LINKS */}
        <div className="sideBarLinks">
          <Link href="/dashboard">
            <img
              src="../../../../assets/images/app/dashboard/icon.svg"
              alt="logo"
              className="sidebarImages"
            />
          </Link>
          <Link href="/search">
            <img
              src="../../../../assets/images/app/dashboard/search.svg"
              alt="logo"
              className="sidebarImages"
            />
          </Link>
          <Link href="/offers">
            <img
              src="../../../../assets/images/app/dashboard/home.svg"
              alt="logo"
              className="sidebarImages"
            />
          </Link>
          <img
            src="../../../../assets/images/app/dashboard/deals.svg"
            alt="logo"
            className="sidebarImages"
          />
        </div>
        {/* ALERT AND PROFILE */}
      </div>
      <div
        onClick={() => setIsSideBarOpen(true)}
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
      ></div>
      <div className="bottomPart">
        <img
          src="../../../../assets/images/app/dashboard/alert.svg"
          alt="logo"
        />
        <div className="profileImage">
          <h1 className="imageTitle">F</h1>
        </div>
      </div>
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div`
  width: 70px;
  height: 100vh;
  background-color: var(--greenToBlack);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  .iconAndLinks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sideBarLinks {
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    cursor: pointer;
  }
  .sidebarImages {
    margin-bottom: 27.75px;
  }

  .bottomPart {
    display: flex;
    flex-direction: column;
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
    margin-top: 26.44px;
  }
  .imageTitle {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }

  @media (max-width: 991.98px) {
    display: none;
    width: 0;
  }
`;

export default Sidebar;
