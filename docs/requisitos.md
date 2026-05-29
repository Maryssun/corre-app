# Requisitos do Projeto Corre

## Visão Geral

O Corre é uma aplicação web desenvolvida para auxiliar entregadores autônomos no controle financeiro diário.

A solução busca centralizar informações de ganhos e despesas, permitindo ao usuário acompanhar seus resultados financeiros de forma simples e organizada.

---

# Requisitos Funcionais

## RF01 - Registrar Ganhos

O sistema deve permitir registrar valores recebidos pelo usuário durante o dia.

### Exemplo

- Entrega realizada.
- Corrida concluída.
- Serviço adicional.

---

## RF02 - Registrar Despesas

O sistema deve permitir registrar despesas relacionadas à atividade profissional.

### Exemplos

- Combustível.
- Alimentação.
- Manutenção.
- Pedágio.
- Outros custos.

---

## RF03 - Consultar Histórico

O sistema deve permitir consultar lançamentos realizados anteriormente.

---

## RF04 - Editar Lançamentos

O sistema deve permitir alterar informações de lançamentos já cadastrados.

---

## RF05 - Excluir Lançamentos

O sistema deve permitir remover lançamentos cadastrados.

---

## RF06 - Visualizar Resumo Financeiro

O sistema deve apresentar:

- Total de ganhos.
- Total de despesas.
- Lucro obtido.

---

# Regras de Negócio

## RN01 - Data Obrigatória

Todo lançamento deve possuir uma data associada.

---

## RN02 - Valores Monetários

Ganhos e despesas devem ser informados em valores numéricos.

---

## RN03 - Cálculo do Lucro

O lucro será calculado pela fórmula:

Lucro = Ganhos - Despesas

---

## RN04 - Múltiplos Lançamentos

O usuário poderá registrar mais de um lançamento por dia.

---

## RN05 - Consolidação Mensal

O sistema deverá consolidar os lançamentos do período para apresentação de resultados mensais.

---

# Critérios de Aceitação

## Cadastro de Ganho

Dado que o usuário deseja registrar um ganho

Quando informar os dados obrigatórios

Então o sistema deverá salvar o lançamento.

---

## Cadastro de Despesa

Dado que o usuário deseja registrar uma despesa

Quando informar os dados obrigatórios

Então o sistema deverá salvar o lançamento.

---

## Consulta de Resumo

Dado que existam lançamentos cadastrados

Quando o usuário acessar o resumo financeiro

Então o sistema deverá apresentar ganhos, despesas e lucro acumulado.