import { useLanguage } from '../context/LanguageContext'

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage()

  const handleChange = (e) => {
    changeLanguage(e.target.value)
  }

  return (
    <section className="language-selector">
      <label htmlFor="language">🌍 Choose Language:</label>
      <select
        id="language"
        value={language}
        onChange={handleChange}
        className="language-selector__dropdown"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </section>
  )
}

export default LanguageSelector
