import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { RootStackParamList } from 'src/types/navigation'
import { adjective } from 'assets/data/grammar/n5/adjective'
import { adjectiveIdToScreen } from '@assets/data/grammar/n5/screens'
const GrammarAdjectiveN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const topics: TopicItem[] = adjective.map((item) => ({
    id: item.id,
    title: item.title,
    screen: adjectiveIdToScreen[item.id] as keyof RootStackParamList,
    locked: true,
  }))

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề tính từ N5" topics={topics} />
    </LinearGradient>
  )
}

export default GrammarAdjectiveN5TopicListScreen
