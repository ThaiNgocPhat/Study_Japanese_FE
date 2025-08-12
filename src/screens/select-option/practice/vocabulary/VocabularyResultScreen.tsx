import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ViewStyle } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import type { VocabularyItem } from 'src/types/vocabulary'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { LinearGradient } from 'expo-linear-gradient'
const VocabularyResultScreen = () => {
  const route = useRoute()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const { level, words, answers } = route.params as {
    level: string
    words: VocabularyItem[]
    answers: {
      selected: string | null
      correct: string
      options: string[]
    }[]
  }
  const correctCount = answers.filter(
    (answer) => answer.selected !== null && answer.selected === answer.correct,
  ).length

  const renderItem = ({ item, index }: { item: VocabularyItem; index: number }) => {
    const answer = answers[index]
    const isAnswered = answer?.selected !== null

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Câu {index + 1}: {item.word} ({item.kanji || '---'})
        </Text>
        {answer.options.map((option, idx) => {
          const isSelected = option === answer.selected
          const isCorrectOption = option === answer.correct

          const optionStyle = [
            styles.option,
            isAnswered
              ? isCorrectOption
                ? styles.correct
                : isSelected
                ? styles.wrong
                : null
              : isCorrectOption
              ? styles.wrong
              : null,
          ]

          return (
            <View key={idx} style={optionStyle}>
              <Text style={styles.optionText}>
                {String.fromCharCode(65 + idx)}. {option}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <Text style={styles.title}>Kết quả bài luyện tập</Text>
      <Text style={styles.scoreText}>
        Bạn đã trả lời đúng {correctCount}/{answers.length} câu
      </Text>
      <FlatList
        data={words}
        renderItem={renderItem}
        keyExtractor={(_, idx) => idx.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          navigation.reset({
            index: 1,
            routes: [
              { name: 'SelectVocabularyTest' },
              { name: 'ChooseWordCountVocabularyScreen', params: { level } },
            ],
          })
        }
      >
        <Text style={styles.backText}>Quay lại</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4a4e69',
  },
  questionContainer: {
    marginBottom: 24,
    backgroundColor: '#fcefe3',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
    color: '#4a4e69',
  },
  option: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  correct: {
    backgroundColor: '#c8e6c9',
    borderColor: '#66bb6a',
  },
  wrong: {
    backgroundColor: '#ffcdd2',
    borderColor: '#ef5350',
  },
  unansweredCorrect: {
    backgroundColor: '#f8bbd0',
    borderColor: '#ec407a',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    backgroundColor: '#88c9bf',
    padding: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 60,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a4e69',
    textAlign: 'center',
    marginBottom: 10,
  },
})

export default VocabularyResultScreen
