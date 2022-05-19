import { useDashboardContext } from "../../../context/dashboard";
import styled from "styled-components";

const RightSideContainer = ({ children }) => {
  const { isSideBarOpen } = useDashboardContext();

  return (
    <RightSideContainerStyled>
      <div
        className={
          isSideBarOpen ? "isSideBarOpen" : "rightSideDashboard"
        }
      >
        {children}
      </div>
    </RightSideContainerStyled>
  );
};

const RightSideContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

.rightSideDashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 40px;
  margin-left: 90px;
}

.isSideBarOpen {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 40px;
  margin-left: 250px;
}

@media (max-width: 991.98px) {
  .rightSideDashboard {
    padding: 24px 20px;
    margin-left: 0px;
  }
  .isSideBarOpen {
    margin-left: 0px;
  }
}


`;

export default RightSideContainer;
