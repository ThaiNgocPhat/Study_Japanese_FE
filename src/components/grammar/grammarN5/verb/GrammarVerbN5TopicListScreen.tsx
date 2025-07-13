import TopicListScreen, { TopicItem } from '@components/TopicListScreen'

const topics: TopicItem[] = [
  {
    title: 'Động từ – Những kiến thức cơ bản (Thể từ điển & thể ない)',
    screen: 'GrammarVerbN5Screen',
  },
  { title: 'Động từ thể ます', screen: 'GrammarVerbMasuScreen' },
  { title: 'Động từ thì quá khứ – Thể た', screen: 'GrammarVerbTaFormScreen' },
  { title: 'Các cấu trúc sử dụng thể て', screen: 'GrammarTeFormScreen' },
  { title: '～ませんか、～ましょう、～ましょうか', screen: 'GrammarMasenkaMashouScreen' },
  { title: '～たことがある: Đã từng …', screen: 'GrammarTaKotoGaAruScreen' },
  {
    title: 'Phân biệt ～あげます、～もらいます、くれます',
    screen: 'GrammarAgeruMorauKureruScreen',
  },
  { title: '～があります/～がいます', screen: 'GrammarGaArimasuScreen' },
  { title: '～たり、～たりする', screen: 'GrammarTariTariSuruScreen' },
  { title: '～ないでください', screen: 'GrammarNaideKudasaiScreen' },
  { title: '～なければならない/～なくてはならない', screen: 'GrammarNakerebaNaranaiScreen' },
  { title: '～なければいけない/～なくてはいけない', screen: 'GrammarNakerebaIkenaiScreen' },
  { title: '～なくてもいい', screen: 'GrammarNakutemoIiScreen' },
]

const GrammarVerbN5TopicListScreen = () => {
  return <TopicListScreen screenTitle="Chủ đề động từ N5" topics={topics} />
}

export default GrammarVerbN5TopicListScreen
