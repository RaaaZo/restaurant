import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 *, *::before, *::after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
    }

   html {
      font-size: 62.5%;
    }

   h1, h2, h3, a, button, label, input {
      font-family: 'Yanone Kaffeesatz', sans-serif; 
      font-weight: 700;
    }

   ul, li, a {
      font-weight: 700;
      text-decoration: none;
      list-style: none;
   }

   body {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.6rem;
      line-height: 1.5;
      overflow-x: hidden;
    }
`;

export default GlobalStyle;
