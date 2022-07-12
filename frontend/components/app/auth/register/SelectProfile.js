import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import AuthContainer from "../../wrappers/AuthContainer";
import BackButton from "../../utils/BackButton";
import StepsNumber from "../../utils/StepsNumber";
import RegisterTitle from "../../utils/RegisterTitle";
import SubTitle from "../../utils/SubTitle";
import BigRadioButton from "../../utils/BigRadioButton";
import Button from "../../utils/Button";
import { useAuthContext } from "../../../../context/auth";
import { useRouter } from "next/router";
import { zoomIn } from "react-animations";

const bounceAnimation = keyframes`${zoomIn}`;

const BouncyDiv = styled.div`
  animation: 0.7s ${bounceAnimation};
`;

const SelectProfile = ({ changeStep }) => {
  const Router = useRouter();

  const {
    userData,
    setUserData,
    singleCategory,
    setSingleCategory,
    singleTypeCategory,
    setSingleTypeCategory,
  } = useAuthContext();

  const [heightOfScreen, setHeightOffScreen] = useState(0);

  useEffect(() => {
    setHeightOffScreen(screen.height);
  }, []);

  useEffect(() => {
    setSingleTypeCategory("");
  }, [singleCategory, singleTypeCategory]);

  console.log("SINGLE TYPE CATEGORY", singleCategory);

  // useEffect(() => {
  //   let momentaryAdvertisemetLink = JSON.parse(localStorage.getItem("IS"));
  //   let momentaryActiveLink = JSON.parse(localStorage.getItem("PC"));
  //   let momentaryElement;

  //   if (momentaryAdvertisemetLink) {
  //     document.querySelectorAll(".radioButtonGroup h1").forEach((element) => {
  //       momentaryElement = element.innerHTML.replace(" ", "").toLowerCase();
  //       if (
  //         momentaryElement == momentaryAdvertisemetLink ||
  //         momentaryElement == momentaryActiveLink
  //       ) {
  //         element.click();
  //       }
  //     });
  //   }
  // }, []);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Investor",
      key: "investor",
    },
    {
      id: 2,
      name: "Seller",
      key: "seller",
    },
    // {
    //   id: 3,
    //   name: "Investor & Seller",
    //   key: "investorseller",
    // },
  ]);

  const [typeOfCat, setTypeOfCat] = useState([
    {
      id: 4,
      name: "Private",
      key: "private",
    },
    {
      id: 5,
      name: "Owner",
      key: "owner",
    },
    {
      id: 6,
      ["name"]: singleCategory == "seller" ? "Broker" : "company",

      ["key"]: singleCategory == "seller" ? "broker" : "company",
    },
  ]);

  const onClick = () => {
    localStorage.setItem("IS", JSON.stringify(singleCategory));
    localStorage.setItem("PC", JSON.stringify(singleTypeCategory));

    changeStep();
    setUserData({
      ...userData,
      singleCategory: singleCategory,
      singleTypeCategory: singleTypeCategory,
    });

    Router.push("/registersteps?page=userdetails");
  };

  useEffect(() => {
    let momentaryAdvertisemetLink = JSON.parse(localStorage.getItem("IS"));
    let momentaryActiveLink = JSON.parse(localStorage.getItem("PC"));
    let momentaryElement;

    if (momentaryAdvertisemetLink) {
      document.querySelectorAll(".radioButtonGroup h1").forEach((element) => {
        momentaryElement = element.innerHTML.replace(" ", "").toLowerCase();
        if (
          momentaryElement == momentaryAdvertisemetLink ||
          momentaryElement == momentaryActiveLink
        ) {
          element.click();
        }
      });
    }
  }, []);

  console.log(userData);

  return (
    <SelectProfileStyled>
      <AuthContainer>
        <StepsNumber stepsLength={3} />
        <div className="registerStepContainer">
          <div>
            <div style={{ marginBottom: 40 }}>
              <RegisterTitle title="Select Profile" />
              <SubTitle
                marginTop={4}
                marginBottom={heightOfScreen < 900 ? 14 : 40}
                fontSize={14}
                content="In order to optimise your experience we need to know how you are going to use offmade. These information will be visible to other users."
              />
            </div>
            <div>
              <p className="smallText">Are you an Investor or a Seller?</p>
              <div className="radioButtonGroup">
                {categories.map((item, index) => {
                  return (
                    <BigRadioButton
                      onClick={() => setSingleCategory(item.key)}
                      key={index}
                      width={45}
                      type={item.name}
                      height={116}
                      activeLink={singleCategory}
                      id={item.key}
                      nameOfCat="IS"
                    />
                  );
                })}
              </div>
            </div>

            {singleCategory != null && (
              <BouncyDiv>
                <div
                  style={{
                    marginTop: `${heightOfScreen < 900 ? "14px" : "55px"}`,
                  }}
                  className="radioButtonForm"
                >
                  <p className={`smallText`}>
                    How are you going to use offview?
                  </p>
                  <div className="radioButtonGroup">
                    {singleCategory == "investor" ? (
                      <BigRadioButton
                        onClick={() => setSingleTypeCategory("private")}
                        // key={index}
                        width={45}
                        type="Private"
                        height={116}
                        PCactiveLink={singleTypeCategory}
                        id="private"
                        nameOfCat="PC"
                        typeOfCat
                      />
                    ) : (
                      <BigRadioButton
                        onClick={() => setSingleTypeCategory("owner")}
                        // key={index}
                        width={45}
                        type="Owner"
                        height={116}
                        PCactiveLink={singleTypeCategory}
                        id="owner"
                        nameOfCat="PC"
                        typeOfCat
                      />
                    )}

                    <BigRadioButton
                      onClick={() =>
                        setSingleTypeCategory(
                          singleCategory == "seller" ? "broker" : "company"
                        )
                      }
                      // key={index}
                      width={45}
                      type={singleCategory == "seller" ? "Broker" : "Company"}
                      height={116}
                      PCactiveLink={singleTypeCategory}
                      id={singleCategory == "seller" ? "broker" : "company"}
                      nameOfCat="PC"
                      typeOfCat
                    />
                  </div>
                </div>
              </BouncyDiv>
            )}
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <Button
            title="Continue"
            disabled={singleCategory && singleTypeCategory ? false : true}
            onClick={onClick}
          />
        </div>
      </AuthContainer>
    </SelectProfileStyled>
  );
};

const SelectProfileStyled = styled.div`
  /* STEP 1 */
  .registerStepContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .radioButtonGroup {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .radioButtonForm {
    margin-top: 55px;
  }

  @media (max-width: 991.98px) {
    .radioButtonGroup {
      display: flex;
    }
  }
`;

export default SelectProfile;
