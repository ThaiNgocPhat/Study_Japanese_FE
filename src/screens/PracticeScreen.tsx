import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Banner from '../../assets/images/Banner.png'
import { LinearGradient } from 'expo-linear-gradient'

const features = [
  {
    name: 'Test từ vựng',
    icon: <MaterialCommunityIcons name="file-document-edit-outline" size={32} color="#88c9bf" />,
  },
  {
    name: 'Test Kanji',
    icon: <MaterialCommunityIcons name="script-text-outline" size={32} color="#88c9bf" />,
  },
  {
    name: 'Test chữ cái',
    icon: <MaterialCommunityIcons name="format-letter-case" size={32} color="#88c9bf" />,
  },
]

const PracticeScreen = () => {
  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <Image source={Banner} style={styles.banner} resizeMode="cover" />
      <Text style={styles.text}>Luyện tập tiếng Nhật</Text>
      <View style={styles.grid}>
        {features.map((item, index) => (
          <TouchableOpacity key={index} style={styles.box}>
            {item.icon}
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  )
}

export default PracticeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6e3',
  },
  banner: {
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4a4e69',
    marginLeft: 16,
    marginBottom: 16,
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#d3e0dc',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#4a4e69',
  },
})
