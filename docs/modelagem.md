# Modelagem Inicial dos Dados

## Objetivo

A aplicação Corre utilizará uma estrutura simples para registrar lançamentos financeiros realizados pelo usuário.

Cada lançamento representa um registro diário de ganhos e despesas.

---

# Entidade: Lançamento

| Campo | Tipo | Obrigatório |
|---------|---------|---------|
| id | string | Sim |
| data | date | Sim |
| ganho | number | Sim |
| combustivel | number | Não |
| alimentacao | number | Não |
| manutencao | number | Não |
| outros | number | Não |
| observacao | string | Não |
| lucro | number | Sim |

---

# Exemplo de Registro

```json
{
  "id": "001",
  "data": "2026-05-28",
  "ganho": 250,
  "combustivel": 40,
  "alimentacao": 20,
  "manutencao": 0,
  "outros": 10,
  "observacao": "Dia de alta demanda",
  "lucro": 180
}
```

---

# Fórmula de Cálculo

Lucro = Ganho - Combustível - Alimentação - Manutenção - Outros

---

# Estrutura Prevista no Firebase

```text
lancamentos
│
├── id
├── data
├── ganho
├── combustivel
├── alimentacao
├── manutencao
├── outros
├── observacao
└── lucro