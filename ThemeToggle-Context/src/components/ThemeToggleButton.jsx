import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} className="toggle-btn">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default ThemeToggleButton
