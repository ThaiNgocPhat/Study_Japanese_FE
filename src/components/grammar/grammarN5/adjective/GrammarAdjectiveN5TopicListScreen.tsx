import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '@components/BackButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
import { adjectiveIdToScreen } from '@assets/data/grammar/n5/screens'

const GrammarAdjectiveN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const adjCategory = grammarN5.find((cat) => 'adjective' in cat)?.adjective || []
  const topics: TopicItem[] = adjCategory.map((item) => ({
    title: item.title,
    screen: adjectiveIdToScreen[item.id] as keyof RootStackParamList,
  }))
  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề tính từ N5" topics={topics} />
    </LinearGradient>
  )
}

export default GrammarAdjectiveN5TopicListScreen
