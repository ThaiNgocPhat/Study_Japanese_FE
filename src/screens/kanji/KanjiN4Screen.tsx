import React, { useEffect, useState } from 'react'
import KanjiListScreen from '@components/KanjiListScreen'
import kanjiN4 from '../../../assets/data/kanji/kanjiN4.json'
import { KanjiItem } from 'src/types/kanji'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
const STORAGE_KEY = 'unlockedKanji_N4'

const normalizeField = (field: string | string[]): string[] => {
  if (Array.isArray(field)) return field
  if (typeof field === 'string') return field.split(/・|、|,/).map((s) => s.trim())
  return []
}

const normalizedList: KanjiItem[] = kanjiN4.map((item: any, index: number) => ({
  kanji: item.kanji,
  onYomi: normalizeField(item.onYomi),
  kunYomi: normalizeField(item.kunYomi),
  meaning: item.meaning || '',
  examples: normalizeField(item.examples),
  lessonId: Math.floor(index / 10) + 1,
}))

const KanjiN4Screen = () => {
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([])
  const [kanjiList, setKanjiList] = useState<KanjiItem[]>([])
  useEffect(() => {
    ;(async () => {
      const unlocked = await AsyncStorage.getItem('kanjiN4Unlocked')
      if (unlocked === 'true') {
        setUnlockedLessons([1])
      }
    })()
  }, [])
  useEffect(() => {
    const unlockNextLesson = async () => {
      const lastCompleted = await AsyncStorage.getItem('lastCompletedKanjiLesson_N4')
      if (!lastCompleted) return
      const completedId = Number(lastCompleted)
      const nextLesson = completedId + 1
      const totalLessons = Math.ceil(kanjiList.length / 10)
      if (!unlockedLessons.includes(nextLesson) && nextLesson <= totalLessons) {
        const updated = [...unlockedLessons, nextLesson]
        setUnlockedLessons(updated)
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      }
      if (completedId === totalLessons) {
        await AsyncStorage.setItem('kanjiN3Unlocked', 'true')
      }
      await AsyncStorage.removeItem('lastCompletedKanjiLesson_N4')
    }
    unlockNextLesson()
  }, [kanjiList, unlockedLessons])
  return (
    <KanjiListScreen
      title="Hán tự N4"
      kanjiList={normalizedList}
      unlockedLessons={unlockedLessons}
      onLockedPress={() => {
        Toast.show({
          type: 'info',
          text1: 'Bài học đã bị khoá',
          text2: 'Hãy hoàn thành các bài học trước đó',
          position: 'top',
        })
      }}
      onUpdateUnlockedLessons={(update) => setUnlockedLessons(update)}
    />
  )
}

export default KanjiN4Screen
