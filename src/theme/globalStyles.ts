import { createGlobalStyle } from 'styled-components';

const isMobile = window.innerWidth < 600;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-transform: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Manrope', sans-serif !important;
    font-weight: 400 !important;
    
    ::selection {
      background-color: #79ffb8;
      color: #fff;
    }
  }
  
  html, #root {
    overflow-x: hidden !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 800 !important;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h6 {
    font-size: 0.75rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
`;