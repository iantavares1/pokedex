import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
      background: ${({ theme }) => theme.scrollbar.primary};
      border-radius: 0.5rem;
    }
  }
`
