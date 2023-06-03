import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./vars";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Rogersan;
    src: url("/fonts/Rogersan.otf");
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    background-color: ${colors.primary};
    color: ${colors.light};
    font-family: ${fonts.Poppins};
  }

  a{
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  p{
    font-size: 1.1rem;
    line-height: 1.2rem;
    @media (max-width: 580px) {
      font-size: .9rem;
      line-height: 1rem;
    }
  }
  h1{
    line-height: 2.1rem;
    font-size: 1.9rem;
    @media (max-width: 580px) {
      font-size: 1.5rem;
      line-height: 1.7rem;
    }
  }
  h2{
    line-height: 1.5rem;
    font-size: 1.3rem;
    @media (max-width: 580px) {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }
  .title-section{
    width: 100%;
    text-align: center;
      h1{
        text-transform: uppercase;
        margin-bottom: .7rem;
        span{
          color: ${colors.third}
        }
      }
    }
`

export default GlobalStyles