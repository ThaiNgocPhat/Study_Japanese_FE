import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Banner from '../../../../../assets/images/Banner.png'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { generateKanaQuestions } from 'src/utils/generateKanaQuestions'
import hiraganaGrid from 'assets/data/alphabet/hiragana.json'
import katakanaGrid from 'assets/data/alphabet/katakana.json'

import { hiraganaRomajiMap } from 'assets/data/alphabet/hiraganaRomajiMap'
import { katakanaRomajiMap } from 'assets/data/alphabet/katakanaRomajiMap'

const SelectKanaTest = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const features = [
    {
      name: 'Hiragana',
      icon: <Ionicons name="language" size={48} color="#4a4e69" />,
      onPress: () => {
        const questions = generateKanaQuestions(hiraganaGrid, hiraganaRomajiMap, 10)
        navigation.navigate('KanaTestScreen', { questions, type: 'hiragana' })
      },
    },
    {
      name: 'Katakana',
      icon: <Ionicons name="school-outline" size={48} color="#4a4e69" />,
      onPress: () => {
        const questions = generateKanaQuestions(katakanaGrid, katakanaRomajiMap, 10)
        navigation.navigate('KanaTestScreen', { questions, type: 'katakana' })
      },
    },
  ]

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params: { screen: 'Practice' } }],
          })
        }}
      >
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>
      <Image source={Banner} style={styles.banner} resizeMode="cover" />
      <Text style={styles.text}>Chọn bảng chữ cái</Text>
      <View style={styles.grid}>
        {features.map((item, index) => (
          <TouchableOpacity key={index} style={styles.box} onPress={item.onPress}>
            {item.icon}
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  )
}
export default SelectKanaTest
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#ffffffcc',
    padding: 8,
    borderRadius: 20,
  },
})
