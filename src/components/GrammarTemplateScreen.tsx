import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '@components/BackButton'
import GrammarCompleteButton from '@components/GrammarCompleteButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'

type GrammarSection = { title: string; explanation: string; examples?: string[] }

type Props = {
  screenTitle: string
  grammarSections: GrammarSection[]
  storageKey?: string
}

const GrammarTemplateScreen: React.FC<Props> = ({ screenTitle, grammarSections }) => {
  const [complete, setComplete] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute<any>()
  const topicIndex = route.params?.topicIndex
  const totalTopics = route.params?.totalTopics
  const storageKey = route.params?.storageKey || 'unlockedGrammarVerbN5'

  useEffect(() => {
    ;(async () => {
      if (typeof topicIndex === 'number') {
        const lastCompleted = await AsyncStorage.getItem('lastCompletedGrammarVerbN5')
        if (lastCompleted && Number(lastCompleted) >= topicIndex) {
          setComplete(true)
        }
      }
    })()
  }, [topicIndex])
  const handleComplete = async () => {
    if (route.params?.onComplete) {
      route.params.onComplete()
    }
    if (typeof topicIndex === 'number') {
      await AsyncStorage.setItem('lastCompletedGrammarVerbN5', String(topicIndex))
      const saved = await AsyncStorage.getItem(storageKey)
      const unlocked: number[] = saved ? JSON.parse(saved) : [0]
      const next = topicIndex + 1
      if (!unlocked.includes(next) && next < (totalTopics ?? 999)) {
        const updated = [...unlocked, next]
        await AsyncStorage.setItem(storageKey, JSON.stringify(updated))
      }
    }
    setComplete(true)
    navigation.navigate('GrammarVerbN5TopicListScreen', { refresh: Date.now() })
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

        {!complete && <GrammarCompleteButton onComplete={handleComplete} />}
      </ScrollView>
    </LinearGradient>
  )
}

export default GrammarTemplateScreen
