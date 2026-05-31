function Historico() {
  return (
    <section className="history-page">
      <div className="history-header">
        <h2>Histórico</h2>

        <p>
          Consulte os lançamentos do mês e edite valores quando necessário.
        </p>
      </div>

      <div className="history-filters">
        <label>
          Mês
          <select defaultValue="maio-2026">
            <option value="maio-2026">Maio/2026</option>
            <option value="abril-2026">Abril/2026</option>
            <option value="marco-2026">Março/2026</option>
          </select>
        </label>

        <label>
          Dia
          <input type="date" />
        </label>
      </div>

      <div className="history-list">
        <article className="history-item">
          <div className="history-item-header">
            <strong>29/05/2026</strong>
            <span>Lucro R$ 115,00</span>
          </div>

          <div className="history-values">
            <p>
              <span>Ganhos</span>
              <strong>R$ 150,00</strong>
            </p>

            <p>
              <span>Gastos</span>
              <strong>R$ 35,00</strong>
            </p>
          </div>

          <button>Editar lançamento</button>
        </article>

        <article className="history-item">
          <div className="history-item-header">
            <strong>xx/xx/xxxx</strong>
            <span>Lucro R$ 00,00</span>
          </div>

          <div className="history-values">
            <p>
              <span>Ganhos</span>
              <strong>R$ 00,00</strong>
            </p>

            <p>
              <span>Gastos</span>
              <strong>R$ 00,00</strong>
            </p>
          </div>

          <button>Editar lançamento</button>
        </article>
      </div>
    </section>
  )
}

export default Historico