import TopicListScreen, { TopicItem } from '@components/TopicListScreen'

const topics: TopicItem[] = [
  {
    title: 'Tổng hợp về trợ từ cơ bản',
    screen: 'GrammarParticlesOverviewScreen',
  },
  {
    title: 'Phân biệt 「に」、「で」',
    screen: 'GrammarParticleNiDeScreen',
  },
  {
    title: '～が/ ～けど',
    screen: 'GrammarGaKedoScreen',
  },
]

const GrammarParticleN5TopicListScreen = () => {
  return <TopicListScreen screenTitle="Chủ đề trợ từ N5" topics={topics} />
}

export default GrammarParticleN5TopicListScreen
