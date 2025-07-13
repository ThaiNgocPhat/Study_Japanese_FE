import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～させられる', screen: 'GrammarSaserareruScreen' },
  { title: '～られる（tự phát）', screen: 'GrammarRareruScreen' },
  { title: '～てしょうがない', screen: 'GrammarTeShouganaiN2Screen' },
  { title: '～てたまらない', screen: 'GrammarTeTamaranaScreen' },
  { title: '～てならない', screen: 'GrammarTeNaranaiScreen' },
  { title: '～ないではいられない', screen: 'GrammarNaiDeWaIrarenaiScreen' },
  { title: '～ずにはいられない', screen: 'GrammarZuNiwaIrarenaiScreen' },
]

const GrammarPassiveScreen = () => {
  return <TopicListScreen screenTitle="Bị động – Tự phát – Cảm xúc" topics={topics} />
}

export default GrammarPassiveScreen
