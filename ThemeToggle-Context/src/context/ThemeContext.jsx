import { createContext, useReducer } from 'react'
import { themeReducer } from './themeReducer'
import { TOGGLE_THEME } from './themeTypes'

// Create a context for the theme
export const ThemeContext = createContext()

// Create a initial state for the theme
const initialState = {
  theme: 'light',
}

export const ThemeProvider = ({ children }) => {
  // Use the theme reducer to manage the theme state
  const [state, dispatch] = useReducer(themeReducer, initialState)

  // Create a function to toggle the theme
  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME })
  }

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
