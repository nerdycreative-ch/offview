import { useState } from "react";
import BackButton from "../../utils/BackButton";
import Button from "../../utils/Button";
import RegisterTitle from "../../utils/RegisterTitle";
import StepsNumber from "../../utils/StepsNumber";
import SubTitle from "../../utils/SubTitle";
import AuthContainer from "../../wrappers/AuthContainer";
import styled from "styled-components";
import { useWebContext } from "../../../../context/webContext";
import RegisterSuccessFullModal from "./RegisterSuccessFullModal";
import { useAuthContext } from "../../../../context/auth";

const Atc = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const { modalIsOpen, setIsOpen } = useWebContext();

  const { userData, setUserData, submitDataToBackend } = useAuthContext();

  return (
    <AtcStyled>
      {" "}
      <AuthContainer>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: "48px 0",
            }}
          >
            {modalIsOpen && <RegisterSuccessFullModal />}

            <BackButton />
            <StepsNumber stepsLength={3} />
            <RegisterTitle
              title="Confidentiality Agreement and Terms & Conditions."
              fontSize={24}
            />
            <SubTitle
              marginTop={4}
              marginBottom={40}
              content="Please take note of our Terms of Service and the confidentiality agreement to continue with the verification steps."
            />
            <div className="readAgreementSection">
              <div className="caContent">
                <p className="caTitle">Confidentiality Agreement</p>
                <SubTitle content='I and, if applicable, the company affiliated with me (hereinafter "USER") accept the following confidentiality agreement:' />
                <p className="readAgreement">Read agreement</p>
              </div>
            </div>
            <div className="acceptAgreement">
              <div
                className="atcCheckbox"
                onClick={() => setIsAccepted(!isAccepted)}
              >
                {isAccepted ? (
                  <img
                    src="../../../assets/images/nike.svg"
                    alt="tick"
                    className="tickImage"
                  />
                ) : (
                  <div className="tickImage"></div>
                )}
              </div>
              <p className="acText" onClick={() => setIsAccepted(!isAccepted)}>
                I accept Confidentiality Agreement and
                <span className="tcSpan"> Terms & Conditions *</span>
              </p>
            </div>
          </div>

          <div>
            <Button
              title="Continue"
              disabled={!isAccepted}
              onClick={() => {
                submitDataToBackend();
                setIsOpen(true);
              }}
            />
          </div>
        </div>
      </AuthContainer>
    </AtcStyled>
  );
};

const AtcStyled = styled.div`
  .readAgreementSection {
    margin: 40px 0;
    background: #f5f5f5;
    border-radius: 8px;
  }
  .caContent {
    padding: 16px;
  }

  .caTitle {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--black-0);
    margin-bottom: 12px;
  }
  .readAgreement {
    margin-top: 32px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--greenToBlack);
    /* font family is Inter */
  }
  .acceptAgreement {
    display: flex;
    align-items: center;
  }

  .acCheckbox {
    outline: 1px solid #afafae !important;
    border-radius: 4px;
    height: 16px;
    width: 16px;
  }
  .tickImage {
    cursor: pointer;
    height: 10px;
    width: 10px;
  }

  .acText {
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }
  .tcSpan {
    color: var(--greenToBlack);
  }

  .atcCheckbox {
    border: 1px solid #afafae;
    border-radius: 4px;
    height: 16px;
    width: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }

  @media (max-width: 991.98px) {
    .userDetailsContainer {
      width: 70%;
    }
  }

  @media (max-width: 575.98px) {
    .userDetailsContainer {
      width: 90%;
    }
  }
`;

export default Atc;
