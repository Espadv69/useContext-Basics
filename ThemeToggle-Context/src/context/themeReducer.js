import { TOGGLE_THEME } from './themeTypes'

export const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }

    default:
      return state
  }
}
