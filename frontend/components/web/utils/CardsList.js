import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsList = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: "../../../assets/images/web/homephoto.png",
      title: "Pinnacle Office",
      content: "Louis-Pasteur Private, Ottawa, Canada",
      price: 150000,
      type: "for Sale",
    },
    {
      id: 2,
      image: "../../../assets/images/web/homephoto.png",
      title: "Parkdale House",
      content: "Preston Rd. Inglewood, Maine",
      price: 820.0,
      type: "for Rent",
    },
    {
      id: 3,
      image: "../../../assets/images/web/homephoto.png",
      title: "View Appartment",
      content: "Ash Dr. San Jose, South Dakota",
      price: 3000,
      type: "for Sale",
    },
    {
      id: 4,
      image: "../../../assets/images/web/homephoto.png",
      title: "Pinnacle Office",
      content: "Louis-Pasteur Private, Ottawa, Canada",
      price: 150000,
      type: "for Sale",
    },
    {
      id: 5,
      image: "../../../assets/images/web/homephoto.png",
      title: "Parkdale House",
      content: "Preston Rd. Inglewood, Maine",
      price: 820.0,
      type: "for Rent",
    },
    {
      id: 6,
      image: "../../../assets/images/web/homephoto.png",
      title: "View Appartment",
      content: "Ash Dr. San Jose, South Dakota",
      price: 3000,
      type: "for Sale",
    },
    {
      id: 7,
      image: "../../../assets/images/web/homephoto.png",
      title: "Pinnacle Office",
      content: "Louis-Pasteur Private, Ottawa, Canada",
      price: 150000,
      type: "for Sale",
    },
    {
      id: 8,
      image: "../../../assets/images/web/homephoto.png",
      title: "Parkdale House", 
      content: "Preston Rd. Inglewood, Maine",
      price: 820.0,
      type: "for Rent",
    },
    {
      id: 9,
      image: "../../../assets/images/web/homephoto.png",
      title: "View Appartment",
      content: "Ash Dr. San Jose, South Dakota",
      price: 3000,
      type: "for Sale",
    },
  ]);

  return (
    <MainStyled>
      <div className="cardsInfo">
        <p className="title">Explore property</p>
        <p className="listedNumbers">48 property listed</p>
      </div>
      <CardsListStyled>
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </CardsListStyled>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  padding: 80px 11.25%;
  display: grid;
  align-items: center;
`;

const CardsListStyled = styled.div`
  .test {
  }
  /* padding: 80px 0; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(261px, 1fr));
  gap: 1rem;
  align-items: center;
  justify-items: center;
`;

export default CardsList;
