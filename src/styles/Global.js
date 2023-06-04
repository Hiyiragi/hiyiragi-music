import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

  /* inherit fonts for inputs and buttons*/
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove animations, transitions and smooth scroll for people who prefer not to see them */
  @media (prefer-reduced-motion: reduce) {
    html: focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .rc-slider-handle-dragging {
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.white} !important;
  }
`;
