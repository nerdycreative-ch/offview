import styled from "styled-components";

const TagItem = ({ tag }) => {
  return (
    <TagItemStyled>
      <div className="tagItem">
        <span>{tag}</span>
      </div>
    </TagItemStyled>
  );
};

const TagItemStyled = styled.div`
  .tagItem {
    display: inline-block;
    background: var(--greenToBlack);
    border-radius: 20px;
    padding: 3px 12px;
  }
  .tagItem span {
    font-family: "Inter";
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--whiteColor);
  }
`;

export default TagItem;
