import { Formik } from "formik";
import styled from "styled-components";
import Button from "../utils/Button";
import ExitButton from "../utils/ExitButton";
import RegisterTitle from "../utils/RegisterTitle";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import UserInput from "../utils/UserInput";
import WhiteBackButton from "../utils/WhiteBackButton";
import AppContainer from "../wrappers/AppContainer";

// import img from "../../../public/assets/images/app/dashboard/uploadBrowse.svg";

const ThirdArea = () => {
  return (
    <AppContainer>
      <ThirdAreaStyled>
        <ExitButton content="Exit Advertisement" />
        <StepsNumber stepsLength={4} />

        <RegisterTitle title="Third area" fontSize={20} />
        <SubTitle
          marginTop={4}
          // marginBottom={heig < 900 ? 14 : 40}
          content="We use this data to calculate matches with purchase profiles of potential buyers."
        />

        <Formik>
          {(formik) => {
            return (
              <>
                <div className="inLineItems">
                  <div className="singleItem">
                    <UserInput
                      labelName="Total Actual Rental Income *"
                      placeholder="€"
                      name="totalRentalIncome"
                    />
                  </div>
                  <div className="singleItem">
                    <UserInput
                      labelName="Return on Investment *"
                      placeholder="€"
                      name="returnInvesment"
                    />
                  </div>
                </div>

                <div className="dragAndDropImageContainer">
                  <p className="subTitle">Pictures of the Building</p>
                  <p className="subTitle ml6">Picture(s) *</p>

                  <div className="dragAndDrop">
                    <input type="file" id="upload" name="myfile" hidden />
                    <label htmlFor="upload" className="upload">
                      <img
                        src="../../../assets/images/app/dashboard/uploadBrowse.svg"
                        alt=""
                      />
                      <span className="dragDropUpload">
                        Drag and drop to upload or
                      </span>
                      <span className="browse">Browse</span>
                    </label>
                  </div>
                  <p className="supportedTypes">
                    Supported types: JPG, JPEG, PNG
                  </p>
                </div>

                <p className="subTitle ml6 bBottom">Uploaded files</p>

                <p className="noImageAdded">No image(s) are currently added</p>

                {/* SECOND FILE INPUT */}

                <div className="dragAndDropImageContainer">
                  <p className="subTitle">Upload your documents of proof</p>
                  <p className="subTitle ml6">Documents *</p>

                  <div className="dragAndDrop">
                    <input type="file" id="upload" name="myfile" hidden />
                    <label htmlFor="upload" className="upload">
                      <img
                        src="../../../assets/images/app/dashboard/uploadBrowse.svg"
                        alt=""
                      />
                      <span className="dragDropUpload">
                        Drag and drop to upload or
                      </span>
                      <span className="browse">Browse</span>
                    </label>
                  </div>
                  <p className="supportedTypes">
                    Supported types: PDF, DOC, DOCX
                  </p>
                </div>

                <p className="subTitle ml6 bBottom">Uploaded files</p>

                <p className="noImageAdded">No image(s) are currently added</p>

                {/* BUTTON CONTAINER */}
                <div className="buttonContainer">
                  <WhiteBackButton />
                  <div style={{ width: 110, marginLeft: 16 }}>
                    <Button title="Continue" />
                  </div>
                </div>
              </>
            );
          }}
        </Formik>
      </ThirdAreaStyled>
    </AppContainer>
  );
};

const ThirdAreaStyled = styled.div`
  padding: 0 10%;

  .inLineItems {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .singleItem {
    width: 48%;
  }

  .subTitle {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--black-0);
  }
  .ml6 {
    margin: 16px 0 6px 6px;
  }
  .upload {
    border: 2px dashed #cdcdcd;
    width: 100%;
    padding: 41px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 6px 0;
  }

  .dragDropUpload {
    margin: 0 4px 0 10px;
  }
  .browse {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--greenToBlack);
  }
  .supportedTypes {
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: var(--lightGreen);
    margin-left: 12px;
  }
  .bBottom {
    border-bottom: 1px solid #919190;
    padding-bottom: 16px;
  }
  .noImageAdded {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #919190;
    margin: 64px 0;
  }

  .buttonContainer {
    display: flex;
    padding-bottom: 52px;
  }

  @media (max-width: 575.98px) {
    padding: 0%;

    .buttonContainer {
      justify-content: center;
    }

    .inLineItems {
        display: flex;
        flex-direction: column;
    }
    .singleItem {
        width: 100%;
    }
  }
`;

export default ThirdArea;
