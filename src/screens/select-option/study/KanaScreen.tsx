import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import hiraganaData from 'assets/data/alphabet/hiragana.json'
import katakanaData from 'assets/data/alphabet/katakana.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

type KanaType = 'hiragana' | 'katakana'

type KanaScreenProps = {
  route: { params: { type?: KanaType } }
  navigation: NativeStackNavigationProp<RootStackParamList>
}
type LearnedKanaStatus = {
  hiragana?: boolean
  katakana?: boolean
}
const saveLearnedKana = async (type: KanaType) => {
  try {
    const storedStr = await AsyncStorage.getItem('learnedKana')
    let stored: LearnedKanaStatus = storedStr ? JSON.parse(storedStr) : {}

    stored[type] = true

    await AsyncStorage.setItem('learnedKana', JSON.stringify(stored))
  } catch (e) {
    console.error('Save learned kana failed', e)
  }
}
const KanaScreen = ({ route, navigation }: KanaScreenProps) => {
  const initialType: KanaType = route.params?.type ?? 'hiragana'

  const [kanaType, setKanaType] = useState<KanaType>(initialType)
  useEffect(() => {
    saveLearnedKana(initialType)
  }, [initialType])
  const kanaData = kanaType === 'hiragana' ? hiraganaData : katakanaData
  const title = kanaType === 'hiragana' ? 'Bảng chữ cái Hiragana' : 'Bảng chữ cái Katakana'
  const handleKanaTypeChange = (type: KanaType) => {
    setKanaType(type)
    saveLearnedKana(type)
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, kanaType === 'hiragana' && styles.tabButtonActive]}
          onPress={() => handleKanaTypeChange('hiragana')}
        >
          <Text style={[styles.tabText, kanaType === 'hiragana' && styles.tabTextActive]}>
            Hiragana
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, kanaType === 'katakana' && styles.tabButtonActive]}
          onPress={() => handleKanaTypeChange('katakana')}
        >
          <Text style={[styles.tabText, kanaType === 'katakana' && styles.tabTextActive]}>
            Katakana
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{title}</Text>
        <View>
          {kanaData.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((char, colIndex) => (
                <View key={colIndex} style={styles.box}>
                  <Text style={styles.char}>{char}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    marginTop: 24,
    paddingBottom: 70,
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabButtonActive: {
    borderBottomColor: '#4a4e69',
  },
  tabText: {
    fontSize: 18,
    color: '#999',
  },
  tabTextActive: {
    color: '#4a4e69',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a4e69',
    marginVertical: 12,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  box: {
    width: 48,
    height: 48,
    backgroundColor: '#d3e0dc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  char: {
    fontSize: 20,
    color: '#4a4e69',
    fontWeight: '600',
  },
})

export default KanaScreen
