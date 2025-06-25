import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '@components/home/Header'
import { useRoute } from '@react-navigation/native'
import type { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from 'src/types/navigation'
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>()
  const name = route.params?.name ?? 'Người dùng'

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <View>
        <Header name={name} />
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
