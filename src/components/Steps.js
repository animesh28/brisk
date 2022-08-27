import React from "react";
import styled from "styled-components";
import laptopGirl from "../assets/girlLaptop2x.png";
import { Profile } from "../subcomponents/AllSvgs";
import Card from "../subcomponents/Card";
import { Roll } from "react-awesome-reveal";
import SectionHead from "../subcomponents/SectionHead";
import { mq } from "../globalStyles";

const StepsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  padding: 0 6rem;

  @media screen and (max-width: 1320px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    padding-bottom: 5rem;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 600px) {
    margin: -8vh 0;
  }

  img {
    width: 548px;
    height: 547px;

    @media screen and (max-width: 600px) {
      max-width: 90vw;
      height: auto;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    align-items: center;
  }

  h3 {
    font-weight: 700;
    font-size: 48px;
    color: var(--heading-blue);
  }

  & .step-card {
    height: 154px;
    padding: 24px 30px;
    -webkit-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.57);
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.57);

    @media screen and (max-width: 1320px) {
      margin: 4vh 0;
      height: auto;
    }

    @media screen and (max-width: 600px) {
    }
  }
`;

function Steps() {
  const steps = [
    {
      title: "Create profile",
      detail:
        "Create your profile specifying your experience, skills and portfolio",
    },
    {
      title: "Get Approved",
      detail:
        "Get your skills vetted through decentralized expert network to have your profile approved",
    },
    {
      title: "Get Matched",
      detail:
        "Get connected to global tech jobs, that are best matched to your skillset",
    },
  ];

  return (
    <StepsContainer>
      {mq ? <SectionHead text={["It's as easy as ABC"]} /> : null}
      <ImgContainer>
        <img src={laptopGirl} alt="laptop-girl" />
      </ImgContainer>
      <Content>
        {!mq ? <SectionHead text={["It's as easy as ABC"]} /> : null}
        {steps.map((cardDetails) => (
          <Roll delay={800} key={cardDetails.title}>
            <Card
              title={cardDetails.title}
              detail={cardDetails.detail}
              Icon={Profile}
            />
          </Roll>
        ))}
      </Content>
    </StepsContainer>
  );
}

export default Steps;
