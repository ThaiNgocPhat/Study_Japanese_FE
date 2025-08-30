import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '@components/BackButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'

const STORAGE_KEY = 'grammarN5Progress'

const topics: TopicItem[] = [
  {
    id: '1',
    title: 'Tính từ – Những kiến thức cơ bản',
    screen: 'GrammarAdjectiveBasicScreen',
  },
  {
    id: '2',
    title: 'Tính từ khi kết hợp với danh từ và động từ',
    screen: 'GrammarAdjectiveWithNounVerbScreen',
  },
  {
    id: '3',
    title: 'Tính từ + なる: Trở nên …',
    screen: 'GrammarAdjectiveNaruScreen',
  },
  {
    id: '4',
    title: '～たいです',
    screen: 'GrammarTaiDesuScreen',
  },
  {
    id: '5',
    title: '～がほしいです',
    screen: 'GrammarGaHoshiiDesuScreen',
  },
  {
    id: '6',
    title: '～がすきです',
    screen: 'GrammarGaSukiDesuScreen',
  },
  {
    id: '7',
    title: '～がじょうずです/～がへたです',
    screen: 'GrammarGaJouzuHetaDesuScreen',
  },
]

const GrammarAdjectiveN5TopicListScreen = () => {
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([1])
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const saved = await AsyncStorage.getItem('grammarN5Progress')
        if (saved) {
          let parsed: any
          try {
            parsed = JSON.parse(saved)
          } catch {
            parsed = {}
          }
          const unlocked = Array.isArray(parsed.unlockedLessons) ? parsed.unlockedLessons : [1]
          const completed = Array.isArray(parsed.completedLessons) ? parsed.completedLessons : []

          setUnlockedLessons(unlocked)
          setCompletedLessons(completed)
        } else {
          setUnlockedLessons([1])
          setCompletedLessons([])
        }
      } catch (e) {
        console.error('loadProgress error:', e)
        setUnlockedLessons([1])
        setCompletedLessons([])
      }
    }

    loadProgress()
  }, [])

  const handleComplete = async (lessonNumber: number) => {
    const updatedCompleted = [...new Set([...completedLessons, lessonNumber])]
    let updatedUnlocked = [...unlockedLessons]
    if (!updatedUnlocked.includes(lessonNumber + 1) && lessonNumber < topics.length) {
      updatedUnlocked.push(lessonNumber + 1)
    }
    let unlockedCategories: string[] = ['verb', 'adjective']
    if (updatedCompleted.length === topics.length) {
      unlockedCategories.push('noun')
    }

    setCompletedLessons(updatedCompleted)
    setUnlockedLessons(updatedUnlocked)

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        adjective: {
          completed: updatedCompleted,
          unlocked: updatedUnlocked,
        },
        unlockedCategories,
      }),
    )
  }

  const enhancedTopics: TopicItem[] = topics.map((topic, index) => {
    const lessonNumber = index + 1
    return {
      ...topic,
      locked: !unlockedLessons.includes(lessonNumber),
      completed: completedLessons.includes(lessonNumber),
      onComplete: () => handleComplete(lessonNumber),
    }
  })

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen screenTitle="Chủ đề tính từ N5" topics={enhancedTopics} />
    </LinearGradient>
  )
}

export default GrammarAdjectiveN5TopicListScreen
