import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  console.log(router);

  return (
    <NavbarStyled>
      <div className="borderLineNavbar">
        <div className="leftSide">
          <Link href="/">
            <img
              className="logo"
              src="../../../assets/images/web/greenLogo.svg"
              alt="logo"
            />
          </Link>
          <ul className="navLinks">
            <li className="singleNavLink">
              <Link href="/">
                <a
                  className={`${
                    ((router.pathname.length == 1) && "/home") ? "activeNavLink" : ""
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
        <div className="rightSide">
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/register">
            <div className="registerBtnContainer">
              <Button text="Become a member" green />
            </div>
          </Link>
        </div>
      </div>
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
    border-bottom: 2px solid green;
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
`;

export default Navbar;
