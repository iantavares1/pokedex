import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    user-select: none;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 16px;
    font-family: "Inter", sans-serif;

    height: 100vh;

    background: ${({ theme }) => theme.bg.primary};
    
    display: flex;
    justify-content: center;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.bg.primary};
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 0.5rem;
    }
  }
`
