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
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--off-white);
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h5`
  font-weight: 600;
  font-size: 22px;
`;

const Detail = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: var(--muted-grey);
`;

function Card({ title, detail, cssClass = "step-card", Icon }) {
  return (
    <CardContainer className={cssClass}>
      <Circle>
        {cssClass != "step-card" ? (
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
