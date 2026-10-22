import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Importações com os caminhos exatos da sua árvore de diretórios:
import ExpensesContextProvider from './scr/store/expenses-context';
import TodasDespesas from './scr/screens/TodasasDespesas';
import DespesasRecentes from './scr/screens/DespesasRecentes';
import GerenciarDespesas from './scr/screens/GerenciarDespesas';
import IconButton from './scr/components/components/IconButton'; // Correção: fica em ./components e não ./scr/components

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#4338ca' },
        headerTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: '#4338ca' },
        tabBarActiveTintColor: '#f59e0b',
        tabBarInactiveTintColor: '#c7d2fe',
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor || '#ffffff'}
            onPress={() => {
              navigation.navigate('GerenciarDespesas');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="DespesasRecentes"
        component={DespesasRecentes}
        options={{
          title: 'Despesas Recentes',
          tabBarLabel: 'Recentes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="TodasDespesas"
        component={TodasDespesas}
        options={{
          title: 'Todas as Despesas',
          tabBarLabel: 'Todas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#4338ca' },
              headerTintColor: '#ffffff',
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GerenciarDespesas"
              component={GerenciarDespesas}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}