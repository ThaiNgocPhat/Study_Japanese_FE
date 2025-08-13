import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/types/navigation'
import { RouteProp } from '@react-navigation/native'
type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'KanaTestScreen'>
type ScreenRouteProp = RouteProp<RootStackParamList, 'KanaTestScreen'>
type Props = {
  navigation: ScreenNavigationProp
  route: ScreenRouteProp
}

const KanaTestScreen = ({ navigation, route }: Props) => {
  const hiraganaQuestions = route.params.questions
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<{ selected: string | null; correct: string }[]>(
    hiraganaQuestions.map((q) => ({
      selected: null,
      correct: q.correct,
    })),
  )
  const { questions, type } = route.params as {
    questions: {
      kana: string
      correct: string
      options: string[]
    }[]
    type: 'hiragana' | 'katakana'
  }
  const current = hiraganaQuestions[currentIndex]
  const showAnswer = answers[currentIndex].selected !== null

  const handleSelect = (option: string) => {
    const updated = [...answers]
    updated[currentIndex].selected = option
    setAnswers(updated)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const handleJumpTo = (index: number) => {
    setCurrentIndex(index)
  }

  const handleFinish = () => {
    const isComplete = answers.every((a) => a.selected !== null)

    if (!isComplete) {
      Alert.alert('Chưa hoàn thành', 'Bạn có chắc chắn muốn kết thúc bài thi không?', [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Kết thúc',
          onPress: () =>
            navigation.navigate('KanaResultScreen', {
              questions: hiraganaQuestions,
              answers,
              type,
            }),
        },
      ])
    } else {
      navigation.navigate('KanaResultScreen', {
        questions: hiraganaQuestions,
        answers,
        type,
      })
    }
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>

      <Text style={styles.header}>
        {type === 'katakana' ? 'Bài kiểm tra Katakana' : 'Bài kiểm tra Hiragana'}
      </Text>

      <Text style={styles.question}>Chữ: {current.kana}</Text>

      {current.options.map((opt, idx) => {
        const isCorrect = opt === current.correct
        const isSelected = opt === answers[currentIndex].selected

        return (
          <TouchableOpacity
            key={idx}
            style={[
              styles.option,
              showAnswer && isCorrect && styles.correct,
              showAnswer && isSelected && !isCorrect && styles.wrong,
            ]}
            onPress={() => handleSelect(opt)}
            disabled={showAnswer}
          >
            <Text style={styles.optionText}>
              {String.fromCharCode(65 + idx)}. {opt}
            </Text>
          </TouchableOpacity>
        )
      })}

      <View style={styles.navButtons}>
        <TouchableOpacity
          style={[styles.navBtn, currentIndex === 0 && { opacity: 0 }]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navBtnText}>Trước đó</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBtn, currentIndex === hiraganaQuestions.length - 1 && { opacity: 0 }]}
          onPress={handleNext}
          disabled={currentIndex === hiraganaQuestions.length - 1}
        >
          <Text style={styles.navBtnText}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.numberGrid}>
        {answers.map((answer, index) => {
          const isCurrent = index === currentIndex
          let bgColor = '#ccc'
          if (answer.selected === answer.correct) bgColor = '#8bc34a'
          else if (answer.selected && answer.selected !== answer.correct) bgColor = '#e57373'
          else bgColor = '#ddd'

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.numberBox,
                { backgroundColor: bgColor, borderWidth: isCurrent ? 2 : 0 },
              ]}
              onPress={() => handleJumpTo(index)}
            >
              <Text style={styles.numberText}>{index + 1}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      {answers.some((a) => a.selected !== null) && (
        <TouchableOpacity style={styles.fabButton} onPress={handleFinish}>
          <Ionicons name="checkmark-done" size={28} color="#fff" />
        </TouchableOpacity>
      )}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 1,
    backgroundColor: '#ffffffcc',
    padding: 8,
    borderRadius: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4a4e69',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 60,
  },
  question: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 12,
    color: '#4a4e69',
  },
  option: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#d3e0dc',
  },
  optionText: {
    fontSize: 18,
    color: '#4a4e69',
  },
  correct: {
    backgroundColor: '#c8e6c9',
  },
  wrong: {
    backgroundColor: '#ffcdd2',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  navBtn: {
    backgroundColor: '#88c9bf',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  navBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  numberGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 24,
  },
  numberBox: {
    width: 40,
    height: 40,
    borderRadius: 6,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcefe3',
    borderColor: '#88c9bf',
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a4e69',
  },
  fabButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#88c9bf',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
})

export default KanaTestScreen
