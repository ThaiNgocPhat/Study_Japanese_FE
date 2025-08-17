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
  const [unlockedKanjiLessons, setUnlockedKanjiLessons] = useState<number[]>([1])
  const [kanjiList, setKanjiList] = useState<KanjiItem[]>([])
  useEffect(() => {
    ;(async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY)
      if (saved) {
        setUnlockedKanjiLessons(JSON.parse(saved))
      }
    })()
  }, [])
  useEffect(() => {
    const normalized: KanjiItem[] = kanjiN5.map((item: any) => ({
      kanji: item.kanji,
      onYomi: normalizeField(item.onYomi),
      kunYomi: normalizeField(item.kunYomi),
      meaning: item.meaning || '',
      examples: normalizeField(item.examples),
      lessonId: Number(item.lessonId) || 1,
    }))
    setKanjiList(normalized)
  }, [])

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
      unlockedLessons={unlockedKanjiLessons}
      onLockedPress={handleLockedPress}
    />
  )
}

export default KanjiN5Screen
