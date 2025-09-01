import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'

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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề mẫu câu khác N5" topics={topics} />
    </LinearGradient>
  )
}
export default OtherSentencePatternsScreen
