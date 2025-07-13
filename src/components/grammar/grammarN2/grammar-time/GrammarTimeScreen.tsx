import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
const topics: TopicItem[] = [
  { title: '～最中に', screen: 'GrammarSaichuuNiN2Screen' },
  { title: '～うちに', screen: 'GrammarUchiNiN2Screen' },
  { title: '～ところに', screen: 'GrammarTokoroNiScreen' },
  { title: '～たとたん', screen: 'GrammarTatoTanscreen' },
  { title: '～かと思うと', screen: 'GrammarKaToOmoutoScreen' },
  { title: '～か～ないかのうちに', screen: 'GrammarKaNaiKaScreen' },
]

const GrammarTimeScreen = () => {
  return <TopicListScreen screenTitle="Thời điểm – Hành động liên tiếp" topics={topics} />
}

export default GrammarTimeScreen
