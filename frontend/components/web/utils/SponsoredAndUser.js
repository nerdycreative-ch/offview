import styled from "styled-components";
import Sponsors from "./Sponsors";
import UserReviews from "./UserReviews";

const SponsoredAndUser = () => {
  return (
    <SponsoredAndUserStyled>
      {/* SPONSORS */}
      {/* <Sponsors /> */}

      {/*WHY CUSTOMERS LOVE  */}
      <div className="whyCustomersLove">
        <h1 className="title">Why our costumers love offview</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className="verticalLine"></div>
      </div>
      {/* USER REVIEWS */}
      <UserReviews />
    </SponsoredAndUserStyled>
  );
};

const SponsoredAndUserStyled = styled.div`
  padding: 160px 19.4%;
  background-image: linear-gradient(#f0f0f0, #ffffff);

  .whyCustomersLove {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 180px 0;
  }
  .whyCustomersLove .title {
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: var(--greenPeaBold);
  }
  .whyCustomersLove p {
    font-size: 14px;
    line-height: 18px;
    color: var(--Grey-500);
    margin: 8px 0;
  }
  @media (max-width: 991.98px) {
    padding: 50px 10%;
  }
  .whyCustomersLove {
    margin: 60px 0;
  }
`;

export default SponsoredAndUser;
