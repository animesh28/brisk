import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { FilledButton } from "./Buttons";
import cover from "../assets/coverHero.png";
import coverMob from "../assets/mobileCover.png";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import SectionHead from "./SectionHead";
import { mq, miniLaptop } from "../globalStyles";

const PurpleLink = styled.a`
  color: var(--primary);
  font-weight: 500;
`;

const ImgContainer = styled.div`
  position: relative;

  @media screen and (max-width: 600px) {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
  }

  & .circle {
    position: absolute;
    border-radius: 50%;
    background-color: var(--gold);
    z-index: -1;
  }

  & .smallCircle {
    bottom: 25px;
    left: -5px;
    width: 112px;
    height: 112px;
  }

  & .bigCircle {
    top: 10px;
    right: 35px;
    width: 229px;
    height: 229px;
  }
`;

const CoverImg = styled(motion.img)`
  width: 42.5rem;

  @media screen and (max-width: 1200px) {
    max-width: 80vw;
    height: fit-content;
  }
`;

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

let height = mq ? "100vh" : `calc(100vh - ${56}px)`;
height = miniLaptop ? "auto" : mq;
const joinNowMargin = mq ? "40px" : "60px";
const empowerHeadMobClass = mq ? "mobile_main-head" : "";

const sectionHead = [
  "Empowering Developers",
  <br />,
  "for a remote-first world",
];
function Landing() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ height }}
      className="px-5 landing-container"
    >
      <Grid
        item
        md={12}
        lg={6}
        className="d-flex flex-column justify-content-center mobile-align"
      >
        <Slide triggerOnce={true}>
          <SectionHead text={sectionHead} cssClass={empowerHeadMobClass} />
        </Slide>
        <motion.div
          transition={bounceTransition}
          animate={{
            y: ["-10%", "0%"],
          }}
        >
          <FilledButton
            variant="contained"
            wt="500"
            style={{
              padding: "16px 54px",
              width: "200px",
              margin: `${joinNowMargin} 0 0 0`,
              fontSize: "19px",
            }}
          >
            Join Now
          </FilledButton>
        </motion.div>
        <Typography
          variant="body1"
          style={{ marginTop: "50px", fontSize: "22px" }}
        >
          Looking to hire? <PurpleLink href="#">Visit Companies</PurpleLink>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center"
      >
        <ImgContainer>
          {!mq ? (
            <>
              <motion.span
                initial={{
                  x: 200,
                  y: -200,
                  transition: { type: "spring", duration: 3 },
                }}
                animate={{
                  x: 0,
                  y: 0,
                  transition: { type: "spring", duration: 3 },
                }}
                className="circle smallCircle"
              ></motion.span>
              <motion.span
                initial={{
                  x: -200,
                  y: 200,
                  transition: { type: "spring", duration: 3 },
                }}
                animate={{
                  x: 0,
                  y: 0,
                  transition: { type: "spring", duration: 3 },
                }}
                className="circle bigCircle"
              ></motion.span>
            </>
          ) : null}
          <CoverImg
            initial={{
              opacity: 0,
              transition: { type: "spring", duration: 1, delay: 0.5 },
            }}
            animate={{
              opacity: 1,
              transition: { type: "spring", duration: 1, delay: 0.5 },
            }}
            src={mq ? coverMob : cover}
            alt="hero"
          />
        </ImgContainer>
      </Grid>
    </Grid>
  );
}

export default Landing;
