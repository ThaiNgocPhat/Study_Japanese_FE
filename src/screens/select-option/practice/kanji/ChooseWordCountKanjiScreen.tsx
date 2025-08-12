import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, StatusBar, Animated, Easing } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import rawKanjiN5 from 'assets/data/kanji/kanjiN5.json'
import rawKanjiN4 from 'assets/data/kanji/kanjiN4.json'
import rawKanjiN3 from 'assets/data/kanji/kanjiN3.json'
import rawKanjiN2 from 'assets/data/kanji/kanjiN2.json'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { KanjiItem } from 'src/types/kanji'

const ChooseWordCountKanjiScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute()
  const { level = 'N5' } = route.params as { level?: string }

  const [currentLevel, setCurrentLevel] = useState<string>(level)
  const scaleAnim = React.useRef(new Animated.Value(0.9)).current

  useEffect(() => {
    setCurrentLevel(level)
  }, [level])

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start()
  }, [])

  const getKanji = (count: number): KanjiItem[] => {
    const kanjiDataMap: Record<string, KanjiItem[]> = {
      N5: rawKanjiN5,
      N4: rawKanjiN4,
      N3: rawKanjiN3,
      N2: rawKanjiN2,
    }

    const allKanji = kanjiDataMap[currentLevel] || rawKanjiN5
    const shuffled = [...allKanji].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }

  const options = [10, 20, 30, 40, 50]

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdf6e3" />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>

      <Animated.View style={[styles.innerContent, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.title}>Chọn số chữ Hán bạn muốn làm {currentLevel}?</Text>

        {options.map((count) => (
          <TouchableOpacity
            key={count}
            style={styles.option}
            onPress={() => {
              const selectedKanji = getKanji(count)
              navigation.navigate('KanjiPracticeScreen', {
                level: currentLevel,
                count,
                words: selectedKanji,
              })
            }}
          >
            <Text style={styles.optionText}>{count}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    color: '#4a4e69',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#88c9bf',
    borderRadius: 16,
    marginVertical: 10,
    width: 220,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#d3e0dc',
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#ffffffcc',
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d3e0dc',
  },
})

export default ChooseWordCountKanjiScreen
