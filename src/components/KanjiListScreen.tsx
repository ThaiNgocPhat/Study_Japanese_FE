import React, { useState } from 'react'
import { View, Text, FlatList, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import KanjiCard from './KanjiCard'
import { KanjiItem } from 'src/types/kanji'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackButton from '@components/BackButton'

type Props = {
  title: string
  kanjiList: KanjiItem[]
  unlockedLessons?: number[]
  onLockedPress?: () => void
  onUpdateUnlockedLessons?: (updated: number[]) => void
}

const KanjiListScreen = ({
  title,
  kanjiList,
  unlockedLessons,
  onLockedPress,
  onUpdateUnlockedLessons,
}: Props) => {
  const navigation = useNavigation()
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number | null>(null)
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null)

  // Chia kanji thành các bài 10 chữ
  const lessons = Array.from({ length: Math.ceil(kanjiList.length / 10) }, (_, i) =>
    kanjiList.slice(i * 10, i * 10 + 10),
  )

  const handleLessonPress = (index: number) => {
    const isLocked = unlockedLessons && !unlockedLessons.includes(index + 1)
    if (isLocked) {
      if (onLockedPress) onLockedPress()
      else
        Toast.show({
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
        <BackButton
          onPress={() => {
            if (selectedLessonIndex !== null) setSelectedLessonIndex(null)
            else navigation.goBack()
          }}
        />

        <Text style={styles.title}>
          {selectedLessonIndex === null ? title : `Bài ${selectedLessonIndex + 1}`}
        </Text>

        {selectedLessonIndex === null ? (
          <Animatable.View animation="fadeInRight" duration={400} style={{ flex: 1 }}>
            <FlatList
              data={lessons}
              keyExtractor={(_, i) => `lesson-${i}`}
              renderItem={({ index }) => {
                const isLocked = unlockedLessons && !unlockedLessons.includes(index + 1)
                return (
                  <TouchableOpacity
                    style={[styles.lessonButton, isLocked && { backgroundColor: '#ccc' }]}
                    onPress={() => handleLessonPress(index)}
                  >
                    <Text style={styles.lessonText}>
                      Bài {index + 1} {isLocked ? '🔒' : ''}
                    </Text>
                  </TouchableOpacity>
                )
              }}
            />
          </Animatable.View>
        ) : (
          <Animatable.View animation="fadeInLeft" duration={400} style={{ flex: 1 }}>
            <FlatList
              key={`kanji-list-${selectedLessonIndex}`}
              data={lessons[selectedLessonIndex]}
              keyExtractor={(item, i) => item.kanji + i}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 25 }}
              renderItem={({ item }) => (
                <KanjiCard data={item} onPress={() => setSelectedKanji(item)} />
              )}
              ListFooterComponent={() => (
                <TouchableOpacity
                  style={styles.completeButton}
                  onPress={async () => {
                    if (selectedLessonIndex !== null) {
                      const lessonId = selectedLessonIndex + 1
                      await AsyncStorage.setItem('lastCompletedKanjiLesson_N5', lessonId.toString())
                      const nextLesson = lessonId + 1
                      const totalLessons = Math.ceil(kanjiList.length / 10)
                      if (nextLesson <= totalLessons && unlockedLessons) {
                        const updated = [...unlockedLessons, nextLesson]
                        onUpdateUnlockedLessons?.(updated)
                        await AsyncStorage.setItem('unlockedKanji_N5', JSON.stringify(updated))
                      }

                      // 3. Quay về màn hình danh sách
                      setSelectedLessonIndex(null)

                      Toast.show({
                        type: 'success',
                        text1: `Hoàn thành Bài ${lessonId}`,
                        text2: 'Bài học tiếp theo đã được mở khoá!',
                        position: 'bottom',
                      })
                    }
                  }}
                >
                  <Text style={styles.completeText}>Hoàn thành bài học</Text>
                </TouchableOpacity>
              )}
            />
          </Animatable.View>
        )}

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
                {Array.isArray(selectedKanji?.examples)
                  ? selectedKanji?.examples.map((ex, i) => (
                      <Text key={i} style={styles.text}>
                        • {ex}
                      </Text>
                    ))
                  : selectedKanji?.examples}

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
  completeButton: {
    backgroundColor: '#6c584c',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  completeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
