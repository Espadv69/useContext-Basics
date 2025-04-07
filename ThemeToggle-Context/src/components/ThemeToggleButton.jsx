import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [disabled, setDisabled] = useState(false)
  let timeoutId = null

  const handleClick = () => {
    setDisabled(true)
    toggleTheme()

    timeoutId = setTimeout(() => {
      setDisabled(false)
    }, 500)

    return () => clearTimeout(timeoutId)
  }

  return (
    <button
      onClick={handleClick}
      className={`toggle-btn ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      Switch to {theme === 'light' ? 'Dark 🌑' : 'Light ☀️'} Mode
    </button>
  )
}

export default ThemeToggleButton
