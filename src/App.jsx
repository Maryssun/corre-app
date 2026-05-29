import './App.css'

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="tag">CORRE</p>
        <h1>O app da correria</h1>
        <p>
          Controle seus ganhos, gastos e lucro diário de forma simples.
        </p>
      </section>

      <section className="dashboard">
        <div className="card">
          <span>Ganhos do mês</span>
          <strong>R$ 0,00</strong>
        </div>

        <div className="card">
          <span>Gastos do mês</span>
          <strong>R$ 0,00</strong>
        </div>

        <div className="card destaque">
          <span>Lucro estimado</span>
          <strong>R$ 0,00</strong>
        </div>
      </section>

      <section className="form-card">
        <h2>Novo lançamento</h2>

        <div className="form-grid">
          <input type="date" />
          <input type="number" placeholder="Ganho do dia" />
          <input type="number" placeholder="Combustível" />
          <input type="number" placeholder="Alimentação" />
          <input type="number" placeholder="Manutenção" />
          <input type="number" placeholder="Outros gastos" />
        </div>

        <textarea placeholder="Observação"></textarea>

        <button>Salvar lançamento</button>
      </section>
    </main>
  )
}

export default App