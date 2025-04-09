import { SET_LANGUAGE } from './languageTypes'

export const languageReducer = (state, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      }

    default:
      return state
  }
}
