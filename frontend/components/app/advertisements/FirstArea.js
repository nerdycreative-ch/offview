import styled from "styled-components";
import Button from "../utils/Button";
import RegisterTitle from "../utils/RegisterTitle";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import AppContainer from "../wrappers/AppContainer";
import Link from "next/link";
import WhiteBackButton from "../utils/WhiteBackButton";
import ExitButton from "../utils/ExitButton";
import UserInput from "../utils/UserInput";
import MapView from "../utils/MapView";
import { Formik, Form, validateYupSchema } from "formik";
import { useRouter } from "next/router";
import { useAdvertisementContext } from "../../../context/advertisement";

const FirstArea = ({ changeStep }) => {
  const {
    globalValuesAdv,
    AdvertisementFirstArea,
    finalAdvertisement,
    setFinalAdvertisement,
  } = useAdvertisementContext();

  const Router = useRouter();

  const onSubmit = (values, onSubmitProps) => {
    setFinalAdvertisement({
      ...finalAdvertisement,
      title: values.title,
      street: values.street,
      No: values.no,
      postcode: values.postCode,
      town: values.town,
    });
    console.log(values);
    changeStep();
    Router.push("/advertisementsteps?page=aipliving");
  };

  return (
    <AppContainer>
      <FirstAreaStyled>
        <div>
          <ExitButton content="Exit Search profile" />
          <StepsNumber stepsLength={4} />
          <RegisterTitle title="First area" fontSize={20} />
          <SubTitle
            marginTop={4}
            // marginBottom={heig < 900 ? 14 : 40}
            content="We use this data to calculate matches with purchase profiles of potential buyers."
          />

          <Formik
            initialValues={globalValuesAdv}
            validationSchema={AdvertisementFirstArea}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <UserInput
                    labelName="Title"
                    placeholder="ex. House"
                    name="title"
                  />

                  <div className="inLineItems">
                    <div className="singleItem">
                      <UserInput
                        labelName="Street"
                        type="text"
                        placeholder="Address"
                        name="street"
                      />
                    </div>
                    <div className="singleItem">
                      <UserInput
                        labelName="No *"
                        type="text"
                        placeholder="00"
                        name="no"
                      />
                    </div>
                  </div>

                  <div className="inLineItems">
                    <div style={{ width: "26%" }}>
                      <UserInput
                        labelName="Postcode *"
                        type="text"
                        placeholder="012345"
                        name="postCode"
                      />
                    </div>
                    <div style={{ width: "71%" }}>
                      <UserInput
                        labelName="Town *"
                        type="text"
                        placeholder="Select town"
                        name="town"
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 40 }}>
                    <MapView />
                  </div>

                  {/* BUTTON CONTAINER */}
                  <div className="buttonContainer">
                    <WhiteBackButton />
                    <div style={{ width: 110, marginLeft: 16 }}>
                      <Button
                        type="submit"
                        title="Continue"
                        // onClick={onSubmit}
                      />
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </FirstAreaStyled>
    </AppContainer>
  );
};

const FirstAreaStyled = styled.div`
  padding: 0 15%;

  .searchInputZone {
    margin: 40px 0;
  }

  .region {
    font-family: "Messina Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #0b0b0b;
    margin-left: 10px;
    margin-bottom: 6px;
  }
  .regionInput {
    background-image: url("../../../assets/images/app/dashboard/blackSearchIcon.svg");
    background-repeat: no-repeat;
    background-position: left 14.25px center;
    width: 100%;
    padding: 14.25px 18.25px;
    padding-left: 38px;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
  }
  .mapContainer {
    background: #f5f5f5;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 416px;
    margin-bottom: 40px;
  }
  .mapView {
    font-family: "Messina Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #878786;
  }
  .buttonContainer {
    display: flex;
    padding-bottom: 32px;
  }

  .inLineItems {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .singleItem {
    width: 48%;
  }

  @media (max-width: 991.98px) {
    padding: 0 10%;
  }
  @media (max-width: 767.98px) {
    padding: 0 5%;
  }
  @media (max-width: 767.98px) {
    padding: 0 5%;

    .inLineItems {
      flex-wrap: wrap;
    }
    .singleItem {
      width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    padding: 0%;

    .buttonContainer {
      display: flex;
      justify-content: center;
    }
  }
`;

export default FirstArea;
