import { useLanguage } from '../context/LanguageContext'

const Greeting = () => {
  const { language } = useLanguage()

  const GREETINGS = {
    en: 'Hello! How are you? 👋',
    es: '¡Hola! ¿Cómo estás? 👋',
    fr: 'Bonjour! Comment ça va? 👋',
  }
}

export default Greeting
