import { useLanguage } from '../context/LanguageContext'

const Greeting = () => {
  const { language } = useLanguage()

  const GREETINGS = {
    en: 'Hello! How are you? 👋',
    es: '¡Hola! ¿Cómo estás? 👋',
    fr: 'Bonjour! Comment ça va? 👋',
  }

  const CURRENT_LANGUAGE = GREETINGS[language]

  if (!CURRENT_LANGUAGE) {
    return <p>Language not supported</p>
  }

  return (
    <section className="greeting">
      <h1>{CURRENT_LANGUAGE}</h1>
      <p>Current language: {language}</p>
      <p>Change the language in the top right corner!</p>
    </section>
  )
}

export default Greeting
