import { other } from 'assets/data/grammar/n5/other'
import { otherIdToScreen } from '@assets/data/grammar/n5/screens'
import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'

import Toast from 'react-native-toast-message'
import { RootStackParamList } from 'src/types/navigation'
const STORAGE_KEY_OTHER = 'unlockedGrammarN5Other'
const STORAGE_KEY_N4 = 'unlockedGrammarN4'
const OtherSentencePatternsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const topics: TopicItem[] = other.map((item) => ({
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
