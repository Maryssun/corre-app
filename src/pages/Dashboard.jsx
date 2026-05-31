function Dashboard() {
  return (
    <>
      <section className="dashboard">
        <div className="summary-card">
          <span>Ganhos de hoje</span>
          <strong>R$ 0,00</strong>
        </div>

        <div className="summary-card">
          <span>Meta mensal</span>
          <strong>R$ 3.000,00</strong>
          <small>Faltam R$ 3.000,00 para alcançar a meta</small>
        </div>
      </section>

      <section className="form-card">
        <div className="form-header">
          <h2>Lançamento do dia</h2>
          <p>Registre os ganhos e gastos principais do seu corre.</p>
        </div>

        <div className="form-grid">
          <label className="field">
            <span>Ganho do dia</span>
            <input type="number" placeholder="R$ 00,00" />
          </label>

          <label className="field">
            <span>Combustível</span>
            <input type="number" placeholder="R$ 00,00" />
          </label>

          <label className="field">
            <span>Categoria do gasto</span>
            <select defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              <option>Alimentação</option>
              <option>Manutenção</option>
              <option>Pedágio</option>
              <option>Estacionamento</option>
              <option>Outros</option>
            </select>
          </label>

          <label className="field">
            <span>Valor do gasto</span>
            <input type="number" placeholder="R$ 00,00" />
          </label>
        </div>

        <label className="field field-full">
          <span>Observação</span>
          <textarea placeholder="Ex: dia de chuva, manutenção extra, corrida longa..." />
        </label>

        <button>Lançar</button>
      </section>
    </>
  )
}

export default Dashboard