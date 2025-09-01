import React, { useState } from 'react'
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
  id?: string
  storageKey?: string
  topicIndex?: number
  totalTopics?: number
}
const STORAGE_KEY = 'unlockedGrammarVerbN5'

const GrammarTemplateScreen: React.FC<Props> = ({
  totalTopics,
  screenTitle,
  grammarSections,
  topicIndex,
}) => {
  const [complete, setComplete] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute<any>()

  const handleComplete = async () => {
    if (typeof topicIndex === 'number') {
      await AsyncStorage.setItem('lastCompletedGrammarVerbN5', String(topicIndex))
      const saved = await AsyncStorage.getItem(STORAGE_KEY)
      const unlocked: number[] = saved ? JSON.parse(saved) : [0]
      const next = topicIndex + 1

      if (!unlocked.includes(next) && next < (totalTopics ?? 999)) {
        const updated = [...unlocked, next]
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      }
    }

    setComplete(true)
    navigation.goBack()
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
        <View>{!complete && <GrammarCompleteButton onComplete={handleComplete} />}</View>
      </ScrollView>
    </LinearGradient>
  )
}

export default GrammarTemplateScreen
