import React from "react";
import styled from "styled-components";
import laptopGirl from "../assets/girlLaptop2x.png";
import { Profile } from "../subcomponents/AllSvgs";
import Card from "../subcomponents/Card";
import { Roll } from "react-awesome-reveal";
import SectionHead from "../subcomponents/SectionHead";

const StepsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  padding: 0 6rem;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 548px;
    height: 547px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    font-weight: 700;
    font-size: 48px;
    color: var(--heading-blue);
  }

  & .step-card {
    height: 154px;
    padding: 24px 30px;
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
      <ImgContainer>
        <img src={laptopGirl} alt="laptop-girl" />
      </ImgContainer>
      <Content>
        <SectionHead text={["It's as easy as ABC"]} />
        {steps.map((cardDetails) => (
          <Roll delay={800} key={cardDetails.title} triggerOnce={true}>
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
