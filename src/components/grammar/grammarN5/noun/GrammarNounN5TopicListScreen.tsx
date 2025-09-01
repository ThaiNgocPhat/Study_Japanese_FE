import BackButton from '@components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import TopicListScreen, { TopicItem } from 'src/components/TopicListScreen'
import { RootStackParamList } from 'src/types/navigation'

const GrammarNounN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const topics: TopicItem[] = [
    {
      title: 'Danh từ – Những kiến thức cơ bản',
      screen: 'GrammarNounBasicScreen',
    },
    {
      title: 'Cách đếm số người, vật',
      screen: 'GrammarCountingPeopleThingScreen',
    },
    {
      title: 'Cách nói thứ, ngày, tháng',
      screen: 'GrammarDateDayMonthScreen',
    },
    {
      title: 'Động từ bổ nghĩa cho danh từ',
      screen: 'GrammarVerbModifyNounScreen',
    },
  ]

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề danh từ N5" topics={topics} />
    </LinearGradient>
  )
}

export default GrammarNounN5TopicListScreen
