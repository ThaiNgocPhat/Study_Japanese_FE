import { noun } from '@assets/data/grammar/n5/noun'
import { nounIdToScreen } from '@assets/data/grammar/n5/screens'
import BackButton from '@components/BackButton'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import TopicListScreen, { TopicItem } from 'src/components/TopicListScreen'
import { RootStackParamList } from 'src/types/navigation'

const STORAGE_KEY_NOUN = 'unlockedGrammarNounN5'

const GrammarNounN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const topics: TopicItem[] = noun.map((item) => ({
    id: item.id,
    title: item.title,
    screen: nounIdToScreen[item.id] as keyof RootStackParamList,
    locked: true,
  }))

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề danh từ N5" topics={topics} />
    </LinearGradient>
  )
}

export default GrammarNounN5TopicListScreen
