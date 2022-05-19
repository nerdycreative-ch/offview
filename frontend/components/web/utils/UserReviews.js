import { useState, useEffect } from "react";
import styled from "styled-components";

const UserReviews = () => {
  const [userReview, setUserReview] = useState([
    {
      id: 1,
      reviewText:
        "1Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque facilis impedit quam, enim totam laborum magni quis molestiae doloremque cum cupiditate nesciunt nihil quod. Temporibus veritatis magni laudantium eaque porro, iste sed vel, sapiente, quaerat illum natus aut accusantium maxime magnam exercitationem voluptatibus iusto quas consequatur voluptatum perferendis. In doloremque excepturi, non rerum molestiae nobis natus rem saepe, nulla, sed laudantium sequi porro quisquam nisi cupiditate optio ullam facilis quidem placeat! Consectetur, fuga animi.",
      name: "Esther Howard",
      job: "Managing Director",
    },
    {
      id: 2,
      reviewText:
        "2Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque facilis impedit quam, enim totam laborum magni quis molestiae doloremque cum cupiditate nesciunt nihil quod. Temporibus veritatis magni laudantium eaque porro, iste sed vel, sapiente, quaerat illum natus aut accusantium maxime magnam exercitationem voluptatibus iusto quas consequatur voluptatum perferendis. In doloremque excepturi, non rerum molestiae nobis natus rem saepe, nulla, sed laudantium sequi porro quisquam nisi cupiditate optio ullam facilis quidem placeat! Consectetur, fuga animi.",
      name: "David Silva",
      job: "SEO",
    },
    {
      id: 3,
      reviewText:
        "3Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque facilis impedit quam, enim totam laborum magni quis molestiae doloremque cum cupiditate nesciunt nihil quod. Temporibus veritatis magni laudantium eaque porro, iste sed vel, sapiente, quaerat illum natus aut accusantium maxime magnam exercitationem voluptatibus iusto quas consequatur voluptatum perferendis. In doloremque excepturi, non rerum molestiae nobis natus rem saepe, nulla, sed laudantium sequi porro quisquam nisi cupiditate optio ullam facilis quidem placeat! Consectetur, fuga animi.",
      name: "Leo Messi",
      job: "CEO",
    },
  ]);

  const [index, setIndex] = useState(0);

  const {reviewText,name,job} = userReview[index];

  const checkNumber = (number) => {
    if (number > userReview.length - 1) {
      return 0;
    }
    if (number < 0) {
      return userReview.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  useEffect(() => {}, [index]);

  return (
    <UserReviewsStyled>
      <div className="leftSide">
        <img src="../../../assets/images/web/doubleQuotes.png" alt="" />
      </div>
      <div className="rightSide">
        <p className="content">{reviewText}</p>
        <div className="bottomPart">
          <p className="name">{name}</p>
          <p className="job">{job}</p>

          <div className="arrowContainer">
            <img
              onClick={prevPerson}
              src="../../../assets/images/web/greyLeftArrow.png"
              alt=""
            />
            <img
              onClick={nextPerson}
              src="../../../assets/images/web/GreyRightArrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </UserReviewsStyled>
  );
};

const UserReviewsStyled = styled.div`
  display: flex;

  .leftSide {
  }
  .rightSide .content {
    font-size: 14px;
    line-height: 18px;
    color: var(--lightGreen);
  }

  .bottomPart {
    margin-top: 64px;
  }
  .bottomPart .name {
    font-weight: 600;
    line-height: 24px;
    color: var(--greenToBlack);
  }
  .bottomPart .job {
    font-size: 14px;
    line-height: 18px;
    color: var(--lightGreen);
    margin-top: 4px;
  }
  .arrowContainer {
    margin-top: 50px;
    width: 70px;
    display: flex;
    justify-content: space-between;
  }
  .arrowContainer img {
    cursor: pointer;
  }
  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
  }
  .leftSide img {
    height: 80px;
  }
`;

export default UserReviews;
