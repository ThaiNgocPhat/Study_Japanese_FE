import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '@components/BackButton'
import GrammarCompleteButton from '@components/GrammarCompleteButton'
import { useNavigation } from '@react-navigation/native'
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
        <GrammarCompleteButton />
      </ScrollView>
    </LinearGradient>
  )
}

export default GrammarTemplateScreen
