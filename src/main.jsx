import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Kavoon', Sans-serif;
    background: #f6edd6;
  }

  a {
    text-decoration: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
