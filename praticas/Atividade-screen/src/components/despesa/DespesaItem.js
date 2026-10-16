import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DespesaItem({ descricao, valor, data, categoria }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.descricao}>{descricao}</Text>
        <View style={styles.detalhesRow}>
          <Text style={styles.data}>{data}</Text>
          {categoria ? (
            <View style={styles.categoriaTag}>
              <Text style={styles.categoriaText}>{categoria}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.valorContainer}>
        <Text style={styles.valor}>R$ {valor.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  infoContainer: {
    flex: 1,
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detalhesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 8,
  },
  data: {
    fontSize: 12,
    color: '#666',
  },
  categoriaTag: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  categoriaText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#444',
  },
  valorContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  valor: {
    color: '#fff',
    fontWeight: 'bold',
  },
});