import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = despesas.reduce((acumulador, item) => acumulador + item.valor, 0);
  const isAcimaLimite = somaDespesas > 200;

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={[styles.soma, isAcimaLimite && styles.somaAlerta]}>
        R$ {somaDespesas.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#eef2f5',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  periodo: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  soma: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  somaAlerta: {
    color: '#d9534f', // Cor vermelha para indicar valor > R$ 200,00
  },
});