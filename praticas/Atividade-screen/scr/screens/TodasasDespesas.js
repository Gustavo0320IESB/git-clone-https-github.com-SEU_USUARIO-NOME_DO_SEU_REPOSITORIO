import React, { useState, useMemo } from 'react';
import { View, TextInput, StyleSheet, useColorScheme } from 'react-native';
import { useExpenses } from '../store/expenses-context';
import { useDebounce } from '../hooks/useDebounce';
import { Themes } from '../constants/theme';
import DespesaSaida from '../components/despesa/DespesaSaida';

export default function TodasDespesas() {
  const { expenses } = useExpenses();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);

  const colorScheme = useColorScheme();
  const theme = Themes[colorScheme === 'dark' ? 'dark' : 'light'];

  const filteredExpenses = useMemo(() => {
    if (!debouncedSearch.trim()) return expenses;
    return expenses.filter((exp) =>
      exp.description?.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [expenses, debouncedSearch]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[
            styles.searchInput,
            {
              backgroundColor: theme.cardBackground,
              color: theme.text,
              borderColor: theme.border,
            },
          ]}
          placeholder="Buscar por descrição..."
          placeholderTextColor={theme.subText}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <DespesaSaida
        despesas={filteredExpenses}
        periodo="Total"
        fallbackText="Nenhuma despesa encontrada."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  searchInput: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
});