// src/styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;