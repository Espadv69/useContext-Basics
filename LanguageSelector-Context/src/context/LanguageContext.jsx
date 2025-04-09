import { createContext, useContext, useReducer } from 'react'
import { languageReducer } from './languageReducer'
import { SET_LANGUAGE } from './languageTypes'

const LanguageContext = createContext()

const initialState = {
  language: 'en',
}
