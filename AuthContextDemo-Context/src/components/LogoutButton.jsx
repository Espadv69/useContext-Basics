import { useAuth } from '../context/AuthContext'

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth()

  if (!isAuthenticated) return null

  return (
    <section className="logout">
      <button className="logout__button" onClick={logout}>
        🚪 Logout
      </button>
    </section>
  )
}

export default LogoutButton
