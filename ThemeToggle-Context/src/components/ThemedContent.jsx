import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemedContent = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`content ${theme}`}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <p>
        This is an example of content that changes based on the selected theme.
      </p>
    </section>
  )
}

export default ThemedContent
