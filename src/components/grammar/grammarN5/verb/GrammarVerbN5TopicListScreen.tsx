import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback, useEffect, useState } from 'react'
import { RootStackParamList } from 'src/types/navigation'

const topics: TopicItem[] = [
  {
    title: 'Động từ – Những kiến thức cơ bản (Thể từ điển & thể ない)',
    screen: 'GrammarVerbN5Screen',
  },
  { title: 'Động từ thể ます', screen: 'GrammarVerbMasuScreen' },
  { title: 'Động từ thì quá khứ – Thể た', screen: 'GrammarVerbTaFormScreen' },
  { title: 'Các cấu trúc sử dụng thể て', screen: 'GrammarTeFormScreen' },
  { title: '～ませんか、～ましょう、～ましょうか', screen: 'GrammarMasenkaMashouScreen' },
  { title: '～たことがある: Đã từng …', screen: 'GrammarTaKotoGaAruScreen' },
  {
    title: 'Phân biệt ～あげます、～もらいます、くれます',
    screen: 'GrammarAgeruMorauKureruScreen',
  },
  { title: '～があります/～がいます', screen: 'GrammarGaArimasuScreen' },
  { title: '～たり、～たりする', screen: 'GrammarTariTariSuruScreen' },
  { title: '～ないでください', screen: 'GrammarNaideKudasaiScreen' },
  { title: '～なければならない/～なくてはならない', screen: 'GrammarNakerebaNaranaiScreen' },
  { title: '～なければいけない/～なくてはいけない', screen: 'GrammarNakerebaIkenaiScreen' },
  { title: '～なくてもいい', screen: 'GrammarNakutemoIiScreen' },
]

const STORAGE_KEY = 'grammarN5Progress'

type GrammarProgress = {
  verb: {
    unlocked: number
    completed: number[]
  }
  adjective: {
    unlocked: number
    completed: number[]
  }
  unlockedCategories: string[]
}

const GrammarVerbN5TopicListScreen = () => {
  const [unlocked, setUnlocked] = useState(0)
  const [completedList, setCompletedList] = useState<number[]>([])
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute<any>()

  useFocusEffect(
    useCallback(() => {
      const loadProgress = async () => {
        const value = await AsyncStorage.getItem(STORAGE_KEY)
        if (value) {
          const parsed: GrammarProgress = JSON.parse(value)
          setCompletedList(parsed.verb?.completed || [])
          setUnlocked(parsed.verb?.unlocked || 0)
        } else {
          const initialProgress: GrammarProgress = {
            verb: { unlocked: 0, completed: [] },
            adjective: { unlocked: -1, completed: [] },
            unlockedCategories: ['verb'],
          }
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress))
        }
      }
      loadProgress()
    }, []),
  )
  function navigateToTopic<K extends keyof RootStackParamList>(
    screen: K,
    ...args: undefined extends RootStackParamList[K]
      ? [params?: RootStackParamList[K]]
      : [params: RootStackParamList[K]]
  ) {
    navigation.navigate(screen as any, ...(args as [any]))
  }

  useEffect(() => {
    if (route.params?.autoOpenTopicIndex !== undefined) {
      const idx = route.params.autoOpenTopicIndex
      const topic = topics[idx]
      if (topic) {
        navigateToTopic(topic.screen, {
          topicIndex: idx,
          totalTopics: topics.length,
          storageKey: STORAGE_KEY,
        } as RootStackParamList[typeof topic.screen])
      }
    }
  }, [route.params?.autoOpenTopicIndex])

  const handleComplete = async (index: number) => {
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    let progress: GrammarProgress = value
      ? JSON.parse(value)
      : {
          verb: { unlocked: 0, completed: [] },
          adjective: { unlocked: -1, completed: [] },
          unlockedCategories: ['verb'],
        }
    const nextIndex = index + 1
    if (nextIndex > progress.verb.unlocked && nextIndex < topics.length) {
      progress.verb.unlocked = nextIndex
    }
    if (!progress.verb.completed.includes(index)) {
      progress.verb.completed.push(index)
    }
    if (progress.verb.completed.length === topics.length) {
      if (!progress.unlockedCategories.includes('adjective')) {
        progress.unlockedCategories.push('adjective')
        progress.adjective.unlocked = 0
      }
    }

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    setUnlocked(progress.verb.unlocked)
    setCompletedList([...progress.verb.completed])
  }

  const topicsWithLock: TopicItem[] = topics.map((topic, index) => ({
    ...topic,
    locked: index > unlocked,
    completed: completedList.includes(index),
    onComplete: () => handleComplete(index),
  }))

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề động từ N5" topics={topicsWithLock} />
    </LinearGradient>
  )
}

export default GrammarVerbN5TopicListScreen
