import { createContext, useContext, useReducer } from 'react'
import { languageReducer } from './languageReducer'
import { SET_LANGUAGE } from './languageTypes'

const LanguageContext = createContext()

const initialState = {
  language: 'en',
}

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState)

  const changeLanguage = (lang) => {
    dispatch({ type: SET_LANGUAGE, payload: lang })
  }

  return (
    <LanguageContext.Provider value={{ ...state, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
