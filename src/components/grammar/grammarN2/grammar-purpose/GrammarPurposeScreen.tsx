import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
const topics: TopicItem[] = [
  { title: '～ために', screen: 'GrammarTameniScreen' },
  { title: '～ように', screen: 'GrammarYouniScreen' },
  { title: '～に応じて', screen: 'GrammarNiOujiteScreen' },
  { title: '～に沿って', screen: 'GrammarNiSotteScreen' },
  { title: '～にわたって', screen: 'GrammarNiwatatteScreen' },
  { title: '～を通じて', screen: 'GrammarWoTsuujiteScreen' },
  { title: '～末に', screen: 'GrammarSueniScreen' },
  { title: '～あげく', screen: 'GrammarAgekuScreen' },
]

const GrammarPurposeScreen = () => {
  return <TopicListScreen screenTitle="Mục đích – Kết quả" topics={topics} />
}

export default GrammarPurposeScreen
