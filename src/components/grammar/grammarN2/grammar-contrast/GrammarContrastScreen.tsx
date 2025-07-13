import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～一方で', screen: 'GrammarIppouScreen' },
  { title: '～反面', screen: 'GrammarHanmenScreen' },
  { title: '～かわりに', screen: 'GrammarKawariniN2Screen' },
  { title: '～くせに', screen: 'GrammarKuseniScreen' },
  { title: '～というより', screen: 'GrammarToIuYoriScreen' },
  { title: '～わりに', screen: 'GrammarWariniScreen' },
  { title: '～にしても / ～にしろ / ～にせよ', screen: 'GrammarNishitemoScreen' },
]

const GrammarContrastScreen = () => {
  return <TopicListScreen screenTitle="Tương phản – Đối lập" topics={topics} />
}

export default GrammarContrastScreen
