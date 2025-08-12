import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'

const KanaResultScreen = () => {
  const route = useRoute()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const { questions, answers, type } = route.params as {
    questions: {
      kana: string
      correct: string
      options: string[]
    }[]
    answers: {
      selected: string | null
      correct: string
    }[]
    type: 'hiragana' | 'katakana'
  }

  const correctCount = answers.filter((a) => a.selected !== null && a.selected === a.correct).length

  const renderItem = ({ item, index }: { item: (typeof questions)[0]; index: number }) => {
    const answer = answers[index]
    const isAnswered = answer.selected !== null

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Câu {index + 1}: {item.kana}
        </Text>
        {item.options.map((opt, idx) => {
          const isSelected = opt === answer.selected
          const isCorrectOption = opt === item.correct

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
                {String.fromCharCode(65 + idx)}. {opt}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <Text style={styles.title}>
        Kết quả bài kiểm tra {type === 'hiragana' ? 'Hiragana' : 'Katakana'}
      </Text>
      <Text style={styles.scoreText}>
        Bạn đã trả lời đúng {correctCount}/{answers.length} câu
      </Text>

      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(_, idx) => idx.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('SelectKanaTest')}
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

export default KanaResultScreen
