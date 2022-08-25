import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import styled from "styled-components";
import Card from "../subcomponents/Card";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .leftCard {
    -webkit-box-shadow: -5px 5px 22px 0px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: -5px 5px 22px 0px rgba(0, 0, 0, 0.57);
    box-shadow: -5px 5px 22px 0px rgba(0, 0, 0, 0.57);
  }

  & .rightCard {
    -webkit-box-shadow: 5px 5px 22px 0px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 5px 5px 22px 0px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 5px 22px 0px rgba(0, 0, 0, 0.57);
  }
`;

const SectionHead = styled.h3`
  font-weight: 700;
  font-size: 48px;
  color: #111d5e;
`;

const row1 = [
  {
    title: "Own your professional Identity",
    content: "Build your Web 3.0 based verfied professional profile",
  },

  {
    title: "Access Global Network",
    content:
      "Never feel alone, with access to global sears mentors and masterclasene",
  },
];

const row2 = [
  {
    title: "Get Curated Jobs",
    content:
      "Seamlessly get matched with global remote jobs based on your skills and intersest",
  },

  {
    title: "Pay 0% Commission",
    content: "No talent fee or commissions, you retain all your earnings.",
  },
];
function Why() {
  return (
    <Container>
      <SectionHead variant="h4">Why Join Brisk?</SectionHead>
      <div className="d-flex justify-content-evenly w-100 mt-5">
        <JackInTheBox delay={600}>
          {row1.map((cardDetail, i) => {
            return (
              <Card
                key={cardDetail.title}
                title={cardDetail.title}
                detail={cardDetail.content}
                cssClass={i % 2 == 0 ? "leftCard" : "rightCard"}
              ></Card>
            );
          })}
        </JackInTheBox>
      </div>
      <div className="d-flex justify-content-evenly w-100 mt-5">
        <JackInTheBox delay={600}>
          {row2.map((cardDetail, i) => {
            return (
              <Card
                key={cardDetail.title}
                title={cardDetail.title}
                detail={cardDetail.content}
                cssClass={i % 2 == 0 ? "leftCard" : "rightCard"}
              ></Card>
            );
          })}
        </JackInTheBox>
      </div>
    </Container>
  );
}

export default Why;
