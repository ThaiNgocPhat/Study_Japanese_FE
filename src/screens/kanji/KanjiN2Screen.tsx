import React, { useEffect, useState } from 'react'
import KanjiListScreen from '@components/KanjiListScreen'
import kanjiN2 from '../../../assets/data/kanji/kanjiN2.json'
import { KanjiItem } from 'src/types/kanji'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

const STORAGE_KEY = 'unlockedKanji_N2'

const normalizeField = (field: string | string[]): string[] => {
  if (Array.isArray(field)) return field
  if (typeof field === 'string') return field.split(/・|、|,/).map((s) => s.trim())
  return []
}

const normalizedList: KanjiItem[] = kanjiN2.map((item: any, index: number) => ({
  kanji: item.kanji,
  onYomi: normalizeField(item.onYomi),
  kunYomi: normalizeField(item.kunYomi),
  meaning: item.meaning || '',
  examples: normalizeField(item.examples),
  lessonId: Math.floor(index / 10) + 1,
}))

const KanjiN2Screen = () => {
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([])

  useEffect(() => {
    ;(async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as number[]
        setUnlockedLessons(parsed.includes(1) ? parsed : [1])
      }
    })()
  }, [])
  useEffect(() => {
    const unlockNextLesson = async () => {
      const lastCompleted = await AsyncStorage.getItem('lastCompletedKanjiLesson_N2')
      if (!lastCompleted) return
      const completedId = Number(lastCompleted)
      const nextLesson = completedId + 1
      const totalLessons = Math.ceil(normalizedList.length / 10)
      if (!unlockedLessons.includes(nextLesson) && nextLesson <= totalLessons) {
        const updated = [...unlockedLessons, nextLesson]
        setUnlockedLessons(updated)
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      }
      if (completedId === totalLessons) {
        await AsyncStorage.setItem('kanjiN1Unlocked', 'true')
      }

      await AsyncStorage.removeItem('lastCompletedKanjiLesson_N2')
    }

    unlockNextLesson()
  }, [unlockedLessons])

  return (
    <KanjiListScreen
      title="Hán tự N2"
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
      onUpdateUnlockedLessons={(updated) => setUnlockedLessons(updated)}
    />
  )
}

export default KanjiN2Screen
