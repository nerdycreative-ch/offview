import styled from "styled-components";
import Footer from "../components/web/utils/Footer";
import GreenContainer from "../components/web/utils/GreenContainer";
import Header from "../components/web/utils/Header";
import Head from "next/head";

const PrivacyPolicy = () => {
  const data = [
    {
      id: 1,
      title:
        "Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae suscipit tellus mauris a diam maecenas.",
      content: `At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet nulla malesuada. Neque egestas congue quisque egestas diam in arcu. Sed vulputate mi sit amet mauris. Enim sed faucibus turpis in. Vitae justo eget magna fermentum iaculis eu non diam. Duis convallis convallis tellus id interdum velit laoreet id donec. Nunc eget lorem dolor sed. Congue mauris rhoncus aenean vel elit scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada. Diam maecenas sed enim ut sem viverra aliquet eget sit. Faucibus turpis in eu mi. Penatibus et magnis dis parturient montes nascetur. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Adipiscing vitae proin sagittis nisl. Mauris pharetra et ultrices neque ornare. Id interdum velit laoreet id. Quis risus sed vulputate odio ut enim. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Volutpat blandit aliquam etiam erat velit scelerisque in.

          Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae suscipit tellus mauris a diam maecenas. Vel eros donec ac odio tempor. Pretium viverra suspendisse potenti nullam ac tortor. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Netus et malesuada fames ac. Imperdiet proin fermentum leo vel orci porta non. Sodales ut eu sem integer. In massa tempor nec feugiat nisl pretium fusce. Nisl vel pretium lectus quam. Viverra aliquet eget sit amet tellus.`,
    },
    {
      id: 2,
      title:
        "Tellus mauris a diam maecenas sed enim. Ut etiam sit amet nisl purus in mollis nunc.",
      content: `Vitae justo eget magna fermentum iaculis eu non diam. Duis convallis convallis tellus id interdum velit laoreet id donec. Nunc eget lorem dolor sed. Congue mauris rhoncus aenean vel elit scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada. Diam maecenas sed enim ut sem viverra aliquet eget sit. Faucibus turpis in eu mi. Penatibus et magnis dis parturient montes nascetur. 

        Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae suscipit tellus mauris a diam maecenas. Vel eros donec ac odio tempor. Pretium viverra suspendisse potenti nullam ac tortor. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Netus et malesuada fames ac. Imperdiet proin fermentum leo vel orci porta non. Sodales ut eu sem integer. In massa tempor nec feugiat nisl pretium fusce. Nisl vel pretium lectus quam. Viverra aliquet eget sit amet tellus.`,
    },
    {
      id: 1,
      title: "Ultrices sagittis orci a scelerisque.",
      content: `Mi tempus imperdiet nulla malesuada. Neque egestas congue quisque egestas diam in arcu. Sed vulputate mi sit amet mauris.
        Nunc eget lorem dolor sed. Congue mauris rhoncus aenean vel elit scelerisque.
        Diam maecenas sed enim ut sem viverra aliquet eget sit. Faucibus turpis in eu mi. Penatibus et magnis dis parturient montes nascetur. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
        Mauris pharetra et ultrices neque ornare. Id interdum velit laoreet id.
        Volutpat blandit aliquam etiam erat velit scelerisque in.
        Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae suscipit tellus mauris a diam maecenas.
        Sodales ut eu sem integer. In massa tempor nec feugiat nisl pretium fusce.
        Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. `,
    },
  ];

  return (
    <PrivacyPolicyStyled>
      <Head>
        <title>Privacy Policy - Offview</title>
        <meta
          name="description"
          content="Offview is a brokerage platform for real estate.The platform offer is aimed at prospective buyers and sellers of real estate."
        />
      </Head>

      <Header title="Privacy Policy" />
      {/* GREEN CONTAINER */}
      <GreenContainer>
        <p>www.offview.ch</p>
        <p>Status: 10.04.2022</p>
      </GreenContainer>

      {/* PRIVACY CONTENT */}

      <div className="privacyPolicy">
        <div className="singleItem">
          <div className="number">1.</div>
          <div className="singleItemData">
            <p className="title">
              Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas.
            </p>
            <p className="content">
              At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
              nulla malesuada. Neque egestas congue quisque egestas diam in
              arcu. Sed vulputate mi sit amet mauris. Enim sed faucibus turpis
              in. Vitae justo eget magna fermentum iaculis eu non diam. Duis
              convallis convallis tellus id interdum velit laoreet id donec.
              Nunc eget lorem dolor sed. Congue mauris rhoncus aenean vel elit
              scelerisque. Pellentesque habitant morbi tristique senectus et
              netus et malesuada. Diam maecenas sed enim ut sem viverra aliquet
              eget sit. Faucibus turpis in eu mi. Penatibus et magnis dis
              parturient montes nascetur. Orci phasellus egestas tellus rutrum
              tellus pellentesque eu tincidunt. Adipiscing vitae proin sagittis
              nisl. Mauris pharetra et ultrices neque ornare. Id interdum velit
              laoreet id. Quis risus sed vulputate odio ut enim. Porta non
              pulvinar neque laoreet suspendisse interdum consectetur libero.
              Volutpat blandit aliquam etiam erat velit scelerisque in. Integer
              eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas. Vel eros donec ac odio
              tempor. Pretium viverra suspendisse potenti nullam ac tortor.
              Purus faucibus ornare suspendisse sed nisi lacus sed viverra
              tellus. Netus et malesuada fames ac. Imperdiet proin fermentum leo
              vel orci porta non. Sodales ut eu sem integer. In massa tempor nec
              feugiat nisl pretium fusce. Nisl vel pretium lectus quam. Viverra
              aliquet eget sit amet tellus.
            </p>
          </div>
        </div>
        <div className="singleItem">
          <div className="number">2.</div>
          <div className="singleItemData">
            <p className="title">
              Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas.
            </p>
            <p className="content">
              At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
              nulla malesuada. Neque egestas congue quisque egestas diam in
              arcu. Sed vulputate mi sit amet mauris. Enim sed faucibus turpis
              in. Vitae justo eget magna fermentum iaculis eu non diam. Duis
              convallis convallis tellus id interdum velit laoreet id donec.
              Nunc eget lorem dolor sed. Congue mauris rhoncus aenean vel elit
              scelerisque. Pellentesque habitant morbi tristique senectus et
              netus et malesuada. Diam maecenas sed enim ut sem viverra aliquet
              eget sit. Faucibus turpis in eu mi. Penatibus et magnis dis
              parturient montes nascetur. Orci phasellus egestas tellus rutrum
              tellus pellentesque eu tincidunt. Adipiscing vitae proin sagittis
              nisl. Mauris pharetra et ultrices neque ornare. Id interdum velit
              laoreet id. Quis risus sed vulputate odio ut enim. Porta non
              pulvinar neque laoreet suspendisse interdum consectetur libero.
              Volutpat blandit aliquam etiam erat velit scelerisque in. Integer
              eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas. Vel eros donec ac odio
              tempor. Pretium viverra suspendisse potenti nullam ac tortor.
              Purus faucibus ornare suspendisse sed nisi lacus sed viverra
              tellus. Netus et malesuada fames ac. Imperdiet proin fermentum leo
              vel orci porta non. Sodales ut eu sem integer. In massa tempor nec
              feugiat nisl pretium fusce. Nisl vel pretium lectus quam. Viverra
              aliquet eget sit amet tellus.
            </p>
          </div>
        </div>
        <div className="singleItem">
          <div className="number">3.</div>
          <div className="singleItemData">
            <p className="title">
              Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas.
            </p>
            <p className="content">
              At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
              nulla malesuada. Neque egestas congue quisque egestas diam in
              arcu. Sed vulputate mi sit amet mauris. Enim sed faucibus turpis
              in. Vitae justo eget magna fermentum iaculis eu non diam. Duis
              convallis convallis tellus id interdum velit laoreet id donec.
              Nunc eget lorem dolor sed. Congue mauris rhoncus aenean vel elit
              scelerisque. Pellentesque habitant morbi tristique senectus et
              netus et malesuada. Diam maecenas sed enim ut sem viverra aliquet
              eget sit. Faucibus turpis in eu mi. Penatibus et magnis dis
              parturient montes nascetur. Orci phasellus egestas tellus rutrum
              tellus pellentesque eu tincidunt. Adipiscing vitae proin sagittis
              nisl. Mauris pharetra et ultrices neque ornare. Id interdum velit
              laoreet id. Quis risus sed vulputate odio ut enim. Porta non
              pulvinar neque laoreet suspendisse interdum consectetur libero.
              Volutpat blandit aliquam etiam erat velit scelerisque in. Integer
              eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas. Vel eros donec ac odio
              tempor. Pretium viverra suspendisse potenti nullam ac tortor.
              Purus faucibus ornare suspendisse sed nisi lacus sed viverra
              tellus. Netus et malesuada fames ac. Imperdiet proin fermentum leo
              vel orci porta non. Sodales ut eu sem integer. In massa tempor nec
              feugiat nisl pretium fusce. Nisl vel pretium lectus quam. Viverra
              aliquet eget sit amet tellus.
            </p>
          </div>
        </div>

        <div className="singleItem">
          <div className="number">4.</div>
          <div className="singleItemData">
            <p className="title">
              Integer eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas.
            </p>
            <p className="content">
              At erat pellentesque adipiscing commodo elit. Mi tempus imperdiet
              nulla malesuada. Neque egestas congue quisque egestas diam in
              arcu. Sed vulputate mi sit amet mauris. Enim sed faucibus turpis
              in. Vitae justo eget magna fermentum iaculis eu non diam. Duis
              convallis convallis tellus id interdum velit laoreet id donec.
              Nunc eget lorem dolor sed. Congue mauris rhoncus aenean vel elit
              scelerisque. Pellentesque habitant morbi tristique senectus et
              netus et malesuada. Diam maecenas sed enim ut sem viverra aliquet
              eget sit. Faucibus turpis in eu mi. Penatibus et magnis dis
              parturient montes nascetur. Orci phasellus egestas tellus rutrum
              tellus pellentesque eu tincidunt. Adipiscing vitae proin sagittis
              nisl. Mauris pharetra et ultrices neque ornare. Id interdum velit
              laoreet id. Quis risus sed vulputate odio ut enim. Porta non
              pulvinar neque laoreet suspendisse interdum consectetur libero.
              Volutpat blandit aliquam etiam erat velit scelerisque in. Integer
              eget aliquet nibh praesent tristique magna sit. Nisi vitae
              suscipit tellus mauris a diam maecenas. Vel eros donec ac odio
              tempor. Pretium viverra suspendisse potenti nullam ac tortor.
              Purus faucibus ornare suspendisse sed nisi lacus sed viverra
              tellus. Netus et malesuada fames ac. Imperdiet proin fermentum leo
              vel orci porta non. Sodales ut eu sem integer. In massa tempor nec
              feugiat nisl pretium fusce. Nisl vel pretium lectus quam. Viverra
              aliquet eget sit amet tellus.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </PrivacyPolicyStyled>
  );
};

const PrivacyPolicyStyled = styled.div`
  .privacyPolicy {
    padding: 120px 11.25%;
  }
  .singleItem {
    display: flex;
    margin-top: 40px;
  }
  .singleItemData {
    margin-left: 27px;
  }
  .singleItemData .title,
  .number {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #0e3027;
  }
  .singleItemData .content {
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;

    color: var(--lightGreen);
  }

  @media (max-width: 575.98px) {
    .privacyPolicy {
      padding: 20px 6%;
    }
  }
`;

export default PrivacyPolicy;
