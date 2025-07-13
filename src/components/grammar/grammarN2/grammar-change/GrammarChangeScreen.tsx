import TopicListScreen, { TopicItem } from '@components/TopicListScreen'

const topics: TopicItem[] = [
  { title: '～につれて', screen: 'GrammarNiTsureteScreen' },
  { title: '～に従って', screen: 'GrammarNiShitagatteScreen' },
  { title: '～とともに', screen: 'GrammarToTomoniScreen' },
  { title: '～に伴って', screen: 'GrammarNiTomonatteScreen' },
  { title: '～次第だ', screen: 'GrammarShidaiDaScreen' },
]

const GrammarChangeScreen = () => {
  return <TopicListScreen screenTitle="Thay đổi – Phát triển" topics={topics} />
}

export default GrammarChangeScreen
