export type VocabularyItem = {
  word: string
  kanji?: string
  romaji: string
  hanViet?: string
  meaning: string
}
export type VocabularyData = Record<string, VocabularyItem[]>
