import React from 'react'
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import BackButton from '@components/BackButton'

export type TopicItem<K extends keyof RootStackParamList = keyof RootStackParamList> = {
  id?: string | number
  title: string
  screen: K
  params?: RootStackParamList[K]
  onPress?: () => void
  locked?: boolean
  onComplete?: () => void
  completed?: boolean
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
      <Text style={styles.title}>{screenTitle}</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {topics.map((topic, index) => (
          <TouchableOpacity
            key={topic.id ?? topic.screen ?? `topic-${index}`}
            style={[styles.item, topic.locked && { opacity: 0.5 }]}
            onPress={() => {
              if (topic.locked) {
                if (onLockedPress) onLockedPress()
                return
              }
              if (topic.params) {
                navigation.navigate(topic.screen as any, topic.params)
              } else {
                navigation.navigate(topic.screen as any, {
                  topicIndex: index,
                  totalTopics: topics.length,
                  storageKey: 'grammarN5Progress',
                })
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
    paddingBottom: 30,
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
