import React from 'react'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'

const topics: TopicItem[] = [
  {
    title: 'Tính từ – Những kiến thức cơ bản',
    screen: 'GrammarAdjectiveBasicScreen',
  },
  {
    title: 'Tính từ khi kết hợp với danh từ và động từ',
    screen: 'GrammarAdjectiveWithNounVerbScreen',
  },
  {
    title: 'Tính từ + なる: Trở nên …',
    screen: 'GrammarAdjectiveNaruScreen',
  },
  {
    title: '～たいです',
    screen: 'GrammarTaiDesuScreen',
  },
  {
    title: '～がほしいです',
    screen: 'GrammarGaHoshiiDesuScreen',
  },
  {
    title: '～がすきです',
    screen: 'GrammarGaSukiDesuScreen',
  },
  {
    title: '～がじょうずです/～がへたです',
    screen: 'GrammarGaJouzuHetaDesuScreen',
  },
]

const GrammarAdjectiveN5TopicListScreen = () => {
  return <TopicListScreen screenTitle="Chủ đề tính từ N5" topics={topics} />
}

export default GrammarAdjectiveN5TopicListScreen
