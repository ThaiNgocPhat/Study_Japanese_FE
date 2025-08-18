import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, StatusBar, Animated, Easing } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Toast from 'react-native-toast-message'
import rawVocabularyN5 from 'assets/data/vocabulary/vocabularyN5.json'
import rawVocabularyN4 from 'assets/data/vocabulary/vocabularyN4.json'
import rawVocabularyN3 from 'assets/data/vocabulary/vocabularyN3.json'
import rawVocabularyN2 from 'assets/data/vocabulary/vocabularyN2.json'
import type { VocabularyData, VocabularyItem } from 'src/types/vocabulary'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { KanjiItem } from 'src/types/kanji'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackButton from '@components/BackButton'

const STORAGE_KEY_MAP: Record<string, string> = {
  N5: 'unlockedLessons_N5',
  N4: 'unlockedLessons_N4',
  N3: 'unlockedLessons_N3',
  N2: 'unlockedLessons_N2',
}

const ChooseWordCountVocabularyScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute()
  const { level = '', type = 'vocabulary' } = route.params as {
    level?: string
    type?: 'vocabulary' | 'kanji'
  }

  const [currentLevel, setCurrentLevel] = useState<string>(level)
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([])
  const scaleAnim = useRef(new Animated.Value(0.9)).current

  useEffect(() => {
    ;(async () => {
      const key = STORAGE_KEY_MAP[level]
      if (key) {
        const saved = await AsyncStorage.getItem(key)
        if (saved) {
          setUnlockedLessons(JSON.parse(saved))
        }
      }
    })()
  }, [level])

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

  const getWords = (count: number) => {
    let allWords: (VocabularyItem | KanjiItem)[] = []

    const vocabDataMap: Record<string, VocabularyData> = {
      N5: rawVocabularyN5,
      N4: rawVocabularyN4,
      N3: rawVocabularyN3,
      N2: rawVocabularyN2,
    }

    const data = vocabDataMap[currentLevel] || rawVocabularyN5
    const lessonsToUse =
      unlockedLessons.length > 0
        ? unlockedLessons.map((num) => String(num))
        : currentLevel === 'N4'
        ? ['26', '27', '28', '29', '30']
        : ['1', '2', '3', '4', '5']
    allWords = lessonsToUse.flatMap((lessonId) => data[lessonId] || [])

    const shuffled = [...allWords].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }

  const options = [10, 20, 30, 40, 50]

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdf6e3" />
      <BackButton />

      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
          Chọn số {type === 'kanji' ? 'chữ Hán' : 'từ vựng'} bạn muốn làm {currentLevel}?
        </Text>

        {options.map((count) => (
          <TouchableOpacity
            key={count}
            style={{
              backgroundColor: '#f4a261',
              padding: 15,
              borderRadius: 10,
              marginVertical: 5,
              minWidth: 120,
              alignItems: 'center',
            }}
            onPress={() => {
              if (unlockedLessons.length === 0) {
                Toast.show({
                  type: 'info',
                  text1: 'Chưa mở cấp độ',
                  text2: `Bạn chưa mở cấp độ ${currentLevel}. Vui lòng học các bài ở cấp độ trước.`,
                  position: 'top',
                  visibilityTime: 3000,
                })
                return
              }

              const selectedWords = getWords(count)
              if (type === 'kanji') {
                navigation.navigate('KanjiPracticeScreen', {
                  level: currentLevel,
                  count,
                  words: selectedWords as KanjiItem[],
                })
              } else {
                navigation.navigate('VocabularyPracticeScreen', {
                  level: currentLevel,
                  count,
                  words: selectedWords as VocabularyItem[],
                })
              }
            }}
          >
            <Text style={{ color: '#fff', fontSize: 16 }}>{count} từ</Text>
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
export default ChooseWordCountVocabularyScreen
