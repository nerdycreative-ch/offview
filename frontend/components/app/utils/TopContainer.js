import React, { useState, useRef, useEffect } from "react";
import RegisterTitle from "../utils/RegisterTitle";
import SubTitle from "../utils/SubTitle";
import PlusButton from "../utils/PlusButton";
import styled from "styled-components";
import Link from "next/link";

const TopContainer = ({
  title,
  fontSize,
  content,
  plusButtonTitle,
  href,
  dropdownMenu,
}) => {
  const [showDropdownMenu, setShowDropDownMenu] = useState("");

  const catMenu = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  });

  const closeOpenMenus = (e) => {
    if (
      catMenu.current &&
      showDropdownMenu &&
      !catMenu.current.contains(e.target)
    ) {
      setShowDropDownMenu(false);
    }
  };

  return (
    <TopContainerStyled>
      <div className="topInformation">
        <RegisterTitle title={title} fontSize={fontSize} />
        <SubTitle content={content} />
      </div>

      <div className="dropDownContainer">
        <div onClick={() => setShowDropDownMenu(!showDropdownMenu)}>
          <PlusButton title={plusButtonTitle} href={href} />
        </div>
        {dropdownMenu && showDropdownMenu && (
          <div className="dropdownMenu" ref={catMenu}>
            <Link href="/searchsteps">
              <p>Search Profile</p>
            </Link>
            <p>Real Estate</p>
          </div>
        )}
      </div>
    </TopContainerStyled>
  );
};
const TopContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  .dropDownContainer {
    position: relative;
  }
  .dropdownMenu {
    width: 160px;
    background: var(--whiteColor);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 20px;
    margin-top: 10px;
    position: absolute;
    right: 0;
  }
  .dropdownMenu p {
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-600);
    cursor: pointer;
  }
  .dropdownMenu p:not(:first-child) {
    margin-top: 16px;
  }

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 35px;

    .topInformation {
      margin-bottom: 16px;
    }
    .dropdownMenu {
      position: absolute;
      left: 0;
    }
  }
`;

export default TopContainer;
