import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import BackButton from '@components/BackButton'
import GrammarCompleteButton from '@components/GrammarCompleteButton'

type GrammarSection = {
  title: string
  explanation: string
}

type Props = {
  screenTitle: string
  grammarSections: GrammarSection[]
  onComplete?: () => void
}

const GrammarTemplateScreen: React.FC<Props> = ({ screenTitle, grammarSections, onComplete }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handleComplete = () => {
    if (onComplete) {
      onComplete()
    }
    navigation.goBack()
  }

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{screenTitle}</Text>

        {grammarSections.map((section, index) => (
          <View key={index}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.text}>{section.explanation}</Text>
          </View>
        ))}
        <GrammarCompleteButton onComplete={handleComplete} />
      </ScrollView>
    </LinearGradient>
  )
}

export default GrammarTemplateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#ffffffcc',
    padding: 8,
    borderRadius: 20,
  },
  content: {
    paddingTop: 100,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4a4e69',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 12,
    color: '#4a4e69',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#fcefe3',
    padding: 12,
    borderRadius: 8,
    color: '#4a4e69',
    marginBottom: 12,
  },
})
