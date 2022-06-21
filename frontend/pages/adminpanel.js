import { useState } from "react";
import styled from "styled-components";
import CPFAQ from "../components/admPanel/cpFaq";
import CPImprint from "../components/admPanel/cpImprint";
import CPInformation from "../components/admPanel/cpInformation";
import CPPrivacyPolicy from "../components/admPanel/cpPrivcacy";
import CPSocialMedia from "../components/admPanel/cpSocialMedia";
import Menu from "../components/admPanel/menu";

const AdminPanel = () => {
  const [activeLink, setActiveLink] = useState("information");
  const [dashboardClick, setDashboardClick] = useState(false);

  const [links, setLinks] = useState([
    {
      id: "information",
      name: "Information",
    },
    {
      id: "faq",
      name: "FAQ",
    },
    {
      id: "imprint",
      name: "Imprint",
    },
    {
      id: "privacypolicy",
      name: "Privacy Policy",
    },
    {
      id: "socialmedia",
      name: "Social Media",
    },
  ]);

  return (
    <AdminPanelStyled>
      <div className="leftSide">
        <Menu
          links={links}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          dashboardClick={dashboardClick}
          setDashboardClick={setDashboardClick}
        />
      </div>
      <div className="rightSide">
        {activeLink == "information" && <CPInformation />}
        {activeLink == "faq" && <CPFAQ />}
        {activeLink == "socialmedia" && <CPSocialMedia />}
        {activeLink == "privacypolicy" && <CPPrivacyPolicy />}
        {activeLink == "imprint" && <CPImprint />}
      </div>
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  width: 100%;
  display: flex;

  .leftSide {
    width: 300px;
  }
  .rightSide {
    flex: 1;
    padding: 40px 20%;
  }
`;

export default AdminPanel;
