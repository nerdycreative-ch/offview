import styled from "styled-components";
import { useWebContext } from "../../../context/webContext";
import ModalComp from "./Modal";
import Button from "./Button";
import Link from "next/link";

const MessageSubmited = () => {
  const { setIsOpen } = useWebContext();

  return (
    <ModalComp>
      <MessageSubmitedStyled>
        <img src="../../../assets/images/register/GreenTick.svg" alt="" />
        <h1 className="thanksTitle">THANK YOU</h1>
        <p className="yourMessage">your message has been sent!</p>

        <div className="bottomPart">
          <div className="rightMarginBtn">
            <Button text="Close" grey onClick={() => setIsOpen(false)} />
          </div>
          <Link href="/">
            <Button text="Go to Home" green />
          </Link>
        </div>
      </MessageSubmitedStyled>
    </ModalComp>
  );
};

const MessageSubmitedStyled = styled.div`
  text-align: center;
  padding: 10px 60px;

  .thanksTitle {
    margin: 24px 0 10px 0;
    color: var(--greenPea);
    font-size: 26px;
  }
  .yourMessage {
    color: var(--greenToBlack);
    margin-bottom: 20px;
  }

  .bottomPart {
    margin-top: 24px;
    display: flex;
    justify-content: center;
  }
  .rightMarginBtn {
    margin-right: 16px;
  }
`;

export default MessageSubmited;
