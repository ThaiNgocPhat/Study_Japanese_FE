import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
import { otherIdToScreen } from '@assets/data/grammar/n5/screens'
import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'

const OtherSentencePatternsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const otherCategory = grammarN5.find((cat) => 'otherPatterns' in cat)?.otherPatterns || []
  const topics: TopicItem[] = otherCategory.map((item) => ({
    title: item.title,
    screen: otherIdToScreen[item.id] as keyof RootStackParamList,
    locked: true,
  }))
  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề mẫu câu khác N5" topics={topics} />
    </LinearGradient>
  )
}
export default OtherSentencePatternsScreen
