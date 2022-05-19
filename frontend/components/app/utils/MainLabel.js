import Link from "next/link";
import styled from "styled-components";

const DashboardLabel = ({ labelName, labelImage, navigateTo }) => {
  return (
    <Link href={`${navigateTo}`}>
      <UserInputStyle>
        <div className="dlLeft">
          <img src={labelImage} alt={labelName} />
          <h1 className="labelName">{labelName}</h1>
        </div>
        <img
          src="../../../../assets/images/app/dashboard/blackRightArrow.svg"
          alt="right arrow"
        />
      </UserInputStyle>
    </Link>
  );
};

const UserInputStyle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 30px;

  .dlLeft {
    display: flex;
    align-items: center;
  }

  .labelName {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--Grey-600);
    margin-left: 17.5px;
  }
`;

export default DashboardLabel;
