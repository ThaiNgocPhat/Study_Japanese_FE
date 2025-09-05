import { particle } from '@assets/data/grammar/n5/particle'
import { particleIdToScreen } from '@assets/data/grammar/n5/screens'
import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'
const STORAGE_KEY_PARTICLE = 'unlockedGrammarParticleN5'

const GrammarParticleN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const topics: TopicItem[] = particle.map((item) => ({
    id: item.id,
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
