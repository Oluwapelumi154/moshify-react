import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
}
*{
padding: 0;
margin: 0;
box-sizing: border-box;
}
body{
  font-family: 'Montserrat', sans-serif;
}
*::before,
*::after{
 box-sizing: border-box;
}

`;
export const color = {
  red: '#FF3400',
  white: '#FFF',
  // black: '#1a2228',
  black: '#002244',
  blue: '#87CEFA'
};

export const fs = {
  desktopH1: '8rem'
};

export const container = styled.div`
  width: 100%;
  @media screen and (min-width: 1000px) {
    max-width: 1300px;
    margin-inline: auto;
  }
`;
