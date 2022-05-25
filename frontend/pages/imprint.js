import styled from "styled-components";
import Footer from "../components/web/utils/Footer";
import GreenContainer from "../components/web/utils/GreenContainer";
import Header from "../components/web/utils/Header";
import Head from "next/head";

const Imprint = () => {
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
              offview AG Rüeggisingerstrasse 19 CH-6020 Emmenbrücke VAT-ID:
              CH123456789
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
            <p className="phone">Phone: +41 (0) 123 4567 89</p>
            <p className="email">E-Mail: contact@offview.ch</p>
          </div>
        </div>
      </GreenContainer>

      <div className="imPrintContainer">
        <div className="singleItem">
          <p className="title">
            Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
            suscipit tellus mauris a diam maecenas.
          </p>
          <p className="content">
            At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
            nulla malesuada. Neque egestas congue quisque egestas diam in arcu.
            Sed vulputate mi sit amet mauris. Enim sed faucibus turpis in. Vitae
            justo eget magna fermentum iaculis eu non diam. Duis convallis
            convallis tellus id interdum velit laoreet id donec. Nunc eget lorem
            dolor sed. Congue mauris rhoncus aenean vel elit scelerisque.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada. Diam maecenas sed enim ut sem viverra aliquet eget sit.
            Faucibus turpis in eu mi. Penatibus et magnis dis parturient montes
            nascetur. Orci phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Adipiscing vitae proin sagittis nisl. Mauris pharetra
            et ultrices neque ornare. Id interdum velit laoreet id. Quis risus
            sed vulputate odio ut enim. Porta non pulvinar neque laoreet
            suspendisse interdum consectetur libero. Volutpat blandit aliquam
            etiam erat velit scelerisque in. Integer eget aliquet nibh praesent
            tristique magna sit. Nisi vitae suscipit tellus mauris a diam
            maecenas. Vel eros donec ac odio tempor. Pretium viverra suspendisse
            potenti nullam ac tortor. Purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus. Netus et malesuada fames ac. Imperdiet
            proin fermentum leo vel orci porta non. Sodales ut eu sem integer.
            In massa tempor nec feugiat nisl pretium fusce. Nisl vel pretium
            lectus quam. Viverra aliquet eget sit amet tellus.
          </p>
        </div>

        <div className="singleItem">
          <p className="title">
            Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
            suscipit tellus mauris a diam maecenas.
          </p>
          <p className="content">
            At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
            nulla malesuada. Neque egestas congue quisque egestas diam in arcu.
            Sed vulputate mi sit amet mauris. Enim sed faucibus turpis in. Vitae
            justo eget magna fermentum iaculis eu non diam. Duis convallis
            convallis tellus id interdum velit laoreet id donec. Nunc eget lorem
            dolor sed. Congue mauris rhoncus aenean vel elit scelerisque.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada. Diam maecenas sed enim ut sem viverra aliquet eget sit.
            Faucibus turpis in eu mi. Penatibus et magnis dis parturient montes
            nascetur. Orci phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Adipiscing vitae proin sagittis nisl. Mauris pharetra
            et ultrices neque ornare. Id interdum velit laoreet id. Quis risus
            sed vulputate odio ut enim. Porta non pulvinar neque laoreet
            suspendisse interdum consectetur libero. Volutpat blandit aliquam
            etiam erat velit scelerisque in. Integer eget aliquet nibh praesent
            tristique magna sit. Nisi vitae suscipit tellus mauris a diam
            maecenas. Vel eros donec ac odio tempor. Pretium viverra suspendisse
            potenti nullam ac tortor. Purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus. Netus et malesuada fames ac. Imperdiet
            proin fermentum leo vel orci porta non. Sodales ut eu sem integer.
            In massa tempor nec feugiat nisl pretium fusce. Nisl vel pretium
            lectus quam. Viverra aliquet eget sit amet tellus.
          </p>
        </div>

        <div className="singleItem">
          <p className="title">
            Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
            suscipit tellus mauris a diam maecenas.
          </p>
          <p className="content">
            At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
            nulla malesuada. Neque egestas congue quisque egestas diam in arcu.
            Sed vulputate mi sit amet mauris. Enim sed faucibus turpis in. Vitae
            justo eget magna fermentum iaculis eu non diam. Duis convallis
            convallis tellus id interdum velit laoreet id donec. Nunc eget lorem
            dolor sed. Congue mauris rhoncus aenean vel elit scelerisque.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada. Diam maecenas sed enim ut sem viverra aliquet eget sit.
            Faucibus turpis in eu mi. Penatibus et magnis dis parturient montes
            nascetur. Orci phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Adipiscing vitae proin sagittis nisl. Mauris pharetra
            et ultrices neque ornare. Id interdum velit laoreet id. Quis risus
            sed vulputate odio ut enim. Porta non pulvinar neque laoreet
            suspendisse interdum consectetur libero. Volutpat blandit aliquam
            etiam erat velit scelerisque in. Integer eget aliquet nibh praesent
            tristique magna sit. Nisi vitae suscipit tellus mauris a diam
            maecenas. Vel eros donec ac odio tempor. Pretium viverra suspendisse
            potenti nullam ac tortor. Purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus. Netus et malesuada fames ac. Imperdiet
            proin fermentum leo vel orci porta non. Sodales ut eu sem integer.
            In massa tempor nec feugiat nisl pretium fusce. Nisl vel pretium
            lectus quam. Viverra aliquet eget sit amet tellus.
          </p>
        </div>

        <div className="singleItem">
          <p className="title">
            Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
            suscipit tellus mauris a diam maecenas.
          </p>
          <p className="content">
            At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
            nulla malesuada. Neque egestas congue quisque egestas diam in arcu.
            Sed vulputate mi sit amet mauris. Enim sed faucibus turpis in. Vitae
            justo eget magna fermentum iaculis eu non diam. Duis convallis
            convallis tellus id interdum velit laoreet id donec. Nunc eget lorem
            dolor sed. Congue mauris rhoncus aenean vel elit scelerisque.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada. Diam maecenas sed enim ut sem viverra aliquet eget sit.
            Faucibus turpis in eu mi. Penatibus et magnis dis parturient montes
            nascetur. Orci phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Adipiscing vitae proin sagittis nisl. Mauris pharetra
            et ultrices neque ornare. Id interdum velit laoreet id. Quis risus
            sed vulputate odio ut enim. Porta non pulvinar neque laoreet
            suspendisse interdum consectetur libero. Volutpat blandit aliquam
            etiam erat velit scelerisque in. Integer eget aliquet nibh praesent
            tristique magna sit. Nisi vitae suscipit tellus mauris a diam
            maecenas. Vel eros donec ac odio tempor. Pretium viverra suspendisse
            potenti nullam ac tortor. Purus faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus. Netus et malesuada fames ac. Imperdiet
            proin fermentum leo vel orci porta non. Sodales ut eu sem integer.
            In massa tempor nec feugiat nisl pretium fusce. Nisl vel pretium
            lectus quam. Viverra aliquet eget sit amet tellus.
          </p>
        </div>
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
