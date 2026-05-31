import logoHeader from '../assets/logo-header.png'

function Header({ telaAtual, mudarTela }) {
  return (
    <header className="header">
      <div className="header-brand">
        <img
          src={logoHeader}
          alt="Corre Cash"
          className="header-logo"
        />
      </div>

      <nav className="header-nav">
        {telaAtual === 'dashboard' && (
          <button onClick={() => mudarTela('historico')}>
            Histórico
          </button>
        )}

        {telaAtual === 'historico' && (
          <button onClick={() => mudarTela('dashboard')}>
            Ganhos de Hoje
          </button>
        )}
      </nav>
    </header>
  )
}

export default Header