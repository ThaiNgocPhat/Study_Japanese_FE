import React, { useState } from 'react'
import { View, Text, FlatList, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import KanjiCard from './KanjiCard'
import { KanjiItem } from 'src/types/kanji'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import Toast from 'react-native-toast-message'

type Props = {
  title: string
  kanjiList: KanjiItem[]
  unlockedLessons?: number[]
  onLockedPress?: () => void
}

const KanjiListScreen = ({ title, kanjiList, unlockedLessons, onLockedPress }: Props) => {
  const navigation = useNavigation()
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number | null>(null)
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null)

  const splitIntoLessons = (list: KanjiItem[], size = 10): KanjiItem[][] => {
    const lessons: KanjiItem[][] = []
    for (let i = 0; i < list.length; i += size) {
      lessons.push(list.slice(i, i + size))
    }
    return lessons
  }

  const lessons = splitIntoLessons(kanjiList, 10)
  const handleLessonPress = (index: number) => {
    if (unlockedLessons && !unlockedLessons.includes(index + 1)) {
      onLockedPress
        ? onLockedPress()
        : Toast.show({
            type: 'info',
            text1: 'Bài học bị khoá',
            text2: 'Vui lòng hoàn thành các bài trước để mở khóa.',
            position: 'bottom',
          })
      return
    }
    setSelectedLessonIndex(index)
  }

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (selectedLessonIndex !== null) {
              setSelectedLessonIndex(null)
            } else {
              navigation.goBack()
            }
          }}
        >
          <Ionicons name="arrow-back" size={28} color="#4a4e69" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>
          {selectedLessonIndex === null ? title : `Bài ${selectedLessonIndex + 1}`}
        </Text>

        {/* Lesson list */}
        {selectedLessonIndex === null ? (
          <Animatable.View animation="fadeInRight" duration={400} style={{ flex: 1 }}>
            <FlatList
              data={lessons}
              keyExtractor={(_, index) => `lesson-${index}`}
              renderItem={({ index }) => (
                <TouchableOpacity
                  style={styles.lessonButton}
                  onPress={() => handleLessonPress(index)}
                >
                  <Text style={styles.lessonText}>Bài {index + 1}</Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={{ paddingVertical: 20, paddingBottom: 50 }}
            />
          </Animatable.View>
        ) : (
          // Kanji list
          <Animatable.View animation="fadeInLeft" duration={400} style={{ flex: 1 }}>
            <FlatList
              data={lessons[selectedLessonIndex]}
              keyExtractor={(item, index) => item.kanji + index}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 25 }}
              contentContainerStyle={{ paddingVertical: 20, paddingBottom: 100 }}
              renderItem={({ item }) => (
                <KanjiCard data={item} onPress={() => setSelectedKanji(item)} />
              )}
            />
          </Animatable.View>
        )}

        {/* Modal xem chi tiết Kanji */}
        <Modal visible={!!selectedKanji} transparent animationType="slide">
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.modalKanji}>{selectedKanji?.kanji}</Text>

                <Text style={styles.label}>Âm On:</Text>
                <Text style={styles.text}>
                  {Array.isArray(selectedKanji?.onYomi)
                    ? selectedKanji?.onYomi.join('、')
                    : selectedKanji?.onYomi}
                </Text>

                <Text style={styles.label}>Âm Kun:</Text>
                <Text style={styles.text}>
                  {Array.isArray(selectedKanji?.kunYomi)
                    ? selectedKanji?.kunYomi.join('、')
                    : selectedKanji?.kunYomi}
                </Text>

                <Text style={styles.label}>Ý nghĩa:</Text>
                <Text style={styles.text}>{selectedKanji?.meaning}</Text>

                <Text style={styles.label}>Ví dụ:</Text>
                {Array.isArray(selectedKanji?.examples) ? (
                  selectedKanji?.examples.map((ex, i) => (
                    <Text key={i} style={styles.text}>
                      • {ex}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.text}>{selectedKanji?.examples}</Text>
                )}

                <TouchableOpacity onPress={() => setSelectedKanji(null)}>
                  <Text style={styles.closeText}>Đóng</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  )
}

export default KanjiListScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a4e69',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 20,
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
  lessonButton: {
    padding: 16,
    backgroundColor: '#88c9bf',
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  lessonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fcefe3',
    borderRadius: 20,
    padding: 24,
    maxHeight: '80%',
    elevation: 5,
  },
  modalKanji: {
    fontSize: 56,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4a4e69',
    marginBottom: 16,
  },
  label: {
    marginTop: 16,
    fontWeight: '600',
    fontSize: 16,
    color: '#4a4e69',
  },
  text: {
    fontSize: 16,
    color: '#4a4e69',
    lineHeight: 22,
    marginTop: 4,
  },
  closeText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#88c9bf',
    paddingVertical: 8,
  },
})
