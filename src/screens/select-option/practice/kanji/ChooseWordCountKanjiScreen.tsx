import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, StatusBar, Animated, Easing } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'

import rawKanjiN5 from 'assets/data/kanji/kanjiN5.json'
import rawKanjiN4 from 'assets/data/kanji/kanjiN4.json'
import rawKanjiN3 from 'assets/data/kanji/kanjiN3.json'
import rawKanjiN2 from 'assets/data/kanji/kanjiN2.json'

import type { KanjiItem } from 'src/types/kanji'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'

import BackButton from '@components/BackButton'

const STORAGE_KEY_MAP: Record<string, string> = {
  N5: 'unlockedKanji_N5',
  N4: 'unlockedKanji_N4',
  N3: 'unlockedKanji_N3',
  N2: 'unlockedKanji_N2',
}

const ChooseWordCountKanjiScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute()
  const { level = 'N5' } = route.params as { level?: string }

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

  const getKanji = (count: number): KanjiItem[] => {
    const kanjiDataMap: Record<string, KanjiItem[]> = {
      N5: rawKanjiN5,
      N4: rawKanjiN4,
      N3: rawKanjiN3,
      N2: rawKanjiN2,
    }
    const data = kanjiDataMap[currentLevel] || rawKanjiN5
    const lessonsToUse =
      unlockedLessons.length > 0 ? unlockedLessons : currentLevel === 'N4' ? [1, 2, 3, 4, 5] : [1]

    const allKanji: KanjiItem[] = lessonsToUse.flatMap((lessonId) =>
      data.filter((_, idx) => Math.floor(idx / 10) + 1 === lessonId),
    )

    const shuffled = [...allKanji].sort(() => Math.random() - 0.5)
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
          Chọn số chữ Hán bạn muốn làm {currentLevel}?
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

              const selectedKanji = getKanji(count)
              navigation.navigate('KanjiPracticeScreen', {
                level: currentLevel,
                count,
                words: selectedKanji,
              })
            }}
          >
            <Text style={{ color: '#fff', fontSize: 16 }}>{count} chữ Hán</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </LinearGradient>
  )
}

export default ChooseWordCountKanjiScreen
