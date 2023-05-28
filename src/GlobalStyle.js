import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
    user-select: none;
  }

  body {
    font-size: 16px;
    font-family: "Roboto", sans-serif;


    --background: #111;
    background: var(--background);
    
    display: flex;
    justify-content: center;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: var(--background);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 0.5rem;
    }

    &.modal-open{
      overflow: hidden;
    }
  }
`;
