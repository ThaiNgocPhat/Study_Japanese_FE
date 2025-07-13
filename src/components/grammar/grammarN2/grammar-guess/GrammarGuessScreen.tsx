import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～に違いない', screen: 'GrammarNiChigainaiScreen' },
  { title: '～に相違ない', screen: 'GrammarNiSouinaiScreen' },
  { title: '～にきまっている', screen: 'GrammarNikimatteiruScreen' },
  { title: '～らしい', screen: 'GrammarRashiiN2Screen' },
  { title: '～っぽい', screen: 'GrammarPpoiScreen' },
  { title: '～ような気がする', screen: 'GrammarYounaKigasureScreen' },
  { title: '～かのようだ', screen: 'GrammarKanoyoudaScreen' },
  { title: '～わけがない', screen: 'GrammarWakeganaiScreen' },
  { title: '～はずがない', screen: 'GrammarHazuganaiScreen' },
  { title: '～とは限らない', screen: 'GrammarTowaKagiranaiScreen' },
]

const GrammarGuessScreen = () => {
  return <TopicListScreen screenTitle="Suy đoán – Phán đoán" topics={topics} />
}

export default GrammarGuessScreen
