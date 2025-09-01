import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
import { nounIdToScreen } from '@assets/data/grammar/n5/screens'
import BackButton from '@components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import TopicListScreen, { TopicItem } from 'src/components/TopicListScreen'
import { RootStackParamList } from 'src/types/navigation'

const GrammarNounN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const nounCategory = grammarN5.find((cat) => 'noun' in cat)?.noun || []
  const topics: TopicItem[] = nounCategory.map((item) => ({
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
