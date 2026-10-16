import React from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';

const DUMMY_EXPENSES = [
  { id: 'e1', descricao: 'Almoço Restaurante', valor: 45.50, data: '2023-10-01', categoria: 'Alimentação' },
  { id: 'e2', descricao: 'Uber Trabalho', valor: 22.00, data: '2023-10-02', categoria: 'Transporte' },
  { id: 'e3', descricao: 'Cinema', valor: 35.00, data: '2023-10-03', categoria: 'Lazer' },
  { id: 'e4', descricao: 'Conta de Luz', valor: 120.00, data: '2023-10-04', categoria: 'Contas' },
];

export default function DespesasRecentes() {
  return <DespesaSaida despesas={DUMMY_EXPENSES} periodo="Últimos 7 Dias" />;
}