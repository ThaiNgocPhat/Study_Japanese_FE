import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
import { particleIdToScreen } from '@assets/data/grammar/n5/screens'
import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'
const GrammarParticleN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const particleCategory = grammarN5.find((cat) => 'particle' in cat)?.particle || []
  const topics: TopicItem[] = particleCategory.map((item) => ({
    title: item.title,
    screen: particleIdToScreen[item.id] as keyof RootStackParamList,
    locked: true,
  }))
  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề trợ từ N5" topics={topics} />
    </LinearGradient>
  )
}

export default GrammarParticleN5TopicListScreen
