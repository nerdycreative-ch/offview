import styled from "styled-components";
import OpenSideBar from "../utils/OpenSideBar";
import Sidebar from "../utils/Sidebar";
import AuthRightSideContainer from "../wrappers/AuthRightSideContainer";
import AuthLeftSideContainer from "./AuthLeftSideContainer";
import { useDashboardContext } from "../../../context/dashboard";

const AuthContainer = ({ children, login }) => {
  return (
    <AuthContainerStyle>
      <div className="leftSideRegister">
        <AuthLeftSideContainer login={login}></AuthLeftSideContainer>
      </div>

      <div className="rightSideRegister">
        <AuthRightSideContainer>{children}</AuthRightSideContainer>
      </div>
    </AuthContainerStyle>
  );
};

const AuthContainerStyle = styled.div`
  display: flex;
  height: 100%;
  flex: 1;

  .leftSideRegister {
    flex: 1;
    background: #175041;
    position: sticky;
    background: orange;
    top: 0px;
    z-index: 50;
    width: 100%;
    height: 0px;
  }
  .rightSideRegister {
    flex: 1.6;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


`;

export default AuthContainer;
