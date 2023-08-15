import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './src/navigators/tabNavigator'
import MovieDetailScreen from './src/screens/MovieDetailScreen'
import SeatBookingScreen from './src/screens/SeatBookingScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigator} options={{ animation: 'default' }}/>
        <Stack.Screen name="MovieDetails" component={MovieDetailScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name='SeatBooking' component={SeatBookingScreen} options={{ animation: 'slide_from_bottom' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})