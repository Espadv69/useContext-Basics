import AuthStatus from './components/AuthStatus'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

const App = () => {
  return (
    <main className="auth-app">
      <h1 className="auth-app__title">🧑‍💻 Auth Context Demo</h1>
      <AuthStatus />
      <LoginButton />
      <LogoutButton />
    </main>
  )
}

export default App
