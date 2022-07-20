import OpenSideBar from "../utils/OpenSideBar";
import Sidebar from "../utils/Sidebar";
import RightSideContainer from "./RightSideContainer";
import styled, { keyframes } from "styled-components";
import { useDashboardContext } from "../../../context/dashboard";
import { slideInLeft } from "react-animations";
import { slideInRight } from "react-animations";

const AppContainer = ({ children }) => {
  //   const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const slideInLeftAnimation = keyframes`${slideInLeft}`;

  const LeftAnimation = styled.div`
    animation: 0.6s ${slideInLeftAnimation};
  `;

  const slideInRightAnimation = keyframes`${slideInRight}`;

  const RightAnimation = styled.div`
    animation: 0.6s ${slideInRightAnimation};
  `;

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

        {/* <LeftAnimation> */}
          {isSideBarOpen && (
            <OpenSideBar
              setIsSideBarOpen={setIsSideBarOpen}
              isSideBarOpen={isSideBarOpen}
            />
          )}
        {/* </LeftAnimation> */}
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
