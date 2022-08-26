import React from "react";
import styled from "styled-components";
import { LinkedIn, Twitter, Telegram, Logo } from "../subcomponents/AllSvgs";
import copy from "../assets/copy.png";

const FooterContainer = styled.div`
  height: 15vh;
  background-color: #fff;
  color: #000;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-weight: 500;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    margin-top: 12px;

    & img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
`;
const SocialIcons = styled.div`
  & svg {
    margin: 0 20px;

    @media screen and (max-width: 600px) {
      margin: 0 5px;
      transform: scale(0.75);
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo />
        <span>
          <img src={copy} alt="copyright" /> 2022 by Brisk
        </span>
      </LogoContainer>
      <SocialIcons>
        <LinkedIn />
        <Twitter />
        <Telegram />
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;
