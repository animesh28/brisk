import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import styled from "styled-components";
import Card from "../subcomponents/Card";
import {
  faIdCard,
  faGlobe,
  faListCheck,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import SectionHead from "../subcomponents/SectionHead";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;

  & {
    @media screen and (max-width: 1200px) {
      height: auto;
    }
  }

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

  & .flex-col-mobile {
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }

  & .card_wrap {
    margin-top: 5rem;
    @media screen and (max-width: 1200px) {
      &:first-of-type {
        margin-top: 3rem;
      }
      margin: 0;

      display: flex;
      align-items: center;
    }

    @media screen and (max-width: 600px) {
      &:first-of-type {
        margin-top: 3rem;
      }

      margin: 0;
    }
  }
`;

const row1 = [
  {
    title: "Own your professional Identity",
    content: "Build your Web 3.0 based verfied professional profile",
    icon: faIdCard,
  },

  {
    title: "Access Global Network",
    content:
      "Never feel alone, with access to global sears mentors and masterclasene",
    icon: faGlobe,
  },
];

const row2 = [
  {
    title: "Get Curated Jobs",
    content:
      "Seamlessly get matched with global remote jobs based on your skills and intersest",
    icon: faListCheck,
  },

  {
    title: "Pay 0% Commission",
    content: "No talent fee or commissions, you retain all your earnings.",
    icon: faMoneyBillTransfer,
  },
];
function Why() {
  return (
    <Container>
      <SectionHead text={["Why Join Brisk?"]} />
      <div className="d-flex justify-content-evenly w-100 flex-col-mobile card_wrap">
        <JackInTheBox delay={300}>
          {row1.map((cardDetail, i) => {
            return (
              <Card
                key={cardDetail.title}
                title={cardDetail.title}
                detail={cardDetail.content}
                cssClass={i % 2 === 0 ? "leftCard" : "rightCard"}
                Icon={cardDetail.icon}
              ></Card>
            );
          })}
        </JackInTheBox>
      </div>
      <div className="d-flex justify-content-evenly w-100 flex-col-mobile card_wrap">
        <JackInTheBox delay={300}>
          {row2.map((cardDetail, i) => {
            return (
              <Card
                key={cardDetail.title}
                title={cardDetail.title}
                detail={cardDetail.content}
                cssClass={i % 2 === 0 ? "leftCard" : "rightCard"}
                Icon={cardDetail.icon}
              ></Card>
            );
          })}
        </JackInTheBox>
      </div>
    </Container>
  );
}

export default Why;
