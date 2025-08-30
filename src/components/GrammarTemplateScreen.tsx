import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackButton from '@components/BackButton'
import GrammarCompleteButton from '@components/GrammarCompleteButton'
import type { RootStackParamList } from 'src/types/navigation'

type GrammarSection = { title: string; explanation: string; examples?: string[] }
type GrammarProgress = {
  verb: { unlocked: number; completed: number[] }
  adjective: { unlocked: number; completed: number[] }
  unlockedCategories: string[]
}

type Props = {
  screenTitle: string
  grammarSections: GrammarSection[]
  id?: string // optional, ưu tiên dùng nếu có
  storageKey?: string // optional, fallback từ route
  topicIndex?: number
  totalTopics?: number
}

const DEFAULT_STORAGE_KEY = 'grammarN5Progress'

const DEFAULT_PROGRESS: GrammarProgress = {
  verb: { unlocked: 0, completed: [] },
  adjective: { unlocked: -1, completed: [] },
  unlockedCategories: ['verb'],
}

// detect category từ id
const detectCategory = (id?: string): 'verb' | 'adjective' => {
  if (!id) return 'verb'
  if (id.includes('adjective')) return 'adjective'
  return 'verb'
}

const GrammarTemplateScreen: React.FC<Props> = ({
  screenTitle,
  grammarSections,
  id,
  storageKey,
  topicIndex,
  totalTopics,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute<any>()

  // ✅ Ưu tiên props, fallback route.params
  const effId: string | undefined = id ?? route.params?.id
  const effCategory: 'verb' | 'adjective' = detectCategory(effId)

  const effStorageKey: string = storageKey ?? route.params?.storageKey ?? DEFAULT_STORAGE_KEY
  const effTopicIndex: number | undefined =
    typeof topicIndex === 'number' ? topicIndex : route.params?.topicIndex
  const effTotalTopics: number | undefined =
    typeof totalTopics === 'number' ? totalTopics : route.params?.totalTopics

  const [completed, setCompleted] = useState(false)

  const normalizeProgress = (data: any): GrammarProgress => {
    const progress: GrammarProgress = { ...DEFAULT_PROGRESS, ...(data || {}) }
    if (!progress.verb) progress.verb = { unlocked: 0, completed: [] }
    if (!progress.adjective) progress.adjective = { unlocked: -1, completed: [] }
    if (!Array.isArray(progress.verb.completed)) progress.verb.completed = []
    if (!Array.isArray(progress.adjective.completed)) progress.adjective.completed = []
    if (!Array.isArray(progress.unlockedCategories)) progress.unlockedCategories = ['verb']
    return progress
  }

  useEffect(() => {
    if (!effStorageKey || typeof effTopicIndex !== 'number') return
    const loadProgress = async () => {
      try {
        const value = await AsyncStorage.getItem(effStorageKey)
        const parsed = value ? JSON.parse(value) : DEFAULT_PROGRESS
        const progress = normalizeProgress(parsed)
        setCompleted(progress[effCategory].completed.includes(effTopicIndex))
      } catch (e) {
        console.warn('loadProgress error:', e)
      }
    }
    loadProgress()
  }, [effStorageKey, effTopicIndex, effCategory])

  const handleComplete = async () => {
    try {
      if (
        !effStorageKey ||
        typeof effTopicIndex !== 'number' ||
        typeof effTotalTopics !== 'number'
      ) {
        Alert.alert('Thiếu tham số', 'Không đủ dữ liệu để lưu tiến độ.')
        return
      }

      const value = await AsyncStorage.getItem(effStorageKey)
      const parsed = value ? JSON.parse(value) : DEFAULT_PROGRESS
      let progress = normalizeProgress(parsed)

      const nextIndex = effTopicIndex + 1
      if (nextIndex > progress[effCategory].unlocked && nextIndex < effTotalTopics) {
        progress[effCategory].unlocked = nextIndex
      }
      if (!progress[effCategory].completed.includes(effTopicIndex)) {
        progress[effCategory].completed.push(effTopicIndex)
      }

      // unlock adjective khi verb xong hết
      if (progress.verb.completed.length === effTotalTopics) {
        if (!progress.unlockedCategories.includes('adjective')) {
          progress.unlockedCategories.push('adjective')
          progress.adjective.unlocked = 0
        }
      }

      await AsyncStorage.setItem(effStorageKey, JSON.stringify(progress))
      setCompleted(true)

      navigation.navigate('GrammarVerbN5TopicListScreen', { refresh: Date.now() })
    } catch (e) {
      console.error('❌ handleComplete error:', e)
      Alert.alert('Lỗi', 'Không thể lưu tiến độ.')
    }
  }

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton />
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 70 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 70, textAlign: 'center' }}>
          {screenTitle}
        </Text>

        {grammarSections.map((section, i) => (
          <View key={i}>
            <Text style={{ fontSize: 20, marginTop: 12, color: 'red', marginBottom: 15 }}>
              {section.title}
            </Text>
            <Text>{section.explanation}</Text>
          </View>
        ))}

        <View>{!completed && <GrammarCompleteButton onComplete={handleComplete} />}</View>
      </ScrollView>
    </LinearGradient>
  )
}

export default GrammarTemplateScreen
