import React from "react";
import styled from "styled-components";
import { colors } from "../globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardContainer = styled.div`
  width: 40vw;
  background: #fff;
  display: grid;
  grid-template-columns: 0.35fr 1fr;
  padding: 50px 30px;
  border: 1px solid #e3e3e3;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    padding: 35px 20px;
    width: 90vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--off-white);
  display: grid;
  place-items: center;

  @media screen and (max-width: 600px) {
    margin: 14px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Title = styled.h5`
  font-weight: 600;
  font-size: 22px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin: 7px 0;
  }
`;

const Detail = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: var(--muted-grey);

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

function Card({ title, detail, cssClass = "step-card", Icon }) {
  return (
    <CardContainer className={cssClass}>
      <Circle>
        {cssClass !== "step-card" ? (
          <FontAwesomeIcon icon={Icon} color={colors.primary} fontSize="40px" />
        ) : (
          <Icon />
        )}
      </Circle>
      <Content>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Content>
    </CardContainer>
  );
}

export default Card;
