import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-size: 1.8rem;
    font-family: 'Poppins', Verdana, sans-serif;
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
   --link-color: #399494;;
   --link-color-hover: #3eacac;
   --light-color: #ebebeb;
   --buttons-bg: 	#f00000;
   --buttons-bg-hover: #a30000;

   //EFFECTS
   --normal-transition: all ease .5s;
 }
`;