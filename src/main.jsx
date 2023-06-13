import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global-style.js'
import dark from './styles/themes/dark'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
