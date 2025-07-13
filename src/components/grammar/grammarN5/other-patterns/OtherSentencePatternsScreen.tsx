import TopicListScreen, { TopicItem } from '@components/TopicListScreen'

const topics: TopicItem[] = [
  {
    title: 'Phân biệt こ、そ、あ、ど',
    screen: 'GrammarKoSoADoScreen',
  },
  {
    title: '～より～のほうが',
    screen: 'GrammarYoriNoHougaScreen',
  },
  {
    title: '～のなかで、～がいちばん～',
    screen: 'GrammarIchibanComparisonScreen',
  },
  {
    title: '～まえ/ あと',
    screen: 'GrammarMaeAtoScreen',
  },
  {
    title: '～だけ、しか: Chỉ',
    screen: 'GrammarDakeShikaScreen',
  },
  {
    title: '～ので、～から',
    screen: 'GrammarNodeKaraScreen',
  },
  {
    title: '～でしょう',
    screen: 'GrammarDeshouScreen',
  },
  {
    title: 'Những phó từ đi với câu phủ định',
    screen: 'GrammarAdverbsNegativeScreen',
  },
  {
    title: 'Tổng hợp từ nghi vấn – 疑問詞',
    screen: 'GrammarQuestionWordsScreen',
  },
]

const OtherSentencePatternsScreen = () => {
  return <TopicListScreen screenTitle="Chủ đề mẫu câu khác N5" topics={topics} />
}
export default OtherSentencePatternsScreen
