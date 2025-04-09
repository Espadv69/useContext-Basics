import { useLanguage } from '../context/LanguageContext'

const Greeting = () => {
  const { language } = useLanguage()

  const GREETINGS = {
    en: 'Hello! How are you? 👋',
    es: '¡Hola! ¿Cómo estás? 👋',
    fr: 'Bonjour! Comment ça va? 👋',
  }

  const MESSAGES_CURRENT = {
    en: `Current language: ${language}`,
    es: `Idioma actual: ${language}`,
    fr: `Langue actuelle: ${language}`,
  }

  const WHERE_MESSAGES = {
    en: 'Change the language in the top right corner!',
    es: '¡Cambia el idioma en la esquina superior derecha!',
    fr: 'Changez la langue dans le coin supérieur droit!',
  }

  const CURRENT_LANGUAGE = GREETINGS[language]
  if (!CURRENT_LANGUAGE) {
    return <p>Language not supported</p>
  }

  return (
    <section className="greeting-section">
      <h1 className="greeting">{CURRENT_LANGUAGE}</h1>
      <p className="greeting_message">{MESSAGES_CURRENT[language]}</p>
      <p className="greeting_message">{WHERE_MESSAGES[language]}</p>
    </section>
  )
}

export default Greeting
