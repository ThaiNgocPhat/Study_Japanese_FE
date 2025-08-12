import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ToastAndroid,
  ScrollView,
} from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { VocabularyItem } from 'src/types/vocabulary'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/types/navigation'

type RouteParams = {
  level: string
  count: number
  words: VocabularyItem[]
}

const VocabularyPracticeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>()
  const { level, words } = route.params

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answers, setAnswers] = useState<
    {
      selected: string | null
      correct: string
      options: string[]
    }[]
  >(words.map(() => ({ selected: null, correct: '', options: [] })))

  const currentWord = words[currentIndex] ?? null

  const [allOptions, setAllOptions] = useState<string[][]>(() =>
    words.map((word) => {
      const correct = word.meaning
      const others = words
        .filter((w) => w.meaning !== correct)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((w) => w.meaning)
      return [...others, correct].sort(() => 0.5 - Math.random())
    }),
  )
  const options = answers[currentIndex]?.options || []

  useEffect(() => {
    const options = words.map((word) => {
      const correct = word.meaning
      const others = words
        .filter((w) => w.meaning !== correct)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((w) => w.meaning)
      const opts = [...others, correct].sort(() => 0.5 - Math.random())
      return opts
    })
    setAllOptions(options)
    setAnswers(
      words.map((_, i) => ({
        selected: null,
        correct: words[i].meaning,
        options: options[i],
      })),
    )
  }, [])

  const handleSelect = (opt: string) => {
    if (answers[currentIndex].selected) return
    const updated = [...answers]
    updated[currentIndex] = {
      selected: opt,
      correct: currentWord.meaning,
      options: allOptions[currentIndex],
    }
    setAnswers(updated)
    setSelected(opt)
  }

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelected(null)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setSelected(null)
    }
  }

  const handleFinish = () => {
    const isComplete = answers.every((a) => a.selected !== null)

    const finalAnswers = answers.map((a, i) => ({
      selected: a.selected,
      correct: words[i].meaning,
      options: allOptions[i],
    }))

    const goToResultScreen = () => {
      navigation.navigate('VocabularyResultScreen', {
        level,
        words,
        answers: finalAnswers,
      })
    }

    if (!isComplete) {
      ToastAndroid.show('Bạn chưa làm xong bài thi, vui lòng làm cho xong.', ToastAndroid.SHORT)
      Alert.alert('Chưa hoàn thành', 'Bạn có chắc chắn muốn kết thúc bài thi không?', [
        { text: 'Hủy', style: 'cancel' },
        { text: 'Kết thúc', onPress: goToResultScreen },
      ])
    } else {
      goToResultScreen()
    }
  }

  const handleJumpTo = (index: number) => {
    setCurrentIndex(index)
    setSelected(null)
  }

  const currentAnswer = answers[currentIndex]
  const showAnswer = currentAnswer?.selected !== null

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>

      <Text style={styles.header}>
        Câu {currentIndex + 1} / {words.length}
      </Text>

      <Text style={styles.question}>
        {currentWord
          ? `Từ: ${currentWord.word} (${currentWord.kanji || '---'})`
          : 'Không có từ nào'}
      </Text>

      {options.map((opt, idx) => {
        const isCorrect = opt === currentWord.meaning
        const isSelected = opt === currentAnswer.selected

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
          style={[styles.navBtn, currentIndex === words.length - 1 && { opacity: 0 }]}
          onPress={handleNext}
          disabled={currentIndex === words.length - 1}
        >
          <Text style={styles.navBtnText}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.numberGrid}>
        {answers.map((answer, index) => {
          const isCurrent = index === currentIndex
          let bgColor = '#ccc'
          if (answer.selected) {
            if (answer.selected === answer.correct) {
              bgColor = '#8bc34a'
            } else {
              bgColor = '#e57373'
            }
          } else {
            bgColor = '#ddd'
          }

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
    fontSize: 20,
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
    fontSize: 16,
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

export default VocabularyPracticeScreen
