import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'

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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề trợ từ N5" topics={topics} />
    </LinearGradient>
  )
}

export default GrammarParticleN5TopicListScreen
