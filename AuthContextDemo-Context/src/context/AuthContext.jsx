import { createContext, useContext, useReducer } from 'react'
import { authReducer } from './authReducer'
import { LOGIN, LOGOUT } from './authTypes'

const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (username) => {
    dispatch({ type: LOGIN, payload: { username } })
  }

  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
