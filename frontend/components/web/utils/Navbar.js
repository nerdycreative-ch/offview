import styled from "styled-components";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="leftSide">
        <Link href="/home">
          <img
            className="logo"
            src="../../../assets/images/web/greenLogo.svg"
            alt="logo"
          />
        </Link>
        <ul className="navLinks">
          <li className="singleNavLink">
            <Link href="/home">
              <a>offview</a>
            </Link>
          </li>
          <li className="singleNavLink">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="singleNavLink">
            <Link href="/faq">
              <a>Faq/Prices</a>
            </Link>
          </li>
          <li className="singleNavLink">
            <Link href="/contact">
              <a>Contact</a>
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
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 11.25%;
  /* margin-bottom: 160px; */

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
    border-bottom: 1px solid var(--greenToBlack);
    padding-bottom: 5px;
    border-radius: 1px;
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
