import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import DespesaSumario from './DespesaSumario';
import DespesaLista from './DespesaLista';

const CATEGORIAS_FILTRO = ['Todas', 'Alimentação', 'Transporte', 'Lazer', 'Contas'];

export default function DespesaSaida({ despesas, periodo }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const despesasExibidas = categoriaSelecionada === 'Todas'
    ? despesas
    : despesas.filter((item) => item.categoria === categoriaSelecionada);

  return (
    <View style={styles.container}>
      <Text style={styles.filtroLabel}>Filtrar por Categoria:</Text>
      <View style={styles.filtrosContainer}>
        {CATEGORIAS_FILTRO.map((cat) => (
          <Pressable
            key={cat}
            style={[
              styles.filtroButton,
              categoriaSelecionada === cat && styles.filtroButtonSelected,
            ]}
            onPress={() => setCategoriaSelecionada(cat)}
          >
            <Text
              style={[
                styles.filtroText,
                categoriaSelecionada === cat && styles.filtroTextSelected,
              ]}
            >
              {cat}
            </Text>
          </Pressable>
        ))}
      </View>

      <DespesaSumario despesas={despesasExibidas} periodo={periodo} />
      <DespesaLista despesas={despesasExibidas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  filtroLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  filtrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  filtroButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  filtroButtonSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  filtroText: {
    fontSize: 12,
    color: '#555',
  },
  filtroTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});