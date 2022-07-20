import styled from "styled-components";
import Button from "../utils/Button";
import RegisterTitle from "../utils/RegisterTitle";
import StepsNumber from "../utils/StepsNumber";
import SubTitle from "../utils/SubTitle";
import AppContainer from "../wrappers/AppContainer";
import Link from "next/link";
import WhiteBackButton from "../utils/WhiteBackButton";
import ExitButton from "../utils/ExitButton";
import MapView from "../utils/MapView";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserInput from "../utils/UserInput";
import TextError from "../../web/utils/TextError";
import * as Yup from "yup";
import { useSearchProfileContext } from "../../../context/searchprofile";
import { useRouter } from "next/router";
import { Persist } from "formik-persist";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Helmet } from "react-helmet";

const SearchRegion = ({ changeStep }) => {
  const Router = useRouter();

  const [currentClickCity, setCurrentClickCity] = useState("");

  const { searchRegion, setSearchRegion, finalSubmit, setFinalSubmit } =
    useSearchProfileContext();

  const globalValues = {
    searchregion: currentClickCity,
  };

  const SearchRegionValidationSchema = Yup.object({
    searchregion: Yup.string().required("Region field is required"),
  });

  console.log("test", currentClickCity);

  const onSubmit = (values, onSubmitProps) => {
    console.log("VLERAT", values);
    setFinalSubmit({
      ...finalSubmit,
      region: values.searchregion,
    });

    changeStep();
    Router.push("/searchsteps?page=price");
  };

  useEffect(() => {
    $(document).ready(function () {
      $(".map").maphilight({ 	fill: true,
        fillColor: '0000ff',
        stroke: true,
        strokeColor: 'ff0000',
        strokeOpacity: 1,
        strokeWidth: 1,
        alwaysOn: false,
        neverOn: false,
        groupBy: false,
        wrapClass: true,
        shadow: false});
    });
  }, []);

  return (
    <AppContainer>
      <SearchRegionStyled>
        <div>
          <ExitButton content="Exit Search profile" />
          <StepsNumber stepsLength={3} />
          <RegisterTitle title="Search region" fontSize={20} />
          <SubTitle
            marginTop={4}
            content="Please create one or more search areas for your investment profile."
          />

          <Formik
            initialValues={globalValues}
            validationSchema={SearchRegionValidationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="searchInputZone">
                    <p className="region">Region</p>

                    <Field
                      type="text"
                      className="regionInput"
                      placeholder="Location of your search region ..."
                      name="searchregion"
                    />
                    <ErrorMessage name="searchregion" component={TextError} />
                  </div>

                  {/* MAPA */}

                  <div
                    className="map"
                    style={{
                      display: "block",
                      background: "url(new-map.png) 0% 0% / contain no-repeat",
                      position: "relative",
                      padding: "0px",
                      width: "624px",
                      height: "468px",
                    }}
                  >
                    <canvas
                      style={{
                        width: "624px",
                        height: "468px",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        padding: "0px",
                        border: "0px",
                      }}
                      height="468"
                      width="624"
                    ></canvas>
                    <img
                      className="map maphilighted"
                      src="new-map.png"
                      width="624"
                      height="468"
                      usemap="#world"
                      style={{
                        opacity: "1e-10",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        padding: "0px",
                        border: "0px",
                      }}
                    />
                  </div>
                  <map
                    name="world"
                    id="ImageMapsCom-image-maps-2022-07-19-075652"
                  >
                    <area
                      coords="44,324,56,332,64,341,56,349,48,361,36,357,29,361,25,362,25,356,25,350,25,346,39,342"
                      shape="poly"
                      title="Switzerland"
                      alt="Switzerland"
                      href="#"
                    />
                    <area
                      alt="Bern"
                      title="Bern"
                      shape="poly"
                      href="#"
                      coords="140,248,136,249,129,254,126,247,141,243,138,240"
                    />
                    <area
                      alt=""
                      title=""
                      shape="poly"
                      coords="150,210,162,226,167,220,172,219,166,211,165,203,164,203"
                      target="_self"
                    />
                  </map>
                  {/* FUNDI I MAPES */}
                  <MapView />

                  <div className="buttonContainer">
                    <WhiteBackButton />
                    <div style={{ width: 110, marginLeft: 16 }}>
                      <Button title="Continue" type="submit" />
                    </div>
                  </div>

                  <Persist name="search-region-form" />
                </Form>
              );
            }}
          </Formik>
        </div>
      </SearchRegionStyled>
    </AppContainer>
  );
};

