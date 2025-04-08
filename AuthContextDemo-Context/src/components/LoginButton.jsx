import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const LoginButton = () => {
  const [username, setUsername] = useState('')
  const { isAuthenticated, login } = useAuth()

  const handleLogin = () => {
    if (username) {
      login(username)
      setUsername('')
    } else {
      // ToDo: show an error message
      alert('Please enter a username')
    }
  }

  if (isAuthenticated) return null

  return (
    <section className="login">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login__input"
      />
      <button className="login__button" onClick={handleLogin}>
        🔑 Login
      </button>
    </section>
  )
}

export default LoginButton
