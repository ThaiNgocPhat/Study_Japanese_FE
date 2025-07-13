import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～べきだ / ～べきではない', screen: 'GrammarBekidaN2Screen' },
  { title: '～ことだ', screen: 'GrammarKotoDaScreen' },
  { title: '～ものだ', screen: 'GrammarMonoDaScreen' },
  { title: '～ないものか / ～ないものだろうか', screen: 'GrammarNaiMonokaScreen' },
  { title: '～ことはない', screen: 'GrammarKotoWaNaiScreen' },
  { title: '～たものだ', screen: 'GrammarTamonodaScreen' },
]

const GrammarAdviceScreen = () => {
  return <TopicListScreen screenTitle="Ý chí – Khuyên bảo – Mong muốn" topics={topics} />
}

export default GrammarAdviceScreen
