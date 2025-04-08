import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const LoginButton = () => {
  const [username, setUsername] = useState('')
  const { isAuthenticated, login } = useAuth()

  const handleLogin = () => {
    if (username) {
      login(username)
    } else {
      // ToDo: show an error message
      alert('Please enter a username')
    }
  }

  if (isAuthenticated) return null

  return (
    <button className="login-btn" onClick={handleLogin}>
      🔑 Login
    </button>
  )
}

export default LoginButton
