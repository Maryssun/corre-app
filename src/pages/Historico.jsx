import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3001/lancamentos'

function Historico() {
  const [lancamentos, setLancamentos] = useState([])
  const [editando, setEditando] = useState(null)
  const [diaFiltro, setDiaFiltro] = useState('')

  useEffect(() => {
    buscarLancamentos()
  }, [])

  function formatarMoeda(valor) {
    return Number(valor || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function formatarData(data) {
    return new Date(`${data}T00:00:00`).toLocaleDateString('pt-BR')
  }

  async function buscarLancamentos() {
    const resposta = await fetch(API_URL)
    const dados = await resposta.json()
    setLancamentos(dados)
  }

  function comecarEdicao(lancamento) {
    setEditando({ ...lancamento })
  }

  function cancelarEdicao() {
    setEditando(null)
  }

  function mudarCampo(campo, valor) {
    setEditando({
      ...editando,
      [campo]: valor,
    })
  }

  async function salvarEdicao() {
    const ganho = Number(editando.ganho)
    const combustivel = Number(editando.combustivel || 0)
    const valorGasto = Number(editando.valorGasto || 0)

    const gastos = combustivel + valorGasto
    const lucro = ganho - gastos

    const lancamentoAtualizado = {
      ...editando,
      ganho,
      combustivel,
      valorGasto,
      gastos,
      lucro,
    }

    await fetch(`${API_URL}/${editando.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lancamentoAtualizado),
    })

    setEditando(null)
    buscarLancamentos()
  }

  async function excluirLancamento(id) {
    const confirmar = confirm('Deseja excluir este lançamento?')

    if (!confirmar) {
      return
    }

    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })

    buscarLancamentos()
  }

  const listaFiltrada = diaFiltro
      ? lancamentos.filter((item) => item.data === diaFiltro)
      : lancamentos

  return (
      <section className="history-page">
        <div className="history-header">
          <h2>Histórico</h2>
          <p>Consulte seus lançamentos e acompanhe seus resultados.</p>
        </div>

        <div className="history-filters">
          <label>
            Dia
            <input
                type="date"
                value={diaFiltro}
                onChange={(e) => setDiaFiltro(e.target.value)}
            />
          </label>
        </div>

        <div className="history-list">
          {listaFiltrada.length === 0 && (
              <p className="empty-message">Nenhum lançamento encontrado.</p>
          )}

          {listaFiltrada.map((lancamento) => (
              <article className="history-item" key={lancamento.id}>
                {editando && editando.id === lancamento.id ? (
                    <>
                      <label className="field">
                        <span>Data</span>
                        <input
                            type="date"
                            value={editando.data}
                            onChange={(e) => mudarCampo('data', e.target.value)}
                        />
                      </label>

                      <label className="field">
                        <span>Ganho</span>
                        <input
                            type="number"
                            value={editando.ganho}
                            onChange={(e) => mudarCampo('ganho', e.target.value)}
                        />
                      </label>

                      <label className="field">
                        <span>Combustível</span>
                        <input
                            type="number"
                            value={editando.combustivel}
                            onChange={(e) => mudarCampo('combustivel', e.target.value)}
                        />
                      </label>

                      <label className="field">
                        <span>Categoria</span>
                        <select
                            value={editando.categoria}
                            onChange={(e) => mudarCampo('categoria', e.target.value)}
                        >
                          <option value="">Selecione</option>
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
                            value={editando.valorGasto}
                            onChange={(e) => mudarCampo('valorGasto', e.target.value)}
                        />
                      </label>

                      <label className="field field-full">
                        <span>Observação</span>
                        <textarea
                            value={editando.observacao}
                            onChange={(e) => mudarCampo('observacao', e.target.value)}
                        />
                      </label>

                      <div className="history-actions">
                        <button onClick={salvarEdicao}>Salvar</button>
                        <button onClick={cancelarEdicao}>Cancelar</button>
                      </div>
                    </>
                ) : (
                    <>
                      <div className="history-item-header">
                        <strong>{formatarData(lancamento.data)}</strong>
                        <span>Lucro {formatarMoeda(lancamento.lucro)}</span>
                      </div>

                      <div className="history-values">
                        <p>
                          <span>Ganhos</span>
                          <strong>{formatarMoeda(lancamento.ganho)}</strong>
                        </p>

                        <p>
                          <span>Gastos</span>
                          <strong>{formatarMoeda(lancamento.gastos)}</strong>
                        </p>
                      </div>

                      {lancamento.categoria && (
                          <p className="history-detail">Categoria: {lancamento.categoria}</p>
                      )}

                      {lancamento.observacao && (
                          <p className="history-detail">Observação: {lancamento.observacao}</p>
                      )}

                      <div className="history-actions">
                        <button onClick={() => comecarEdicao(lancamento)}>Editar</button>
                        <button onClick={() => excluirLancamento(lancamento.id)}>Excluir</button>
                      </div>
                    </>
                )}
              </article>
          ))}
        </div>
      </section>
  )
}

export default Historico
