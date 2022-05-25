import styled from "styled-components";
import Button from "../components/web/utils/Button";
import Footer from "../components/web/utils/Footer";

import GreenContainer from "../components/web/utils/GreenContainer";
import Header from "../components/web/utils/Header";
import Question from "../components/web/utils/Question";
import Link from "next/link";
import Head from "next/head";
import TagItem from "../components/web/utils/TagItem";

const Faq = () => {
  const questions = [
    {
      id: 1,
      title:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint?",
      content: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
          Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
          Nulla Lorem mollit cupidatat irure. 
          Laborum magna nulla duis ullamco cillum dolor. 
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.`,
    },
    {
      id: 2,
      title: "Velit officia consequat duis enim velit mollit.",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate magnam dolores quasi est impedit.
        .`,
    },
    {
      id: 3,
      title: "Laborum magna nulla duis ullamco cillum dolor. ",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate magnam dolores quasi est impedit.
        `,
    },
    {
      id: 4,
      title:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint?",
      content: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            Nulla Lorem mollit cupidatat irure. 
            Laborum magna nulla duis ullamco cillum dolor. 
            Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.`,
    },
    {
      id: 5,
      title: "Laborum magna nulla duis ullamco cillum dolor. ",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate magnam dolores quasi est impedit.
          `,
    },
  ];

  return (
    <FaqStyled>
      <Head>
        <title>FAQ / PRICES - Offview</title>
        <meta
          name="description"
          content="Welcome to our support center.Here you can find the most common asked questions.If you cannot find an answer, please contact us at @offview@gmail.com"
        />
      </Head>

      <Header
        title="FAQ"
        content="Overview of the frequently asked questions."
      />
      {/* GREEN CONTAINER */}
      <GreenContainer>
        <p className="greenContainerContent">
          We collected the answers for the most frequently asked questions.
        </p>
        <p className="greenContainerContent">
          If you still need help with something do’t hesitate to write us an
          email to contact@offview.ch, or direct through our system.
        </p>
        <Link href="/contact">
          <div className="btnMargin">
            <Button text="Contact us" />
          </div>
        </Link>
      </GreenContainer>

      {/* QUESTIONS */}
      <div className="centerQuestions">
        {questions.map((question, index) => {
          return <Question key={index} {...question} />;
        })}
      </div>

      {/* FOOTER */}

      <Footer />
    </FaqStyled>
  );
};

const FaqStyled = styled.div`
  .btnMargin {
    margin-top: 24px;
  }
  .centerQuestions {
    padding: 126px 11.25%;
  }
  @media (max-width: 991.98px) {
    .centerQuestions {
      padding: 40px 11.25%;
    }
  }
  @media (max-width: 575.98px) {
    .centerQuestions {
      padding: 40px 5%;
    }
    .greenContainerContent {
      font-size: 14px;
    }
  }
`;

export default Faq;
