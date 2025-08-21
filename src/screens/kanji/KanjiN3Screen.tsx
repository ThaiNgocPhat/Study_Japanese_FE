import React, { useEffect, useState } from 'react'
import KanjiListScreen from '@components/KanjiListScreen'
import kanjiN3 from '../../../assets/data/kanji/kanjiN3.json'
import { KanjiItem } from 'src/types/kanji'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

const normalizeField = (field: string | string[]): string[] => {
  if (Array.isArray(field)) return field
  if (typeof field === 'string') return field.split(/・|、|,/).map((s) => s.trim())
  return []
}

const normalizedList: KanjiItem[] = kanjiN3.map((item: any, index: number) => ({
  kanji: item.kanji,
  onYomi: normalizeField(item.onYomi),
  kunYomi: normalizeField(item.kunYomi),
  meaning: item.meaning || '',
  examples: normalizeField(item.examples),
  lessonId: Math.floor(index / 10) + 1,
}))
const KanjiN3Screen = () => {
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([])
  useEffect(() => {
    ;(async () => {
      const unlocked = await AsyncStorage.getItem('kanjiN3Unlocked')
      if (unlocked == 'true') {
        setUnlockedLessons([1])
      }
    })()
  }, [])
  return (
    <KanjiListScreen
      title="Hán tự N3"
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
    />
  )
}
export default KanjiN3Screen
