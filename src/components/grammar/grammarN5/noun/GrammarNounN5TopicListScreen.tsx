import React from 'react'
import TopicListScreen, { TopicItem } from 'src/components/TopicListScreen'

const GrammarNounN5TopicListScreen = () => {
  const topics: TopicItem[] = [
    {
      title: 'Danh từ – Những kiến thức cơ bản',
      screen: 'GrammarNounBasicScreen',
    },
    {
      title: 'Cách đếm số người, vật',
      screen: 'GrammarCountingPeopleThingScreen',
    },
    {
      title: 'Cách nói thứ, ngày, tháng',
      screen: 'GrammarDateDayMonthScreen',
    },
    {
      title: 'Động từ bổ nghĩa cho danh từ',
      screen: 'GrammarVerbModifyNounScreen',
    },
  ]

  return <TopicListScreen screenTitle="Chủ đề danh từ N5" topics={topics} />
}

export default GrammarNounN5TopicListScreen
