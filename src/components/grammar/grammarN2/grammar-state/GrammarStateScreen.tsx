import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～てばかりいる', screen: 'GrammarTebakariIruScreen' },
  { title: '～っぱなし', screen: 'GrammarPpanashiScreen' },
  { title: '～がち', screen: 'GrammarGachiScreen' },
  { title: '～気味', screen: 'GrammarKimiScreen' },
  { title: '～かけ', screen: 'GrammarKakeScreen' },
]

const GrammarStateScreen = () => {
  return <TopicListScreen screenTitle="Trạng thái – Hành vi lặp lại" topics={topics} />
}

export default GrammarStateScreen
