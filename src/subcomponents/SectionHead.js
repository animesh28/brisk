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
`;
function SectionHead({ text }) {
  return (
    <Heading>
      {text.map((e) => (
        <span key={e}>{e}</span>
      ))}
    </Heading>
  );
}

export default SectionHead;
