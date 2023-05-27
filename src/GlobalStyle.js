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
  }

  .App{
    width: 90vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;

    > header{
      padding-top: 4rem;

      width: 100%;
    }

    > main{
      padding-top: 5rem;
      width: 100%;

      display: flex;
      justify-content: center;
      border: solid 1px red;
    }
  }
`;
