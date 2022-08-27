import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root {
    --primary: #7739EC;
    --gold: #FFD078;
    --off-white: #FFF7E7;
    --muted-grey: #878787;
    --heading-blue: #111D5E;
}

*,*::after,*::before,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    caret-color: rgba(0,0,0,0);
 }

 #root {
    overflow: hidden;
 }

 a {
    text-decoration: none;
    color: #000;
 }

 header {
   position: relative !important;
 }

 .mobile-rem-p {
   @media screen and (max-width: 600px) {
      padding: 1rem !important;
      height: 100vh;
   }
 }
 .mobile-align {
   @media screen and (max-width: 600px) {
      align-items: center;
      text-align: center;
      width: 100%;
   }
   
}
.rm-margin-mobile {
     @media screen and (max-width: 600px) {
        margin: 0 !important;
     }
   }
 `;

export const absCenter = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const colors = {
  primary: "#7739EC",
};

export const mq = window.matchMedia("(max-width: 600px)").matches;

export default GlobalStyles;
