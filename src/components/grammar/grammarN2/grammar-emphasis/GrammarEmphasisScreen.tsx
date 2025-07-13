import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～ばかりか', screen: 'GrammarBakarikaN2Screen' },
  { title: '～のみならず', screen: 'GrammarNominarazuScreen' },
  { title: '～はもちろん', screen: 'GrammarWaMochironScreen' },
  { title: '～に限らず', screen: 'GrammarNiKagirazuScreen' },
  { title: '～にかかわらず', screen: 'GrammarNiKakawarazuScreen' },
  { title: '～にしては', screen: 'GrammarNishitewaN2Screen' },
]
const GrammarEmphasisScreen = () => {
  return <TopicListScreen screenTitle="Nhấn mạnh – So sánh – Bổ sung" topics={topics} />
}

export default GrammarEmphasisScreen
