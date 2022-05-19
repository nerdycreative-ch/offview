import OpenSideBar from "../utils/OpenSideBar";
import Sidebar from "../utils/Sidebar";
import RightSideContainer from "./RightSideContainer";
import styled from "styled-components";
import { useDashboardContext } from "../../../context/dashboard";

const AppContainer = ({ children }) => {
  //   const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const { isSideBarOpen, setIsSideBarOpen } = useDashboardContext();

  return (
    <AppContainerStyled>
      <div className="leftSideDashboard">
        {isSideBarOpen == false && (
          <Sidebar
            setIsSideBarOpen={setIsSideBarOpen}
            isSideBarOpen={isSideBarOpen}
          />
        )}

        {isSideBarOpen && (
          <OpenSideBar
            setIsSideBarOpen={setIsSideBarOpen}
            isSideBarOpen={isSideBarOpen}
          />
        )}
      </div>

      <RightSideContainer>
        <div className="dashboardContent">{children}</div>
      </RightSideContainer>
    </AppContainerStyled>
  );
};

const AppContainerStyled = styled.div`
  width: 100%;
  height: 100%;

  .leftSideDashboard {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export default AppContainer;
