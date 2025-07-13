import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～にしても～にしても', screen: 'GrammarNishitemoNishitemoScreen' },
  { title: '～にしろ～にしろ', screen: 'GrammarNishiroNishiroScreen' },
  { title: '～にせよ～にせよ', screen: 'GrammarNiseyoNiseyoScreen' },
  { title: 'どんなに～ことか', screen: 'GrammarDonnaniKotoKaN2Screen' },
  { title: 'いくら～ても', screen: 'GrammarIkuraTemoScreen' },
  { title: '～としても', screen: 'GrammarToshitemoScreen' },
]

const GrammarNegativeScreen = () => {
  return <TopicListScreen screenTitle="Phủ định – Nghi vấn – Lựa chọn" topics={topics} />
}

export default GrammarNegativeScreen
