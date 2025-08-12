import React from 'react'
import Toast from 'react-native-toast-message'
import Routers from '@navigation/index'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routers initialRouteName="Home" />
      <Toast />
    </GestureHandlerRootView>
  )
}