const SearchRegionStyled = styled.div`
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

  .red-bg {
    background-color: red;
  }

  area {
    cursor: pointer;
  }
  .buttonContainer {
    display: flex;
    padding-bottom: 32px;
  }

  .windowPopup___n8cZo {
    height: 56px;
    width: 56px;
    border-radius: 7px 0px 0px 7px;
    overflow: hidden;
    transition: height 0.5s, width 0.5s;
    float: right;
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px,
      rgba(0, 0, 0, 0.25) 0px 1.5px 6px,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */
    font-family: Helvetica, Arial, sans-serif;
    border: 0;
  }
  .windowPopup___n8cZo.expanded___3DCOq {
    width: 350px;
    height: 250px;
  }
  .windowPopup___n8cZo.expanded___3DCOq .titleBar___rsA65 {
    cursor: default;
  }
  .windowPopup___n8cZo .titleBar___rsA65 {
    /* background-image: linear-gradient(45deg, #f4496f 0%, #ff4bcf 100%); */
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 8px 4px 8px 8px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .windowPopup___n8cZo .titleBar___rsA65 .shopifyIcon___3dKIq {
    height: 40px;
    width: 40px;
    -webkit-user-drag: none;
    margin-right: 12px;
    flex-shrink: 0;
  }
  .windowPopup___n8cZo .titleBar___rsA65 .titleBarText___1_z0U {
    color: white;
    font-size: 21px;
    font-weight: lighter;
    white-space: nowrap;
    flex-grow: 1;
    user-select: none;
  }
  .windowPopup___n8cZo .titleBar___rsA65 .closeButton___1bXCa {
    color: white;
  }
  /* .windowPopup___n8cZo .titleBar___rsA65 .closeButton___1bXCa:hover {
    background-color: rgba(0, 0, 0, 0.12);
  } */
  .windowPopup___n8cZo .popupContent___2bnhz {
    background-color: white;
    flex-grow: 1;
    padding: 12px;
    display: flex;
    flex-direction: column;
  }
  .windowPopup___n8cZo .popupContent___2bnhz .shopInfo___2g-Ih {
    flex-grow: 1;
    font-size: 18px;
  }
  .windowPopup___n8cZo .popupContent___2bnhz .shopInfo___2g-Ih > * {
    min-width: 326px;
  }
  .windowPopup___n8cZo
    .popupContent___2bnhz
    .shopInfo___2g-Ih
    .popupContentText___2_KVy {
    margin-bottom: 12px;
  }
  .windowPopup___n8cZo
    .popupContent___2bnhz
    .shopInfo___2g-Ih
    .randomShopInfo___1l98f {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .windowPopup___n8cZo .popupContent___2bnhz .checkOutMore___2QuSg {
    min-width: 326px;
    display: flex;
    align-items: center;
  }
  .windowPopup___n8cZo
    .popupContent___2bnhz
    .checkOutMore___2QuSg
    .checkOutMoreImage___fNBnT {
    width: 150px;
    margin-right: 8px;
  }
  .windowPopup___n8cZo
    .popupContent___2bnhz
    .checkOutMore___2QuSg
    .checkOutMoreText___3Hftj {
    font-size: 14px;
  }
  .windowPopup___n8cZo .popupContent___2bnhz .blockOptions___UAg6a {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    margin-top: 12px;
  }
  .windowPopup___n8cZo
    .popupContent___2bnhz
    .blockOptions___UAg6a
    .optionsButton___20NwV {
    padding-top: 4px;
    color: #b3b3b3;
    text-decoration: underline;
    cursor: pointer;
    width: fit-content;
  }
  .windowPopupIframe___2ztyD {
    width: 0px;
    height: 0px;
    z-index: 2147483647 !important;
    position: fixed !important;
    top: 285px !important;
    right: 0px !important;
    border: 0 !important;
  }

  @media (max-width: 991.98px) {
    padding: 0 10%;
  }
  @media (max-width: 767.98px) {
    padding: 0 5%;
  }
`;

export default SearchRegion;
