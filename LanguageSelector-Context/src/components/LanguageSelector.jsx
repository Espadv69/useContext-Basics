import { useLanguage } from '../context/LanguageContext'

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage()

  const handleChange = (e) => {
    changeLanguage(e.target.value)
  }
}

export default LanguageSelector
