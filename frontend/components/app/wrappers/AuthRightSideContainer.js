import { useDashboardContext } from "../../../context/dashboard";
import styled from "styled-components";

const AuthRightSideContainer = ({ children }) => {
  return (
    <AuthRightSideContainerStyled>
      <div className="subContainer">
        <div className="registerContainer">
          <div className="formContainer">{children}</div>
        </div>
      </div>
    </AuthRightSideContainerStyled>
  );
};

const AuthRightSideContainerStyled = styled.div`


  .subContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .registerContainer {
    width: 51.2%;
    /* margin-bottom: 60px; */
    height: 100%;
  }
  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .btnContainer {
    margin-top: 40px;
    width: 100%;
  }
  /* @media (min-width: 991.98px) {
  .registerContainer {
    width: 50%;
  }
} */

  @media (max-width: 575.98px) {
    .registerContainer {
      width: 50%;
    }
  }

  @media (max-width: 991.98px) {
    .registerContainer {
      width: 85%;
    }
  }
`;

export default AuthRightSideContainer;
