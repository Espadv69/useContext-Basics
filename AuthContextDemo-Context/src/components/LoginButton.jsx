import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const LoginButton = () => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const { isAuthenticated, login } = useAuth()

  const handleLogin = () => {
    if (username) {
      login(username)
      setUsername('')
      setError('')
    } else {
      setError('Please enter a username')
    }
  }

  if (isAuthenticated) return null

  return (
    <section className="login">
      <div className="form">
        <label>
          UserName:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login__input"
          />
        </label>
      </div>
        {error && <p className="login__error">{error}</p>}
      <button className="login__button" onClick={handleLogin}>
        🔑 Login
      </button>
    </section>
  )
}

export default LoginButton
