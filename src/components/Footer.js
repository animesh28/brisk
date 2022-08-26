import React from "react";
import styled from "styled-components";
import {
  WhiteLogo,
  LinkedIn,
  Twitter,
  Telegram,
} from "../subcomponents/AllSvgs";
import copy from "../assets/copy.png";
const FooterContainer = styled.div`
  height: 12vh;
  background-color: var(--primary);
  color: #fff;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-weight: 500;
    font-size: 14px;
    margin-top: 5px;
    display: inline-flex;
    align-items: center;

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
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <WhiteLogo />
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
