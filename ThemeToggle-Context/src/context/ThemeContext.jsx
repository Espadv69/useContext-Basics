import { createContext, useReducer } from 'react'
import { themeReducer } from './themeReducer'
import { TOGGLE_THEME } from './themeTypes'

// Create a context for the theme
export const ThemeContext = createContext()

// Create a initial state for the theme
const initialState = {
  theme: 'light',
}
