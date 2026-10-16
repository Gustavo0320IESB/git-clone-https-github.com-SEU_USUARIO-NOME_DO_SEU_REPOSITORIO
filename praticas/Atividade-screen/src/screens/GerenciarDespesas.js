import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

const CATEGORIAS = ['Alimentação', 'Transporte', 'Lazer', 'Contas'];

export default function GerenciarDespesa() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');

  // Validação do valor com Regex (limita a 2 casas decimais)
  function valorChangeHandler(text) {
    if (/^\d*\.?\d{0,2}$/.test(text)) {
      setValor(text);
    }
  }

  function submeterHandler() {
    const valorNum = parseFloat(valor);
    const descricaoValida = descricao.trim().length > 0;
    const valorValido = !isNaN(valorNum) && valorNum > 0;
    const categoriaValida = categoria.trim().length > 0;

    if (!descricaoValida || !valorValido || !categoriaValida) {
      Alert.alert(
        'Entrada Inválida',
        'Por favor, preencha a descrição, o valor e selecione uma categoria.'
      );
      return;
    }

    console.log('Despesa Salva:', { descricao, valor: valorNum, categoria });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Ex: Almoço"
      />

      <Text style={styles.label}>Valor (R$)</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={valorChangeHandler}
        keyboardType="decimal-pad"
        placeholder="0.00"
      />

      <Text style={styles.label}>Categoria</Text>
      <View style={styles.categoriasContainer}>
        {CATEGORIAS.map((cat) => (
          <Pressable
            key={cat}
            style={[
              styles.categoriaButton,
              categoria === cat && styles.categoriaButtonSelected,
            ]}
            onPress={() => setCategoria(cat)}
          >
            <Text
              style={[
                styles.categoriaText,
                categoria === cat && styles.categoriaTextSelected,
              ]}
            >
              {cat}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.submitButton} onPress={submeterHandler}>
        <Text style={styles.submitButtonText}>Salvar Despesa</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
  categoriasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 8,
  },
  categoriaButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#fff',
  },
  categoriaButtonSelected: {
    backgroundColor: '#007AFF',
  },
  categoriaText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  categoriaTextSelected: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});