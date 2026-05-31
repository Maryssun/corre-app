import { useState } from 'react'
import './App.css'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Historico from './pages/Historico'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [logado, setLogado] = useState(false)
  const [telaAtual, setTelaAtual] = useState('dashboard')

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />
  }

  return (
    <main className="app">
      <div className="app-container">
        <Header
          telaAtual={telaAtual}
          mudarTela={setTelaAtual}
        />

        {telaAtual === 'historico' ? <Historico /> : <Dashboard />}

        <Footer />
      </div>
    </main>
  )
}

export default App