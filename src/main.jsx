import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Kavoon', Sans-serif;
    font-display: block;
    background: #f6edd6;
    position: relative;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
