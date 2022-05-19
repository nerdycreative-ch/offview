import styled from "styled-components";

const Sponsors = () => {
  return (
    <SponsorsStyled>
      <img src="../../../assets/images/web/Sponsor1.png" alt="sponsor" />
      <img src="../../../assets/images/web/Sponsor2.png" alt="sponsor" />
      <img src="../../../assets/images/web/Sponsor3.png" alt="sponsor" />
      <img src="../../../assets/images/web/Sponsor4.png" alt="sponsor" />
      <img src="../../../assets/images/web/Sponsor5.png" alt="sponsor" />
    </SponsorsStyled>
  );
};

const SponsorsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 420.98px) {
    
  }
`;  

export default Sponsors;
