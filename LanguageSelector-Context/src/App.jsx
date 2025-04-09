import LanguageSelector from './components/LanguageSelector'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <main>
      <h1 className="title">🌐 Language Context Demo</h1>
      <LanguageSelector />
      <Greeting />
    </main>
  )
}

export default App
