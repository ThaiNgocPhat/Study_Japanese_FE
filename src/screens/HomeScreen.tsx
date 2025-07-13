import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet } from 'react-native'
import AppTabs from '@components/AppTabs'

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <AppTabs />
    </LinearGradient>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
