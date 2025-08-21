import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import KanjiListScreen from '@components/KanjiListScreen'
import Toast from 'react-native-toast-message'
import kanjiN5 from '../../../assets/data/kanji/kanjiN5.json'
import { KanjiItem } from 'src/types/kanji'

const STORAGE_KEY = 'unlockedKanji_N5'

const normalizeField = (field: string | string[]): string[] => {
  if (Array.isArray(field)) return field
  if (typeof field === 'string') return field.split(/・|、|,/).map((s) => s.trim())
  return []
}

const KanjiN5Screen = () => {
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([1])
  const [kanjiList, setKanjiList] = useState<KanjiItem[]>([])
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
    const normalized: KanjiItem[] = kanjiN5.map((item: any, index: number) => ({
      kanji: item.kanji,
      onYomi: normalizeField(item.onYomi),
      kunYomi: normalizeField(item.kunYomi),
      meaning: item.meaning || '',
      examples: normalizeField(item.examples),
      lessonId: Math.floor(index / 10) + 1,
    }))
    setKanjiList(normalized)
  }, [])

  useEffect(() => {
    const unlockNextLesson = async () => {
      const lastCompleted = await AsyncStorage.getItem('lastCompletedKanjiLesson_N5')
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
        await AsyncStorage.setItem('kanjiN4Unlocked', 'true')
      }
      await AsyncStorage.removeItem('lastCompletedKanjiLesson_N5')
    }

    unlockNextLesson()
  }, [kanjiList, unlockedLessons])

  const handleLockedPress = () => {
    Toast.show({
      type: 'info',
      text1: 'Bài học bị khoá',
      text2: 'Vui lòng hoàn thành các bài trước để mở khóa kanji tiếp theo.',
      position: 'bottom',
    })
  }

  return (
    <KanjiListScreen
      title="Hán tự N5"
      kanjiList={kanjiList}
      unlockedLessons={unlockedLessons}
      onLockedPress={handleLockedPress}
      onUpdateUnlockedLessons={(updated) => setUnlockedLessons(updated)}
    />
  )
}

export default KanjiN5Screen
