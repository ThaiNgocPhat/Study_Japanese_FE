export type KanjiItem = {
  kanji: string
  onYomi: string[] | string
  kunYomi: string[] | string
  meaning: string
  examples: string[] | string
  lessonId?: number
}

export type KanjiData = {
  [lessonId: string]: KanjiItem[]
}
