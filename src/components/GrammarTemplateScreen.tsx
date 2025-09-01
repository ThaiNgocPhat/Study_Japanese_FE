import React, { useState } from 'react'
import { View, Text, ScrollView, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '@components/BackButton'
import GrammarCompleteButton from '@components/GrammarCompleteButton'

type GrammarSection = { title: string; explanation: string; examples?: string[] }

type Props = {
  screenTitle: string
  grammarSections: GrammarSection[]
  id?: string
  storageKey?: string
  topicIndex?: number
  totalTopics?: number
}

const GrammarTemplateScreen: React.FC<Props> = ({ screenTitle, grammarSections }) => {
  const [complete, setComplete] = useState(false)
  const handleComplete = () => {}
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
