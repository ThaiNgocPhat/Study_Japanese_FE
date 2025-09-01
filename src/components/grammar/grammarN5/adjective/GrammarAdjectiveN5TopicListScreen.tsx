import React, { useState, useCallback } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { RootStackParamList } from 'src/types/navigation'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
import { adjectiveIdToScreen } from '@assets/data/grammar/n5/screens'

const STORAGE_KEY_ADJ = 'unlockedGrammarAdjectiveN5'

const GrammarAdjectiveN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const adjCategory = grammarN5.find((cat) => 'adjective' in cat)?.adjective || []
  const [unlocked, setUnlocked] = useState<number[]>([])

  const loadUnlocked = useCallback(async () => {
    const saved = await AsyncStorage.getItem(STORAGE_KEY_ADJ)
    if (saved) setUnlocked(JSON.parse(saved))
    else setUnlocked([])
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadUnlocked()
    }, [loadUnlocked]),
  )

  const handleComplete = async (index: number) => {
    const nextIndex = index + 1
    const updatedUnlocked = [...unlocked]
    if (!unlocked.includes(nextIndex) && nextIndex < adjCategory.length) {
      updatedUnlocked.push(nextIndex)
      await AsyncStorage.setItem(STORAGE_KEY_ADJ, JSON.stringify(updatedUnlocked))
      setUnlocked(updatedUnlocked)
    }

    Toast.show({
      type: 'success',
      text1: 'Hoàn thành bài học!',
    })
  }

  const topics: TopicItem[] = adjCategory.map((item, index) => ({
    id: item.id,
    title: item.title,
    screen: adjectiveIdToScreen[item.id] as keyof RootStackParamList,
    locked: !unlocked.includes(index),
  }))

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen
        screenTitle="Chủ đề tính từ N5"
        topics={topics}
        onLockedPress={() => {
          Toast.show({
            type: 'info',
            text1: 'Chưa mở khoá',
            text2: 'Bạn cần hoàn thành bài trước để mở bài này.',
          })
        }}
      />
    </LinearGradient>
  )
}

export default GrammarAdjectiveN5TopicListScreen
