// Supports weights 100-900
import '@fontsource-variable/roboto'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'

import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
