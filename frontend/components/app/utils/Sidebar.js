import styled from "styled-components";
import Link from "next/link";
import { useDashboardContext } from "../../../context/dashboard";
import { useAuthContext } from "../../../context/auth";

const Sidebar = () => {
  const { setIsSideBarOpen } = useDashboardContext();

  const { currentUserData } = useAuthContext();

  return (
    <SidebarStyle>
      {/* ICON */}

      <div
        className="cursorPointerImage"
        onClick={() => setIsSideBarOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="22"
          viewBox="0 0 19 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.92758 2.10631C7.7101 2.12733 7.51745 2.19742 7.39485 2.27915C7.1539 2.43979 7.00917 2.71021 7.00917 2.9998V11.9998C7.00917 12.507 6.78856 13.0193 6.33963 13.3019C5.84144 13.6155 5.23478 13.5369 4.78341 13.1414C4.48428 12.8792 4.2321 12.5608 4.01765 12.2746C3.94743 12.1809 3.88196 12.0917 3.81898 12.0059C3.67516 11.8101 3.54427 11.6318 3.39911 11.4569C2.99272 10.9675 2.66647 10.7503 2.25918 10.7503C2.02814 10.7503 1.92632 10.8027 1.88764 10.8298C1.852 10.8547 1.81542 10.8955 1.78692 10.9851C1.71832 11.2006 1.74286 11.5707 1.8837 11.9602C1.94142 12.1198 1.99818 12.2866 2.04946 12.4548C2.09661 12.6095 2.1518 12.8053 2.21773 13.0391C2.33426 13.4525 2.48434 13.9849 2.6829 14.6197C2.9783 15.5642 3.31982 16.5223 3.64645 17.1189L4.09422 17.8301C4.66519 18.7369 5.34419 19.328 6.1297 19.7004C6.92424 20.077 7.87077 20.25 9.00007 20.25H13.117C14.1543 20.25 14.9784 19.6569 15.5799 18.6507C16.188 17.6334 16.5092 16.2723 16.5092 15V13.6621C16.5092 12.6937 15.8894 11.8338 14.9706 11.5276L9.86389 9.82543C9.35346 9.6553 9.00916 9.17762 9.00916 8.63957V3.25429C9.00916 2.6859 8.82316 2.37078 8.55343 2.23592L8.42375 2.17108C8.32215 2.12028 8.14729 2.08507 7.92758 2.10631ZM7.78327 0.613268C8.2034 0.572659 8.67745 0.620873 9.09457 0.829434L9.22425 0.894277C10.2188 1.39157 10.5092 2.40914 10.5092 3.25429V8.45938L15.445 10.1046C16.9763 10.615 18.0092 12.048 18.0092 13.6621V15C18.0092 16.4892 17.64 18.128 16.8674 19.4204C16.0882 20.7238 14.8412 21.75 13.117 21.75H9.00007C7.72414 21.75 6.54119 21.5554 5.48717 21.0558C4.42412 20.5519 3.53547 19.7579 2.82488 18.6293L2.35414 17.8817L2.34391 17.8632C1.93258 17.1202 1.54913 16.0197 1.25129 15.0675C1.05562 14.4419 0.866438 13.7744 0.741129 13.3323C0.683736 13.1298 0.63974 12.9745 0.614655 12.8922C0.572504 12.754 0.524356 12.612 0.473111 12.4703C0.276217 11.9259 0.147971 11.1886 0.357598 10.5301C0.468216 10.1826 0.678509 9.84482 1.02825 9.60034C1.37494 9.35799 1.79701 9.25028 2.25914 9.25027C3.35184 9.25024 4.0618 9.90695 4.55316 10.4987C4.72861 10.71 4.90134 10.9452 5.05566 11.1554C5.11256 11.2328 5.16695 11.3069 5.21806 11.3751C5.3218 11.5136 5.4175 11.6358 5.50917 11.7426V2.9998C5.50917 2.20868 5.90455 1.46991 6.5628 1.03108C6.92275 0.791114 7.36091 0.654093 7.78327 0.613268Z"
            fill="black"
          />
        </svg>
      </div>
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
          <h1 className="imageTitle">
            {currentUserData?.firstName?.slice(0, 1)}
          </h1>
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

  .cursorPointerImage {
    position: absolute;
    top: 50%;
    margin-left: 7px;
    animation-name: example;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    cursor: pointer;
  }

  @keyframes example {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }

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
    text-transform: capitalize;
  }

  @media (max-width: 991.98px) {
    display: none;
    width: 0;
  }
`;

export default Sidebar;
