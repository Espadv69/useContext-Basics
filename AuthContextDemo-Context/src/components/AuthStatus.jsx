import { useAuth } from '../context/AuthContext'

const AuthStatus = () => {
  const { isAuthenticated, user } = useAuth()

  return (
    <section className="auth-status">
      {isAuthenticated ? (
        <p className="auth-status__logged">
          ✅ Logged in as <strong>{user.username}</strong>
        </p>
      ) : (
        <p>🔒 You are not logged in</p>
      )}
    </section>
  )
}

export default AuthStatus
