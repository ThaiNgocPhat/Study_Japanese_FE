export type VocabularyItem = {
  word: string
  kanji?: string | null
  romaji: string
  hanViet?: string | null
  meaning: string
}

export type VocabularyData = Record<string, VocabularyItem[]>
