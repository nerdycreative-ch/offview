import styled from "styled-components";
import { useState, useEffect } from "react";
import AppContainer from "../wrappers/AppContainer";
import StepsNumber from "../utils/StepsNumber";
import RegisterTitle from "../utils/RegisterTitle";
import SubTitle from "../utils/SubTitle";
import WhiteBackButton from "../utils/WhiteBackButton";
import Button from "../utils/Button";
import Link from "next/link";
import ExitButton from "../utils/ExitButton";

var thumbsize = 14;

const Price = ({ changeStep }) => {
  let min = 0;
  let max = 199;

  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const width = 199;
  const minWidth =
    thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const styled = {
    min: {
      width: minWidth,
      left: 0,
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
    },
  };

  useEffect(() => {
    setAvg((maxVal + minVal) / 2);
  }, [minVal, maxVal]);

  return (
    <PriceStyled>
      <div>
        <AppContainer>
          <div className="SPContainer" style={{ borderTopLeftRadius: 5 }}>
            <ExitButton content="Exit Search profile" />

            <StepsNumber stepsLength={3} />
            <RegisterTitle title="Price" fontSize={20} />
            <SubTitle content="We use this data to calculate matches with the properties on offer." />
            <p className="priceRangeText">Select price range</p>

            <div style={{ width: 199 }}>
              <div className="inputRangeContainer">
                <p className="inputNumber">{min}</p>
                <p className="inputNumber">{max}</p>
              </div>

              <div
                className="minMaxSlider"
                data-legendnum="2"
                data-rangemin={min}
                data-rangemax={max}
                data-thumbsize={thumbsize}
                data-rangewidth={width}
              >
                <label htmlFor="min" style={{ marginLeft: minVal }}>
                  {minVal.toFixed(0)}
                </label>
                <input
                  id="min"
                  className="min"
                  style={styled.min}
                  name="min"
                  type="range"
                  step="1"
                  min={min}
                  max={avg}
                  value={minVal}
                  onChange={({ target }) => setMinVal(Number(target.value))}
                />
                {/* <label  htmlFor="max">{maxVal.toFixed(0)}</label> */}
                <input
                  id="max"
                  className="max"
                  style={styled.max}
                  name="max"
                  type="range"
                  step="1"
                  min={avg}
                  max={max}
                  value={maxVal}
                  onChange={({ target }) => setMaxVal(Number(target.value))}
                />
              </div>
            </div>

            {/* BUTTON CONTAINER */}

            <div className="buttonContainer">
              <WhiteBackButton />
              <div style={{ width: 110, marginLeft: 16 }}>
                <Link href="/searchsteps" passHref>
                  <Button title="Continue" onClick={changeStep} />
                </Link>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
    </PriceStyled>
  );
};

const PriceStyled = styled.div`
  width: 100%;
  .SPContainer {
    padding: 0 20%;
    height: 90vh;
  }

  .inputRangeContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .priceRangeText {
    margin-top: 40px;
    margin-bottom: 24px;
  }

  .minMaxSlider {
    position: relative;
    margin-bottom: 50px;
    margin-top: 10px;
    width: 199px;
  }

  .minMaxSlider > label {
    /* display: none; */
  }

  .minMaxSlider > input {
    cursor: pointer;
    position: absolute;
  }

  /* webkit specific styling */
  .minMaxSlider > input {
    -webkit-appearance: none;
    outline: none !important;
    background: #175041;
    height: 4px;
    /* background-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    #175041 30%,
    #175041 60%,
    transparent 60%,
    transparent 100%
  ); */
  }

  .minMaxSlider > input::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 16px; /* Set a specific slider handle width */
    height: 16px; /* Slider handle height */
    background: #175041; /* Green background */
    cursor: pointer; /* Cursor on hover */
    border-radius: 100%;
  }

  .minMaxSlider > input::-webkit-slider-runnable-track {
    cursor: pointer;
  }
  .buttonContainer {
    display: flex;
    align-items: flex-end;
    padding-bottom: 32px;
    height: 40vh;
  }

  @media (max-width: 1199.98px) {
    .buttonContainer {
      display: flex;
      align-items: flex-end;
      padding-bottom: 32px;
      height: 6vh;
      margin-top: 140px;
    }
  }
  @media (max-width: 767.98px) {
    .SPContainer {
      padding: 0 10%;
      height: 90vh;
    }
  }
`;

export default Price;
