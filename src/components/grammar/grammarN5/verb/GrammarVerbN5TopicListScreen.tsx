import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'
import { grammarN5 } from '../../../../../assets/data/grammar/n5/grammarN5'
import { verbIdToScreen } from '../../../../../assets/data/grammar/n5/screens'

const GrammarVerbN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const verbCategory = grammarN5.find((cat) => 'verb' in cat)?.verb || []
  const topics: TopicItem[] = verbCategory.map((item) => ({
    title: item.title,
    screen: verbIdToScreen[item.id] as keyof RootStackParamList,
  }))

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề động từ N5" topics={topics} />
    </LinearGradient>
  )
}

export default GrammarVerbN5TopicListScreen
