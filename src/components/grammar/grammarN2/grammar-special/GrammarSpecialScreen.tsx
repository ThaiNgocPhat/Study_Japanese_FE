import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import React from 'react'
const topics: TopicItem[] = [
  { title: '～というと', screen: 'GrammarToIutoScreen' },
  { title: '～といえば', screen: 'GrammarToIeBaScreen' },
  { title: '～といったら', screen: 'GrammarToIuttaraScreen' },
  { title: '～において', screen: 'GrammarNiOiteScreen' },
  { title: '～を問わず', screen: 'GrammarWoTowazuScreen' },
  { title: '～をめぐって', screen: 'GrammarWoMegutteScreen' },
  { title: '～に際して', screen: 'GrammarNiSaishiteScreen' },
  { title: '～にあたって', screen: 'GrammarNiAtatteScreen' },
  { title: '～かねる', screen: 'GrammarKaneruScreen' },
  { title: '～かねない', screen: 'GrammarKanenaiScreen' },
  { title: '～て以来', screen: 'GrammarTeIraiScreen' },
  { title: '～次第で', screen: 'GrammarShidaiDeScreen' },
]

const GrammarSpecialScreen = () => {
  return <TopicListScreen screenTitle="Lý do – Nguyên nhân" topics={topics} />
}

export default GrammarSpecialScreen
