import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import * as Speech from 'expo-speech'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import type { VocabularyItem, VocabularyData } from 'src/types/vocabulary'
import vocabularyN5 from 'assets/data/vocabulary/vocabularyN5.json'
import vocabularyN4 from 'assets/data/vocabulary/vocabularyN4.json'
import vocabularyN3 from 'assets/data/vocabulary/vocabularyN3.json'
import vocabularyN2 from 'assets/data/vocabulary/vocabularyN2.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackButton from '@components/BackButton'

type Props = NativeStackScreenProps<RootStackParamList, 'VocabularyLessonDetailScreen'>

const VocabularyLessonDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { lessonNumber, level } = route.params
  const [isCompleted, setIsCompleted] = useState(false)

  let vocabularyList: VocabularyItem[] = []
  const key = String(lessonNumber)

  if (level === 'N5') vocabularyList = (vocabularyN5 as VocabularyData)[key] || []
  else if (level === 'N4') vocabularyList = (vocabularyN4 as VocabularyData)[key] || []
  else if (level === 'N3') vocabularyList = (vocabularyN3 as VocabularyData)[key] || []
  else if (level === 'N2') vocabularyList = (vocabularyN2 as VocabularyData)[key] || []

  useEffect(() => {
    ;(async () => {
      const completed = await AsyncStorage.getItem(`completedLessons_${level}`)
      if (completed) {
        const completedList = JSON.parse(completed) as number[]
        if (completedList.includes(lessonNumber)) {
          setIsCompleted(true)
        }
      }
    })()
  }, [lessonNumber, level])

  const handleSpeak = (text: string) => {
    Speech.speak(text, { language: 'ja-JP' })
  }

  const handleLessonComplete = async () => {
    await AsyncStorage.setItem(`lastCompletedLesson_${level}`, String(lessonNumber))
    const completed = await AsyncStorage.getItem(`completedLessons_${level}`)
    const completedList = completed ? (JSON.parse(completed) as number[]) : []
    if (!completedList.includes(lessonNumber)) {
      const updated = [...completedList, lessonNumber]
      await AsyncStorage.setItem(`completedLessons_${level}`, JSON.stringify(updated))
    }

    setIsCompleted(true)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>{`Từ vựng ${level} - Bài ${lessonNumber}`}</Text>
      <FlatList
        data={vocabularyList}
        keyExtractor={(_, index) => `${lessonNumber}-${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.index}>{index + 1}. </Text>
            <View style={styles.wordContainer}>
              <Text style={styles.word}>
                {item.word} {item.kanji ? `(${item.kanji})` : ''}
              </Text>
              {item.hanViet && <Text style={styles.hanviet}>Âm Hán Việt: {item.hanViet}</Text>}
              <Text style={styles.romaji}>Romaji: {item.romaji}</Text>
              <Text style={styles.meaning}>Nghĩa: {item.meaning}</Text>
            </View>
            <View style={styles.iconGroup}>
              <TouchableOpacity onPress={() => handleSpeak(item.word)}>
                <Ionicons name="volume-high-outline" size={22} color="#444" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <MaterialIcons name="favorite-border" size={22} color="#e57373" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: isCompleted ? 30 : 0 }}
      />
      {!isCompleted && (
        <TouchableOpacity style={styles.completeButton} onPress={handleLessonComplete}>
          <Text style={styles.completeText}>Hoàn thành bài học</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default VocabularyLessonDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 70,
    textAlign: 'center',
    color: '#4a4e69',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 0.6,
    borderBottomColor: '#d3e0dc',
  },
  index: {
    fontSize: 18,
    fontWeight: '600',
    width: 28,
    color: '#4a4e69',
  },
  wordContainer: { flex: 1 },
  word: {
    fontSize: 18,
    color: '#4a4e69',
    fontWeight: '600',
  },
  hanviet: {
    fontSize: 16,
    color: '#88c9bf',
  },
  romaji: {
    fontSize: 16,
    color: '#4a4e69',
    fontStyle: 'italic',
  },
  meaning: {
    fontSize: 16,
    color: '#88c9bf',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginLeft: 8,
    paddingTop: 4,
  },
  icon: { paddingRight: 4, color: '#4a4e69' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  completeButton: {
    backgroundColor: '#4a4e69',
    padding: 15,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
})
