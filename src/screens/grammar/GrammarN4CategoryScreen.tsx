import { useCallback, useState } from 'react'
import { Button, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useRoute } from '@react-navigation/native'

import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { grammarN4 } from 'assets/data/grammar/n4/grammarN4'
import { RootStackParamList } from 'src/types/navigation'
import { grammarN4IdToScreen } from 'assets/data/grammar/n4/screens'
import BackButtonSelect from '@components/grammar/BackButtonSelect'

const STORAGE_KEY_N4 = 'unlockedGrammarN4'

const GrammarN4CategoryScreen = () => {
  const [unlocked, setUnlocked] = useState<number[]>([])
  const route = useRoute<any>()

  const loadUnlocked = useCallback(async () => {
    const saved = await AsyncStorage.getItem(STORAGE_KEY_N4)
    const parsed: number[] = saved ? JSON.parse(saved) : [0]
    if (!parsed.includes(0)) parsed.unshift(0)
    console.log('N4 unlocked loaded:', parsed)
    setUnlocked(parsed)
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadUnlocked()
    }, [loadUnlocked]),
  )

  const topics: TopicItem[] = grammarN4.map((item) => ({
    id: item.id,
    title: item.title,
    screen: grammarN4IdToScreen[item.id] as keyof RootStackParamList,
    locked: !unlocked.includes(Number(item.id)),
    params: {
      topicIndex: Number(item.id) - 1,
      totalTopics: grammarN4.length,
      storageKey: STORAGE_KEY_N4,
    },
  }))

  return (
    <View style={{ flex: 1 }}>
      <BackButtonSelect />
      <TopicListScreen screenTitle="Ngữ pháp N4" topics={topics} />
    </View>
  )
}

export default GrammarN4CategoryScreen
