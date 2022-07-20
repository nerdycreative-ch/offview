import { useState } from "react";
import styled from "styled-components";
import PersonalDataItem from "../components/app/utils/PersonalDataItem";
import AppContainer from "../components/app/wrappers/AppContainer";
import { useAuthContext } from "../context/auth";

// import sda from "../public/assets/images/app/dashboard/pencil.svg";

const Profile = () => {
  const [isActive, setIsActive] = useState("account");

  const { currentUserData } = useAuthContext();

  console.log("CURRENT USER DATA", currentUserData);

  return (
    <AppContainer>
      <ProfileStyed>
        <div className="leftSideProfile">
          <div className="imageProfileContainer"></div>
          <div className="info">
            <h1>
              {currentUserData.firstName} {currentUserData.lastName}
            </h1>
            <p className="role">{currentUserData.mainrole}</p>

            <div className="editBtn">
              <img src="../assets/images/app/dashboard/pencil.svg" alt="" />
              <p>Edit profile</p>
            </div>
          </div>
        </div>

        <div className="rightSideProfile">
          {/* TOP CONTAINER */}
          <div className="topProfileContainer">
            <div className="singleData">
              <h1>18</h1>
              <p>Search profile</p>
            </div>
            <div className="singleData">
              <h1>40</h1>
              <p>Real estate offers</p>
            </div>
            <div className="singleData">
              <h1>284</h1>
              <p>Deals</p>
            </div>
          </div>

          {/* SELECT TYPE */}

          <div className="selectType">
            <p
              className={isActive == "account" && "activeLink"}
              onClick={() => setIsActive("account")}
            >
              Account
            </p>
            <p
              className={isActive == "searchprofile" && "activeLink"}
              onClick={() => setIsActive("searchprofile")}
            >
              Search profile
            </p>
          </div>

          {/* USER PERSONAL DATA */}

          <div className="bottomPart">
            <div className="personalDataContainer">
              <p className="title">Personal Information</p>

              <div className="personalData">
                <div className="personalDataLeftSide">
                  <PersonalDataItem
                    type="Gender"
                    result={currentUserData.gender}
                  />
                  <PersonalDataItem
                    type="Email"
                    result={currentUserData.email}
                    textTransformNone
                  />
                  <PersonalDataItem
                    type="Category"
                    result={currentUserData.role}
                  />
                </div>
                <div className="personalDataRightSide secondColumn">
                  <PersonalDataItem
                    type="Name"
                    result={
                      currentUserData.firstName + " " + currentUserData.lastName
                    }
                  />
                  <PersonalDataItem
                    type="Phone"
                    result={currentUserData.phone}
                  />
                  <PersonalDataItem
                    type="Address"
                    result={currentUserData.street}
                  />
                </div>
              </div>
            </div>

            <div className="personalDataContainer">
              <p className="title">Experience & Activities</p>

              <div className="personalData">
                <div className="personalDataLeftSide">
                  <PersonalDataItem type="Experience" result="1 - 3 year" />
                  <PersonalDataItem type="Focus" result="House, Villa" />
                </div>
                <div className="personalDataRightSide secondColumn">
                  <PersonalDataItem
                    type="Trade Volume"
                    result="1 - 5 Million"
                  />
                  <PersonalDataItem type="Region" result="Worldwide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileStyed>
    </AppContainer>
  );
};

const ProfileStyed = styled.div`
  display: flex;

  .leftSideProfile {
    padding-right: 62px;

    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      color: var(--black-0);
      margin-top: 26px;
      text-transform: capitalize;
    }
    .role {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: var(--Grey-500);
      margin: 4px 0 32px 0;
      text-transform: capitalize;
    }
  }

  .imageProfileContainer {
    height: 120px;
    width: 120px;
    background-color: green;
    border-radius: 50%;
  }

  .editBtn {
    padding: 12px;
    background-color: var(--greenToBlack);
    display: flex;
    justify-content: space-around;
    border-radius: 4px;
    cursor: pointer;
    width: 128px;

    p {
      font-family: "Inter";
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
    }
  }

  .rightSideProfile {
    flex: 1;
    padding: 0 5%;
  }
  .topProfileContainer {
    background: var(--whiteColor);
    box-shadow: 0px 24px 128px -24px rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    display: flex;
    justify-content: space-around;
    padding: 24px 0;
  }
  .singleData h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: var(--black-0);
    text-align: center;
  }
  .singleData p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
  }
  .selectType {
    display: flex;
    margin: 48px 0;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 20px;
  }
  .selectType p {
    margin-right: 24px;
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
    cursor: pointer;
  }
  .activeLink {
    margin-bottom: -20px;
    border-bottom: 1px solid var(--greenPeaBold);
  }
  .personalDataContainer {
    margin-bottom: 64px;
  }
  .personalDataContainer .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--black-0);
  }
  .personalData {
    display: flex;
    justify-content: space-between;
  }
  .personalDataLeftSide,
  .personalDataRightSide {
    flex: 1;
  }
  .personalDataRightSide {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  @media (max-width: 767.98px) {
    flex-direction: column;

    .leftSideProfile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 0px;
    }
    .rightSideProfile {
      margin-top: 40px;
      padding: 0;
    }
    .singleData h1 {
      font-size: 18px;
      line-height: 36px;
    }
    .singleData p {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      color: var(--Grey-500);
    }
  }
`;

export default Profile;
