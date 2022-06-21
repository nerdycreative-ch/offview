import styled from "styled-components";

const Menu = ({ links, activeLink, setActiveLink, dashboardClick,setDashboardClick }) => {
  return (
    <MenuStyled>
      <h1 onClick={() => setDashboardClick(!dashboardClick)}>DASHBOARD</h1>
      {dashboardClick &&
        links.map((item, index) => {
          return (
            <h1 className="subTitleDashboard" key={index} onClick={() => setActiveLink(item.id)}>
              {item.name}
            </h1>
          );
        })}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  background-color: var(--greenPeaBold);
  padding: 40px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;

  h1 {
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    color: #e1e1e1;
    margin-top: 30px;
    cursor: pointer;
  }
  .subTitleDashboard {
    margin-left: 12px;
  }
`;

export default Menu;
