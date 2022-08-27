import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { PreviousIcon, NextIcon } from "../subcomponents/AllSvgs";
import styled from "styled-components";
import saidur from "../assets/saidur.png";
import { mq } from "../globalStyles";

const CarouselContainer = styled.div`
  padding: 3rem 6rem;

  @media screen and (max-width: 760px) {
    padding: 3rem;
  }

  @media screen and (max-width: 600px) {
    padding: 3rem 1rem;
  }

  & .carousel {
    background: #fffbf4;
    border: 1px solid #e3e3e3;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 3rem 2rem;
    min-height: 50vh;

    @media screen and (max-width: 760px) {
      padding-top: 1.5rem;
    }
    //testimonial content wrapper
    & .MuiPaper-root {
      background-color: transparent;
      box-shadow: none;
      width: 75%;

      @media screen and (max-width: 880px) {
        width: 100%;
      }

      & h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        font-feature-settings: "liga" off;

        @media screen and (max-width: 1337px) {
          font-size: 30px;
        }

        @media screen and (max-width: 995px) {
          font-size: 25px;
        }

        @media screen and (max-width: 760px) {
          font-size: 20px;
          line-height: 35px;
        }

        @media screen and (max-width: 760px) {
          font-size: 18px;
          line-height: 35px;
        }
      }
    }
  }
  //next & prev btn
  .carousel .carousel_btn-wrap {
    height: 55px;
    @media screen and (max-width: 760px) {
      bottom: 6vh !important;
    }
  }

  //next btn
  .carousel .carousel_btn-wrap:nth-of-type(2) {
    right: 30px !important;
    & .carousel_btn {
      background: #f4f6ff;
    }
  }

  //prev button
  .carousel .carousel_btn-wrap:nth-of-type(3) {
    right: 130px !important;
    & .carousel_btn {
      background: #ffd078;
    }
  }
`;

function Testimonials(props) {
  var items = [
    {
      description:
        "I got my best employee from this platform who working great in my company. Really it was boom for us.",
      excerpt:
        "I got my best employee from this platform who working great in my company.",
      img: saidur,
      name: "Saidur Zaman Saimo",
      designation: "Manager, Brisk Company",
    },
    {
      description:
        "I strongly recommend this platform in closure of various senior positions in my organization.The profiling of the candidates gives an edge when short-listing profiles.",
      img: saidur,
      name: "Lorem Ipsum",
      designation: "Manager, XYZ Company",
    },
  ];

  return (
    <CarouselContainer>
      <Carousel
        className="carousel"
        indicators={false}
        navButtonsAlwaysVisible={true}
        fullHeightHover={false}
        autoPlay={false}
        navButtonsProps={{
          className: "carousel_btn",
          style: {
            borderRadius: 0,
            padding: "25px 22px",
          },
        }}
        navButtonsWrapperProps={{
          className: "carousel_btn-wrap",
          style: {
            left: "unset",
            top: "unset",
            bottom: "9vh",
          },
        }}
        NextIcon={<PreviousIcon />}
        PrevIcon={<NextIcon />}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

function Item({ item }) {
  return (
    <Paper className="author-container">
      <h2>{mq ? item.excerpt : item.description}</h2>

      <Author>
        <img src={item.img} alt="author" />
        <AuthorDetails>
          <span className="name">{item.name}</span>
          <span className="designation">{item.designation}</span>
        </AuthorDetails>
      </Author>
    </Paper>
  );
}

const Author = styled.div`
  margin-top: 2vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    margin-top: 6vh;
  }

  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }

  img {
    @media screen and (max-width: 760px) {
      display: none;
    }
  }
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 760px) {
    margin-left: 0;
  }

  & .name {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--primary);
  }

  & .designation {
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    color: var(--heading-blue);
    text-decoration-line: underline;
  }
`;

export default Testimonials;
