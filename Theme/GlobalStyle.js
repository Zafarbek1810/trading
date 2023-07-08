import {createGlobalStyle }  from "styled-components"
import {colors} from "./colors";
import {opacities} from "./opacities";
import {fontSize} from "./fontSize";

/* ------------------    GLOBAL STYLES   ---------------------*/

const GlobalStyle = createGlobalStyle`  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    height: -webkit-fill-available;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }
  .home-top-wrap::after {
    display: none;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background-color: #010313;
    line-height: 1.5;
    font-size: 16px;
    color: #fff;
    overflow-x: hidden;
    ;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "Inter", "Arial", sans-serif;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    font-family: "Inter", "Arial", sans-serif;
  }

  p{
    font-family: "Inter", "Arial", sans-serif;

  }
  
  svg {
    width: 1em;
    height: auto;
  }
  
  // -------- SEARCH INPUT X NONE ---------
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`

const defaultTheme = {
  colors,
  opacities,
  fontSize
}

export {
  GlobalStyle,
  defaultTheme
}
