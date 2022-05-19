import styled from "styled-components";

const BigRadioButton = ({
  id,
  activeLink,
  width,
  type,
  height,
  onClick,
  nameOfCat,
  PCactiveLink,
}) => {
  // const [widthOfScreen, setWidthOffScreen] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidthOffScreen(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <UserInputStyle
      style={{
        width: `${width}%`,
        height,
        borderColor:
          activeLink == id || PCactiveLink == id ? "#298F74" : "#e1e1e1",
      }}
      onClick={onClick}
    >
      <label className="testContainer">
        <input type="radio" name={nameOfCat} className="testInput" />
        <span className="checkmark"></span>
      </label>

      {/* <input type="radio" name="property" className={styles.radioButton} /> */}
      <h1 className="type">{type}</h1>
    </UserInputStyle>
  );
};

const UserInputStyle = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;

  .radioButton {
    border: 1px solid #afafae;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
  }
  .type {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  .testContainer {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .testInput {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 50%;
  }

  .testContainer:hover .testInput ~ .checkmark {
    background-color: #ccc;
  }

  .testContainer .testInput:checked ~ .checkmark {
    background: #175041;
    border-radius: 10px;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .testContainer .testInput:checked ~ .checkmark:after {
    display: block;
  }

  .testContainer .checkmark:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../../../assets/images/whiteNike.svg");
  }



  @media (max-width: 340.98px) {
    .radioButtonContainer {
      width: 100%;
    }
  }
`;

export default BigRadioButton;
