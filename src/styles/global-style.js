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
      @media (min-width: 768px) {
      width: 1.5rem;
  }
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scrollbar.primary};
      border-radius: 0.5rem;
      @media (min-width: 768px) {
        border-radius: 0.75rem;
  }
    }
  }
`
