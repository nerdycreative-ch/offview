import { useEffect, useState } from "react";
import styled from "styled-components";
import Atc from "../../components/app/auth/register/Atc";
import SelectProfile from "../../components/app/auth/register/SelectProfile";
import UserDetails from "../../components/app/auth/register/UserDetails";
import AuthLeftSideContainer from "../../components/app/wrappers/AuthLeftSideContainer";
import { useRouter } from "next/router";

import { useDashboardContext } from "../../context/dashboard";

const Register = () => {
  const router = useRouter();
  const { page } = router.query;

  console.log("Paramteri " + page);

  const [formStep, setFormStep] = useState(1);

  const { stepsActiveLink, setStepsActiveLink, changeStep } =
    useDashboardContext();

  // const changeStep = () => {
  //   setFormStep((prev) => prev + 1);
  //   console.log(formStep);
  // };

  return (
    <RegisterStepsStyled>
      {/* {stepsActiveLink == 1 && (
        <SelectProfile
          changeStep={() => setStepsActiveLink((prev) => prev + 1)}
        />
      )} */}

      {page == "selectprofile" && (
        <SelectProfile
          changeStep={() => setStepsActiveLink((prev) => prev + 1)}
        />
      )}

      {page == "userdetails" && (
        <UserDetails
          changeStep={() => setStepsActiveLink((prev) => prev + 1)}
        />
      )}

      {page == "atc" && <Atc changeStep={changeStep} />}

      {/* 
      {stepsActiveLink == 2 && (
        <UserDetails
          changeStep={() => setStepsActiveLink((prev) => prev + 1)}
        />
      )} */}
      {/* {stepsActiveLink == 3 && <Atc changeStep={changeStep} />} */}

      {/* <UserDetails privateDetails={true} /> */}
      {/* <Atc /> */}
    </RegisterStepsStyled>
  );
};

const RegisterStepsStyled = styled.div`
  /* display: flex;
  justify-content: center;

  .rightSideRegister {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
  .btnContainer {
    margin-top: 40px;
    width: 100%;
  }
  .registerContainer {
    margin-bottom: 60px;
  }

  @media (max-width: 991.98px) {
    .leftSideRegister {
      display: none;
    }
    .register {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  }
`;

export default Register;
