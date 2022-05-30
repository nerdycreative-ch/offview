import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const router = useRouter();

  console.log(router);

  return (
    <NavbarStyled isDropDownOpen={isDropDownOpen}>
      <div className="borderLineNavbar">
        <div className="leftSide">
          <Link href="/">
            <img
              className="logo"
              src="../../../assets/images/web/greenLogo.svg"
              alt="logo"
            />
          </Link>

          <ul className={`navLinks ${isDropDownOpen && "showElementTest"} `}>
            <li className="singleNavLink">
              <Link href="/">
                <a
                  className={`${
                    router.pathname.length == 1 && "/home"
                      ? "activeNavLink"
                      : ""
                  }`}
                >
                  offview
                </a>
              </Link>
            </li>
            <li className="singleNavLink">
              <Link href="/about">
                <a
                  className={`${
                    router.pathname == "/about" ? "activeNavLink" : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="singleNavLink">
              <Link href="/faq">
                <a
                  className={`${
                    router.pathname == "/faq" ? "activeNavLink" : ""
                  }`}
                >
                  Faq/Prices
                </a>
              </Link>
            </li>
            <li className="singleNavLink">
              <Link href="/contact">
                <a
                  className={`${
                    router.pathname == "/contact" ? "activeNavLink" : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightSide ">
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/register">
            <div className="showElement">
              <div className="registerBtnContainer ">
                <Button text="Become a member" green />
              </div>
            </div>
          </Link>
          {!isDropDownOpen && (
            <img
              src="../../../assets/images/web/dropdownHamburgerMenu.svg"
              alt=""
              className="hamburgerMenu"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            />
          )}
          {isDropDownOpen && (
            <img
              src="../../../assets/images/web/greyXicon.png"
              alt=""
              className="closeBtn"
              onClick={() => setIsDropDownOpen(false)}
            />
          )}
        </div>
      </div>
      {isDropDownOpen && <div className="registerBtnContainer btnOpenDropDownMenu">
        <Button text="Become a member" green width="72%" />
      </div>}
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  /* margin-bottom: 160px; */

  .borderLineNavbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 11.25%;
    border-bottom: 1px solid var(--lightGrey-3);

    padding-bottom: 22px;
    padding-top: 40px;
  }

  .activeNavLink {
    border-bottom: 2px solid var(--greenToBlack);
    padding-bottom: 33.5px;
  }

  .leftSide {
    display: flex;
  }
  .logo {
    cursor: pointer;
  }
  .navLinks {
    display: flex;
    align-items: center;
  }
  .navLinks .singleNavLink {
    margin-left: 40px;
  }
  .singleNavLink a {
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
    /* border-bottom: 1px solid var(--greenToBlack);
    padding-bottom: 5px;
    border-radius: 1px; */
  }
  .rightSide {
    display: flex;
    align-items: center;
  }
  .registerBtnContainer {
    margin-left: 24px;
  }
  .hamburgerMenu {
    display: none;
  }
  .closeBtn {
    display: none;
  }
  .btnOpenDropDownMenu {
    display: none;
  }
  @media (max-width: 991.98px) {
    background: #ffffff;
    box-shadow: 0px 24px 128px -24px rgba(0, 0, 0, 0.08);

    /* height: ${(props) => (props.isDropDownOpen ? "55vh" : "10vh")}; */
    padding-bottom: 30px;

    display: flex;
    flex-direction: column;

    .borderLineNavbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 7%;
      border-bottom: 0;

      padding-bottom: 0;
      padding-top: 40px;
    }

    .leftSide {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .navLinks {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      display: none;
    }
    .singleNavLink {
      margin-top: 40px;
    }
    .showElement {
      display: none;
    }
    .showElementTest {
      display: block;
    }
    .registerBtnContainer {
      display: flex;
    }
    .hamburgerMenu {
      margin-left: 35px;
      display: block;
      cursor: pointer;
      padding: 5px;
    }
    .closeBtn {
      margin-left: 35px;
      display: block;
      padding: 5px;
      cursor: pointer;
    }
    .rightSide {
      display: flex;
      align-self: flex-start;
    }
    .activeNavLink {
      padding-bottom: 12.5px;
    }
    .btnOpenDropDownMenu {
      width: 100%;
      margin-left: 0px;
      display: flex;
      justify-content: center;
      margin-top: 32px;

    }
  }
`;

export default Navbar;
