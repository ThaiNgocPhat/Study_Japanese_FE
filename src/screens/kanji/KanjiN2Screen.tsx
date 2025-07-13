import React from 'react'
import KanjiListScreen from '@components/KanjiListScreen'
import kanjiN2 from '../../../assets/data/kanjiN2.json'
import { KanjiData } from 'src/types/kanji'

const normalizeField = (field: string | string[]): string[] => {
  if (Array.isArray(field)) return field
  if (typeof field === 'string') return field.split(/・|、|,/).map((s) => s.trim())
  return []
}

const normalizedList: KanjiData[] = kanjiN2.map((item: any) => ({
  kanji: item.kanji,
  onYomi: normalizeField(item.onYomi),
  kunYomi: normalizeField(item.kunYomi),
  meaning: item.meaning || '',
  examples: normalizeField(item.examples),
}))
const KanjiN2Screen = () => <KanjiListScreen title="Hán tự N3" kanjiList={normalizedList} />

export default KanjiN2Screen
