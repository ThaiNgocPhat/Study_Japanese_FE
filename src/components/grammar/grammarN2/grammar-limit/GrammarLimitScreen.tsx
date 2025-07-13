import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～に限り', screen: 'GrammarNiKagiriScreen' },
  { title: '～に限らず', screen: 'GrammarNiKagirazuN2Screen' },
  { title: '～だけ / ～だけに / ～だけあって', screen: 'GrammarDakeScreen' },
  { title: '～にほかならない', screen: 'GrammarNiHokaNaranaiScreen' },
  { title: '～にすぎない', screen: 'GrammarNiSuginaiScreen' },
  { title: '～というものだ', screen: 'GrammarToIuMonodaScreen' },
]

const GrammarLimitScreen = () => {
  return <TopicListScreen screenTitle="Giới hạn – Nhấn mạnh" topics={topics} />
}

export default GrammarLimitScreen
