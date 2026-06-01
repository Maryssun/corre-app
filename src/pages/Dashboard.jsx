import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3001/lancamentos'

function Dashboard() {
  const [ganho, setGanho] = useState('')
  const [combustivel, setCombustivel] = useState('')
  const [categoria, setCategoria] = useState('')
  const [valorGasto, setValorGasto] = useState('')
  const [observacao, setObservacao] = useState('')
  const [ganhosHoje, setGanhosHoje] = useState(0)
  const [ganhosMes, setGanhosMes] = useState(0)

  useEffect(() => {
    carregarResumo()
  }, [])

  function pegarDataHoje() {
    return new Date().toISOString().split('T')[0]
  }

  function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  async function buscarLancamentos() {
    const resposta = await fetch(API_URL)
    const dados = await resposta.json()
    return dados
  }

  async function carregarResumo() {
    const dados = await buscarLancamentos()
    const hoje = pegarDataHoje()

    const dataAtual = new Date()
    const mesAtual = dataAtual.getMonth()
    const anoAtual = dataAtual.getFullYear()

    let totalHoje = 0
    let totalMes = 0

    dados.forEach((item) => {
      const lucro = Number(item.lucro || 0)

      if (item.data === hoje) {
        totalHoje += lucro
      }

      const dataLancamento = new Date(`${item.data}T00:00:00`)

      if (
          dataLancamento.getMonth() === mesAtual &&
          dataLancamento.getFullYear() === anoAtual
      ) {
        totalMes += lucro
      }
    })

    setGanhosHoje(totalHoje)
    setGanhosMes(totalMes)
  }

  function limparCampos() {
    setGanho('')
    setCombustivel('')
    setCategoria('')
    setValorGasto('')
    setObservacao('')
  }

  async function salvarLancamento() {
    if (ganho === '') {
      alert('Informe o ganho do dia.')
      return
    }

    const ganhoNumero = Number(ganho)
    const combustivelNumero = Number(combustivel || 0)
    const valorGastoNumero = Number(valorGasto || 0)

    const gastos = combustivelNumero + valorGastoNumero
    const lucro = ganhoNumero - gastos

    const novoLancamento = {
      data: pegarDataHoje(),
      ganho: ganhoNumero,
      combustivel: combustivelNumero,
      categoria,
      valorGasto: valorGastoNumero,
      observacao,
      gastos,
      lucro,
    }

    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoLancamento),
    })

    limparCampos()
    carregarResumo()
    alert('Lançamento salvo com sucesso!')
  }

  return (
      <>
        <section className="dashboard">
          <div className="summary-card">
            <span>Ganhos de hoje</span>
            <strong>{formatarMoeda(ganhosHoje)}</strong>
          </div>

          <div className="summary-card">
            <span>Ganhos mensais</span>
            <strong>{formatarMoeda(ganhosMes)}</strong>
            <small>Lucro acumulado no mês atual</small>
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
              <input
                  type="number"
                  placeholder="R$ 00,00"
                  value={ganho}
                  onChange={(e) => setGanho(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Combustível</span>
              <input
                  type="number"
                  placeholder="R$ 00,00"
                  value={combustivel}
                  onChange={(e) => setCombustivel(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Categoria do gasto</span>
              <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
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
              <input
                  type="number"
                  placeholder="R$ 00,00"
                  value={valorGasto}
                  onChange={(e) => setValorGasto(e.target.value)}
              />
            </label>
          </div>

          <label className="field field-full">
            <span>Observação</span>
            <textarea
                placeholder="Ex: dia de chuva, manutenção extra, corrida longa..."
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
            />
          </label>

          <button onClick={salvarLancamento}>Lançar</button>
        </section>
      </>
  )
}

export default Dashboard
