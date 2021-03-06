import styled from "styled-components";
import Button from "../components/web/utils/Button";
import Footer from "../components/web/utils/Footer";

import GreenContainer from "../components/web/utils/GreenContainer";
import Header from "../components/web/utils/Header";
import Question from "../components/web/utils/Question";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [faq, setFaq] = useState([]);

  const getFaq = async () => {
    try {
      await axios(`${process.env.NEXT_PUBLIC_URL}faq/dashboard/get`).then(
        (response) => setFaq(response.data.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);

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
        {faq.map((faq, index) => {
          return <Question key={index} {...faq} />;
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
  .greenContainerContent {
    font-weight: var(--bookFont);
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
