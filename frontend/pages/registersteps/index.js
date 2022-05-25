import { useEffect, useState } from "react";
import styled from "styled-components";
import Atc from "../../components/app/auth/register/Atc";
import SelectProfile from "../../components/app/auth/register/SelectProfile";
import UserDetails from "../../components/app/auth/register/UserDetails";
import AuthLeftSideContainer from "../../components/app/wrappers/AuthLeftSideContainer";
import { useRouter } from "next/router";

import { useDashboardContext } from "../../context/dashboard";
import { useAuthContext } from "../../context/auth";
import CompanyDetails from "../../components/app/auth/register/CompanyDetails";

const Register = () => {
  const router = useRouter();
  const { page } = router.query;

  console.log("Paramteri " + page);

  const [formStep, setFormStep] = useState(1);

  const { singleCategory, singleTypeCategory } = useAuthContext();

  const { setStepsActiveLink, changeStep } = useDashboardContext();

  // const changeStep = () => {
  //   setFormStep((prev) => prev + 1);
  //   console.log(formStep);
  // };

  return (
    <RegisterStepsStyled>
      {page == "selectprofile" && (
        <SelectProfile
          changeStep={() => setStepsActiveLink((prev) => prev + 1)}
        />
      )}

      {page == "userdetails" &&
        singleCategory == "investor" &&
        singleTypeCategory == "private" && (
          <UserDetails
            privateDetails={singleTypeCategory == "private" ? true : false}
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )}

      {page == "userdetails" &&
        singleCategory == "seller" &&
        singleTypeCategory == "owner" && (
          <UserDetails
            privateDetails={singleTypeCategory == "private" ? true : false}
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )}

      {page == "userdetails" &&
        singleCategory == "investor" &&
        singleTypeCategory == "company" && (
          <CompanyDetails
            whichType={singleCategory == "investor" && true}
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )}

      {page == "userdetails" &&
        singleCategory == "seller" &&
        singleTypeCategory == "company" && (
          <CompanyDetails
            whichType={singleCategory == "seller" && false}
            changeStep={() => setStepsActiveLink((prev) => prev + 1)}
          />
        )}

      {page == "atc" && <Atc changeStep={changeStep} />}
    </RegisterStepsStyled>
  );
};

const RegisterStepsStyled = styled.div`
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
