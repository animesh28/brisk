import React from "react";
import styled from "styled-components";
const Heading = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #111d5e;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media screen and (max-width: 380px) and (max-height: 700px) {
    font-size: 24px;
    line-height: 40px;
  }
`;
function SectionHead({ text, cssClass }) {
  return (
    <Heading className={cssClass}>
      {text.map((e) => (
        <span key={e}>{e}</span>
      ))}
    </Heading>
  );
}

export default SectionHead;
