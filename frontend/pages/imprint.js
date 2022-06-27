import styled from "styled-components";
import Footer from "../components/web/utils/Footer";
import GreenContainer from "../components/web/utils/GreenContainer";
import Header from "../components/web/utils/Header";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const Imprint = () => {
  const [imPrint, setImPrint] = useState([]);
  const [info, setInfo] = useState([]);

  const getImPrint = async () => {
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/getall`
      ).then((response) => setImPrint(response.data.imprinti));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImPrint();
  }, []);

  const getInformationData = async () => {
    try {
      await axios(
        `${process.env.NEXT_PUBLIC_URL}:${process.env.PORT}/imprint/dashboard/information/get`
      ).then((response) => setInfo(response.data.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInformationData();
  }, []);

  const directors = [
    {
      id: 1,
      name: "Albert Flores",
    },
    {
      id: 2,
      name: "Dianne Russell",
    },
  ];

  return (
    <ImprintStyled>
      <Head>
        <title>Imprint - Offview</title>
        <meta
          name="description"
          content="If you have any questions we're here to help.Call us +41 (0) 123 4567 89 or offview@gmail.com.Adress : Rüeggisingerstrasse 19 CH-6020 Emmenbrücke"
        />
      </Head>

      <Header title="Imprint" content="/" />
      <GreenContainer>
        <div className="allData">
          <div className="information">
            <h1 className="subTitle">Information</h1>
            <p>
              {/* offview AG Rüeggisingerstrasse 19 CH-6020 Emmenbrücke VAT-ID:
              CH123456789 */}
              {info.data}
            </p>
          </div>
          <div className="directors">
            <p className="director">Directors</p>
            {directors.map((director, index) => {
              return (
                <p key={index} className="directorName">
                  {director.name}
                </p>
              );
            })}
          </div>
          <div className="contactUs">
            <h1 className="subTitle">Contact Us</h1>
            <p className="phone">Phone: {info.phoneNumber}</p>
            <p className="email">E-Mail: {info.email}</p>
          </div>
        </div>
      </GreenContainer>

      <div className="imPrintContainer">
        {imPrint.map((print, index) => {
          return (
            <div key={index} className="singleItem">
              <p className="title">{print.title}</p>
              <p className="content">{print.content}</p>
            </div>
          );
        })}
      </div>

      <Footer />
    </ImprintStyled>
  );
};

const ImprintStyled = styled.div`
  .allData {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .information {
    width: 200px;
  }
  .allData .subTitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: var(--whiteColor);
    margin-bottom: 24px;
  }
  .directors {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
  }

  .imPrintContainer {
    padding: 120px 11.25%;
  }
  .imPrintContainer .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #0e3027;
  }
  .imPrintContainer .content {
    font-size: 14px;
    line-height: 18px;
    color: #717170;
    margin-top: 16px;
  }

  .singleItem:not(:first-child) {
    margin-top: 40px;
  }

  @media (max-width: 991.98px) {
    .allData > div {
      margin-top: 30px;
    }
    .allData .subTitle,
    .contactUs .subTitle {
      font-size: 20px;
    }
    .directors {
      margin-left: 20px;
    }
    .information p,
    .directorName,
    .contactUs p {
      font-size: 14px;
    }
  }
  @media (max-width: 767.98px) {
    .allData {
      flex-direction: column;
      justify-content: space-between;
    }
    .directors {
      margin: 0;
    }
  }

  @media (max-width: 575.98px) {
    .imPrintContainer {
      padding: 40px 5%;
    }
    .imPrintContainer .title {
      font-size: 16px;
    }
    .allData .subTitle {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 14px;
    }
    .information p,
    .directors p,
    .contactUs p {
      font-size: 14px;
    }
    .director {
      font-weight: bold;
    }
  }
`;

export default Imprint;
