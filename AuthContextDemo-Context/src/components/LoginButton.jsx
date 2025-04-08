import { useAuth } from '../context/AuthContext'

const LoginButton = () => {
  const { isAuthenticated, login } = useAuth()
}

export default LoginButton
