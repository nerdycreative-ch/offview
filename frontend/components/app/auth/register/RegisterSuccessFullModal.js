import styled from "styled-components";
import Modal from "../../../../components/web/utils/Modal";
import image from "../../../../public/assets/images/register/GreenTick.svg";
import Button from "../../../web/utils/Button";
import Link from "next/link";
import { useWebContext } from "../../../../context/webContext";

const RegisterSuccessFullModal = () => {
  const { setIsOpen } = useWebContext();

  return (
    <Modal>
      <RegisterSuccessFullModalStyled>
        <img src="../../../../assets/images/register/GreenTick.svg" alt="" />
        <h1 className="registerSuccess">Register success</h1>
        <p>
          Thank you for your registration, pleas verify your e-mail and login.
        </p>
        <p>Check the email we have send to you on 09.04.2022</p>

        <div className="bottomPart">
          <div className="rightMarginBtn">
            <Button text="Close" grey onClick={() => setIsOpen(false)} />
          </div>
          <Link href="/login">
            <Button text="Login" green />
          </Link>
        </div>
      </RegisterSuccessFullModalStyled>
    </Modal>
  );
};

const RegisterSuccessFullModalStyled = styled.div`
  width: 500px;
  text-align: center;
  padding: 40px;

  .registerSuccess {
    margin-top: 25px;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: var(--black-0);
  }
  p {
    margin-bottom: 16px;
  }
  .bottomPart {
    margin-top: 24px;
    display: flex;
    justify-content: center;
  }
  .rightMarginBtn {
    margin-right: 16px;
  }

  @media (max-width: 767.98px) {
    padding: 40px 10px;
  }
  @media (max-width: 575.98px) {
    width: 330px;
  }
  @media (max-width: 400px) {
    width: 260px;
    padding: 20px 0;
  }
  @media (max-width: 380px) {
    width: 250px;
    padding: 20px 0;
  }
`;

export default RegisterSuccessFullModal;
