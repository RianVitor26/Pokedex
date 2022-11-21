import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-size: 1.8rem;
 }

 html{
   font-size: 62.5%;
 }

 body{
   width: 100%;
   height: 100vh;
 }

 :root{
    //COLORS PALLETTE
   --nav-bg: #f6e652;
   --link-color: black;
   --link-color-hover: #399494;

   //EFFECTS
   -noraml-transition: all ease .5s;

 }
`;