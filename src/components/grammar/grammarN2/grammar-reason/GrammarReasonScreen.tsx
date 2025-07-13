import TopicListScreen, { TopicItem } from '@components/TopicListScreen'

const topics: TopicItem[] = [
  { title: '～おかげで', screen: 'GrammarOkagedeScreen' },
  { title: '～せいで', screen: 'GrammarSeideScreen' },
  { title: '～あまり', screen: 'GrammarAmariScreen' },
  { title: '～ものだから', screen: 'GrammarMonoDakaraScreen' },
  { title: '～ことだし', screen: 'GrammarKotoDashiScreen' },
  { title: '～だけに', screen: 'GrammarDakeNiScreen' },
  { title: '～ばかりに', screen: 'GrammarBakariniScreen' },
  { title: '～からには / ～以上は', screen: 'GrammarKaraNiwaijouScreen' },
  { title: '～上は', screen: 'GrammarUewaScreen' },
]

const GrammarReasonScreen = () => {
  return <TopicListScreen screenTitle="Lý do – Nguyên nhân" topics={topics} />
}

export default GrammarReasonScreen
