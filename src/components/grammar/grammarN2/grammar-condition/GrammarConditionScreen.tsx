import TopicListScreen, { TopicItem } from '@components/TopicListScreen'

const topics: TopicItem[] = [
  { title: '～ばかりか', screen: 'GrammarBakarikaScreen' },
  { title: '～ば～ほど', screen: 'GrammarBaHodoScreen' },
  { title: '～ものなら', screen: 'GrammarMonoNaraScreen' },
  { title: '～としたら / ～とすれば', screen: 'GrammarToshitaraScreen' },
  { title: '～ないことには', screen: 'GrammarNaiKotoNiwaScreen' },
  { title: '～たところで', screen: 'GrammarTatokorodeScreen' },
  { title: '～ものの', screen: 'GrammarMononoScreen' },
  { title: '～ながら（も）', screen: 'GrammarNagaraMoScreen' },
  { title: '～にしては', screen: 'GrammarNishitewaScreen' },
  { title: '～といっても', screen: 'GrammarToIttemoScreen' },
]

const GrammarConditionScreen = () => {
  return <TopicListScreen screenTitle="Điều kiện - Giả định" topics={topics} />
}

export default GrammarConditionScreen
