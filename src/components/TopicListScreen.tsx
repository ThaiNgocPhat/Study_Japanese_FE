import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
export type TopicItem = {
  id?: number
  title: string
  screen: keyof RootStackParamList
  onPress?: () => void
  locked?: boolean
}

type Props = {
  screenTitle: string
  topics: TopicItem[]
  onLockedPress?: () => void
}

const TopicListScreen: React.FC<Props> = ({ screenTitle, topics, onLockedPress }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>>()

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>

      <Text style={styles.title}>{screenTitle}</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {topics.map((topic, index) => (
          <TouchableOpacity
            key={topic.id}
            style={[styles.item, topic.locked && { opacity: 0.5 }]}
            onPress={() => {
              if (topic.locked) {
                if (onLockedPress) {
                  onLockedPress()
                }
                return
              }
              if (topic.onPress) {
                topic.onPress()
              } else if (topic.screen) {
                navigation.navigate(topic.screen as any)
              }
            }}
          >
            <Ionicons
              name={topic.locked ? 'lock-closed' : 'document-text-outline'}
              size={24}
              color="#fff"
            />
            <Text style={styles.text}>{topic.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  )
}

export default TopicListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4a4e69',
    marginBottom: 24,
    textAlign: 'center',
  },
  content: {
    gap: 16,
    paddingBottom: 32,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#88c9bf',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    flexShrink: 1,
  },
})
