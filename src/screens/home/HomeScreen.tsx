import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet } from 'react-native'
import AppTabs from '@components/AppTabs'
import { useRoute } from '@react-navigation/native'
const HomeScreen = () => {
  const route = useRoute()
  const tabParam = route.params as { screen?: string }

  const validTabs = ['Study', 'Practice', 'Exam', 'Settings'] as const
  const isValidTab = (tab: any): tab is (typeof validTabs)[number] => validTabs.includes(tab)

  const initialTab = isValidTab(tabParam?.screen) ? tabParam.screen : 'Study'

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <AppTabs initialTab={initialTab} />
    </LinearGradient>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
